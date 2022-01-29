import React from 'react';
import styles from '../../../styles/AppStyles.module.css';

function QuicksortButton({ handleClick, disabled }) {
  return (
    <>
      <button
      onClick={handleClick}
      className={styles.algoButton}
      className={'contrast outline'}
      disabled={disabled}>
      Quicksort</button>
    </>
  );
}

export default QuicksortButton;