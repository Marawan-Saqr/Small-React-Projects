import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  // Define States
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [phone, setPhone] = useState("");
  const [inputs, setInputs] = useState([]);

  // Handle User Data
  const handleUserData = () => {
    const result = [...inputs, { email, name, age, specialist, phone }];
    setInputs(result);
    setEmail("");
    setName("");
    setAge("");
    setSpecialist("");
    setPhone("");
  };

  return (
    <div>
      <div className='inputs'>
        <h1 style={{ color: 'red', textAlign: 'center', textTransform: 'uppercase', marginTop: '30px' }}>
          Enter Your Data
        </h1>
        <div className="container">
          <input type="text" className='form-control' placeholder='Enter Your Email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="text" className='form-control' placeholder='Enter Your Name' value={name} onChange={(event) => setName(event.target.value)} />
          <input type="text" className='form-control' placeholder='Enter Your Age' value={age} onChange={(event) => setAge(event.target.value)} />
          <input type="text" className='form-control' placeholder='Enter Your Specialist' value={specialist} onChange={(event) => setSpecialist(event.target.value)} />
          <input type="text" className='form-control' placeholder='Enter Your Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)} />
          <button className='btn btn-info' onClick={handleUserData}>Show Your Data</button>
          <hr />
          <div className='displayed-data'>
            {inputs.map((result, index) => (
              <ul key={index}>
                <li>{result.email}</li>
                <li>{result.name}</li>
                <li>{result.age}</li>
                <li>{result.specialist}</li>
                <li>{result.phone}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
