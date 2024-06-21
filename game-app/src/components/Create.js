import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Create = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://667491d775872d0e0a96e75b.mockapi.io/games', { name, genre, releaseDate, rating })
      .then(() => navigate('/'))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Add New Game</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter game name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter game genre"
            value={genre}
            onChange={e => setGenre(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formReleaseDate">
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            type="date"
            value={releaseDate}
            onChange={e => setReleaseDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter game rating"
            value={rating}
            onChange={e => setRating(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Game
        </Button>
      </Form>
    </div>
  );
};

export default Create;


