import React from 'react';
import styles from '../../../styles/AppStyles.module.css';

function MergeSortLegend() {
  return (
    <>
      <ul className={styles.legend}>
        <li><span className={styles.sorted}></span>Sorted</li>
        <li><span className={styles.subarray}></span>Current Subarray</li>
      </ul>
    </>
  );
}

export default MergeSortLegend;