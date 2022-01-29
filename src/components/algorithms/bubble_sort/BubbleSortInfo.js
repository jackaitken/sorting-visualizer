import React from 'react';
import BubbleSortLegend from './BubbleSortLegend';
import BubbleSortTimeSpace from './BubbleSortTimeSpace';
import styles from '../../../styles/AppStyles.module.css';

function BubbleSortInfo() {
  return (
  <div>
    <BubbleSortLegend/>
    <BubbleSortTimeSpace/>
    <div className={styles.algorithmInfo}>
      <p>
        <strong>Bubble Sort</strong> is a simple, in place sorting algorithm that
        makes several iterations through an array comparing adjacent elements. If 
        the element at the left pointer is greater than the element at the right 
        pointer, then the elements are swapped. This ensures that through each iteration, 
        the largest element will 'bubble' up to its correct position.
      </p>
      </div>
  </div>
  );
}

export default BubbleSortInfo;