import React, { useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './App.module.scss';

import Loader from './components/loader/Loader';
import { loadTours } from './store/tours/toursSlice';
import TourPage from './pages/tour-page/TourPage';

const Header = React.lazy(() => import('./components/header/Header'));
const HomePage = React.lazy(() => import('./pages/home-page/HomePage'));
const SignupPage = React.lazy(() => import('./pages/signup-page/SignupPage'));
const LoginPage = React.lazy(() => import('./pages/login-page/LoginPage'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTours());
  }, [dispatch]);

  return (
    <section className={styles.natours}>
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/tour/:id" component={TourPage} />
        </Switch>
      </Suspense>
    </section>
  );
}

export default App;
