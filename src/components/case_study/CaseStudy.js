import React from 'react';
import styles from '../../styles/AppStyles.module.css'

function CaseStudy() {
  return (
    <div className={styles.caseStudy}>
      <h3 className={styles.caseStudyHeaders}>Sorting Algorithm Visualizer</h3>
      <p>
        Welcome! I built this sorting algorithm visualizer to help
        myself better understand these algorithms, but also help others 
        who want to learn with a visual representation of an array. I hope 
        you enjoy the app and if you find any bugs or have suggestions for 
        improvements please check out the <a href='https://github.com/jackaitken/sorting-visualizer' target='_blank'>Github repository</a>.
      </p>
        <h3 className={styles.caseStudyHeaders}>The Importance of Sorting Algorithms</h3>
        <p>
        Given an array of 100 items, an efficient sorting algorithm would take
        roughly 600 steps. A less efficient algorithm would need 10,000 steps. 
        But imagine if we needed to sort 1,000 items? What about 1,000,000? A quadratic
        algorithm (O(N<sup>2</sup>)) would take 1 trillion steps, while a more efficient
        algorithm, such as a linearithmic algorithm (O N log N), would take just about
        19 million steps. Certainly a large number, but about 52,000 times faster.
        </p>
        <p>
        So it's clear that sorting, and sorting efficiently, is of huge importance to 
        creating software that is fast and scalable. In this app I showcase 4 different
        algorithms, two of which have a time complexity of O(N log N), Merge Sort and Quicksort
        , and two of which have a time complexity of O(N<sup>2</sup>), Bubble Sort and 
        Insertion Sort. 
        </p>
        For each algorithm, I provide some details about how it works, and some general information. 
        Set your array size, desired speed, and select an algorithm to get started.
        <br/>
        <br/>
    </div>
  );
}

export default CaseStudy;