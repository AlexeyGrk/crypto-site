import React from 'react';
import styles from './StartMining.module.scss'
import {ReactComponent as Triangle} from "../../assets/VectorTriangle.svg";
import {ReactComponent as BitcoinVector} from "../../assets/BitcoinVector.svg";
// import {ReactComponent as DiagonalVector} from "../../assets/DiagonalLine.svg";

const StartMining = (props) => {
  return (
    <div className={styles.bgStartMining}>

     <div className={'container'}>
      <div className={styles.blueBlock}>
        <div>
          <h3 className={styles.startMiningMainTitle}>Start mining now</h3>
          <Triangle className={styles.startMiningTriangleBg}/>
          <BitcoinVector className={styles.startMiningBitcoinBg}/>

          <p className={styles.startMiningMainText}>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>

          <div className={styles.startMiningMainInputAndBtnContainer}>
            <input className={styles.startMiningMainInput} placeholder={'Enter your email'} type={'email'}/>
            <button className={styles.startMiningSubscribeBtn} >
              Subscribe
            </button>
          </div>


      </div>

     </div>
      {/*<DiagonalVector className={`${styles.diagonalLine}`}/>*/}
      {/*<DiagonalVector className={`${styles.diagonalLineSecondary}`}/>*/}
    </div>
  );
};



export default StartMining;
