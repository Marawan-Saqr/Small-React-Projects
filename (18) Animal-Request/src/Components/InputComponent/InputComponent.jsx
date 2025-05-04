import { Form } from "react-bootstrap";

const InputComponent = ({ inputTitle, type, holder, value, handleChange, property }) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{inputTitle}</Form.Label>
        <Form.Control 
          type={type} 
          placeholder={holder} 
          value={value} 
          onChange={(e) => handleChange(e.target.value, property)} 
        />
      </Form.Group>
    </div>
  );
};

export default InputComponent;