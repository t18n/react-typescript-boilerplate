import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import layout from 'Sass/partials/_layout.sass';
import icon from 'Assets/images/react-icon.png';
import { classes } from 'Includes/ultilities';
import styles from './Header.sass';

const Header = props => (
  <div className={styles.nav}>
    <div className={classes([layout.box, styles.navInner])}>

      <div className={styles.navHeader}>
        <a className={styles.navBrand} href="#/">
          <img alt="React" src={icon} width="50" />
          <span>{props.appName}</span>
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

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
