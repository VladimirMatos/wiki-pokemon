import './App.css';
import HomeContainer from './conteiners/HomeFiles/HomeContainer';
import PokemonImage from './conteiners/PokemonImage/PokemonContainer';
import NavCont from './conteiners/NavBar/NavBarContainer';
import { Fragment } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import axios from 'axios';

axios.defaults.baseURL ="https://pokeapi.co/api/v2/";




function App() {

  return (
    <Router>
      <NavCont/>
      <Routes>
        <Route path="/" element={<HomeContainer />}/>
        <Route path="/PokemonsImage" element={<PokemonImage />}/>
      </Routes>
    </Router>
  );
}

export default App;
