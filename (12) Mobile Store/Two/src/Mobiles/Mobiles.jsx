import { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./Mobiles.css";


const Mobiles = () => {

  // Component States
  const mobilesArray = [
    { id: 1, name: "iphone 5", year: 2012 },
    { id: 2, name: "samsung", year: 2020 },
    { id: 3, name: "black berry", year: 2007 },
    { id: 4, name: "realme", year: 2021 },
  ];

  const [formInputName, setFormInputName] = useState("");
  const [formInputYear, setFormInputYear] = useState("");
  const [mobiles, setMobiles] = useState(mobilesArray);


  // Add New Mobile
  const addNewMobile = () => {
    const obj = {
      id: Math.random(),
      name: formInputName,
      year: formInputYear
    }
    setMobiles([...mobiles, obj]);
    setFormInputName("");
    setFormInputYear("");
  }

  // Delete Mobile
  const handleDeleteMobile = (id) => {
    const filtered = mobiles.filter((element)=> {
      return element.id !== id;
    })
    setMobiles(filtered);
  }


  return (
    <div className="mobiles mt-4 mb-4">
      <h1 className="text-center">
        Welcome To Mobile <span>Store</span>
      </h1>
      <Container>
        <form className="mt-4" onSubmit={(e)=> {
          e.preventDefault();
        }}>
          <div>
            <label>Mobile Name</label>
            <input
              type="text"
              placeholder="Enter Mobile Name"
              className="form-control"
              value={formInputName}
              onChange={(e)=> setFormInputName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label>Mobile Year</label>
            <input
              type="number"
              placeholder="Enter Mobile Year"
              className="form-control"
              value={formInputYear}
              onChange={(e)=> setFormInputYear(e.target.value)}
            />
          </div>
          <button className="form-control btn btn-success mt-4" onClick={addNewMobile}>ADD MOBILE</button>
        </form>


        <div className="display-mobiles mt-4">
          {mobiles.length >= 1 ? (
            <ListGroup>
              {mobiles.map((element) => (
                <ListGroup.Item key={element.id}>
                  <div className="d-flex justify-content-between">
                    {element.name} || {element.year}
                    <div>
                      <button className="btn btn-danger" onClick={()=> handleDeleteMobile(element.id)}>Delete</button>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <h2 className="text-center">No Mobiles Available</h2>
          )}
        </div>
      </Container>
    </div>
  );
};


export default Mobiles;