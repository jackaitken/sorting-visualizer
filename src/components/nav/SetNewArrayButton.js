import React from 'react';
import styles from '../../styles/AppStyles.module.css';

function SetNewArrayButton({ handleClick, disabled }) {
  return (
    <button
    onClick={handleClick}
    className={styles.algoButton}
    className={'outline'}
    id={'setNewArrayButton'}
    disabled={disabled}
    >
    Get new array</button>
  );
}

export default SetNewArrayButton