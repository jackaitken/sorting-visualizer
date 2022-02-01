import React, { useState, useEffect } from 'react';
import { getRandomArray } from '../../lib/algorithmVisualizationHelpers/getRandomArray';
import ArrayRepresentation from '../main/ArrayRepresentation';
import SetNewArrayButton from '../nav/SetNewArrayButton';
import Navigation from '../nav/Navigation';
import CaseStudy from '../case_study/CaseStudy';
import SortSpeedSlider from '../main/SortSpeedSlider';
import Footer from '../footer/Footer';
import ChangeArraySizeSlider from '../main/ChangeArraySizeSlider';
import ArrayContext from '../ArrayContext';
import styles from '../../styles/AppStyles.module.css';

function SortVisualizer() {
  const [ arraySize, setArraySize ] = useState(50);
  const [ array, setArray ] = useState(getRandomArray(arraySize));
  const [ sortSpeed, setSortSpeed ] = useState('50');
  const [ algorithmButtonsDisabled, setAlgorithmButtonsDisabled ] = useState(false);
  const [ arrayButtonDisabled, setArrayButtonDisabled ] = useState(false);
  const [ algorithmSelected, setAlgorithmSelected ] = useState(false);

  let context = {
    array: array,
    sortSpeed: sortSpeed,
    algoButtons: [ algorithmButtonsDisabled, setAlgorithmButtonsDisabled ],
    arrayButton: setArrayButtonDisabled,
    algorithm: setAlgorithmSelected,
  }
  
  function handleSetNewArray() {
    setArray(getRandomArray(arraySize));
    setAlgorithmButtonsDisabled(false);
    setAlgorithmSelected(false);
  }

  useEffect(() => {
    setAlgorithmButtonsDisabled(false);
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
        <ArrayContext.Provider value={context}>
          <Navigation />
        </ArrayContext.Provider>
        <ul>
          <li><SetNewArrayButton handleClick={handleSetNewArray} disabled={arrayButtonDisabled}/></li>
        </ul>
      </nav>
      <hr/>
      <div className={styles.buttonWrapper}>
        <SortSpeedSlider handleChange={setSortSpeed} disabled={algorithmButtonsDisabled}/>
        <ChangeArraySizeSlider handleChange={setArraySize} disabled={algorithmButtonsDisabled}/>
      </div>      
      <div>
        <ArrayRepresentation array={array} />
      </div>
      <div className={styles.algorithmInfo}>
        {algorithmSelected  || <CaseStudy/>}
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default SortVisualizer;