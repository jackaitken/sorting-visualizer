import React from 'react';
import styles from '../../styles/AppStyles.module.css';

function MergeSortButton({ handleClick, disabled }) {
  return (
    <button
    onClick={handleClick}
    className={styles.algoButton}
    className={'contrast outline'}
    disabled={disabled}>
    Merge Sort</button>
  );
}

export default MergeSortButton;