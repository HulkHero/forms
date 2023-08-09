
import { useState } from 'react';
import Form from './components/Form';
import PersonalInformation from './components/PersonalInformation';

function App() {

  const [form, setForm] = useState([{ firstName: '', lastName: '', email: '', age: "" }])
  const addForm = (e) => {
    e.preventDefault()
    setForm([...form, { degree: '', university: '', location: '', year: "" }])
  }

  const deleteForm = (index) => {
    let newArr = [...form]
    newArr.splice(index, 1)
    setForm(newArr)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form", form)
    let error = false;
    form.forEach((item, index) => {
      if (index == 0) {
        if (item.firstName.length < 3 || item.lastName.length < 3 || item.email.length < 3 || item.age <= 0) {
          error = true;
          alert("Person Information Form is invalid")
        }
      }
      else {
        if (item.degree.length < 3 || item.university.length < 3 || item.location.length < 3 || item.year <= 0) {
          error = true;
          alert("Education Form " + (index) + " is invalid")
        }
      }
    })
    if (error == false) {
      alert("Form is valid......Submitted")
    }
  }
  return (
    <div>
      <h1>React Form</h1>
      <form >
        <PersonalInformation form={form} setForm={setForm} />
        {
          form.map((item, index) => {
            if (index == 0) return null
            return <Form key={index} index={index} form={form} setForm={setForm} deleteForm={deleteForm} />
          })
        }
        <button onClick={addForm} style={{ margin: "4px" }} >Add Form</button>
        <button onClick={handleSubmit} style={{ margin: "4px" }} >Submit</button>
      </form>
    </div>
  );
}

export default App;
