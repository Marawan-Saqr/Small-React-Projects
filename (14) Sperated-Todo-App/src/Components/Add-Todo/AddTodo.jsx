import React from 'react';
import { useState } from 'react';

const AddTodo = ({ todos, setTodos, saveToLocalStorage }) => {

  // Component States
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");


  // Add Todo Function
  const addTodo = () => {
    const obj = {
      id: Math.random(),
      task: task,
      desc: desc
    }
    const newItem = [...todos, obj];
    setTodos(newItem);
    saveToLocalStorage(newItem);
    setTask("");
    setDesc("");
  }



  return (
    <div className='add-todo'>
      <h3 className='text-center mt-3'>Advanced Todo App</h3>
      <input value={task} onChange={(e)=> setTask(e.target.value)} type="text" className='form-control' placeholder='Enter Task' />
      <textarea value={desc} onChange={(e)=> setDesc(e.target.value)} type="text" className='form-control mt-2' placeholder='Enter Description' />
      <button className='btn btn-success w-100 mt-2' onClick={addTodo}>Submit</button>
    </div>
  )
}




export default AddTodo;