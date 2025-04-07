import { Container } from 'react-bootstrap';
import Content from './Components/Content';
import { useState } from 'react';


function App() {

  // Component States
  const [content, setContent] = useState(true);


  // Toggle Show Content
  const toggleContent = () => {
    setContent(!content);
  }


  return (
    <Container>
      <button onClick={toggleContent}>{content ? "Hide Content" : "Show Content"}</button>
      {content ? <Content /> : "No Content Found"}
    </Container>
  )
};



export default App;