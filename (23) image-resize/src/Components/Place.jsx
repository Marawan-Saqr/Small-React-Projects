import PlaceImage from "../Components/PlaceImage.jsx";

const Place = ({ element }) => {
  return (
    <div>
      <PlaceImage elementImage={element} />
      <p>{element.name}</p>
      <p>{element.description}</p>
    </div>
  )
}


export default Place;