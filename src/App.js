import React, { Component } from 'react';
import './App.css';
import PetModule from './Components/PetModule.js';
import {connect} from 'react-redux';
import store from './store';
import {fetchDog, fetchCat, adoptDog, adoptCat} from './actions/index';


class App extends Component {
componentDidMount() {
  this.props.dispatch(fetchCat());
  this.props.dispatch(fetchDog());
}

  render() {

    let petModules = this.props.dog.data && this.props.cat.data ? (
      <div>
      <PetModule animal={this.props.cat.data}/>
      <PetModule animal={this.props.dog.data}/>
      </div>
    ) : '';

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
  return {
  cat: state.cat,
  dog: state.dog
  };
};

export default connect(mapStateToProps)(App);




