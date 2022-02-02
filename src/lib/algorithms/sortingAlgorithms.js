export class SortingAlgorithms {
  static algorithms = {
    bubble: SortingAlgorithms.bubbleSort,
    quick: SortingAlgorithms.quicksort,
    insertion: SortingAlgorithms.insertionSort,
    merge: SortingAlgorithms.mergeSort,
  };

  static bubbleSort(array) {
    let animationArr = [];
    let currentlyUnsorted = array.length - 1;
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
      
      for (let i = 0; i < currentlyUnsorted; i++) {
        let animationObj = {};
        animationObj.startState = [i, i + 1];

        if (array[i] > array[i + 1]) {
          animationObj.swap = true;
          [ array[i], array[i + 1] ] = [ array[i + 1], array[i] ];
          sorted = false;
        } else {
          animationObj.swap = false;
        }

        if (i === currentlyUnsorted - 1) {
          animationObj.sorted = true;
        } else {
          animationObj.sorted = false;
        }

        animationArr.push(animationObj);
      }
      currentlyUnsorted -= 1;
    }
    return animationArr;
  }

  static quicksortWrapper(array) {
    let outerAnimationArr = [];

    function quicksort(left, right) {
      if (right - left <= 0) {
        return;
      }
  
      let [ pivotIndex, animationArr] = partition(left, right);
      animationArr.forEach(obj => {
        outerAnimationArr.push(obj);
      });
  
      quicksort(left, pivotIndex - 1);
      quicksort(pivotIndex + 1, right);
    }

    function addToObject(left, right, pivotIndex, leftSwap, pivotSwap) {
      let animationObj = {};
      animationObj.left = left;
      animationObj.right = right <= 0 ? 0 : right;
      animationObj.pivot = pivotIndex;
      if (leftSwap) {
        animationObj.swapLeftRight = true;
      }

      if (pivotSwap) {
        animationObj.swapLeftPivot = true;
      }
      
      return animationObj;
    }
  
    function partition(left, right) {
      let pivotIndex = right;
      let pivot = array[pivotIndex];
      right -= 1;
  
      let animationArr = [];

      animationArr.push(addToObject(left, right, pivotIndex));
  
      while (true) {
        while (array[left] < pivot) {
          left += 1;
          animationArr.push(addToObject(left, right, pivotIndex));
        }
  
        while (array[right] > pivot) {
          right -= 1;
          animationArr.push(addToObject(left, right, pivotIndex));
        }
  
        if (left >= right) {
          break;
        } else {
          animationArr.push(addToObject(left, right, pivotIndex, true));
          [ array[left], array[right] ] = [ array[right], array[left] ];
          left += 1;
          animationArr.push(addToObject(left, right, pivotIndex));
        }
      }
      animationArr.push(addToObject(left, right, pivotIndex, false, true));
  
      [ array[left], array[pivotIndex] ] = [ array[pivotIndex], array[left] ];
      return [ left, animationArr];
    }

    quicksort(0, array.length - 1);
    return outerAnimationArr;
  }

  static mergeSort() {
    // STUB
  }
  static insertionSortWrapper(array) {
    function insertionSort(array) {
      let animationArr = [];
    
      for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let animationTemp = i;
        let curIndex = i - 1;
    
        while (curIndex >= 0) {
          animationArr.push(insertionAddToObject(animationTemp, curIndex));
          if (array[curIndex] > temp) {
            animationTemp -= 1;
            animationArr.push(insertionAddToObject(animationTemp, curIndex + 1, true));
            // swap height of value at curIndex + 1 with height of curIndex
            array[curIndex + 1] = array[curIndex];
            curIndex -= 1;
          } else {
            break;
          }
        }
        // swap height of value at curIndex + 1 and temp
        array[curIndex + 1] = temp;
      }
      return animationArr;
    }
    
    function insertionAddToObject(temp, curIndex, curIndexShift) {
      let animationObj = {};
      animationObj.temp = temp <= 0 ? 0 : temp;
      animationObj.curIndex = curIndex <= 0 ? 0 : curIndex;
      if (curIndexShift) {
        animationObj.curIndexShift = true;
      }
    
      return animationObj;
    }
    return insertionSort(array);
  }

  static mergeSortWrapper(arr) { 
    let curArrayState = arr;
    let animationArr = [];
  
    function mergeSort(arr) {
      if (arr.length <= 1) return arr;
    
      let midPoint = Math.floor(arr.length / 2);
      let left = mergeSort(arr.slice(0, midPoint));
      let right = mergeSort(arr.slice(midPoint));
    
      return mergeTwoSortedArrs(left, right);
    }
    
    function mergeTwoSortedArrs(arr1, arr2) {
      let startIndex = getStartIndex(arr1, arr2);
      let sortedArr = [];
    
      while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
          sortedArr.push(arr2.shift());
        } else {
          sortedArr.push(arr1.shift());
        }
      }
      sortedArr = sortedArr.concat(arr1, arr2);
      let pastArrState = curArrayState.slice();
      updateCurArrayState(startIndex, sortedArr);
      animationArr.push(mergeAddToObject(startIndex, sortedArr.length, pastArrState));
      return sortedArr;
    }
  
    function mergeAddToObject(startRange, rangeLength, pastArr) {
      let animationObj = {};
      let range = [];
      let counter = 0;
  
      while (counter < rangeLength) {
        range.push(startRange);
        startRange += 1;
        counter += 1;
      }
  
      animationObj.range = range;
      animationObj.pastArrState = pastArr;
      animationObj.newArrState = curArrayState.slice();
      return animationObj;
    }
  
    function updateCurArrayState(startIndex, subArr) {
      for (let i = 0; i < subArr.length; i++) {
        curArrayState[startIndex + i] = subArr[i];
      }
    }
  
    function getStartIndex(arr1, arr2) {
      let combinedArr = combineArrays(arr1, arr2);
      let startIndex = curArrayState.indexOf(combinedArr[0]);
      return startIndex;
    }
  
    function combineArrays(arr1, arr2) {
      if (arr1 && arr2) {
        return arr1.concat(arr2);
      }
      return arr1;
    }
    mergeSort(arr);
    return animationArr;
  }
}