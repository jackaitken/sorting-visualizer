class SortingAlgorithms {
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
  static insertionSort() {
    // STUB
  }

}

module.exports = { SortingAlgorithms };