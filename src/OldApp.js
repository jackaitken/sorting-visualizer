import React, { useState, useEffect } from 'react';
import { getRandomArray } from './lib/algorithmVisualizationHelpers/getRandomArray'
import ArrayRepresentation from './components/main/ArrayRepresentation';
import SetNewArrayButton from './components/nav/SetNewArrayButton';
import BubbleSortButton from './BubbleSortButton';
import QuicksortButton from './QuicksortButton';
import InsertionSortButton from './InsertionSortButton';
import SortSpeedSlider from './SortSpeedSlider';
import ChangeArraySizeSlide from './components/main/ChangeArraySizeSlider';
import { SortingAlgorithms } from './lib/algorithms/sortingAlgorithms';
import styles from './styles/AppStyles.module.css';
import MergeSortButton from './MergeSortButton';

function App() {
  const [ arraySize, setArraySize ] = useState(50);
  const [ array, setArray ] = useState(getRandomArray(arraySize));
  const [ quicksortAnimation, setQuicksortAnimation ] = useState();
  const [ bubbleAnimation, setBubbleAnimation ] = useState();
  const [ insertionSortAnimation, setInsertionSortAnimation ] = useState();
  const [ mergeSortAnimation, setMergeSortAnimation ] = useState();
  const [ buttonsDisabled, setButtonsDisabled ] = useState(false);
  const [ animationFinished, setAnimationFinished ] = useState(false);

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

  function handleInsertionSortAnimation(sortAlgorithm) {
    setButtonsDisabled(true);
    setInsertionSortAnimation(sortAlgorithm([...array]));
  }

  function handleMergeSortAnimation(sortAlgorithm) {
    setButtonsDisabled(true);
    setMergeSortAnimation(sortAlgorithm([...array]));
  }

  // function getWindowDimensions() {
  //   let { innerWidth: width } = window;
  //   return { width };
  // }

  // function useWindowDimensions() {
  //   const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());
    
  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }
  
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, [arraySize]);
  //   return windowDimensions;
  // }

  // let { width } = useWindowDimensions();
  // console.log(width);

  // if (width < 1205) {
  //   setArraySize(arraySize - (1205 - width));
  //   console.log(arraySize);
  // }

  useEffect(() => {
    const END_OF_HEIGHT = 'p';
    for (let i = 0; i < array.length; i++) {
      let barHeight = document.getElementById(`arrayBar${i}`).style.height;
      barHeight = barHeight.slice(0, barHeight.indexOf(END_OF_HEIGHT)); 
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
          secondBarStyle.background = 'red';
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

  return (
    <>
      <nav>
        <ul>
          <li>
          <h2>Sort Visualizer</h2>
          </li>
        </ul>
        <ul>
          <li><MergeSortButton handleClick={() => handleMergeSortAnimation(SortingAlgorithms.mergeSortWrapper)} disabled={buttonsDisabled} /></li>
          <li><InsertionSortButton handleClick={() => handleInsertionSortAnimation(SortingAlgorithms.insertionSortWrapper)} disabled={buttonsDisabled} /></li>
          <li><QuicksortButton handleClick={() => handleQuicksortAnimation(SortingAlgorithms.quicksortWrapper)} disabled={buttonsDisabled} /></li>
          <li><BubbleSortButton handleClick={() => handleBubbleSortAnimation(SortingAlgorithms.bubbleSort)} disabled={buttonsDisabled} /></li>
        </ul>
        <ul>
          <li><SetNewArrayButton handleClick={handleSetNewArray}/></li>
        </ul>
      </nav>
      <hr/>
      <div className={styles.buttonWrapper}>
        <SortSpeedSlider handleChange={setSortSpeed} disabled={buttonsDisabled}/>
        <ChangeArraySizeSlide handleChange={setArraySize} disabled={buttonsDisabled}/>
      </div>      
      <div>
        <ArrayRepresentation array={array} />
      </div>
    </>
  );
}

export default App;