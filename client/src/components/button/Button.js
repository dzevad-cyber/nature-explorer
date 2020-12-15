import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, type, btnStyle, icon }) => {
  return (
    <button type={type} className={styles[`button__${btnStyle}`]}>
      <div className={styles.button__icon}>{icon}</div>
      {children}
    </button>
  );
};

export default Button;
