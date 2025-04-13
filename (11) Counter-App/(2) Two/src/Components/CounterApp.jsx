import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { increaseCounter, decreaseCounter } from '../Functions/Functions';

const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className='counter-app'>
      <Container className='d-flex justify-content-center mt-3 gap-3 align-items-center'>
        <button onClick={()=> increaseCounter(counter, setCounter)} className='btn btn-success'>+</button>
        <div>{counter}</div>
        <button onClick={()=> decreaseCounter(counter, setCounter)} className='btn btn-danger'>-</button>
      </Container>
    </div>
  )
}

export default CounterApp;
