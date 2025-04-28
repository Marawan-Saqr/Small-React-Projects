import TopNav from './Components/TopNav/TopNav.jsx';
import Title from './Components/Title/Title.jsx';
import Prayers from './Components/Prayers/Prayers.jsx';
import DownTitle from './Components/Down-title/DownTitle.jsx';
import { useState } from 'react';


function App() {

  // Component States
  const [selectCity, setSelectCity] = useState("Cairo");


  return (
    <div>
      <TopNav selectCity={ selectCity } setSelectCity={ setSelectCity } />
      <Title />
      <Prayers selectCity={ selectCity } />
      <DownTitle />
    </div>
  )
}


export default App;