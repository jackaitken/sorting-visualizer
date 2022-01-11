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

  static quicksort() {
    // STUB
  }

  static mergeSort() {
    // STUB
  }
  static insertionSort() {
    // STUB
  }

}

module.exports = { SortingAlgorithms };