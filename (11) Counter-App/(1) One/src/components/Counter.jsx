import React, { useState } from 'react';

const Counter = () => {

  // Define State
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    const result = counter + 1;
    setCounter(result);
  }

  const decreaseCounter = () => {
    const result = counter - 1;
    setCounter(result);
  }

  // User Interface
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#282c34' }}>
      <div>
        <h1 style={{ color: 'white', fontWeight: 'bold', fontStyle: 'italic', margin: '30px 0px', textAlign: 'center' }}>
          Welcome To Counter <span style={{ color: 'red' }}>App</span>
        </h1>
        <div className='counter-buttons'>
          <div className="container d-flex justify-content-center align-items-center">
            <button className="btn btn-primary" onClick={increaseCounter}>+</button>
            <h3 style={{ color: 'white', margin: '0px 10px' }}>{counter}</h3>
            <button className="btn btn-danger" onClick={decreaseCounter}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
