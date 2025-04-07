import CardView from './Components/Card.jsx';
import { items } from './Data.js';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {

  // Component States
  const [itemData] = useState(items);


  return (
    <Container>
      <CardView itemData={itemData} />
    </Container>
  )
};



export default App;