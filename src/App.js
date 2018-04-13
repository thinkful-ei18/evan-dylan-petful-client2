import React, { Component } from 'react';
import './App.css';
import PetModule from './Components/PetModule.js';
import {Provider} from 'react-redux';
import store from './store';

import {fetchCat} from './actions/index';

store.dispatch(fetchCat());


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className='site-header'>
          <h1>Petful</h1>
        </header>
        <main className='main-container'>
          <PetModule animalType='cat'/>
          <PetModule animalType='dog'/>
        </main>
      </div>
      </Provider>
    );
  }
}

export default App;




