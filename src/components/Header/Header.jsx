import React, {useState} from 'react';
import {ReactComponent as Logo} from "../../assets/Logo3.svg";
import {ReactComponent as HeaderIllustration} from "../../assets/Illustration.svg";
import {ReactComponent as ArrowRight} from "../../assets/Arrow-Right.svg";
// import {ReactComponent as HeaderPanell} from "../../assets/headerPanelIcon.svg";
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {
  const [isShow,setIsShow] = useState(true)
  return (
    <header className={'container'}>

      {/*<HeaderPanell className={styles.headerPanelBg}/>*/}
      {/*<HeaderPanell className={styles.headerPanelBgRight}/>*/}
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
              <a
                className={`link ${styles.navigationLink}`}
                href="#product"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : undefined
                // }
              >
                Products
              </a>


            </li>
            <li className={styles.navigationListItem}>
              <a
                className={`link ${styles.navigationLink}`}
                href="#features"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : undefined
                // }
              >
                Features
              </a>
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
              <a
                className={`link ${styles.navigationLink}`}
                href="#contact"
                // style={({ isActive }) =>
                //   isActive ? activeStyle : undefined
                // }
              >
                Contact
              </a>
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
          <div className={styles.navigationBurgerSector}>
            <input id="toggle" type="checkbox"></input>

            <label htmlFor="toggle" className="hamburger">
              <div className="top-bun"></div>
              <div className="meat"></div>
              <div className="bottom-bun"></div>
            </label>

            <div className="nav">
              <div className="nav-wrapper">
                <nav>
                  <a className="nav-wrapper-link" href="#">HOME</a><br/>
                  <a className="nav-wrapper-link" href="#">ABOUT</a><br/>
                  <a className="nav-wrapper-link" href="#">WORK</a><br/>
                  <a className="nav-wrapper-link" href="#">SERVICES</a>
                </nav>
              </div>
            </div>
          </div>


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
