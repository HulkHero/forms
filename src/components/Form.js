import React from 'react'

const Form = ({ index, form, setForm }) => {

    const [validate, setValidate] = React.useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(index, name, value)
        let newArr = [...form]
        newArr[index][name] = value
        setForm(newArr)
    }

    const validateForm = (e) => {
        e.preventDefault()
        setValidate(true)

    }
    return (
        <div style={{ margin: "10px", padding: "10px", backgroundColor: "whitesmoke" }}>
            <div >Eduction Form: {index}</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor='degree' >
                    Degree:
                    <input type="text" value={form[index].degree} onChange={handleChange} name="degree" />
                    {
                        validate == true && form[index].degree?.trim().length < 3 ? <span style={{ color: "red" }} >degree must be atleast 3 characters</span> : null
                    }

                </label>
                <label name="degree" htmlFor='university' >
                    university:
                    <input type="text" value={form[index]?.university} onChange={handleChange} name="university" />
                    {
                        validate == true && form[index].university?.trim().length < 3 ? <span style={{ color: "red" }} >university must be atleast 3 characters</span> : null
                    }
                </label>
                <label name="degree" htmlFor='location' >
                    location:
                    <input type="text" value={form[index]?.location} onChange={handleChange} name="location" />
                    {
                        validate == true && form[index].location?.trim().length < 3 ? <span style={{ color: "red" }} >location must be atleast 3 characters</span> : null
                    }
                </label>
                <label htmlFor='year' >
                    year:
                    <input type="number" value={form[index]?.year} onChange={handleChange} name="year" />
                    {
                        validate == true && form[index].year <= 0 ? <span style={{ color: "red" }} >Year must positive</span> : null
                    }
                </label>

                <button onClick={validateForm} style={{ maxWidth: "70px", margin: "4px" }} > validate </button>
            </div>
        </div>
    )
}

export default Form