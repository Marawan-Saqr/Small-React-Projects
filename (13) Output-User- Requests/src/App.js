import './App.css';
import Home from './components/Home';
import React, { useState, useEffect } from 'react';

function App() {

  // Define States
  const [theme, setTheme] = useState("");

  // Theme Function
  const changeTheme = () => {
    const result = theme === "dark" ? "light" : "dark";
    setTheme(result);
  }

  // Apply theme to body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Call Components
  return (
    <div>
      <button className='btn-style' onClick={changeTheme}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
      <Home />
    </div>
  )
}

export default App;
