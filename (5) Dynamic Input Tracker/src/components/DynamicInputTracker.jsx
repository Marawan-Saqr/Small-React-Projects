import { useState } from 'react';

const DynamicInputTracker = () => {

  // Component States
  const [inputData, setInputData] = useState("");

  // Clear Field Function
  const clearField = () => {
    setInputData("");
  }

  return (
    <div>
      <label style={{display: 'block', fontWeight: 'bold'}}>Enter Your Data</label>
      <input value={inputData} onChange={(e)=> setInputData(e.target.value)} style={{border: '2px solid orangered', outline: 'none'}} type="text" placeholder='Enter Data Here' />
      <h6>Your Data Is: {inputData}</h6>
      <button onClick={clearField}>clear</button>
    </div>
  );
};

export default DynamicInputTracker;