import React from 'react';
import styles from '../../styles/AppStyles.module.css';

const SPEED_OFFSET = 100;

function SortSpeedSlider({ handleChange, disabled }) {
  let handleSpeedChange = event => {
    event.preventDefault();
    return handleChange((SPEED_OFFSET - event.target.value));
  };

  return (
    <div className={styles.slider}>
      <label for='speedSlider'>Change speed</label>
      <input 
      name='speedSlider'
      type='range' 
      min='0.5'
      max='90'
      disabled={disabled}
      onMouseUp={handleSpeedChange}></input>
    </div>
  )
}

export default SortSpeedSlider;