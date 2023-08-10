
import { useState } from 'react';
import Form from './components/Form';
import PersonalInfoForm from './components/PersonalInfoForm';

function App() {

  const [form, setForm] = useState([{ id: 0, firstName: '', lastName: '', email: '', age: "" }])
  const addForm = (e) => {
    e.preventDefault()
    const length = form.length
    const item = form[length - 1]
    let id = item.id + 1
    console.log("id", id)
    setForm([...form, { id: id, degree: '', university: '', location: '', year: "" }])
  }

  const deleteForm = (id) => {

    let arr = form.filter((item) => item.id != id)
    setForm(arr)
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
          alert("Education Form " + (item.id) + " is invalid")
        }
      }
    })
    if (error == false) {
      alert("Form is valid......Submitted")
    }
  }
  return (
    <main className='bg-slate-200 min-w-full min-h-screen'>
      <div className='container mx-auto max-w-3xl' >
        <h1 className='font-semibold text-4xl py-5 text-center' >React Form</h1>
        <form >
          <PersonalInfoForm form={form} setForm={setForm} />
          <section className='flex flex-col gap-5 mt-5' >
            {
              form.map((item, index) => {
                if (index == 0) return null
                return <Form key={index} index={index} form={form} setForm={setForm} deleteForm={deleteForm} />
              })
            }
          </section>
          <button onClick={addForm} className='bg-green-600 my-4 py-2 px-4 text-white hover:bg-green-700' >Add Form</button>
          <button onClick={handleSubmit} className='bg-blue-600 my-4 py-2 px-4 text-white hover:bg-blue-700'>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default App;
