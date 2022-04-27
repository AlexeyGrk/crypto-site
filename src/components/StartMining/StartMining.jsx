import React from 'react';
import styles from './StartMining.module.scss'

const StartMining = (props) => {
  return (
    <div className={styles.bgStartMining}>
     <div className={'container'}>
      <div className={styles.blueBlock}>
        <h1>Start mining now</h1>

      </div>

     </div>
    </div>
  );
};



export default StartMining;
