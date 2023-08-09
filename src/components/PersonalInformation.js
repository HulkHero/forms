import React from 'react'

const PersonalInformation = ({ form, setForm }) => {
  const [validate, setValidate] = React.useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(0, name, value)
    let newArr = [...form]
    newArr[0][name] = value
    setForm(newArr)
  }

  const validateForm = (e) => {
    e.preventDefault()

    setValidate(true)
  }
  return (
    <div style={{ padding: "10px", backgroundColor: "whitesmoke" }}>
      <h3>Personal Information</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor='firstName' >
          FirstName:
          <input type="text" required value={form[0]?.firstName} onChange={handleChange} name="firstName" />
          {
            validate == true && form[0].firstName?.trim().length < 3 ? <span style={{ color: "red" }} >FirstName must be 3 characters</span> : null
          }
        </label>
        <label htmlFor='lastName' >
          LastName:
          <input type="text" required value={form[0]?.lastName} onChange={handleChange} name="lastName" />
          {
            validate == true && form[0].lastName?.trim().length < 3 ? <span style={{ color: "red" }} >LastName must be 3 characters</span> : null
          }
        </label>
        <label htmlFor='email' >
          Email:
          <input type="email" required value={form[0]?.email} onChange={handleChange} name="email" />
          {
            validate == true && form[0].email?.trim().length < 3 ? <span style={{ color: "red" }} >email must be atleast 3 character</span> : null
          }
        </label>
        <label htmlFor='age' >
          Age:
          <input type="number" value={form[0]?.age} onChange={handleChange} name="age" />
          {
            validate == true && form[0].age <= 0 ? <span style={{ color: "red" }} >Age must positive</span> : null
          }
        </label>

        <button onClick={validateForm} style={{ maxWidth: "70px", margin: "4px" }} > validate </button>
      </div>
    </div>
  )
}

export default PersonalInformation


{/* <span style={{ color: "green" }} >&#10004;</span> */ }