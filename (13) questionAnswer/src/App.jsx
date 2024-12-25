import ProjectTitle from './Components/Project-title/ProjectTitle';
import FormInput from './Components/Form-input/FormInput';
import QuestionList from './Components/Questions-list/QuestionList';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function App() {

  // Component States
  const savedItems = localStorage.getItem("questions");
  const initialValue = savedItems ? JSON.parse(savedItems) : [];
  const [data, setData] = useState(initialValue);


  const saveDataToLocalStorage = (newData) => {
    localStorage.setItem('questions', JSON.stringify(newData));
  }

  // Delete All Questions
  const deleteAll = () => {
    setData([]);
    saveDataToLocalStorage([]);
  }


  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={4}>
          <ProjectTitle />
        </Col>
        <Col sm={8}>
          <FormInput data={data} setData={setData} saveDataToLocalStorage={saveDataToLocalStorage} />
          <QuestionList data={data} setData={setData} saveDataToLocalStorage={saveDataToLocalStorage} />
          {data.length > 0 ? <button onClick={deleteAll} className='btn btn-danger w-100 mt-2'>Delete All</button> : null}
        </Col>
      </Row>
    </Container>
  )
};



export default App;