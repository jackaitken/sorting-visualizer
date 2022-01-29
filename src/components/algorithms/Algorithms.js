import React, { useState, useEffect, useContext } from 'react';
import { SortingAlgorithms } from '../../lib/algorithms/sortingAlgorithms';
import MergeSortButton from '../algorithms/MergeSortButton';
import InsertionSortButton from '../algorithms/InsertionSortButton';
import QuicksortButton from '../algorithms/QuicksortButton';
import BubbleSortButton from '../algorithms/BubbleSortButton';
import ArrayContext from '../ArrayContext';

function Algorithms() {
  const { array, sortSpeed, buttons } = useContext(ArrayContext);

  const [ childButtonsDisabled, setChildButtonsDisabled ] = buttons;
  const [ quicksortAnimation, setQuicksortAnimation ] = useState();
  const [ bubbleAnimation, setBubbleAnimation ] = useState();
  const [ insertionSortAnimation, setInsertionSortAnimation ] = useState();
  const [ mergeSortAnimation, setMergeSortAnimation ] = useState();
  const [ animationFinished, setAnimationFinished ] = useState(false);

  function handleMergeSortAnimation(sortAlgorithm) {
    setChildButtonsDisabled(true);
    setMergeSortAnimation(sortAlgorithm([...array]));
  }

  function handleInsertionSortAnimation(sortAlgorithm) {
    setChildButtonsDisabled(true);
    setInsertionSortAnimation(sortAlgorithm([...array]));
  }
  
  function handleQuicksortAnimation(sortAlgorithm) {
    setChildButtonsDisabled(true);
    setQuicksortAnimation(sortAlgorithm([...array]));
  }
  
  function handleBubbleSortAnimation(sortAlgorithm) { 
    setChildButtonsDisabled(true);
    setBubbleAnimation(sortAlgorithm([...array]));
  }

  useEffect(() => {
    const END_OF_NUM = 'p';
    for (let i = 0; i < array.length; i++) {
      let barHeight = document.getElementById(`arrayBar${i}`).style.height;
      barHeight = barHeight.slice(0, barHeight.indexOf(END_OF_NUM)); 
      document.getElementById(`arrayBar${i}`).setAttribute('data-tooltip', barHeight);
    }
  }, [animationFinished])

  useEffect(() => {
    if (mergeSortAnimation) {
      for (let i = 0; i < mergeSortAnimation.length; i++) {
        let range = mergeSortAnimation[i].range;
        let newArr = mergeSortAnimation[i].newArrState;

        setTimeout(() => {
          for (let i = 0; i < range.length; i++) {
            let barStyle = document.getElementById(`arrayBar${range[i]}`).style;
            barStyle.background = 'red';
          }
        }, i * sortSpeed);

        setTimeout(() => {
          for (let i = 0; i < range.length; i++) {
            setAnimationFinished(false);
            let newBarHeight = document.getElementById(`arrayBar${range[i]}`).style;
            newBarHeight.height = `${newArr[range[i]]}px`;
            setAnimationFinished(true);
          }
        }, (i + 1) * sortSpeed);
      }
    }
  }, [mergeSortAnimation]);

  useEffect(() => {
    if (insertionSortAnimation) {
      for (let i = 0; i < insertionSortAnimation.length; i++) {
        let tempIndex = insertionSortAnimation[i].temp;
        let curIndex = insertionSortAnimation[i].curIndex;
        
        let tempIndexStyle = document.getElementById(`arrayBar${tempIndex}`).style;
        let curIndexStyle = document.getElementById(`arrayBar${curIndex}`).style;

        setTimeout(() => {
          if (insertionSortAnimation[i].curIndexShift) {
            tempIndexStyle.background = 'blue';
            curIndexStyle.background = 'red';
          } else {
            tempIndexStyle.background = 'red';
            curIndexStyle.background = 'blue';
          }
        }, i * sortSpeed);

        setTimeout(() => {
          setAnimationFinished(false);
          if (insertionSortAnimation[i].curIndexShift) {
            [ curIndexStyle.height, tempIndexStyle.height ] = 
              [ tempIndexStyle.height, curIndexStyle.height ];
          }
          curIndexStyle.background = 'black';
          tempIndexStyle.background = 'black';
          setAnimationFinished(true);
        }, (i + 1) * sortSpeed);

        setTimeout(() => {
          array.forEach((_, idx) => {
            let bar = document.getElementById(`arrayBar${idx}`);
            if (bar.style.background !== 'orange') {
              bar.style.background = 'orange';
            }
          });
        }, (insertionSortAnimation.length + 1) * sortSpeed);
      }
    }
  }, [insertionSortAnimation]);

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
          setAnimationFinished(false);
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
          setAnimationFinished(true);
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
          secondBarStyle.background = 'blue';
        }, i * sortSpeed);

        setTimeout(() => {
          setAnimationFinished(false);
          if (bubbleAnimation[i].swap) {
            [ firstBarStyle.height, secondBarStyle.height ] = [ secondBarStyle.height, firstBarStyle.height ];
          }
          firstBarStyle.background = 'black';
          secondBarStyle.background = 'black';

          if (bubbleAnimation[i].sorted) {
            secondBarStyle.background = 'orange';
          }
          setAnimationFinished(true);
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
    <ul>
      <li><MergeSortButton handleClick={() => handleMergeSortAnimation(SortingAlgorithms.mergeSortWrapper)} disabled={childButtonsDisabled} /></li>
      <li><InsertionSortButton handleClick={() => handleInsertionSortAnimation(SortingAlgorithms.insertionSortWrapper)} disabled={childButtonsDisabled} /></li>
      <li><QuicksortButton handleClick={() => handleQuicksortAnimation(SortingAlgorithms.quicksortWrapper)} disabled={childButtonsDisabled} /></li>
      <li><BubbleSortButton handleClick={() => handleBubbleSortAnimation(SortingAlgorithms.bubbleSort)} disabled={childButtonsDisabled} /></li>
    </ul>
  );
}

export default Algorithms;