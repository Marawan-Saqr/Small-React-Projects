import AddTodo from './Components/Add-Todo/AddTodo.jsx';
import TodoList from './Components/Todos-list/TodoList.jsx';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function App() {

  // Component States
  const savedData = localStorage.getItem("items");
  const initialValue = savedData ? JSON.parse(savedData) : [];
  const [todos, setTodos] = useState(initialValue);


  // Save Actions To LocalStorage
  const saveToLocalStorage = (dataItems) => {
    localStorage.setItem('items', JSON.stringify(dataItems));
  }

  return (
    <Container>
      <AddTodo todos={todos} setTodos={setTodos} saveToLocalStorage={saveToLocalStorage} />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} saveToLocalStorage={saveToLocalStorage} />
    </Container>
  )

};



export default App;