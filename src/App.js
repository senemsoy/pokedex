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
        toArray.push(res.data);
        setPokemonData(toArray);
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }

    //testing
    useEffect(() => {
      getPokemon()
    }, [])

    const handleChange = (e) => {
      setPokemon(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
    }

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
        {pokemonData.map((data) => {
          return(
            <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">{data.name}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Weight</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{data.types && data.types.map((typeObject) => 
                      typeObject.type.name).join(', ')}
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Abilities</div>
                  <div className="divTableCell">{data.abilities && data.abilities.map((abilityObject) => 
                      abilityObject.ability.name).join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    );
  
}

export default App;
