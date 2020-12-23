import React, { useState } from 'react';
import Button from '../button/Button';
import useForm from '../../utils/hooks/useForm';

import styles from './SignupForm.module.scss';

const SignupForm = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const register = () => {
    console.log('register');
  };

  const onTogglePassword = e => {
    e.preventDefault();
    setTogglePassword(!togglePassword);
  };

  const {   state, handleChange, handleSubmit } = useForm(register);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <section className={styles.form_section}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={state.name || ''}
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          autoFocus
        />
      </section>
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
          placeholder="Enter Email"
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
      <section className={styles.form_section}>
        <label htmlFor="passwordConfirm">Password</label>
        <input
          id="passwordConfirm"
          type={togglePassword ? 'text' : 'password'}
          autoComplete="new-password"
          onChange={handleChange}
          value={state.passwordConfirm || ''}
          name="passwordConfirm"
          required
          aria-describedby="password-constraints"
        />
        <div
          id="password-constraints"
          className={styles.form_passwordConstraints}
        >
          Eight or more characters.
        </div>
      </section>
      <Button btnStyle="outlined">Sign up</Button>
    </form>
  );
};

export default SignupForm;
