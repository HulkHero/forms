import React from 'react'

const PersonalInfoForm = ({ form, setForm }) => {
  const [validate, setValidate] = React.useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => {
      return [{ ...prev[0], [name]: value }, ...prev.slice(1)]
    })
  }

  const validateForm = (e) => {
    e.preventDefault()

    setValidate(true)
  }
  return (
    <div className='p-5 bg-white flex flex-col rounded-md shadow-xl '>
      <h3 className='text-2xl'>Personal Information</h3>
      <div className='flex flex-col'>
        <div className='mt-2 flex flex-col relative '>
          <label className='text-base'  >
            First Name:
          </label>
          <input type="text" value={form[0]?.firstName} onChange={handleChange} name="firstName" className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
          {
            validate == true && form[0].firstName?.trim().length < 3 ? <span className='text-red-600 right-0 absolute ' >First Name must be 3 characters</span> : null
          }
        </div>
        <div className='mt-2 flex flex-col relative'>
          <label htmlFor='lastName' className='mt-2 flex flex-col relative' >
            Last Name:
          </label>
          <input type="text" value={form[0]?.lastName} onChange={handleChange} name="lastName" className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
          {
            validate == true && form[0].lastName?.trim().length < 3 ? <span className='text-red-600 right-0 absolute' >LastName must be 3 characters</span> : null
          }
        </div>
        <div className='mt-2 flex flex-col relative'>
          <label htmlFor='email'  >
            Email:
          </label>
          <input type="email" value={form[0]?.email} onChange={handleChange} name="email" className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
          {
            validate == true && (form[0].email?.length < 3 || (!form[0].email?.includes("@"))) ? <span className='text-red-600 right-0 absolute' >email must include @ and min 3 character</span> : null
          }
        </div>

        <div className='mt-2 flex flex-col relative'>
          <label htmlFor='age'  >
            Age:
          </label>
          <input type="number" value={form[0]?.age} onChange={handleChange} name="age" className=' outline-none  px-2 border-2 border-solid focus:border-blue-300  bg-gray-100 rounded-md hover:border-blue-300  ' />
          {
            validate == true && form[0].age <= 0 ? <span className='text-red-600 right-0 absolute' >Age must positive</span> : null
          }
        </div>
        <button onClick={validateForm} className='bg-blue-600 my-4 py-2 px-4 text-white hover:bg-blue-700' > validate </button>
      </div>
    </div>
  )
}

export default PersonalInfoForm


{/* <span style={{ color: "green" }} >&#10004;</span> */ }