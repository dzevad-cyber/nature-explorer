import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, type, icon }) => {
  const click = e => {
    console.log(e);
  };

  return (
    <button onClick={click} className={styles[`button__${type}`]}>
      <div>{icon}</div>
      {children}
    </button>
  );
};

export default Button;
