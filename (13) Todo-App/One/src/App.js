import './App.css';
import Todo from './components/Todo/Todo';


const App = () => {

  // Define Props
  const title = 'Welcome To Todo App';

  return (
    <div>
      <Todo appTitle={title} />
    </div>
  )

}

export default App;