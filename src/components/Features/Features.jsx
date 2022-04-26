import React from 'react';
import {ReactComponent as BitcoinChart} from "../../assets/ChartBitcoin.svg";
import {ReactComponent as StaticChart} from "../../assets/StatisticChart.svg";
import styles from './Features.module.scss'


const Features = (props) => {
  return (
    <div className={styles.bgContainer}>

     <div className={'container'}>
       <h2 className={styles.featuresMainTitle}>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
       <div className={styles.featuresBitcoinInfoContainer}>
         <div className={styles.featuresBitcoinInfoTextContainer}>
           <h3 className={styles.featuresBitcoinTitle}>Invest Smart</h3>
           <span className={styles.featuresBitcoinSecondaryText}>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </span>
           <button className={styles.featuresBitcoinLearnMoreButton}>
              Learn More
           </button>

         </div>
         <BitcoinChart/>

       </div>
       <div className={styles.featuresStatisticInfoContainer}>
         <StaticChart/>
         <div className={styles.featuresBitcoinInfoTextContainer}>
           <h3 className={styles.featuresBitcoinTitle}>Detailed Statistics</h3>
           <span className={styles.featuresBitcoinSecondaryText}>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in. </span>
           <button className={styles.featuresBitcoinLearnMoreButton}>
             Learn More
           </button>

         </div>


       </div>


     </div>

    </div>
  );
};



export default Features;
