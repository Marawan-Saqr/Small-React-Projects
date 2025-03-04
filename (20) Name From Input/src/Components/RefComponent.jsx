import { useRef, useEffect } from "react";
import { Container } from 'react-bootstrap';
import "./RefComponent.css";

const RefComponent = () => {

  // Component States
  let inputRef = useRef(null);
  let textRef = useRef(null);


  // Handle Show Text Function
  const handleShowText = () => {
    if (inputRef.current.value) {
      textRef.current.innerText = inputRef.current.value;
    } else {
      textRef.current.innerText = "Waiting For Input Data...";
    }
  };


  // Delete Input Data
  const deleteData = () => {
    inputRef.current.value = "";
    textRef.current.innerText = "Waiting For Input Data...";
  }


  // UseEffect
  useEffect(()=> {
    inputRef.current.focus();
  }, [])

  return (
    <Container className="mt-3">
      <button onClick={() => inputRef.current.focus()} className="btn btn-success">Focus</button>
      <input className="form-control mt-2 mb-2" maxLength={15} ref={inputRef} type="text" placeholder="Enter Your Name" />
      <button style={{marginRight: '10px'}} onClick={handleShowText} className="btn btn-primary">Show Text</button>
      <button onClick={deleteData} className="btn btn-danger">Clear</button>
      <h3 className="mt-3" ref={textRef}>Waiting For Input Data...</h3>
    </Container>
  );
};

export default RefComponent;