import React from 'react';
import {ReactComponent as BitcoinIcon} from "../../assets/bitcoin-icon.svg";
import {ReactComponent as EthCoin} from "../../assets/eth-icon.svg";
import {ReactComponent as LiteCoin} from "../../assets/lite-icon.svg";
import {ReactComponent as ArrowBtn} from "../../assets/Arrow-RightButton.svg";
import styles from './TradeSecurely.module.scss'

const TradeSecurely = () => {
  return (
    <div className={styles.tradeSecurely}>
      <div className={'container'}>
        <div className={styles.tradeSecurelyCalculator}>
          <input className={styles.tradeSecurelyCalculatorInput} placeholder={'Enter your hash rate'} type={"text"}/>
          <input className={styles.tradeSecurelyCalculatorInputHash} placeholder={'TH/s'} type={"text"}/>
          <button className={styles.tradeSecurelyCalculatorButton}> Calculate</button>
          <div className={styles.tradeSecurelyEstimatedSecondaryInfo}>
            <span className={styles.tradeSecurelyEstimatedText}>ESTIMATED 24 HOUR REVENUE:</span>
            <p className={styles.tradeSecurelyETHText}> 0.055 130 59 ETH <span className={styles.tradeSecurelyETHTextNumber}>($1275)</span> </p>
            <span className={styles.tradeSecurelySubText}>Revenue will change based on mining difficulty and Ethereum price.</span>

          </div>
        </div>
        <div className={styles.tradeSecurelyMainSection}>
          <h2 className={styles.tradeSecurelyMainSectionTitle}>Trade securely and market the high <br/> growth cryptocurrencies.</h2>
          <div className={styles.tradeSecurelyMainSectionCardsContainer}>
            <ul className={styles.tradeSecurelyMainSectionCardsList}>
              <li className={styles.tradeSecurelyMainSectionCardsListItem}>
              <BitcoinIcon className={styles.tradeSecurelyMainSectionCardImage}/>
                <div className={styles.tradeSecurelyMainSectionCardTitlesContainer}>
                  <h3 className={styles.tradeSecurelyMainSectionCardTitle}>Bitcoin</h3>
                  <span className={styles.tradeSecurelyMainSectionCardAbbr}>BTC</span>
                </div>
                <span className={styles.tradeSecurelyMainSectionCardInfo}>
                  Digital currency in which a record of transactions is maintained.
                </span>
                <span className={styles.tradeSecurelyMainSectionCardArrowButtonContainer}>
                  <ArrowBtn/>
                </span>
              </li>
              <li className={styles.tradeSecurelyMainSectionCardsListItem}>
                <EthCoin className={styles.tradeSecurelyMainSectionCardImage}/>
                <div className={styles.tradeSecurelyMainSectionCardTitlesContainer}>
                  <h3 className={styles.tradeSecurelyMainSectionCardTitle}>Ethereum</h3>
                  <span className={styles.tradeSecurelyMainSectionCardAbbr}>ETH</span>
                </div>
                <span className={styles.tradeSecurelyMainSectionCardInfo}>
                 Blockchain technology to create and run decentralized digital applications.
                </span>
                <span className={styles.tradeSecurelyMainSectionCardArrowButtonContainer}>
                  <ArrowBtn/>
                </span>

              </li>
              <li className={styles.tradeSecurelyMainSectionCardsListItem}>
                <LiteCoin className={styles.tradeSecurelyMainSectionCardImage}/>
                <div className={styles.tradeSecurelyMainSectionCardTitlesContainer}>
                  <h3 className={styles.tradeSecurelyMainSectionCardTitle}>Litecoin</h3>
                  <span className={styles.tradeSecurelyMainSectionCardAbbr}>LTC</span>
                </div>
                <span className={styles.tradeSecurelyMainSectionCardInfo}>
                 Cryptocurrency that enables instant payments to anyone in the world.
                </span>
                <span className={styles.tradeSecurelyMainSectionCardArrowButtonContainer}>
                  <ArrowBtn/>
                </span>

              </li>
            </ul>
          </div>
          <div>
          </div>
        </div>

      </div>
    </div>

  );
};


export default TradeSecurely;
