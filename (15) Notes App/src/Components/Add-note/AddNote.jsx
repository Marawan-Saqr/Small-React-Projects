import './AddNote.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';


const AddNote = ({ noteData, setNoteData, saveDataToLocalStorage }) => {

  // Component States
  const [note, setNote] = useState('');
  const [description, setDescription] = useState('');


  // Add Note Function
  const addNote = () => {
    const obj = {
      id: Math.random(),
      title: note,
      description: description
    }
    const updatedData = [...noteData, obj];
    setNoteData(updatedData);
    saveDataToLocalStorage(updatedData);
    setNote('');
    setDescription('');
  }


  return (
    <div className='add-note mt-5'>
      <h1 className='text-center'>Add Notes</h1>
      <Form.Control
        value={note}
        onChange={(e) => setNote(e.target.value)}
        type="text"
        placeholder="Enter Title"
      />
      <Form.Control
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        as="textarea"
        rows={5}
        placeholder='Enter Description'
        className='mt-3'
      />
      <div className='add text-center mt-3'>
        <button className='btn btn-success' onClick={addNote}>
          Add Note
        </button>
      </div>
    </div>
  );
};


export default AddNote;