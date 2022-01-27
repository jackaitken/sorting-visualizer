import React from 'react';
import styles from './styles/ArrayRepresentation.module.css';

function ArrayRepresentation(props) {
  let listItems = props.array.map((num, idx) => 
    <>
      <div
      className={styles.arrayBar}
      style={{height: `${num}px`}}
      key={idx}
      id={`arrayBar${idx}`}
      data-tooltip={num}
      >
      </div>
    </>
  );

  return (
    <div className={styles.arrayBarWrapper}>
      <div>{listItems}</div>
    </div>
  );
}

export default ArrayRepresentation;