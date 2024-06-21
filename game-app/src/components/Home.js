import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ItemList from './ItemList';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('https://667491d775872d0e0a96e75b.mockapi.io/games')
      .then(response => setGames(response.data))
      .catch(error => console.error('Error:', error));
  }, []);
//delete game 
  const deleteGame = id => {
    axios.delete(`https://667491d775872d0e0a96e75b.mockapi.io/games/${id}`)
      .then(() => setGames(games.filter(game => game.id !== id)))
      .catch(error => console.error('Error:', error));
  };

  //return game 
  return (
    <div>
      <h1>Video Games</h1>
      <Link to="/create">
        <Button variant="primary" className="mb-3">Add Game</Button>
      </Link>
      <ItemList games={games} deleteGame={deleteGame} />
    </div>
  );
};

export default Home;
