import React from 'react';
import SignupForm from '../../components/signup-form/SignupForm';

import styles from './SignupPage.module.scss';

const Signup = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className={styles.signup}>
      <SignupForm handleSubmit={handleSubmit} />
    </section>
  );
};

export default Signup;
