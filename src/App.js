import './App.css'
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';
import SearchMeal from './components/SearchedMeal/SearchMeal';

function App() {

  return (
    <div className="App">
             <Navbar></Navbar>
             
             <Meals></Meals>
    </div>
  );
}

export default App;
