import {useReducer} from 'react';

const initialValue = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    case "reset":
      return {count: 0};
    default:
      return {state};
  }
}




const Counter = () => {

  // Component States
  const [state, dispatch] = useReducer(reducer, initialValue);



  return (
    <div className='d-flex justify-content-center mt-5'>
      <button className='btn btn-success' onClick={()=> dispatch({type: "increment"})}>+</button>
      {state.count}
      <button className='btn btn-danger' onClick={()=> dispatch({type: "decrement"})}>-</button>
    </div>
  )
}

export default Counter;
