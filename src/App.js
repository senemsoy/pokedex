import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    //current number of Pokemons in the API
    const pokeCount = 893;
    const startIndex = Math.floor(Math.random() * pokeCount) + 1;

    const [pokemon, setPokemon] = useState(startIndex);
    const [pokemonData, setPokemonData] = useState([]);

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

    const Header = () => 
      <div className="header">
        <div className="header-background">
          <h1>Pokedex</h1>
        </div>
    </div>

    const statConvert = (stat) => {
        let convertedStat = stat*0.01
        return `calc(70%*${convertedStat})`; 
    }

    return (
      <div className="App">
        <Header/>
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
            <div className="pokeName">
              <h1>{data.name}</h1>
              <img src={data.sprites["front_default"]} />
            </div>
            <div className="pokeTable">
              <div className="pokeTableBody">
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Height</div>
                  <div className="pokeTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Weight</div>
                  <div className="pokeTableCell pokeWeight">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Type</div>
                  <div className="pokeTableCell">{data.types && data.types.map((typeObject) => 
                      typeObject.type.name).join(', ')}
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Abilities</div>
                  <div className="pokeTableCell">
                  <ol>
                    {data.abilities && data.abilities.map((abilityObject) => (
                      <li key={abilityObject.ability.name}>{abilityObject.ability.name}</li>
                    ))}
                  </ol>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Hp</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[5].base_stat)}}>
                        {data.stats[5].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Attack</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[4].base_stat)}}>
                        {data.stats[4].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Defense</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[3].base_stat)}}>
                        {data.stats[3].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Speed</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[0].base_stat)}}>
                        {data.stats[0].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Special Attack</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[2].base_stat)}}>
                        {data.stats[2].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Special Defense</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[1].base_stat)}}>
                        {data.stats[1].base_stat}
                    </div>
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
