import TopNav from './Components/Top-nav/TopNav.jsx';
import AddNote from './Components/Add-note/AddNote.jsx';
import AllNote from './Components/All-note/AllNote.jsx';
import { useState } from 'react';
import { notes } from './Data.js';
import { Container } from 'react-bootstrap';


function App() {

  // Component States
  const savedItems = localStorage.getItem("notes");
  const initialValue = savedItems ? JSON.parse(savedItems) : [];
  const [noteData, setNoteData] = useState(initialValue);


  // LocalStorage Function
  const saveDataToLocalStorage = (newData) => {
    localStorage.setItem('notes', JSON.stringify(newData));
  }


  return (
    <div>
      <TopNav noteData={noteData} setNoteData={setNoteData} />
      <Container>
        <AddNote noteData={noteData} setNoteData={setNoteData} saveDataToLocalStorage={saveDataToLocalStorage} />
        <hr style={{color: 'orangered'}} />
        <AllNote noteData={noteData} setNoteData={setNoteData} saveDataToLocalStorage={saveDataToLocalStorage} />
      </Container>
    </div>
  )
}



export default App;