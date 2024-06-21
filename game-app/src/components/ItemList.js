import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const ItemList = ({ games, deleteGame }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game => (
          <tr key={game.id}>
            <td>{game.name}</td>
            <td>{game.genre}</td>
            <td>{game.releaseDate}</td>
            <td>{game.rating}</td>
            <td>
              <Link to={`/edit/${game.id}`}>
                <Button variant="warning" className="mr-2">Edit</Button>
              </Link>
              <Button variant="danger" onClick={() => deleteGame(game.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ItemList;
