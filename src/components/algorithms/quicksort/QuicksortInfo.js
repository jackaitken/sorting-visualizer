import React from 'react';

function QuicksortInfo() {
  return (
  <div>
    <p>
      <strong>Quicksort</strong> is an in place sorting algorithm that uses a combination
      of partitions and recursion to achieve a sorted array. It works by first setting
      an arbitrary pivot (in this example the last element) and using a left and right
      pointer. The left pointer moves until it reaches an element that is greater than
      the right element then it stops and the right pointer advances toward the 
      left pointer. When the right pointer reaches an element that is less than the left
      pointer, the right pointer stops and the elements at the left and right pointer swap.
      The pointers continue this until the left pointer has moved beyond the right pointer. 
      At this point then we move the pivot to the left pointer and recursively examine the 
      left part of the array. Then we recursively examine the right part of the array.
    </p>
  </div>
  );
}

export default QuicksortInfo;