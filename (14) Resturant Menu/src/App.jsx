import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { items } from './data';
import NavBar from './Components/NavBar';
import ItemsList from './Components/ItemsList';
import Header from './Components/Header';
import Category from './Components/Category';


function App() {

  // Component States
  const [menuitems, setMenuItems] = useState(items);


  // Get Categories Names Only From Meals
  const allCategory = ['All', ...new Set(items.map((i)=> i.category))];


  // Get Items By Search Title
  const searchItems = (newSearch) => {
    if (newSearch !== "") {
      let newFilter = items.filter((item)=> {
        return item.title === newSearch;
      })
      setMenuItems(newFilter);
    }
  }


  // Filter By Category
  const filterByCategory = (newItem) => {
    if (newItem === "All") {
      setMenuItems(items);
    } else {
      let newFilter = items.filter((item)=> {
        return item.category === newItem;
      })
      setMenuItems(newFilter);
    }
  }


  return (
    <div className="color-body font">
      <NavBar searchItems={searchItems} />
      <Container>
        <Header />
        <Category allCategory={allCategory} filterByCategory={filterByCategory} />
        <ItemsList menuitems={menuitems} />
      </Container>
    </div>
  )
};



export default App;