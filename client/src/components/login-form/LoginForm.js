import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Button from '../button/Button';
import useForm from '../../utils/hooks/useForm';

import styles from './LoginForm.module.scss';
import opacity from '../../transitions/opacity.module.scss';

const LoginForm = ({ handleForgotPassword, onDisplay }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const login = () => {
    console.log('register');
  };
  const { state, handleChange, handleSubmit } = useForm(login);

  const onTogglePassword = e => {
    e.preventDefault();
    setTogglePassword(!togglePassword);
  };

  return (
    <CSSTransition
      in={onDisplay}
      classNames={opacity}
      timeout={500}
      unmountOnExit
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <section className={styles.form_section}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            onChange={handleChange}
            value={state.email || ''}
            name="email"
            required
            autoFocus
          />
        </section>
        <section className={styles.form_section}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={togglePassword ? 'text' : 'password'}
            autoComplete="new-password"
            onChange={handleChange}
            value={state.password || ''}
            name="password"
            required
            aria-describedby="password-constraints"
          />
          <button
            onClick={onTogglePassword}
            className={styles.form_togglePassword}
            aria-label="Show password as plain text. Warning: this will display your password on the screen."
          >
            {togglePassword ? 'Hide password' : 'Show password'}
          </button>
          <div
            id="password-constraints"
            className={styles.form_passwordConstraints}
          >
            Eight or more characters.
          </div>
        </section>
        <Button type="submit" btnStyle="contained">
          Sign in
        </Button>
        <span
          className={styles.form_forgotPassword}
          onClick={handleForgotPassword}
        >
          Forgot password ?
        </span>
      </form>
    </CSSTransition>
  );
};

export default LoginForm;
