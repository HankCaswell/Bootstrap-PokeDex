import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import GenerationSelector from './dropdowns';
import PokemonCarousel from './PokemonCarousel';
import PokemonSearch from './pokeSearch';
import PokemonDetails from './pokemonDetails';
import TopNavbar from './navbar';
import {Container, Row, Col} from 'react-bootstrap'



function App() {

  const [generation, setGeneration] = useState(null);
  const [generationData, setGenerationData] = useState(null)
  const [pokemon, setPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [error, setError] = useState(null);
  
  
//  On change of generation call the API to get the list of Pokemon in the gen, map through the array of Pokemon names and make another API request for each of the mons, setPokemonData to the results of that API call.
  useEffect(() => {
    if (generation) {
      const fetchGenerationData = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/generation/${generation}`);
          const speciesList = response.data.pokemon_species;
          console.log(speciesList)

        // Fetch details for each Pokemon species, do the .catch within the map so an individual error doesn't hold up the whole thing. 
        const speciesDetailsPromises = speciesList.map(species => axios.get(`https://pokeapi.co/api/v2/pokemon/${species.name}`)
        .then(res => res.data)
        .catch(error => null))


        const speciesDetails = await Promise.all(speciesDetailsPromises)
        setPokemonData(speciesDetails);
        }
        catch (error) {
          setError(error.message)
        }
      };
      fetchGenerationData()
    }
  }, [generation])

  
  
  const handleGenerationChange = (genId) => {
    setGeneration(genId)
  }

  const onSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon)
  }
  

  return (
    <>
    <TopNavbar onGenerationChange={handleGenerationChange} />
    <Container fluid='lg' className='mt-3'>
      <Row className='justify-content-center'>
        <Col xs={12}>
          <h1 className='text-center'>PokeDex</h1>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <PokemonCarousel pokemonData={pokemonData} onSelectPokemon={onSelectPokemon} />
        </Col>
      </Row>
      {selectedPokemon && (
        <Row className='justify-content-center mt-3'>
          <Col xs={12} md={6}>
            <PokemonDetails pokemon={selectedPokemon} />
          </Col>
        </Row>
      )}
    </Container>
    {/* <div className='container'>
      <h1>PokeDex</h1>
     */}
      {/* <PokemonSearch onSelectPokemon={onSelectPokemon} /> */}
      {/* <div>
      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
      </div> */}


      {/* Render the pokemon sprites and names, have to do the filter to ensure that we don't try to render pokemon data that can't be pulled (pokemon with multiple forms is an issue because the API call isn't simply the name it's like 'deoxys-speed-form') */}
      {/* <div className='carousel-container'>
      <PokemonCarousel pokemonData={pokemonData} onSelectPokemon={onSelectPokemon} /> */}
      
      {/* </div>
    </div>
     */}
    </>
  )
}

export default App
