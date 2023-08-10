import React from 'react'

const CustomTextField = ({ label, type, value, handleChange, name, validate }) => {
    if (type == "email") {
        return (
            <div className='mt-2 flex flex-col relative '>
                <label htmlFor={name} >
                    {`${label} :`}
                </label>
                <input type={type} value={value} onChange={handleChange} name={name} className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
                {
                    validate == true && (value?.length < 3 || (!value?.includes("@"))) ? <span className='text-red-600 right-0 absolute' >email must include @ and min 3 character</span> : null
                }
            </div>
        )
    }

    if (type == "number") {
        return (
            <div className='mt-2 flex flex-col relative '>
                <label htmlFor={name} >
                    {`${label} :`}
                </label>
                <input type={type} value={value} onChange={handleChange} name={name} className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
                {
                    validate == true && value <= 0 ? <span className='text-red-600 right-0 absolute ' >{`${name} must be greater than 0`}</span> : null
                }
            </div>
        )

    }
    return (
        <div className='mt-2 flex flex-col relative '>
            <label htmlFor={name} >
                {`${label} :`}
            </label>
            <input type={type} value={value} onChange={handleChange} name={name} className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
            {
                validate == true && value?.trim().length < 3 ? <span className='text-red-600 right-0 absolute ' >{`${name} must be atleast 3 characters`}</span> : null
            }
        </div>
    )
}

export default CustomTextField