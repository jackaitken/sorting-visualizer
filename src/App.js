import React, { useState, useEffect, useRef } from 'react';
import { getRandomArray } from './lib/getRandomArray'
import ArrayRepresentation from './ArrayRepresentation';
import SetNewArrayButton from './SetNewArrayButton';
import BubbleSortButton from './BubbleSortButton';
import { SortingAlgorithms } from './lib/algorithms/sortingAlgorithms';
import styles from './styles/AppStyles.module.css';
import { compareSort } from './lib/algorithms/testSort';

function App() {
  const [ array, setArray ] = useState(getRandomArray());
  const [ animationArr, setAnimationArr ] = useState();
  // const [ algorithm, setAlgorithm ] = useState(SortingAlgorithms.algorithms['bubble']);
  const animationIsSet = useRef(false);

  function handleBubbleSortAnimation(sortAlgorithm) { 
    setAnimationArr(sortAlgorithm([...array]));
  }

  useEffect(() => {
    array.forEach((_, index) => {
      document.getElementById(`arrayBar${index}`).style.background = 'black';
    });
  }, [array]);

  useEffect(() => {
    if (animationIsSet.current) {      
      for (let i = 0; i < animationArr.length; i++) {
        let [ indexOne, indexTwo ] = animationArr[i].startState;
        let firstBarStyle = document.getElementById(`arrayBar${indexOne}`).style;
        let secondBarStyle = document.getElementById(`arrayBar${indexTwo}`).style;

        setTimeout(() => {  
          firstBarStyle.background = 'red';
          secondBarStyle.background = 'red';
        }, i * 3);

        setTimeout(() => {
          if (animationArr[i].swap) {
            [ firstBarStyle.height, secondBarStyle.height ] = [ secondBarStyle.height, firstBarStyle.height ];
          }
          firstBarStyle.background = 'black';
          secondBarStyle.background = 'black';
        }, (i + 1) * 3);
      }
    } else {
      animationIsSet.current = true;
    }
  }, [animationArr]);

  return (
    <>
      <div className={styles.buttonWrapper}>
        <SetNewArrayButton handleClick={() => setArray(getRandomArray())}/>
        <BubbleSortButton handleClick={() => handleBubbleSortAnimation(SortingAlgorithms.bubbleSort)} />
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
*/