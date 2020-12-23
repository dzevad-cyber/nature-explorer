import React, { useState } from 'react';

import styles from './LoginPage.module.scss';

const ForgotPassword = React.lazy(() =>
  import('../../components/forgot-password/ForgotPassword')
);
const LoginForm = React.lazy(() =>
  import('../../components/login-form/LoginForm')
);

const Login = () => {
  const [onDisplay, setOnDisplay] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleForgotPassword = () => setOnDisplay(!onDisplay);

  return (
    <section className={styles.login}>
      <ForgotPassword
        handleForgotPassword={handleForgotPassword}
        onDisplay={onDisplay}
      />
      <LoginForm
        onSubmit={handleSubmit}
        handleForgotPassword={handleForgotPassword}
        onDisplay={onDisplay}
      />
    </section>
  );
};

export default Login;
