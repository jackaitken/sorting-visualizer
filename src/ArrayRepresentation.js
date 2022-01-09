import React, { useState } from 'react';
import styles from './styles/ArrayRepresentation.module.css';

function ArrayRepresentation(props) {
  let listItems = props.array.map((num, idx) =>
    <div
    className={styles.arrayBar}
    style={{height: `${num * 5}px`}}
    key={idx}>
    </div>
  );

  return (
    <div className={styles.arrayBarWrapper}>
      <div>{listItems}</div>
    </div>
  );
}

export default ArrayRepresentation;