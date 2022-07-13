import React, {useState, useEffect} from 'react';
import {PokemonStyles} from './Pokemons.styles';
import { useAuth } from "../../context/authContext";
import {Link} from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export const Pokemons = () => {
  const {data} = useAuth();  
  const [allpokemons, setAllPokemons] = useState(data);

  const [pokemons, setPokemons] = useState([]);
  
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();

  const[loading, setLoading] = useState(true);

  const [searchPokemon, setSearchPokemon] = useState('');

  const [favoritesPokemons, setFavoritesPokemons] = useState([]);

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

  const handleAddFavorite = (pokemon) => {
    if(favoritesPokemons.filter(p => p !== pokemon)){
      setFavoritesPokemons([...favoritesPokemons, pokemon])
    }else{
      return alert('Pokemon already in favorites')
    }
  }
  return (
      <>
      <Navbar />
      <PokemonStyles>
        {/* SEARCH AREA */}
        <section className='search-container'>
          <form>
            <label><i className="fa-solid fa-magnifying-glass"></i></label>
            <input type="text" placeholder="Buscar Pokemon" onChange={handlePokemonName}/>
          </form>
          <div className='searching-pokemon'> 
            {allpokemons.filter(pokemon => pokemon.name.toUpperCase() === searchPokemon.toUpperCase()).map(pokemon =>
            <div className='search-card' key={pokemon.url}> 
              <h3>{pokemon.name.toUpperCase()}</h3>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").reverse()[1]}.png`} alt={pokemon.name}/>
              <div className='addTo-favorites-container'>
                <label htmlFor="">Add to favorites</label>
                <button className='addTo-favorites-button' onClick={() => setFavoritesPokemons([...favoritesPokemons, pokemon])}>❤</button>
              </div>
            </div>)}
          </div>
        </section>
        {/* FAVORITES LIST */}
        {favoritesPokemons.length > 0 ?
        <section className='favorite-pokemons-section'>
          <h3>FAVORITE POKEMONS</h3>
          <div className='favorites-container'>
          {favoritesPokemons.filter((favorito) => favorito.name !== pokemons.name).map(
            (pokemon) => (
              <div className='favorites-card' key={pokemon.name}>
                <h6>{pokemon.name.toUpperCase()}</h6>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").reverse()[1]}.png`} alt={pokemon.name}/>
                <span>1</span>
                <div className='delete-favorites-container'>
                  <button className='addTo-favorites-button' onClick={() => setFavoritesPokemons(favoritesPokemons.filter(favoritePokemon => favoritePokemon !== pokemon))}><i className="fa-solid fa-trash-can"></i></button>
                </div>
              </div>))}
          </div>
        </section>: null}
        {/* POKEMON LIST */}
        <main className='cards-container'>
        {pokemons.map((pokemon) => (
          <div className='card' key={pokemon.url}>
            <h3>{pokemon.name.toUpperCase()}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").reverse()[1]}.png`} alt={pokemon.name}/>
            <div className='addTo-favorites-container'>
              <label htmlFor="">Add to favorites</label>
              <button className='addTo-favorites-button' onClick={() => setFavoritesPokemons([...favoritesPokemons, pokemon])}>❤</button>
            </div>
          </div>
        ))}
        </main>
        {/* PAGINATION */}
        <div className='pagination'>
          {handlePreviousPage && <button className='btn' onClick={previousPageUrl ? handlePreviousPage : null}>Previous</button>}
          {handleNextPage && <button className='btn' onClick={nextPageUrl ? handleNextPage : null}>Next</button>}
        </div>
      </PokemonStyles>
      </>
    )
}

