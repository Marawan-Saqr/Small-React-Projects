import { useContext } from 'react';
import { ImageContext } from '../Contexts/ImageSizeContext.jsx';

const PlaceImage = ({elementImage}) => {

  // Component States
  const { imageSize } = useContext(ImageContext);


  return (
    <div>
      <img src ={elementImage.imageUrl} alt={elementImage.name} width={imageSize} height={imageSize} />
    </div>
  )
}


export default PlaceImage;