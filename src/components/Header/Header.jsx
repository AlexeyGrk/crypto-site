import React from 'react';
import {ReactComponent as Logo} from "../../assets/Logo3.svg";
import {ReactComponent as HeaderIllustration} from "../../assets/Illustration.svg";
import {ReactComponent as ArrowRight} from "../../assets/Arrow-Right.svg";
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <NavLink
          to="/"

        >
          <Logo className={styles.headerLogo}/>
        </NavLink>

        {/*<div className='navigation-container'>*/}
        <nav className={styles.navigationSector}>
          <ul className={styles.navigationList}>
            <li className={styles.navigationListItem}>
              <NavLink
                className={`link ${styles.navigationLink}`}
                to="products"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : undefined
                // }
              >
                Products
              </NavLink>


            </li>
            <li className={styles.navigationListItem}>
              <NavLink
                className={`link ${styles.navigationLink}`}
                to="features"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : undefined
                // }
              >
                Features
              </NavLink>
            </li>
            <li className={styles.navigationListItem}>
              <NavLink
                className={`link ${styles.navigationLink}`}
                to="about"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : undefined
                // }
              >
                About
              </NavLink>
            </li>
            <li className={styles.navigationListItem}>
              <NavLink
                className={`link ${styles.navigationLink}`}
                to="contact"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : undefined
                // }
              >
                Contact
              </NavLink>
            </li>

          </ul>
          <div className={styles.navButtonsContainer}>
            <button className={styles.loginButton}>
              Login
            </button>
            <hr className={styles.verticalLine}/>
            <button className={styles.registerButton}>
              Register
            </button>
          </div>



        </nav>

      </div>
      <div className={styles.mainInfoContainer}>
        <div className={styles.mainInfoTextContainer}>
          <p className={styles.mainInfoDiscountText}><span className={styles.mainInfoDiscountSecondaryText}>75% SAVE</span> For the Black Friday weekend</p>
          <h1 className={styles.mainInfoTitle}>Fastest & secure platform to invest in crypto</h1>
          <p className={styles.mainInfoSecondaryText}>Buy and sell cryptocurrencies, trusted by 10M wallets <br/> with over $30 billion in transactions.</p>
          <button className={styles.freeButton}>
            Try for FREE <ArrowRight className={styles.arrowRight}/>
          </button>
        </div>
        <HeaderIllustration className={styles.mainInfoImage}  />
      </div>



    </header>
  );
};



export default Header;
