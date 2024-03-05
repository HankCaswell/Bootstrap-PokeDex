import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import App from './App';

const GenerationSelector = ({ onGenerationChange }) => {
  const generations = [
    { id: 1, name: 'Generation I' },
    { id: 2, name: 'Generation II' },
    { id: 3, name: 'Generation III' },
    { id: 4, name: 'Generation IV'},
    {id: 5, name: 'Generation V'},
    {id: 6, name: 'Generation VI'}
   
  ];

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Generation
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {generations.map((gen) => (
          <Dropdown.Item key={gen.id} onClick={() => onGenerationChange(gen.id)}>
            {gen.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default GenerationSelector;
