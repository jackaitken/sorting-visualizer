import React from 'react';
import styles from './styles/AppStyles.module.css';

function QuicksortButton({ handleClick }) {
  return (
    <button
    onClick={handleClick}
    className={styles.algoButton}>
    Quicksort</button>
  );
}

export default QuicksortButton;