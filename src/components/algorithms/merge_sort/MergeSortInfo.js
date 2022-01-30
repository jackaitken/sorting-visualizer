import React from 'react';
import MergeSortLegend from './MergeSortLegend';
import MergeSortTimeSpace from './MergeSortTimeSpace';

function MergeSortInfo() {
  return (
    <div>
      <MergeSortLegend/>
      <MergeSortTimeSpace/>
      <div>
        <p>
          <strong>Merge Sort</strong> is a divide-and-conquer algorithm like
          Quicksort, but unlike Quicksort it utilizes an auxillary array, which helps us merge 
          two sorted subarrays. The algorithm achieves a sorted array by recursively sorting subarrays and then merging
          those sorted subarrays.
          <br/>
          <br/>
          To begin, the left half of the array is divided recursively. We continue dividing until
          we reach array of length 1. This array is set as the left subarray, the adjacent element 
          would then be set as the right subarray. Since we can be sure that an array of length 1 
          is a sorted array, we know that each subarray is sorted. 
          <br/>
          <br/>
          We then use a helper function to merge these two sorted subarrays in a single sorted array stored
          in our auxillary array. This sorted array is returned back to the main function and the remainder 
          of the calls to the left half of the array are unravelled from the stack. The algorithm then 
          moves onto the right half of the array following the same steps.
        </p>
      </div>
    </div>
  );
}

export default MergeSortInfo;