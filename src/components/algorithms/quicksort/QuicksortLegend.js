import React from 'react';
import styles from '../../../styles/AppStyles.module.css';

function QuicksortLegend() {
  return (
    <>
      <ul className={styles.legend}>
        <li><span className={styles.leftPointerGraphic}></span>Left Pointer</li>
        <li><span className={styles.rightPointerGraphic}></span>Right Pointer</li>
        <li><span className={styles.pivotGraphic}></span>Pivot</li>
      </ul>
    </>
  );
}

export default QuicksortLegend;