import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() =>{
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) =>{
            setPokemon(response.data.results);
        })
        .catch((error) =>{
            console.log(error);
        })

    },[]);

  return (
    <ul>
        <h1>Pokemons</h1>
        {pokemon.map((pokemon, index) =>{
            return(
                <li key={index}>
                    # {index +1}: {pokemon.name}
                </li>
            );
        })}

    </ul>
  )
}

export default Pokemon;