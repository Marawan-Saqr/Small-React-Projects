import { Container } from 'react-bootstrap';
import UserData from './Components/UserData';
import SetUserData from './Components/SetUserData';
import { useState } from 'react';

function App() {

  // Component States
  const [changeName, setChangeName] = useState("No Data Now");
  const [changeAge, setChangeAge] = useState("No Data Now");
  const [changeTitle, setChangeTitle] = useState("No Data Now");


  // Set User Name Function
  const setName = () => {
    const result = "Marawan Mahmoud Nasr";
    setChangeName(result);
  }


  // Set User Age Function
  const setAge = () => {
    const result = 28;
    setChangeAge(result);
  }


  // Set User Title Function
  const setTitle = () => {
    const result = "Front-End Developer";
    setChangeTitle(result);
  }


  return (
    <Container>
      <UserData changeName={changeName} changeAge={changeAge} changeTitle={changeTitle} />
      <SetUserData setName={setName} setAge={setAge} setTitle={setTitle} />
    </Container>
  )
};



export default App;