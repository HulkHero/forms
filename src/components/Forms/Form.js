import React from 'react'
import CustomTextField from '../CustomTextField'

const Form = ({ index, form, setForm, deleteForm }) => {

    const [validate, setValidate] = React.useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        let newArr = [...form]
        newArr[index][name] = value
        setForm(newArr)
    }
    const validateForm = (e) => {
        e.preventDefault()
        setValidate(true)
    }
    return (
        <div className='p-5 bg-white flex flex-col rounded-md shadow-xl'>
            <h3 className='text-2xl'>Eduction Form: {form[index].id}</h3>
            <div className='flex flex-col'>
                <CustomTextField label={"Degree"} type={"text"} value={form[index].degree} handleChange={handleChange} name={"degree"} validate={validate} />
                <CustomTextField label={"University"} type={"text"} value={form[index].university} handleChange={handleChange} name={"university"} validate={validate} />
                <CustomTextField label={"Location"} type={"text"} value={form[index].location} handleChange={handleChange} name={"location"} validate={validate} />
                <CustomTextField label={"Year"} type={"number"} value={form[index].year} handleChange={handleChange} name={"year"} validate={validate} />
                <button onClick={validateForm} className='bg-blue-600 my-4 py-2 px-4 text-white hover:bg-blue-700 rounded-md' > validate </button>
                <button onClick={(e) => { e.preventDefault(); deleteForm(form[index].id) }} className='bg-red-600 mb-4 py-2 px-4 text-white hover:bg-red-700 rounded-md'> delete </button>
            </div>
        </div>
    )
}

export default Form