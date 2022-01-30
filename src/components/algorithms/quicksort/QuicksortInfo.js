import React from 'react';
import QuicksortLegend from './QuicksortLegend';
import QuicksortTimeSpace from './QuicksortTimeSpace';
import styles from '../../../styles/AppStyles.module.css';

function QuicksortInfo() {
  return (
  <div> 
    <QuicksortLegend/>
    <QuicksortTimeSpace/>
    <div className={styles.algorithmInfo}>
      <p>
        <strong>Quicksort</strong> is an in place, divide-and-conquer, sorting algorithm 
        that uses a combination of partitions and recursion to achieve a sorted array. 
        It works by first setting an arbitrary pivot (in this example the last element) 
        and using a left and right pointer to create a partion. The left pointer moves 
        until it reaches an element that is greater than the right element. Then the left 
        pointer stops and the right pointer advances toward the left pointer. When the right 
        pointer reaches an element that is less than the left pointer, the right pointer 
        stops and the elements at the left and right pointer swap. The pointers continue 
        this until the left pointer has moved beyond the right pointer. At this point we 
        then set the pivot at the index of the left pointer and recursively examine the subarrays 
        until the array is sorted.
      </p>
    </div>
  </div>
  );
}

export default QuicksortInfo;