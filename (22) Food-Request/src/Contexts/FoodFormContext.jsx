import { createContext, useState } from 'react';



export const foodFormContext = createContext();
const FoodFormContext = ({ children }) => {

  // Component States
  const [formInput, setFormInput] = useState({
    email: "",
    name: "",
    age: ""
  });


  // Handle Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    setFormInput({ email: "", name: "", age: "" });
  }



  return (
    <foodFormContext.Provider value={{formInput, setFormInput, handleFormSubmit}}>
      {children}
    </foodFormContext.Provider>
  );
};


export default FoodFormContext;