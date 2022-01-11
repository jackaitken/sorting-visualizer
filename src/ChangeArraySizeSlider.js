import React from 'react';
import styles from './styles/AppStyles.module.css';

function ChangeArraySizeSlider({ handleChange }) {
  let handleSpeedChange = event => {
    event.preventDefault();
    return handleChange(event.target.value);
  };

  return (
    <div>
    <label for='sizeSlide'>Change size</label>
    <input
    name='sizeSlider' 
    type='range' 
    min='10'
    max='175'
    onChange={handleSpeedChange}></input>
    </div>
  )
}

export default ChangeArraySizeSlider;