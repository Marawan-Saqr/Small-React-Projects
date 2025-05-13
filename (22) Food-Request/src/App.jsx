import FoodForm from "./FoodForm/FoodForm.jsx";
import FoodFormContext from "./Contexts/FoodFormContext.jsx";


function App() {
  return (
    <FoodFormContext>
      <div className="App">
        <FoodForm />
      </div>
    </FoodFormContext>
  );
}


export default App;