import React from "react";
import { ListGroup } from 'react-bootstrap';

const TodoList = ({todos, setTodos, saveToLocalStorage}) => {

  // Delete Todo Function
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item)=> item.id !== id);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  }


  return (
    <div className="todo-list mt-5">
      <ListGroup>
        {todos.length > 0 ? (todos.map((item)=> (
          <ListGroup.Item key={item.id}>
            <div className="d-flex justify-content-between">
              <h5>{item.task}</h5>
              <button onClick={()=> handleDelete(item.id)} className="btn btn-danger">Delete</button>
            </div>
            <p>{item.desc}</p>
          </ListGroup.Item>
        ))) : <h4 className="text-center">No Tasks For Now</h4>}
      </ListGroup>
    </div>
  );
};



export default TodoList;