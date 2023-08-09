import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form';

function App() {

  const [form, setForm] = useState([{ firstName: '', lastName: '', email: '', age: "" }])
  const addForm = () => {

    setForm([...form, { firstName: '', lastName: '', email: '', age: "" }])
  }

  const handleSubmit = () => {
    form.map((item, index) => {
      if (item.firstName.length < 3 || item.lastName.length < 3 || item.email.includes["@"] || item.age < 0) {
        alert("Form " + (index + 1) + " is invalid")
      }
    })


  }
  return (
    <div>
      <h1>React Form</h1>
      {
        form.map((item, index) => {
          return <Form key={index} index={index} form={form} setForm={setForm} />
        })
      }

      <button onClick={addForm} style={{ margin: "4px" }} >Add Form</button>
      <button onClick={handleSubmit} style={{ margin: "4px" }} >Submit</button>
    </div>
  );
}

export default App;
