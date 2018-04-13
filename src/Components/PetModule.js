import React from 'react';


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
            <h4 className='pet-info-about-intro'>About Bernie</h4>
            <p className='pet-info-about-text'>
          I am a sweet handsome young man who loves to play and get attention from my foster mom. I'm so ready for my forever home. 'I am a sweet handsome young man who loves to play and get attention from my foster mom. I\'m so ready for my forever home.'I am a sweet handsome young man who loves to play and get attention from my foster mom. I\'m so ready for my forever home.'I am a sweet handsome young man who loves to play and get attention from my foster mom. I\'m so ready for my forever home.
            </p>
            </section>
          </section>
          
        </section>
        

      </section>
    )
  }

}