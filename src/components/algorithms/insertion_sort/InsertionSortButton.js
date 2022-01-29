import React from 'react';
import styles from '../../../styles/AppStyles.module.css';

function InsertionSortButton({ handleClick, disabled }) {
  return (
    <button
    onClick={handleClick}
    className={styles.algoButton}
    className={'contrast outline'}
    disabled={disabled}>
    Insertion Sort</button>
  );
}

export default InsertionSortButton;