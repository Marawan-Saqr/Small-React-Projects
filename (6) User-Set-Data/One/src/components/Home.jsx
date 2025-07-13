import React, {useState} from 'react';

const Home = () => {

  // Define States
  const [userName, setName] = useState("No Name");
  const [userAge, setAge] = useState("No Age");
  const [userAddress, setAddress] = useState("No Address");
  const [userCollege, setCollege] = useState("No College");

  const changeName = () => {
    const changedName = "Marawan";
    setName(changedName);
  }

  const changeAge = () => {
    const changedAge = 27;
    setAge(changedAge);
  }

  const changeAddress = () => {
    const changedAddress = "6TH October City";
    setAddress(changedAddress);
  }

  const changeCollege = () => {
    const changedCollege = "Computer Science";
    setCollege(changedCollege);
  }


  // User Interface
  return (
    <div>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className='col-md-3'>
              <div className="box">
                <button className='btn btn-info mt-3' style={{color: 'white'}} onClick={changeName}>Set The Name</button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="box">
                <button className='btn btn-info mt-3' style={{color: 'white'}} onClick={changeAge}>Set The Age</button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="box">
                <button className='btn btn-info mt-3' style={{color: 'white'}} onClick={changeAddress}>Set The Address</button>
              </div>
            </div>
            <div className='col-md-3'>
              <div className="box">
                <button className='btn btn-info mt-3' style={{color: 'white'}} onClick={changeCollege}>Set The College</button>
              </div>
            </div>
            <hr className='mt-5' />
          </div>
          <div className="display-data mt-5">
            <h2 style={{backgroundColor: 'white', padding: '5px', borderRadius: '5px', textTransform: 'uppercase'}}>The Data Will Be Displayed Here</h2>
            <ul style={{color: 'green', fontWeight: 'bold', fontStyle: 'italic'}}>
              <li>{userName}</li>
              <li>{userAge}</li>
              <li>{userAddress}</li>
              <li>{userCollege}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;