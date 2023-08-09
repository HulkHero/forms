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

    const validateForm = () => {


        setValidate(true)

    }
    return (
        <div style={{ margin: "10px", padding: "10px", backgroundColor: "whitesmoke" }}>
            <div >Form: {index + 1}</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor='firstName' >
                    FirstName:
                    <input type="text" value={form[index]?.firstName} onChange={handleChange} name="firstName" />
                    {
                        validate == true && form[index]?.firstName?.length < 3 ? <span style={{ color: "red" }} >FirstName must be 3 characters</span> : null
                    }

                </label>


                <label name="firstName" htmlFor='lastName' >
                    LastName:
                    <input type="text" value={form[index]?.lastName} onChange={handleChange} name="lastName" />
                    {
                        validate == true && form[index].lastName?.length < 3 ? <span style={{ color: "red" }} >LastName must be 3 characters</span> : null
                    }
                </label>
                <label name="firstName" htmlFor='email' >
                    Email:
                    <input type="text" value={form[index]?.email} onChange={handleChange} name="email" />
                    {
                        validate == true && form[index].email?.length < 3 ? <span style={{ color: "red" }} >Email must include "@"</span> : null
                    }
                </label>
                {
                    index == 1 ? <label htmlFor='age' >
                        Age:
                        <input type="number" value={form[index]?.age} onChange={handleChange} name="age" />
                        {
                            validate == true && form[index].age < 0 ? <span style={{ color: "red" }} >Age must positive</span> : null
                        }
                    </label> : null
                }

                <button onClick={validateForm} style={{ maxWidth: "70px", margin: "4px" }} > validate </button>
            </div>
        </div>
    )
}

export default Form