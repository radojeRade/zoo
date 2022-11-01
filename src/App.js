import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalList from './AnimalList';


function App() {
  return (
    <div className="App">
      <h2>Animals</h2>
      <AnimalList/>
    </div>
  );
}

export default App;
