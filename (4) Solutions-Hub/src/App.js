import './App.css';
import TopBar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import ServiceCards from './components/Services-Cards/ServiceCards';
import About from './components/About/About';
import ReviewsCards from './components/Reviews-Cards/ReviewsCards';
import personCard from './components/Reviews-Cards/images/person-card.jpg';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';


function App() {

  // Binding Data Of Services Cards
  let serviceCardData = [
    {
      serviceCardIcon: <i className="fab fa-telegram-plane"></i>,
      serviceCardTitle: "Digital Marketing",
      serviceCardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      serviceCardHref: <i className="fas fa-arrow-circle-right"></i>
    },
    {
      serviceCardIcon: <i className="fas fa-dollar-sign"></i>,
      serviceCardTitle: "Trade Shows",
      serviceCardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      serviceCardHref: <i className="fas fa-arrow-circle-right"></i>
    },
    {
      serviceCardIcon: <i className="fas fa-rocket"></i>,
      serviceCardTitle: "Branding",
      serviceCardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      serviceCardHref: <i className="fas fa-arrow-circle-right"></i>
    },
    {
      serviceCardIcon: <i className="fas fa-edit"></i>,
      serviceCardTitle: "Content Creation",
      serviceCardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      serviceCardHref: <i className="fas fa-arrow-circle-right"></i>
    },
    {
      serviceCardIcon: <i className="fas fa-pen-fancy"></i>,
      serviceCardTitle: "Graphic Design",
      serviceCardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      serviceCardHref: <i className="fas fa-arrow-circle-right"></i>
    },
    {
      serviceCardIcon: <i className="fas fa-cart-arrow-down"></i>,
      serviceCardTitle: "Media Buying",
      serviceCardDescription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      serviceCardHref: <i className="fas fa-arrow-circle-right"></i>
    },
  ]

  // Binding Data Of Reviews Cards
  let reviewsCardData = [
    {
      reviewsCardImage: personCard,
      reviewsCardTitle: "Marie Jordan",
      reviewsCardDesc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      reviewsCardRate: <i class="fas fa-star"></i>
    },
    {
      reviewsCardImage: personCard,
      reviewsCardTitle: "Ann Brown",
      reviewsCardDesc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      reviewsCardRate: <i class="fas fa-star"></i>
    },
    {
      reviewsCardImage: personCard,
      reviewsCardTitle: "Andrew Bill",
      reviewsCardDesc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      reviewsCardRate: <i class="fas fa-star"></i>
    },
    {
      reviewsCardImage: personCard,
      reviewsCardTitle: "Jason Stawer",
      reviewsCardDesc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      reviewsCardRate: <i class="fas fa-star"></i>
    },
    {
      reviewsCardImage: personCard,
      reviewsCardTitle: "Lisa Green",
      reviewsCardDesc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      reviewsCardRate: <i class="fas fa-star"></i>
    },
    {
      reviewsCardImage: personCard,
      reviewsCardTitle: "Anne Doe",
      reviewsCardDesc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      reviewsCardRate: <i class="fas fa-star"></i>
    },
  ]





  // Call Components
  return (
    <div>
      <TopBar />
      <Landing />
      <ServiceCards servicesBindingData={serviceCardData} />
      <About />
      <ReviewsCards reviewsBindingData={reviewsCardData}/>
      <Login />
      <Footer />
    </div>
  )
}

export default App;

