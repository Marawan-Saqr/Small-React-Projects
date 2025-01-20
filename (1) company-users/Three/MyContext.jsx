import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


// Create Context
const dataContext = createContext();
const UseContextProvider = ({ children }) => {

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
  };


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <dataContext.Provider value={{ users }}>
      {children}
    </dataContext.Provider>
  );
};


export { UseContextProvider, dataContext };