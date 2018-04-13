import React from 'react';
import {connect} from 'react-redux';


export default class PetModule extends React.Component{
  
  render() {

    return(
      <section className='pet-module'>
        <div className='pet-name'>
        Bernie
        </div>
        <section className='pet-info-pic-cont'>
          <section className='pet-pic'>
            <img src='https://kcpetproject.org/wp-content/uploads/cat-hammock-332x250.jpg' alt='dog' />
          </section>
          <section className='pet-info'>
            <section className='pet-info-about'>
            <h4 className='pet-info-about-intro'>About Bernie:</h4>
            <p className='pet-info-about-text'>
              HI!
            </p>
            </section>
          </section>
          
        </section>
          <section className='more-info'>
            <section className='sex additional-info-box'>
              <div className='info-title'>Sex:</div>
              Male
            </section>
            <section className='age additional-info-box'>
            <div className='info-title'>Age:</div>
              3
            </section>
            <section className='breed additional-info-box'>
            <div className='info-title'>Breed:</div>
            Tabby
            </section>
          </section>
          <button className='adopt-button'>Adopt</button>

      </section>
    )
  }
}


// const mapStateToProps = state => ({
//   cat: state.reducers.cat[0],
//   dog: state.reducers.dog[0]
// })

// export default connect(mapStateToProps(PetModule));