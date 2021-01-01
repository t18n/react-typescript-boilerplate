import React from 'react';
import { Link } from 'react-router-dom';
import layout from 'src/styles/partials/_layout.sass';
import icon from 'src/assets/images/logo.png';
import { classes } from 'src/utils/common';
import styles from './Header.sass';

export const Header = () => (
  <div className={styles.nav}>
    <div className={classes([layout.box, styles.navInner])}>

      <div className={styles.navHeader}>
        <a className={styles.navBrand} href="#/">
          <img alt="React" src={icon} width="50" />
          <span>import/prefer-default-export</span>
        </a>
      </div>

      <div className={styles.navBtn}>
        <span />
        <span />
        <span />
      </div>
      <input type="checkbox" className={styles.navMenuBtn} id="navMenuBtn" />

      <div className={styles.navLinks}>
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/login">Login</Link>
        <Link className={styles.navLink} to="/error">Error</Link>
      </div>
    </div>
  </div>
);
