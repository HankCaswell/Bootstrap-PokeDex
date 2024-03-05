import React, { useState } from 'react';
import axios from 'axios';
import App from './App';

const PokemonSearch = ({ onSelectPokemon }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      onSelectPokemon(response.data); // Pass the fetched Pokémon data to the parent component
    } catch (error) {
      console.error("Pokémon not found:", error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control w-50"
      />
      <button type="submit" className="btn btn-primary ml-2">Search</button>
    </form>
  );
};

export default PokemonSearch;
