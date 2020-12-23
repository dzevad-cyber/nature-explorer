import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getTours } from '../../store/tours/toursSlice';

import Map from '../../components/map/Map';
import styles from './HomePage.module.scss';
import Loader from '../../components/loader/Loader';

const Home = () => {
  const tours = useSelector(getTours);

  return (
    <section className={styles.home}>
      {tours.length > 0 && <Map data={tours} />}
    </section>
  );
};

export default Home;
