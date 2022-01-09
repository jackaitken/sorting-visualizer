import React, { useState, useEffect } from 'react';
import { getRandomArray } from './lib/getRandomArray'
import ArrayRepresentation from './ArrayRepresentation';
import SetNewArrayButton from './SetNewArrayButton';
import BubbleSortButton from './BubbleSortButton';
import { bubbleSort } from './lib/algorithms/bubbleSort';
import { quicksort } from './lib/algorithms/quicksort';
import { insertionSort } from './lib/algorithms/insertionSort';
import { mergeSort } from './lib/algorithms/mergeSort';
import styles from './styles/AppStyles.module.css';
import { compareSort } from './lib/algorithms/testSort';

function App() {
  const [ array, setArray ] = useState(getRandomArray());

  useEffect(() => {
    console.log('Dom has changed');
  });

  return (
    <>
      <div className={styles.buttonWrapper}>
        <SetNewArrayButton handleClick={() => setArray(getRandomArray())}/>
        <BubbleSortButton handleClick={() => setArray(bubbleSort([...array]))} />
        {/* <button className={styles.algoButton} onClick={() => setArray(bubbleSort(array))}>Bubble Sort</button> */}
        {/* <button className={styles.algoButton} onClick={() => compareSort(array, algorithms['quick'])}>Quicksort</button>
        <button className={styles.algoButton} onClick={() => compareSort(array, algorithms['insertion'])}>Insertion Sort</button>
        <button className={styles.algoButton} onClick={() => compareSort(array, algorithms['merge'])}>Merge Sort</button> */}
      </div>
      <div>
        <ArrayRepresentation array={array} />
      </div>
    </>
  );
}

export default App;


/*
Testing buttons

<button className={styles.algoButton} onClick={() => compareSort(array, algorithms['bubble'])}>Bubble Sort</button>
<button className={styles.algoButton} onClick={() => compareSort(array, algorithms['quick'])}>Quicksort</button>
<button className={styles.algoButton} onClick={() => compareSort(array, algorithms['insertion'])}>Insertion Sort</button>
<button className={styles.algoButton} onClick={() => compareSort(array, algorithms['merge'])}>Merge Sort</button>

  const algorithms = {
    'bubble': bubbleSort,
    'quick': quicksort,
    'insertion': insertionSort,
    'merge': mergeSort,
  }
*/