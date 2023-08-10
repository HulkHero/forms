import React from 'react'

const Form = ({ index, form, setForm, deleteForm }) => {

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
        <div className='p-5 bg-white flex flex-col rounded-md shadow-xl'>
            <h3 className='text-2xl'>Eduction Form: {form[index].id}</h3>
            <div className='flex flex-col'>
                <div className='mt-2 flex flex-col relative '>
                    <label htmlFor='degree' >
                        Degree:
                    </label>
                    <input type="text" value={form[index].degree} onChange={handleChange} name="degree" className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
                    {
                        validate == true && form[index].degree?.trim().length < 3 ? <span className='text-red-600 right-0 absolute ' >degree must be atleast 3 characters</span> : null
                    }
                </div>
                <div className='mt-2 flex flex-col relative '>
                    <label name="degree" htmlFor='university' >
                        university:
                    </label>
                    <input type="text" value={form[index]?.university} onChange={handleChange} name="university" className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
                    {
                        validate == true && form[index].university?.trim().length < 3 ? <span className='text-red-600 right-0 absolute ' >university must be atleast 3 characters</span> : null
                    }
                </div>
                <div className='mt-2 flex flex-col relative '>
                    <label name="degree" htmlFor='location' >
                        location:

                    </label>
                    <input type="text" value={form[index]?.location} onChange={handleChange} name="location" className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
                    {
                        validate == true && form[index].location?.trim().length < 3 ? <span className='text-red-600 right-0 absolute ' >location must be atleast 3 characters</span> : null
                    }
                </div>
                <div className='mt-2 flex flex-col relative '>
                    <label htmlFor='year' >
                        year:
                    </label>
                    <input type="number" value={form[index]?.year} onChange={handleChange} name="year" className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
                    {
                        validate == true && form[index].year <= 0 ? <span className='text-red-600 right-0 absolute ' >Year must positive</span> : null
                    }

                </div>
                <button onClick={validateForm} className='bg-blue-600 my-4 py-2 px-4 text-white hover:bg-blue-700 rounded-md' > validate </button>
                <button onClick={(e) => { e.preventDefault(); deleteForm(form[index].id) }} className='bg-red-600 my-4 pb-2 px-4 text-white hover:bg-red-700 rounded-md'> delete </button>
            </div>
        </div>
    )
}

export default Form