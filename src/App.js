import React, { Component } from 'react';
import './App.css';
import PetModule from './Components/PetModule.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='site-header'>
          <h1>Petful</h1>
        </header>
        <main className='main-container'>
          <PetModule/>
          <PetModule/>
        </main>
      </div>
    );
  }
}

export default App;
