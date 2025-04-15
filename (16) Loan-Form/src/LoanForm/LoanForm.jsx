import { useState } from "react";
import "./LoanForm.css";
import { Container, Form } from "react-bootstrap";

const LoanForm = () => {

  // Component States
  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    moneyRange: "5000$",
    isStudent: false,
  });


  // Check Inputs First
  const checkInputsBeforeSubmit = () => {
    if (
      inputForm.name === "" ||
      inputForm.email === "" ||
      inputForm.phoneNumber === "" ||
      inputForm.age === "" ||
      inputForm.moneyRange === ""
    ) {
      return false;
    } else {
      return true;
    }
  };


  return (
    <div className="loan-form mt-4 mb-4">
      <h2 className="text-center" style={{ color: "#fff" }}>
        WELCOME TO LOAN FORM
      </h2>
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(inputForm);
          }}
        >
          {/* Name */}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={inputForm.name}
              onChange={(e) =>
                setInputForm({ ...inputForm, name: e.target.value })
              }
            />
          </Form.Group>
          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={inputForm.email}
              onChange={(e) =>
                setInputForm({ ...inputForm, email: e.target.value })
              }
            />
          </Form.Group>
          {/* Phone Number */}
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Phone Number"
              value={inputForm.phoneNumber}
              onChange={(e) =>
                setInputForm({ ...inputForm, phoneNumber: e.target.value })
              }
            />
          </Form.Group>
          {/* Age */}
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              value={inputForm.age}
              onChange={(e) =>
                setInputForm({ ...inputForm, age: e.target.value })
              }
            />
          </Form.Group>
          {/* Select */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Select Money Range</Form.Label>
            <select
              className="form-control"
              value={inputForm.moneyRange}
              onChange={(e) =>
                setInputForm({ ...inputForm, moneyRange: e.target.value })
              }
            >
              <option>2000$</option>
              <option>5000$</option>
              <option>10000$</option>
            </select>
          </Form.Group>
          {/* Check */}
          <Form.Group className="mb-3">
            <input
              type="checkbox"
              className="me-2"
              checked={inputForm.isStudent}
              onChange={(e) =>
                setInputForm({ ...inputForm, isStudent: e.target.checked })
              }
            />
            <Form.Label>Are You Student?</Form.Label>
          </Form.Group>
          {/* Submit */}
          <button
            disabled={!checkInputsBeforeSubmit()}
            className={
              !checkInputsBeforeSubmit()
                ? "btn btn-danger form-control"
                : "btn btn-success form-control"
            }
          >
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};


export default LoanForm;