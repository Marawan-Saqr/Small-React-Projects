import React, { useState } from 'react';
import './Todo.css';

const Todo = (props) => {

  // Define States
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [theme, changeTheme] = useState("dark");

  // Function To Push Tasks Into Array
  const addNewTodo = () => {
    const updatedTodos = [...todos, { task, desc }];
    setTodos(updatedTodos);
    setTask('');
    setDesc('');
  }

  // Function To Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    changeTheme(newTheme);
  }

  return (
    <div style={{ backgroundColor: theme === "dark" ? 'black' : 'white', minHeight: '100vh', color: theme === "dark" ? 'white' : 'black' }}>
      <div style={{ minHeight: '100vh', backgroundColor: theme === "dark" ? 'black' : 'white', transition: '0.5s' }}>
        <button className='btn btn-danger mt-2' style={{ position: 'absolute', top: '-7px', right: '10px' }} onClick={toggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 className='text-center text-success' style={{ marginTop: '40px', textTransform: 'uppercase', paddingTop: '30px' }}>{props.appTitle}</h1>
        <div className='todo-card'>
          <div className='container p-5' style={{ backgroundColor: theme === "dark" ? '#1d1d1d' : '#f0f0f0', marginTop: '30px', borderRadius: '8px' }}>
            <input className={`form-control mb-2 ${theme === "dark" ? "white-placeholder" : "black-placeholder"}`} style={{ backgroundColor: theme === "dark" ? 'black' : 'white', border: 'none', color: theme === "dark" ? 'white' : 'black' }} placeholder='Enter Your Task' value={task} onChange={(event) => { setTask(event.target.value) }} />
            <textarea className={`form-control mb-2 ${theme === "dark" ? "white-placeholder" : "black-placeholder"}`} style={{ backgroundColor: theme === "dark" ? 'black' : 'white', border: 'none', color: theme === "dark" ? 'white' : 'black' }} rows={5} placeholder='Enter Your Description' value={desc} onChange={(event) => { setDesc(event.target.value) }} />
            <div className='w-100 d-flex'>
              <button style={{ color: 'white' }} className='btn btn-success' onClick={addNewTodo}>Add Task</button>
            </div>
            <hr />
            <ul className='list-group mt-4'>
              {todos.map((res, index) => (
                <li key={index} style={{ backgroundColor: theme === "dark" ? 'black' : 'white', color: theme === "dark" ? 'white' : 'black', marginTop: '8px', borderBottom: `1px solid ${theme === "dark" ? 'green' : 'gray'}` }} className='list-group-item'>
                  <h3>{res.task}</h3>
                  <p>{res.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;