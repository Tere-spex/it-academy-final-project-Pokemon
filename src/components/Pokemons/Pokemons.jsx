import React, {useState, useEffect} from 'react'
import {PokemonStyles} from './Pokemons.styles'
import { useAuth } from "../../context/authContext";
import {Link} from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export const Pokemons = () => {
  const {data} = useAuth();  
  const [allpokemons, setAllPokemons] = useState(data);

  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()

  const[loading, setLoading] = useState(true);

  const [searchPokemon, setSearchPokemon] = useState('')

  useEffect(() => {
    setAllPokemons(data.results)

    const fetchApiPokemons = async () => {
      try {
        const resp = await fetch(currentPageUrl)
        const data2 = await resp.json()
        setPokemons(data2.results)
        setLoading(false);
        setNextPageUrl(data2.next)
        setPreviousPageUrl(data2.previous)
      }catch{
        console.log('error')
      }
    }
    fetchApiPokemons()
    
  }, [currentPageUrl])

  const handleNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const handlePreviousPage = () => {
    setCurrentPageUrl(previousPageUrl)
  }

  if(loading) {
    return <div>Loading...</div>
  }

  const handlePokemonName = (e) => {
    setSearchPokemon(e.target.value)
  }

  return (
      <>
      <Navbar />
      <PokemonStyles>
        <section className='search-container'>
          <form className='search'>
            <label><i className="fa-solid fa-magnifying-glass"></i></label>
            <input type='text' placeholder='Pokemon name' onChange={handlePokemonName}/>
          </form>
          <div className='searching-pokemon'>
            {allpokemons.filter(pokemon => pokemon.name.toUpperCase() === searchPokemon.toUpperCase()).map(pokemon =>
            <div className='search-card' key={pokemon.url}> 
              <h3><Link to={`/${(pokemon.url).split("/").reverse()[1]}`}>{pokemon.name.toUpperCase()}</Link></h3>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").reverse()[1]}.png`} alt={pokemon.name}/>
            </div>)}
          </div>
        </section>
        <main className='cards-container'>
        {pokemons.map((pokemon) => (
          <div className='card' key={pokemon.url}>
            <h3><Link to={`/${(pokemon.url).split("/").reverse()[1]}`}>{pokemon.name.toUpperCase()}</Link></h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").reverse()[1]}.png`} alt={pokemon.name}/>
          </div>
        ))}
      </main>
        <div className='pagination'>
          {handlePreviousPage && <button className='btn' onClick={previousPageUrl ? handlePreviousPage : null}>Previous</button>}
          {handleNextPage && <button className='btn' onClick={nextPageUrl ? handleNextPage : null}>Next</button>}
        </div>
      </PokemonStyles>
      </>
    )
}

