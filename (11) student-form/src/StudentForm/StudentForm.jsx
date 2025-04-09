import "./StudentForm.css";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";


const StudentForm = () => {

  // Component States
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    idea: "",
    isStudent: false,
  });


  return (
    <div className="form-student">
      <Container>
        <h1 className="text-center">Student Form</h1>
        <Form onSubmit={(e)=> {
          e.preventDefault();
          console.log(formInputs);
        }}>
          <Form.Group className="mb-3">
            <Form.Label>Student Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={formInputs.name} onChange={(e)=> setFormInputs({...formInputs, name: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Student Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={formInputs.email} onChange={(e)=> setFormInputs({...formInputs, email: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Student Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" value={formInputs.age} onChange={(e)=> setFormInputs({...formInputs, age: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Write What You Want</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Your Idea"
              value={formInputs.idea} onChange={(e)=> setFormInputs({...formInputs, idea: e.target.value})}
            />
          </Form.Group>
          <div>
            <input type="checkbox" className="me-2" checked={formInputs.isStudent} onChange={(e)=> setFormInputs({...formInputs, isStudent: e.target.checked})} />
            <label>Are You Student?</label>
          </div>
          <button className="btn btn-success">Submit</button>
        </Form>
      </Container>
    </div>
  );
};

export default StudentForm;
