import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const QuestionList = ({ data, setData, saveDataToLocalStorage }) => {

  // Delete Question Function
  const deleteQuestion = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    saveDataToLocalStorage(updatedData);
  }





  return (
    <Accordion className='mt-3'>
      {data.length > 0 ? (data.map((item)=> (
        <Accordion.Item key={item.id} eventKey={item.id}>
        <Accordion.Header>{item.question}</Accordion.Header>
        <Accordion.Body className='d-flex justify-content-between align-items-center'>
          {item.answer}
          <button onClick={()=> deleteQuestion(item.id)} className='btn btn-danger'>Delete Question</button>
        </Accordion.Body>
      </Accordion.Item>
      ))) : <h5 className='text-center fw-bold'>No Questions Right Now</h5>}
    </Accordion>
  )
}

export default QuestionList;
