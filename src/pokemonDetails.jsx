import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import App from './App';

const PokemonDetails = ({ pokemon, onSelectPokemon }) => {
  return (
    <Card style={{ width: '18rem' }} className="mx-auto mt-3 dark-mode">
      <Card.Img variant="top" src={pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Stat</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.stats.map((stat) => (
              <tr key={stat.stat.name}>
                <td>{stat.stat.name.replace('-', ' ').toUpperCase()}</td>
                <td>{stat.base_stat}</td>
              </tr>
            ))}
            {/* Evolution details placeholder, you'll need to fetch this data separately */}
            <tr>
              <td>Evolution Level</td>
              <td>N/A</td> {/* Replace N/A with actual data */}
            </tr>
            <tr>
              <td>Evolves Into</td>
              <td>N/A</td> {/* Replace N/A with actual data */}
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PokemonDetails;
