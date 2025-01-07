import { Container } from 'react-bootstrap';
import { person } from './Data';
import DatesComp from './Components/DatesCom.jsx';
import { useState } from 'react';


function App() {

  // Component States
  const savedItems = localStorage.getItem("dates");
  const initialValue = savedItems ? JSON.parse(savedItems) : [];
  const [dates, setDates] = useState(initialValue);


  // Show Dates
  const showDates = () => {
    const updatedDates = person;
    setDates(updatedDates);
    localStorage.setItem("dates", JSON.stringify(updatedDates));
  }


  // Hide Dates
  const hideDates = () => {
    const updatedDates = [];
    setDates(updatedDates);
    localStorage.setItem("dates", JSON.stringify(updatedDates));
  }



  return (
    <Container>
      <DatesComp dates={dates} showDates={showDates} hideDates={hideDates} />
    </Container>
  );
}



export default App;