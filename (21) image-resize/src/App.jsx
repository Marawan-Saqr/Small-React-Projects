import { useContext } from 'react';
import { ImageContext } from './Contexts/ImageSizeContext.jsx';
import { Container } from 'react-bootstrap';
import List from './Components/List.jsx';


function App() {

  // Component States
  const { isLarge, setIsLarge } = useContext(ImageContext);


  return (
    <div className="App">
      <Container style={{marginTop: "10px"}}>
        <input type="checkbox" checked={isLarge} onChange={(e)=> {setIsLarge(e.target.checked)}} />
        <label>Use large images</label>
        <hr />
        <List />
      </Container>
    </div>
  );
}


export default App;