import React from 'react';
import styles from '../../styles/AppStyles.module.css';
import githubLogo from '../../static/images/GitHub-Mark-Light-32px.png';

function Footer() {
  return (
    <div>
      <hr/>
      <p className={styles.footer}>
      Designed and built by Jack Aitken &emsp;
      <a href='https://github.com/jackaitken/sorting-visualizer' target='_blank'><img src={githubLogo}></img></a>
      </p>
    </div>
  );
}

export default Footer;