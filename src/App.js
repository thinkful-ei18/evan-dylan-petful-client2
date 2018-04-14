import React, { Component } from 'react';
import './App.css';
import PetModule from './Components/PetModule.js';
import {connect} from 'react-redux';
import {fetchDog, fetchCat} from './actions/index';
import LoadSpinner from './Components/LoadSpinner';

class App extends Component {
componentDidMount() {
  this.props.dispatch(fetchCat());
  this.props.dispatch(fetchDog());
}


  render() {

    let petModules = this.props.dog.data && this.props.cat.data ? (
      <div>
      <PetModule animalType='cat' animal={this.props.cat.data}/>
      <PetModule animalType='dog' animal={this.props.dog.data}/>
      </div>
    ) : <LoadSpinner/>;


    return (

      <div className="App">
        <header className='site-header'>
          <h1>Petful</h1>
        </header>
        <main className='main-container'>
          {petModules}
        </main>
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




