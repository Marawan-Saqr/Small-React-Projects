import { useState } from 'react';

const CounterPositiveOnly = () => {

  // Component States
  const [counter, setCounter] = useState(0);

  // Add Counter Function
  const addCounter = () => {
    setCounter(counter + 1);
  };

  // Minus Counter Function
  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={addCounter}>+</button>
      <button onClick={removeCounter}>-</button>
      <h2>{counter}</h2>
    </div>
  );
};

export default CounterPositiveOnly;