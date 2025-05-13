import "./FoodForm.css";
import { Button, Form, Container } from "react-bootstrap";
import { foodFormContext } from "../Contexts/FoodFormContext.jsx";
import { useContext } from "react";

const FoodForm = () => {

  // Component States
  const { formInput, setFormInput, handleFormSubmit } = useContext(foodFormContext);


  return (
    <div className="food-form">
      <h1 className="text-center">FOOD REQUEST</h1>
      <Container>
        <Form onSubmit={handleFormSubmit}>
          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formInput.email}
              onChange={(e)=> setFormInput({...formInput, email: e.target.value})}
            />
          </Form.Group>

          {/* Name */}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={formInput.name}
              onChange={(e)=> setFormInput({...formInput, name: e.target.value})}
            />
          </Form.Group>

          {/* Age */}
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              value={formInput.age}
              onChange={(e)=> setFormInput({...formInput, age: Number(e.target.value)})}
            />
          </Form.Group>

          {/* Submit */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};


export default FoodForm;