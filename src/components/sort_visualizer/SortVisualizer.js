import React, { useState, useEffect } from 'react';
import { getRandomArray } from '../../lib/algorithmVisualizationHelpers/getRandomArray';
import ArrayRepresentation from '../main/ArrayRepresentation';
import SetNewArrayButton from '../nav/SetNewArrayButton';
import Navigation from '../nav/Navigation';
import SortSpeedSlider from '../main/SortSpeedSlider';
import ChangeArraySizeSlider from '../main/ChangeArraySizeSlider';
import ArrayContext from '../ArrayContext';
import styles from '../../styles/AppStyles.module.css';

function SortVisualizer() {
  const [ arraySize, setArraySize ] = useState(50);
  const [ array, setArray ] = useState(getRandomArray(arraySize));
  const [ sortSpeed, setSortSpeed ] = useState('50');
  const [ buttonsDisabled, setButtonsDisabled ] = useState(false);
  const [ algorithmSelected, setAlgorithmSelected ] = useState(false);

  let settings = {
    array: array,
    sortSpeed: sortSpeed,
    buttons: [ buttonsDisabled, setButtonsDisabled ],
    algorithm: [ algorithmSelected, setAlgorithmSelected ],
  }
  
  function handleSetNewArray() {
    setArray(getRandomArray(arraySize));
    setButtonsDisabled(false);
    setAlgorithmSelected(false);
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

  return (
    <>
      <nav>
        <ArrayContext.Provider value={settings}>
          <Navigation />
        </ArrayContext.Provider>
        <ul>
          <li><SetNewArrayButton handleClick={handleSetNewArray}/></li>
        </ul>
      </nav>
      <hr/>
      <div className={styles.buttonWrapper}>
        <SortSpeedSlider handleChange={setSortSpeed} disabled={buttonsDisabled}/>
        <ChangeArraySizeSlider handleChange={setArraySize} disabled={buttonsDisabled}/>
      </div>      
      <div>
        <ArrayRepresentation array={array} />
      </div>
      <div className={styles.algorithmInfo}>
        {algorithmSelected  ? 
        algorithmSelected : ''
        }
      </div>
    </>
  );
}

export default SortVisualizer;