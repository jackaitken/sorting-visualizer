import React from 'react';
import styles from '../../../styles/AppStyles.module.css';

function InsertionSortLegend() {
  return (
    <>
      <ul className={styles.legend}>
        <li><span className={styles.rightPointerGraphic}></span>Current Element</li>
        <li><span className={styles.leftPointerGraphic}></span>Temporary Variable</li>
      </ul>
    </>
  );
}

export default InsertionSortLegend;