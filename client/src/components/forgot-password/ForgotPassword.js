import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Button from '../button/Button';

import styles from './ForgotPassword.module.scss';
import opacity from '../../transitions/opacity.module.scss';

const ForgotPassword = ({ handleForgotPassword, onDisplay }) => {
  const [email, setEmail] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <CSSTransition
      in={!onDisplay}
      classNames={opacity}
      timeout={500}
      unmountOnExit
    >
      <section className={styles.forgotPassword}>
        <h3 className={styles.forgotPassword_title}>reset password</h3>
        <span className={styles.forgotPassword_txt}>
          We will send you an email to reset your password.
        </span>

        <form onSubmit={onSubmit} className={styles.forgotPassword_form}>
          <section className={styles.forgotPassword_content}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placehoder="Enter email"
              required
            />
          </section>
          <section className={styles.forgotPassword_submitBox}>
            <Button btnStyle="outlined">Submit</Button>
            <span>or</span>
            <Button
              className={styles.btn}
              btnStyle="text"
              onClick={handleForgotPassword}
            >
              Cancel
            </Button>
          </section>
        </form>
      </section>
    </CSSTransition>
  );
};

export default ForgotPassword;
