import React from 'react';
import styles from './styles/AppStyles.module.css';

function BubbleSortButton({ handleClick }) {
  return (
    <button
    onClick={handleClick}
    className={styles.algoButton}>
    Bubble Sort</button>
  );
}

export default BubbleSortButton;