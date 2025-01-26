import React from 'react';
import { useReducer } from 'react';

const Counter = () => {

  // Component States
  const initialValue = 0;

  const reducerFunction = (state, action) => {
    switch(action) {
      case "PLUS":
        return state + 1;
      case "MINUS":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFunction, initialValue);

  return (
    <div>
      <button onClick={()=> dispatch("PLUS")} className='btn btn-success'>+</button>
      <button onClick={()=> dispatch("MINUS")} className='btn btn-danger'>-</button>
      <button onClick={()=> dispatch("RESET")} className='btn btn-warning'>reset</button>
      { state }
    </div>
  )
}




export default Counter;