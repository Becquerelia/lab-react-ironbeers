import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import BeersList from './pages/BeersList';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
      
      <Routes>
          
          <Route path="/" element={ <Home /> } />
          <Route path="/beers" element={ <BeersList /> } />
          <Route path="/beer-details/:id" element={ <BeerDetails /> } /> 
          <Route path="/random-beer" element={ <RandomBeer /> } />
          <Route path="/new-beer" element={ <NewBeer /> } />         

        </Routes>

    </div>
  );
}

export default App;
