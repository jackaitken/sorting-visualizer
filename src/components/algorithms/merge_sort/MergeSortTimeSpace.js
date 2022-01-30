import React from 'react';
import styles from '../../../styles/AppStyles.module.css';

function MergeSortTimeSpace() {
  return (
    <div className={styles.algorithmInfo}>
      <p className={styles.timeSpaceComplexity}>Time Complexity: <em>O(N log N)</em></p>
      <p>||</p>
      <p className={styles.timeSpaceComplexity}>Space Complexity: <em>O(N)</em></p>
    </div>
  );
}

export default MergeSortTimeSpace;