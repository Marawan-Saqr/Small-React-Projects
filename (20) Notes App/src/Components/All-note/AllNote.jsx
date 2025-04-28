import "./AllNotes.css";
import { Row, Col } from "react-bootstrap";

const AllNote = ({ noteData, setNoteData, saveDataToLocalStorage }) => {

  // Delete Note By Id
  const deleteNote = (id) => {
    const deleted = noteData.filter((item)=> item.id !== id);
    setNoteData(deleted);
    saveDataToLocalStorage(deleted)
  }


  return (
    <Row>
      {noteData.length >= 1 ? (noteData.map((item)=> (
        <Col lg={3} md={6} key={item.id}>
        <div className="book">
          <div className="content d-flex flex-column">
            <p>{item.description}</p>
            <button className="btn btn-danger" onClick={()=> deleteNote(item.id)}>Delete</button>
          </div>
          <div className="cover">
            <p>{item.title}</p>
          </div>
        </div>
      </Col>
      ))) : <h2>No Notes Today</h2>}
    </Row>
  );
};


export default AllNote;