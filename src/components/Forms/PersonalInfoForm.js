import React from 'react'
import CustomTextField from '../CustomTextField'

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
        <CustomTextField label={"First Name"} type={"text"} value={form[0].firstName} handleChange={handleChange} name={"firstName"} validate={validate} />
        <CustomTextField label={"Last Name"} type={"text"} value={form[0].lastName} handleChange={handleChange} name={"lastName"} validate={validate} />
        <CustomTextField label={"Email"} type={"email"} value={form[0].email} handleChange={handleChange} name={"email"} validate={validate} />
        <CustomTextField label={"Age"} type={"number"} value={form[0].age} handleChange={handleChange} name={"age"} validate={validate} />
        <button onClick={validateForm} className='bg-blue-600 my-4 py-2 px-4 text-white hover:bg-blue-700' > validate </button>
      </div>
    </div>
  )
}

export default PersonalInfoForm


{/* <span style={{ color: "green" }} >&#10004;</span> */ }