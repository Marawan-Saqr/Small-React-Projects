import { useState } from 'react';

const ShowContent = () => {

  // Component States
  const [content, setContent] = useState(false);


  // Toggle Content Function
  const toggleFunction = () => {
    setContent(!content);
  }


  return (
    <div>
      <button onClick={toggleFunction}>{content ? "Hide Content" : "Show Content"}</button>
      <h1>{content === true ? "Content Showed" : ""}</h1>
    </div>
  )
}



export default ShowContent;