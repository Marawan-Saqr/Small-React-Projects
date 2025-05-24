import { useState, createContext } from 'react';
import { places } from '../../data.js';


export const ImageContext = createContext();
const ImageSizeContext = ({ children }) => {

  // Component States
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;


  return (
    <ImageContext.Provider value={{isLarge, setIsLarge, imageSize, places}}>
      { children }
    </ImageContext.Provider>
  )
}



export default ImageSizeContext;