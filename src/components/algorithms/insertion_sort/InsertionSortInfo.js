import React from 'react';
import InsertionSortLegend from './InsertionSortLegend';
import InsertionSortTimeSpace from './InsertionSortTimeSpace';
import styles from '../../../styles/AppStyles.module.css';

function InsertionSortInfo() {
  return (
    <div>
      <InsertionSortLegend/>
      <InsertionSortTimeSpace/>
      <div className={styles.algorithmInfo}>
        <p>
          <strong>Insertion Sort</strong> begins by removing an element in the array and storing 
          it as a separate variable, here called the temporary variable. This removal of an element 
          creates a gap in the array. As we iterate through the array we compare the value stored 
          in the temporary variable to the value of the element to the left of the gap, here called the 
          current element. This means at the start, the element at index 1 will be set as the temporary 
          variable, and we will compare it to the element at index 0. If the element to the left of the 
          gap is greater than the value stored in the temporary variable, that element shifts to the 
          right and therefore the gap shifts to the left. 
          <br/>
          <br/>
          Once we reach an element that is lower than the value stored in 
          the temporary variable or we reach the left end of the array, the value stored in the temporary
          variable is inserted into the gap. This process repeats again with the next index until the 
          array is sorted. Insertion sort is extremely useful when an array is nearly sorted.
        </p>
      </div>
    </div>
  );
}

export default InsertionSortInfo;