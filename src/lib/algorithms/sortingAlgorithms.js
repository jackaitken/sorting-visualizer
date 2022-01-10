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
  
    for (let i = 0; i < currentlyUnsorted; i++) {
      for (let j = 0; j < currentlyUnsorted; j++) {
        let animationObj = {};
        animationObj.startState = [j, j + 1];

        if (array[j] > array[j + 1]) {
            let tmp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tmp;
            animationObj.swap = true;
          } else {
            animationObj.swap = false;
          }
          animationArr.push(animationObj);
        }
    }
    return animationArr;
  }

  static quicksort() {
    // STUB
  }

  static insertionSort() {
    // STUB
  }

  static mergeSort() {
    // STUB
  }
}

module.exports = { SortingAlgorithms };