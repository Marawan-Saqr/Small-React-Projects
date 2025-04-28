import './FootballForm.css';
import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Model from '../Model/Model.jsx';

const FootballForm = () => {

  // Component States
  const [successMessage, setSuccessMessage] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    name: "",
    age: "",
    isStudent: false
  });


  // Check Form Inputs While Submit
  const isFormInvalid = () => {
    if (formInput.email === "" || formInput.name === "" || formInput.age === "") {
      return true;
    } else {
      return false;
    }
  }


  // Handle Submit
  const handleSubmit = () => {
    if (Number(formInput.age) >= 18 && Number(formInput.age <= 30)) {
      setShowModel(true);
      setSuccessMessage(true);
    } else {
      setShowModel(true);
      setSuccessMessage(false);
    }
  }


  return (
    <div className="football-form mt-4">
      <h1 className="text-center">Welcome To Football Form</h1>
      <Container>
        <Form onSubmit={(e)=> {
          e.preventDefault();
          handleSubmit();
          console.log(formInput);
        }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={formInput.email} onChange={(e)=> setFormInput({...formInput, email: e.target.value})} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={formInput.name} onChange={(e)=> setFormInput({...formInput, name: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" value={formInput.age} onChange={(e)=> setFormInput({...formInput, age: e.target.value})} />
            <Form.Text className="text-muted">
              Note That Your Age Must Be Between 18 and 30
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Are You Student" checked={formInput.isStudent} onChange={(e)=> setFormInput({...formInput, isStudent: e.target.checked})} />
          </Form.Group>
          <Button disabled={isFormInvalid()} variant={isFormInvalid() ? "danger" : "success"} type="submit">
            Submit
          </Button>
        </Form>
        {showModel ? <Model successMessage={successMessage} /> : null}
      </Container>
    </div>
  );
};


export default FootballForm;