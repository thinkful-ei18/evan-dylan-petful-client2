import React from 'react';



export default class PetModule extends React.Component{


  onAdopt() {
//
  }


  render() {

    return(
      
      <section className='pet-module'>
        <div className='pet-name'>
        {this.props.animal.name}
        </div>
        <section className='pet-info-pic-cont'>
          <section className='pet-pic'>
            <img src={this.props.animal.imageURL} alt={this.props.animal.imageDescription} />
          </section>
          <section className='pet-info'>
            <section className='pet-info-about'>
            <h4 className='pet-info-about-intro'>About {this.props.animal.name}:</h4>
            <p className='pet-info-about-text'>
             {this.props.animal.story}
            </p>
            </section>
          </section>
          
        </section>
          <section className='more-info'>
            <section className='sex additional-info-box'>
              <div className='info-title'>Sex:</div>
              {this.props.animal.sex}
            </section>
            <section className='age additional-info-box'>
            <div className='info-title'>Age:</div>
            {this.props.animal.age}
            </section>
            <section className='breed additional-info-box'>
            <div className='info-title'>Breed:</div>
            {this.props.animal.breed}
            </section>
          </section>
          <button onClick={() => this.onAdopt()} className='adopt-button'>Adopt</button>
      </section>
    )
  }
}
