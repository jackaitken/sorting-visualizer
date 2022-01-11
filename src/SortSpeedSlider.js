import React from 'react';
import styles from './styles/AppStyles.module.css';

const SPEED_OFFSET = 100;

function SortSpeedSlider({ handleChange }) {
  let handleSpeedChange = event => {
    event.preventDefault();
    return handleChange((SPEED_OFFSET - event.target.value));
  };

  return (
    <div>
      <label for='speedSlider'>Change speed</label>
      <input 
      name='speedSlider'
      type='range' 
      min='10'
      max='90'
      onMouseUp={handleSpeedChange}></input>
    </div>
  )
}

export default SortSpeedSlider;