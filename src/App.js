import React, { Component } from 'react';
import './App.css';
import PetModule from './Components/PetModule.js';
import {connect} from 'react-redux';
import {fetchDog, fetchCat} from './actions/index';

class App extends Component {
componentDidMount() {
  this.props.dispatch(fetchCat());
  this.props.dispatch(fetchDog());
}


  render() {

    return (
      <div className="App">
        <header className='site-header'>
          <h1>Petful</h1>
        </header>
        <div>
        <main className='main-container'>
        <PetModule animalType='cat' animal={this.props.cat.data}/>
        <PetModule animalType='dog' animal={this.props.dog.data}/>
        </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('STATE', state);
  return {
  cat: state.cat,
  dog: state.dog
  };
};

export default connect(mapStateToProps)(App);




