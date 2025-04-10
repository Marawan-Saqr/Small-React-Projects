import { useState } from "react";

const MobileStore = () => {

  // Component States
  const mobiles = ["iphone", "samsung", "black berry", "sony"];
  const [mobilesList, setMobilesList] = useState(mobiles);
  const [inputValue, setInputValue] = useState("");


  const handleMobileAdd = () => {
    setMobilesList([...mobilesList, inputValue]);
    setInputValue("");
  }


  return (
    <div>
      <div className="mobiles">
        {mobilesList.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </div>
      <div className="inputs">
        <input type="text" placeholder="Enter Mobile" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button onClick={handleMobileAdd}>Add Mobile</button>
      </div>
    </div>
  );
};


export default MobileStore;