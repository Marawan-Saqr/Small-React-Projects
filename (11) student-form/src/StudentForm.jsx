import { useState } from 'react';

const StudentForm = () => {

  // Component States
  const [formInputs, setFormInputs] = useState({name: "", email: "", age: ""});



  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      const formData = {name: formInputs.name, email: formInputs.email, age: formInputs.age};
      console.log(formData);
    }}>
      <label>Name:</label>
      <input type="text" placeholder='Enter Name' onChange={(e)=> setFormInputs({...formInputs, name: e.target.value})} />
      <label>Email:</label>
      <input type="email" placeholder='Enter Email' onChange={(e)=> setFormInputs({...formInputs, email: e.target.value})} />
      <label>Age:</label>
      <input type="number" placeholder='Enter Age' onChange={(e)=> setFormInputs({...formInputs, age: e.target.value})} />
      <button>Submit</button>
    </form>
  )
}


export default StudentForm;