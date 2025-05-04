import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import InputComponent from '../InputComponent/InputComponent.jsx';

const FormInputs = () => {

  // Component States
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    animalType: "",
  });

  // Handle input property update
  const handleInputProperty = (value, property) => {
    setInputData({ ...inputData, [property]: value });
  };

  return (
    <div>
      <h1 className="text-center">Animal Request</h1>
      <Container>
        <Form onSubmit={(e) => {
          e.preventDefault();
          console.log(inputData);
        }}>
          {/* Name */}
          <InputComponent 
            inputTitle="Name" 
            type="text" 
            holder="Enter Name" 
            value={inputData.name} 
            handleChange={handleInputProperty} 
            property="name" 
          />

          {/* Email */}
          <InputComponent 
            inputTitle="Email Address" 
            type="email" 
            holder="Enter Email" 
            value={inputData.email} 
            handleChange={handleInputProperty} 
            property="email" 
          />

          {/* Phone Number */}
          <InputComponent 
            inputTitle="Phone Number" 
            type="number" 
            holder="Enter Phone Number" 
            value={inputData.phoneNumber} 
            handleChange={handleInputProperty} 
            property="phoneNumber" 
          />

          {/* Animal Type */}
          <InputComponent 
            inputTitle="Animal Type" 
            type="text" 
            holder="Enter Animal Type" 
            value={inputData.animalType} 
            handleChange={handleInputProperty} 
            property="animalType" 
          />

          {/* Submit */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormInputs;