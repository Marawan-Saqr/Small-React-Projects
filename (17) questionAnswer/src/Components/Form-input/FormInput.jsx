import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const FormInput = ({ setData, data, saveDataToLocalStorage }) => {

  // Component States
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");


  // Add Question Function
  const addQuestion = () => {
    const obj = {
      id: Math.random(),
      question: question,
      answer: answer
    }
    const updatedData = [...data, obj];
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
    setQuestion("");
    setAnswer("");
  }




  return (
    <Row>
      <Col sm="5">
        <Form.Control value={question} onChange={(e)=> setQuestion(e.target.value)} type="text" placeholder="Enter Question" />
      </Col>
      <Col sm="5">
        <Form.Control value={answer} onChange={(e)=> setAnswer(e.target.value)} type="text" placeholder="Enter Answer" />
      </Col>
      <Col sm="2">
        <button onClick={addQuestion} className='btn btn-success w-100' type="submit">Submit</button>
      </Col>
    </Row>
  )
}




export default FormInput;
