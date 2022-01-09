/*
Bubble sort compares adjacent array elements.
If the current element is greater than the next element,
then a swap is executed. This ensure that the largest
number in each pass through the array up until 'currentlyUnsorted'
will be in the correct position. In other words, the largest number
'bubbles up'.
*/

function bubbleSort(array) {
  let currentlyUnsorted = array.length;
  
  for (let i = 0; i < currentlyUnsorted; i++) {
    for (let j = 0; j < currentlyUnsorted; j++) {
      if (array[j] > array[j + 1]) {
          let tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
      }
  }
  return array;
}

module.exports = { bubbleSort };