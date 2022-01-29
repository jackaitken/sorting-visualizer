import React from 'react';
import styles from '../../../styles/AppStyles.module.css';

function BubbleSortButton({ handleClick, disabled }) {
  return (
    <button
    onClick={handleClick}
    className={styles.algoButton}
    className={'contrast outline'}
    disabled={disabled}>
    Bubble Sort</button>
  );
}

export default BubbleSortButton;