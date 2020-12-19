import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const Button = ({ children, type, btnStyle, icon, to, isLink }) => {
  return (
    <>
      {isLink ? (
        <Link to="/signup" className={styles[`button__${btnStyle}`]}>
          {children}
        </Link>
      ) : (
        <button type={type} className={styles[`button__${btnStyle}`]}>
          <div className={styles.button__icon}>{icon}</div>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
