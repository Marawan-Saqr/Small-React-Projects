import { useContext } from 'react';
import { ImageContext } from '../Contexts/ImageSizeContext.jsx';
import Place from '../Components/Place.jsx';

const List = () => {

  // Component States
  const { places } = useContext(ImageContext);


  return (
    <div>
      <ul>
        {places.map((element)=> (
          <li key={element.id}>
            <Place element={element} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List;