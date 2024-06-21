import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
//edit games 
const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://667491d775872d0e0a96e75b.mockapi.io/games/${id}`)
      .then(response => {
        setName(response.data.name);
        setGenre(response.data.genre);
        setReleaseDate(response.data.releaseDate);
        setRating(response.data.rating);
      })
      .catch(error => console.error('Error:', error));
  }, [id]);
//submit handle 
  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`https://667491d775872d0e0a96e75b.mockapi.io/games/${id}`, { name, genre, releaseDate, rating })
      .then(() => navigate('/'))
      .catch(error => console.error('Error:', error));
  };
//return edit game 
  return (
    <div>
      <h2>Edit Game</h2>
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
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
