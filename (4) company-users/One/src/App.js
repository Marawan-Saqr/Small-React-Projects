import './App.css';
import TopBar from './components/navbar/Navbar';
import Cards from './components/cards/Cards';
import personImage from './components/cards/images/person.jpg';
import Footer from './components/footer/Footer';


function App() {

  // Components Data
  let navbarTitle = "WELCOME TO OUR SYSTEM";
  let cardData = [
    {
      cardImage: personImage,
      cardTitle: "Hesham Mahmoud",
      cardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      cardImage: personImage,
      cardTitle: "Ahmed Mahmoud",
      cardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      cardImage: personImage,
      cardTitle: "Marawan Mahmoud",
      cardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      cardImage: personImage,
      cardTitle: "Omar Mahmoud",
      cardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      cardImage: personImage,
      cardTitle: "Aya Mahmoud",
      cardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      cardImage: personImage,
      cardTitle: "Sohiala Mahmoud",
      cardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
  ]


  return (
    <div>
      <TopBar title={navbarTitle} />
      <Cards data={cardData} />
      <Footer />
    </div>
  );
}

export default App;
