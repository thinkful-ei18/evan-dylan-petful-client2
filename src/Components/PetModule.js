import React from 'react';
import {connect} from 'react-redux';
import {adoptCat, adoptDog, fetchCat, fetchDog} from '../actions/index.js';



export class PetModule extends React.Component{
  componentDidMount() {
    // include some logic for checking the prop passed to the module
    // to see if this is for displaying cat or dog
    if (this.props.animalType==='cat') {
      this.props.dispatch(fetchCat());
    } else if (this.props.animalType==='dog') {
      this.props.dispatch(fetchDog());
    }
  }

  onAdopt() {
    // include some logic for checking the prop passed to the module
    // to see if this is display cat or dog
    if (this.props.animalType==='cat') {
      this.props.dispatch(adoptCat());
    } else if (this.props.animalType==='dog') {
      this.props.dispatch(adoptDog());
    }
  }


  render() {

    console.log(this.props);

    return(
      <section className='pet-module'>
        <div className='pet-name'>
        {this.props.cat.name}
        </div>
        <section className='pet-info-pic-cont'>
          <section className='pet-pic'>
            <img src={this.props.cat.imageURL} alt={this.props.cat.imageDescription} />
          </section>
          <section className='pet-info'>
            <section className='pet-info-about'>
            <h4 className='pet-info-about-intro'>About {this.props.cat.name}:</h4>
            <p className='pet-info-about-text'>
             {this.props.cat.story}
            </p>
            </section>
          </section>
          
        </section>
          <section className='more-info'>
            <section className='sex additional-info-box'>
              <div className='info-title'>Sex:</div>
              {this.props.cat.sex}
            </section>
            <section className='age additional-info-box'>
            <div className='info-title'>Age:</div>
            {this.props.cat.age}
            </section>
            <section className='breed additional-info-box'>
            <div className='info-title'>Breed:</div>
            {this.props.cat.breed}
            </section>
          </section>
          <button onClick={() => this.onAdopt()} className='adopt-button'>Adopt</button>
      </section>
    )
  }
}


const mapStateToProps = state => ({
  cat: state.cat.data,
  dog: state.dog.data
})

export default connect(mapStateToProps)(PetModule);