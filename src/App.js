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
    if (animationIsSet.current) {
      for (let i = 0; i < animationArr.length; i++) {
        setTimeout(() => {
          let [ indexOne, indexTwo ] = animationArr[i].startState;
          let firstBarStyle = document.getElementById(`arrayBar${indexOne}`).style;
          let secondBarStyle = document.getElementById(`arrayBar${indexTwo}`).style;

          firstBarStyle.background = 'red';
          secondBarStyle.background = 'red';

          if (animationArr[i].swap) {
            let tempHeight = firstBarStyle.height
            firstBarStyle.height = secondBarStyle.height
            secondBarStyle.height = tempHeight;
          }

          firstBarStyle.background = 'black';
        }, i * 10);
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