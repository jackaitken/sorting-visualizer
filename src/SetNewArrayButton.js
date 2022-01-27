import React from 'react';
import styles from './styles/AppStyles.module.css';

function SetNewArrayButton({ handleClick }) {
  return (
    <button
    onClick={handleClick}
    className={styles.algoButton}
    className={'outline'}
    >
    Get new array</button>
  );
}

export default SetNewArrayButton