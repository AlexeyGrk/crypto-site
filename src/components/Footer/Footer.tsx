import React from 'react';
import styles from './Footer.module.scss'
import {ReactComponent as Logo} from "../../assets/Logo3.svg";
import {ReactComponent as VisaIcon} from "../../assets/Visa.svg";
import {ReactComponent as MasterCardIcon} from "../../assets/Mastercard.svg";
import {ReactComponent as BitcoinIcon} from "../../assets/Bitcoin.svg";
import {ReactComponent as FacebookIcon} from "../../assets/facebookIcon.svg";
import {ReactComponent as InstagramIcon} from "../../assets/instagramIcon.svg";
import {ReactComponent as YoutubeIcon} from "../../assets/youtubeIcon.svg";
import {ReactComponent as TwitterIcon} from "../../assets/twitterIconsvg.svg";
import {ReactComponent as LinkedinIcon} from "../../assets/linkedinIcon.svg";

const Footer = () => {
  return (
    <div id='contact' className={styles.footerBg}>
      <div className={'container'}>
        <div className={styles.footerContainer}>
          <Logo className={styles.footerLogo}/>
          <div className={styles.footerListNavLinks}>
            <p className={styles.footerListNavLinksTitle}>Quick Link</p>
            <ul className={styles.footerListNavLinksList}>
              <li className={styles.footerListNavLinksListItem}>Home</li>
              <li className={styles.footerListNavLinksListItem}>Products</li>
              <li className={styles.footerListNavLinksListItem}>About</li>
              <li className={styles.footerListNavLinksListItem}>Features</li>
              <li className={styles.footerListNavLinksListItem}>Contact</li>
            </ul>
          </div>
          <div className={styles.footerListNavLinks}>
            <p className={styles.footerListNavLinksTitle}>Resources</p>
            <ul className={styles.footerListNavLinksList}>
              <li className={styles.footerListNavLinksListItem}>Download Whitepapper
                </li>
              <li className={styles.footerListNavLinksListItem}>Smart Token</li>
              <li className={styles.footerListNavLinksListItem}>Blockchain Explorer</li>
              <li className={styles.footerListNavLinksListItem}>Crypto API</li>
              <li className={styles.footerListNavLinksListItem}>Interest</li>
            </ul>
          </div>
          <div className={styles.footerPaymentSystemContainer}>
            <p className={styles.footerMainTitle} >We accept following payment systems</p>
            <div className={styles.footerPaymentSystemList}>
              <div className={styles.footerPaymentSystemListItem}>
                <VisaIcon />
              </div>
              <div className={styles.footerPaymantSystemListItem}>
                <MasterCardIcon/>
              </div>
              <div className={styles.footerPaymantSystemListItem}>
                <BitcoinIcon/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialMediaLinksContainer}>
          <p className={styles.stampsTitle}>©2021 CRYPTO. All rights reserved</p>
          <ul className={styles.socialMediaLinksList}>
            <li className={styles.socialMediaLinksListItem}>
              <a href='https://www.facebook.com' target='_blank'  rel="noreferrer">
                <FacebookIcon/>
              </a>

            </li>
            <li className={styles.socialMediaLinksListItem}>
              <a href='https://www.facebook.com' target='_blank'  rel="noreferrer" >
                <InstagramIcon/>
              </a>

            </li>
            <li className={styles.socialMediaLinksListItem}>
              <a href='https://www.facebook.com' target='_blank' rel="noreferrer" >
                <YoutubeIcon/>
              </a>

            </li>
            <li className={styles.socialMediaLinksListItem}>
              <a href='https://www.facebook.com' target='_blank'  rel="noreferrer" >
                <TwitterIcon/>
              </a>

            </li>
            <li className={styles.socialMediaLinksListItem}>
              <a href='https://www.facebook.com' target='_blank'  rel="noreferrer" >
                <LinkedinIcon/>
              </a>

            </li>
          </ul>

        </div>


      </div>

    </div>
  );
};


export default Footer;
