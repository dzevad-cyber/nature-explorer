import React from 'react';

import styles from './Header.module.scss';

import logo from '../../assets/icons/logo-white.png';

import Button from '../button/Button';
import Img from '../img/Img';
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Img src={logo} alt="logo" />
      </div>
      <Nav className={styles.header_nav}>
        <Button btnStyle="text">sign in</Button>
        <Button btnStyle="contained">sign up</Button>
        <Button to="/signup" isLink="true" btnStyle="contained">
          sign up
        </Button>
      </Nav>
    </header>
  );
};

export default Header;
