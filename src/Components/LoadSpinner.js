import React from 'react';

// CSS 
import './css/LoadSpinner.css'

export default function LoadSpinner() {

  return (
  <div className='loading-spinner'>
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  </div>
  )
}
