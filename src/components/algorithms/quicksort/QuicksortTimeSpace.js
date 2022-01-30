import React from 'react';
import styles from '../../../styles/AppStyles.module.css';

function QuicksortTimeSpace() {
  return (
    <div className={styles.algorithmInfo}>
      <p className={styles.timeSpaceComplexity}>Time Complexity: <em>O(N log N)</em></p>
      <p>&emsp;</p>
      <p className={styles.timeSpaceComplexity}>Space Complexity: <em>O(1)</em></p>
    </div>
  );
}

export default QuicksortTimeSpace;