import Card from './Components/Card.jsx';
import { items } from './Data.js';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {

  // Component States
  const [itemData] = useState(items);


  return (
    <Container>
      <Card itemData={itemData} />
    </Container>
  )
};



export default App;