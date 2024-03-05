import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import GenerationSelector from './dropdowns'; // Adjust the import path as needed
import PokemonSearch from './pokeSearch';

const TopNavbar = ({ onGenerationChange }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand href="#home"><img src='https://i.pngimg.me/thumb/f/720/6502949089968128.jpg' width='90' height='66' className="d-inline-block align-top navbar-brand-img" />PokeDex</Navbar.Brand>
        <Nav className="me-auto">
          <GenerationSelector onGenerationChange={onGenerationChange} />
          <PokemonSearch onSelectPokemon='' />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
