import React from 'react';

import styles from './Header.module.scss';

import Button from '../button/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Button type="outlined">sign in</Button>
        <Button type="filled">sign up</Button>
      </nav>
    </header>
  );
};

export default Header;
