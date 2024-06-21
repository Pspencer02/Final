import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import CustomNavbar from './CustomNavbar';
import './App.css';

//add navbar
const App = () => (
  <div>
    <CustomNavbar />
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  </div>
);

export default App;
