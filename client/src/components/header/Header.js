import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logo from '../../assets/icons/logo-white.png';

import Button from '../button/Button';
import Img from '../img/Img';
import Nav from '../nav/Nav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link to="/">
          <Img src={logo} alt="logo" />
        </Link>
      </div>
      <Nav className={styles.header_nav}>
        <Button to="/login" btnStyle="text">
          log in
        </Button>
        <Button to="/signup" btnStyle="contained">
          sign up
        </Button>
      </Nav>
    </header>
  );
};

export default Header;
