import { Container } from 'react-bootstrap';
import { person } from './Data.js';
import { useState, useEffect } from 'react';
import DatesIcons from './Components/Dates-icons/DatesIcons.jsx';
import DatesLength from './Components/Dates-length/DatesLength.jsx';
import DatesAction from './Components/Dates-action/DatesAction.jsx';

function App() {

  const [personData, setPersonData] = useState(person);

  const hideData = () => {
    setPersonData([]);
  }

  const showData = () => {
    setPersonData(person);
  }

  useEffect(()=>{
    setPersonData([]);
  }, [])

  return (
    <div>
      <Container>
        <DatesLength person={ personData } />
        <DatesIcons person={ personData } />
        <DatesAction hideData={hideData} showData={showData} />
      </Container>
    </div>
  );
}



export default App;