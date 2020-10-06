import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = async () => {
      const toArray = [];
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}` //gathering an individual pokemon we search for
        const res = await axios.get(url)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }

    //testing
    useEffect(() => {
      getPokemon()
    }, [])

    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              type="text" 
              onChange={handleChange} 
              placeholder="Search for a Pokemon!"
            />
          </label>
        </form>
      </div>
    );
  
}

export default App;
