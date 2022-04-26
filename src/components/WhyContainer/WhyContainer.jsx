import React from 'react';
import styles from './WhyContainer.module.scss'
import {ReactComponent as ChartIcon} from "../../assets/IconChart.svg";
import {ReactComponent as PersonalIcon} from "../../assets/IconPersonal.svg";
import {ReactComponent as EarthIcon} from "../../assets/IconEarth.svg";
import {ReactComponent as SecondaryIllustration} from "../../assets/Illustrations2.svg";


const WhyWeComponent = (props) => {
  return (
    <>
    <div className={styles.whyWeComponentContainer}>
     <div className={styles.statisticContainer}>
       <div  className={styles.statisticElement}>
         <div className={styles.statisticElementImageContainer} >
           <ChartIcon/>
         </div>
         <div className={styles.statisticTextContainer}>
           <h2 className={styles.statisticMainText}>$30B</h2>
           <p className={styles.statisticSecondaryText}>Digital Currency Exchanged</p>
         </div>
       </div>
       <div  className={styles.statisticElement}>
         <div className={styles.statisticElementImageContainer} >
           <PersonalIcon/>
         </div>
         <div className={styles.statisticTextContainer}>
           <h2 className={styles.statisticMainText}>10M+</h2>
           <p className={styles.statisticSecondaryText}>Trusted Wallets Investor</p>
         </div>
       </div>
       <div  className={styles.statisticElement}>
         <div className={styles.statisticElementImageContainer} >
           <EarthIcon/>
         </div>
         <div className={styles.statisticTextContainer}>
           <h2 className={styles.statisticMainText}>195</h2>
           <p className={styles.statisticSecondaryText}>Countries Supported</p>
         </div>
       </div>
     </div>
      <div className={styles.whyWeComponentMainInfoContainer}>
        <div  className={styles.whyWeComponentMainImageContainer}>
          <SecondaryIllustration className={styles.whyWeComponentMainImage}/>
        </div>
        <div className={styles.whyWeComponentMainTextContainer}>
          <h2 className={styles.whyWeComponentMainTextTitle}>Why you should choose CRAPPO</h2>
          <p className={styles.whyWeComponentSecondaryText}>Experience the next generation cryptocurrency <br/> platform. No financial borders, extra fees, and fake reviews.</p>
          <button className={styles.whyWeComponentLearnMoreButton}>Learn more</button>
        </div>


      </div>
    </div>
      <div className={styles.whyWeComponentEarnSection}>
        <h2 className={styles.whyWeComponentMainTextTitle}>Check how much you can earn</h2>
        <p className={styles.whyWeComponentSecondaryText}> Let’s check your hash rate to see how much you will earn today, <br/> Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </>
  );
};


export default WhyWeComponent;
