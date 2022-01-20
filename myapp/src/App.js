import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  async function getPokemon() {
    
    const result = await axios.get('http://localhost:8080/api/pokemon');
    const pokemon = result.data;
    setPokemon(pokemon);
  

  useEffect(() => {
    getPokemon();
  }, []);


  return (
    <div className="App">
       <ul>
        {pokemon.map(pokemon => (
          <li key={pokemon.id}>
            {pokemon.name}
          </li>
        ))}

       </ul>
      
    </div>
  );
}

export default App;
