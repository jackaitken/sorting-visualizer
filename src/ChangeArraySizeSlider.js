import React from 'react';
import styles from './styles/AppStyles.module.css';

function ChangeArraySizeSlider({ handleChange, disabled }) {
  let handleSpeedChange = event => {
    event.preventDefault();
    return handleChange(event.target.value);
  };

  return (
    <div className={styles.slider}>
    <label for='sizeSlide'>Change size</label>
    <input
    name='sizeSlider' 
    type='range' 
    min='10'
    max='150'
    disabled={disabled}
    onChange={handleSpeedChange}></input>
    </div>
  )
}

export default ChangeArraySizeSlider;