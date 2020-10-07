import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import logo from './pokeball.png'; 

const App = () => {
    //current number of Pokemons in the API
    const pokeCount = 893;
    const startIndex = Math.floor(Math.random() * pokeCount) + 1;

    const [pokemon, setPokemon] = useState(startIndex);
    const [pokemonData, setPokemonData] = useState([]);

    const getPokemon = async () => {
      const pokeArray = [];
      try {
        const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}` //gathering an individual pokemon we search for
        const results = await axios.get(api)
        pokeArray.push(results.data);
        setPokemonData(pokeArray);
        console.log(results)
      } catch (e) {
        console.log(e)
      }
    }

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
          <img src={logo} className="logo"/>
          <h1>Pokedex</h1>
        </div>
    </div>

    const statConvert = (stat) => {
        let convertedStat = stat*0.01
        return `calc(65%*${convertedStat})`; 
    }

    const pokeTypeBackground = (type) => {
        const pokeType = {
          normal: '#ffc1b0',
          fighting: '#f23d65',
          flying: '#0caaed',
          poison: '#867bff',
          ground: '#bb7171',
          rock: '#cfcbf5',
          bug: '#88db88',
          ghost: '#dedede',
          steel: '#76afb5',
          fire: '#f06c6c',
          water: '#72d6ce',
          grass: '#a1d998',
          electric: '#ffe585',
          psychic: '#82acff',
          ice: '#b0e7ff',
          dragon: '#ffa258',
          dark: '#b578d6',
          fairy: '#bea7db',
          unknown: '#2c8fa8',
          shadow: '#515a73'
        };
        return pokeType[type];
    }

    let renderBackgroundColor = (data) => {
            if (data.types.length === 1) {
                return (
                    pokeTypeBackground(data.types[0].type.name)
                )
            } else {
                return (
                    `linear-gradient(to right, ${pokeTypeBackground(data.types[0].type.name)}, ${pokeTypeBackground(data.types[1].type.name)})`
                )
            }
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
            <div className="container " style={{background: renderBackgroundColor(data)}}>
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
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[5].base_stat), background: renderBackgroundColor(data)}}>
                        {data.stats[5].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Attack</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[4].base_stat), background: renderBackgroundColor(data)}}>
                        {data.stats[4].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Defense</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[3].base_stat), background: renderBackgroundColor(data)}}>
                        {data.stats[3].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Speed</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[0].base_stat), background: renderBackgroundColor(data)}}>
                        {data.stats[0].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Special Attack</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[2].base_stat), background: renderBackgroundColor(data)}} >
                        {data.stats[2].base_stat}
                    </div>
                  </div>
                </div>
                <div className="pokeTableRow">
                  <div className="pokeTableCell">Special Defense</div>
                  <div className="pokeTableCell">
                    <div className="pokeStat-bar" style={{width: statConvert(data.stats[1].base_stat), background: renderBackgroundColor(data)}} >
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
