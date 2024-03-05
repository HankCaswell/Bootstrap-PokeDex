// PokemonCarousel.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import App from './App';


const PokemonCarousel = ({ pokemonData, onSelectPokemon }) => {
    
  return (
    <Carousel className='carousel-center' variant='dark'>
      {pokemonData && pokemonData.filter(pokemon => pokemon !== null).map((pokemon, index) => (
        <Carousel.Item key={index} onClick={() => onSelectPokemon(pokemon)}>
          {/* Assuming ExampleCarouselImage is a placeholder for actual images */}
          {/* Replace ExampleCarouselImage with your actual image component */}
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <Carousel.Caption>
            <h3>{pokemon.name.toUpperCase()}</h3>
            <p>Click for details</p> 
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PokemonCarousel;
