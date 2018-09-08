import React from 'react'
import { Link } from "react-router-dom";

import styles from './Header.sass'
import layout from 'Sass/partials/_layout.sass'
import icon from 'Assets/images/react-icon.png'

const Header = (props) => {
  return (
    <div className={styles.nav}>
      <div className={layout.box}>
        <div className={styles.navHeader}>
          <div className={styles.navTitle}>
            <a className={styles.navBrand} href="#/">
              <img alt='React' src={icon} width="50" />
              <span>{props.appName}</span>
            </a>
          </div>
        </div>
        <div className={styles.navBtn}>
          <label htmlFor="navCheck">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type="checkbox" id="navCheck"/>
        <div className={styles.navLinks}>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/error">Error</Link>
        </div>
      </div>
    </div>
  );
}
export default Header