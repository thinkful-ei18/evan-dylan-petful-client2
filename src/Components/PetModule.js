import React from 'react';
import {adoptCat, adoptDog} from '../actions/index';
import {connect} from 'react-redux';
import LoadSpinner from './LoadSpinner';


export class PetModule extends React.Component{


  onAdopt() {
    if (this.props.animalType==='cat') {
      this.props.dispatch(adoptCat());
    } else if (this.props.animalType==='dog') {
      this.props.dispatch(adoptDog());
    }
  }


  render() {

    return(
      
      <section className='pet-module'>
        <div className='pet-name'>
        {this.props.animal ? this.props.animal.name : ''}
        </div>
        <section className='pet-info-pic-cont'>
          <section className='pet-pic'>
            <img src={this.props.animal ? this.props.animal.imageURL : 'https://4vector.com/i/free-vector-gatto-cat-clip-art_119295_Gatto_Cat_clip_art_hight.png'} alt={this.props.animal ? this.props.animal.imageDescription : ''} />
          </section>
          <section className='pet-info'>
            <section className='pet-info-about'>
            <h4 className='pet-info-about-intro'>About {this.props.animal ? this.props.animal.name : '' }:</h4>
            <p className='pet-info-about-text'>
             {this.props.animal ? this.props.animal.story : <LoadSpinner/>}
            </p>
            </section>
          </section>
          
        </section>
          <section className='more-info'>
            <section className='sex additional-info-box'>
              <div className='info-title'>Sex:</div>
              {this.props.animal ? this.props.animal.sex : ''}
            </section>
            <section className='age additional-info-box'>
            <div className='info-title'>Age:</div>
            {this.props.animal ? this.props.animal.age : ''}
            </section>
            <section className='breed additional-info-box'>
            <div className='info-title'>Breed:</div>
            {this.props.animal ? this.props.animal.breed : ''}
            </section>
          </section>
          <button onClick={() => this.onAdopt()} className='adopt-button'>Adopt</button>
      </section>
    )
  }
}


export default connect()(PetModule);