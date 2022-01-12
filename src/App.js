import React, { useState, useEffect, useRef } from 'react';
import { getRandomArray } from './lib/getRandomArray'
import ArrayRepresentation from './ArrayRepresentation';
import SetNewArrayButton from './SetNewArrayButton';
import BubbleSortButton from './BubbleSortButton';
import QuicksortButton from './QuicksortButton';
import SortSpeedSlider from './SortSpeedSlider';
import ChangeArraySizeSlide from './ChangeArraySizeSlider';
import { SortingAlgorithms } from './lib/algorithms/sortingAlgorithms';
import styles from './styles/AppStyles.module.css';
import { compareSort } from './lib/algorithms/testSort';

function App() {
  const [ arraySize, setArraySize ] = useState(50);
  const [ array, setArray ] = useState(getRandomArray(arraySize));
  const [ quicksortAnimation, setQuicksortAnimation ] = useState();
  const [ bubbleAnimation, setBubbleAnimation ] = useState();
  const [ sortSpeed, setSortSpeed ] = useState('50');
  const [ buttonsDisabled, setButtonsDisabled ] = useState(false);

  function handleSetNewArray() {
    setArray(getRandomArray(arraySize));
    setButtonsDisabled(false);
  }

  function handleBubbleSortAnimation(sortAlgorithm) { 
    setButtonsDisabled(true);
    setBubbleAnimation(sortAlgorithm([...array]));
  }

  function handleQuicksortAnimation(sortAlgorithm) {
    setButtonsDisabled(true);
    setQuicksortAnimation(sortAlgorithm([...array]));
  }

  useEffect(() => {
    setButtonsDisabled(false);
    setArray(getRandomArray(arraySize));
  }, [arraySize]);

  useEffect(() => {
    document.getElementsByClassName(styles.algoButton).disabled = false;
    array.forEach((_, index) => {
      document.getElementById(`arrayBar${index}`).style.background = 'black';
    });
  }, [array]);

  useEffect(() => {
    if (quicksortAnimation) {
      for (let i = 0; i < quicksortAnimation.length; i++) {
        let leftBar = quicksortAnimation[i].left;
        let rightBar = quicksortAnimation[i].right;
        let pivotBar = quicksortAnimation[i].pivot;

        let leftBarStyle = document.getElementById(`arrayBar${leftBar}`).style;
        let rightBarStyle = document.getElementById(`arrayBar${rightBar}`).style;
        let pivotBarStyle  = document.getElementById(`arrayBar${pivotBar}`).style;

        setTimeout(() => {
          leftBarStyle.background = 'red';
          rightBarStyle.background = 'red';
          pivotBarStyle.background = 'blue';
        }, i * sortSpeed);

        setTimeout(() => {
          if (quicksortAnimation[i].swapLeftRight) {
            [ leftBarStyle.height, rightBarStyle.height ] = [ rightBarStyle.height, leftBarStyle.height ];
          } else if (quicksortAnimation[i].swapLeftPivot) {
            [ leftBarStyle.height, pivotBarStyle.height ] = [ pivotBarStyle.height, leftBarStyle.height ];
            
            pivotBarStyle.background = 'black';
            leftBarStyle.background = 'orange';
          }

          if (leftBarStyle.background !== 'orange') {
            leftBarStyle.background = 'black';
          }
          rightBarStyle.background = 'black';
        }, (i + 1) * sortSpeed);

        setTimeout(() => {
          array.forEach((_, idx) => {
            let bar = document.getElementById(`arrayBar${idx}`);
            if (bar.style.background !== 'orange') {
              bar.style.background = 'orange';
            }
          });
        }, (quicksortAnimation.length + 1) * sortSpeed);
      }
      clearTimeout();
    }
  }, [quicksortAnimation]);

  useEffect(() => {
    if (bubbleAnimation) {     
      for (let i = 0; i < bubbleAnimation.length; i++) {
        let [ indexOne, indexTwo ] = bubbleAnimation[i].startState;
        let firstBarStyle = document.getElementById(`arrayBar${indexOne}`).style;
        let secondBarStyle = document.getElementById(`arrayBar${indexTwo}`).style;

        setTimeout(() => {  
          firstBarStyle.background = 'red';
          secondBarStyle.background = 'red';
        }, i * sortSpeed);

        setTimeout(() => {
          if (bubbleAnimation[i].swap) {
            [ firstBarStyle.height, secondBarStyle.height ] = [ secondBarStyle.height, firstBarStyle.height ];
          }
          firstBarStyle.background = 'black';
          secondBarStyle.background = 'black';

          if (bubbleAnimation[i].sorted) {
            secondBarStyle.background = 'orange';
          }
        }, (i + 1) * sortSpeed);

        setTimeout(() => {
          array.forEach((_, idx) => {
            let bar = document.getElementById(`arrayBar${idx}`);
            if (bar.style.background !== 'orange') {
              bar.style.background = 'orange';
            }
          });
        }, (bubbleAnimation.length + 1) * sortSpeed);
      }
    }
  }, [bubbleAnimation]);

  return (
    <>
      <div className={styles.buttonWrapper}>
        <SetNewArrayButton handleClick={handleSetNewArray}/>
        <BubbleSortButton handleClick={() => handleBubbleSortAnimation(SortingAlgorithms.bubbleSort)} disabled={buttonsDisabled} />
        <QuicksortButton handleClick={() => handleQuicksortAnimation(SortingAlgorithms.quicksortWrapper)} disabled={buttonsDisabled} />
        <SortSpeedSlider handleChange={setSortSpeed}/>
        <ChangeArraySizeSlide handleChange={setArraySize} />
      </div>      
      <div>
        <ArrayRepresentation array={array} />
      </div>
    </>
  );
}

export default App;