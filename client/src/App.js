// import React, { useState } from 'react';
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
// import ReactMapGl, { Marker } from 'react-map-gl';
import { useDispatch } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './App.module.scss';
// import './popup.css';

// import { ReactComponent as PinSvg } from './assets/icons/room-24px.svg';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
// import * as actions from './store/api/apiActions';
import { loadTours, addTour } from './store/tours/toursSlice';

// import tours from './data/tours.json';

// import Popup from './components/popup/Popup';

function App() {
  // const [viewport, setViewport] = useState({
  //   latitude: tours[0].startLocation.coordinates[1],
  //   longitude: tours[0].startLocation.coordinates[0],
  //   width: '100vw',
  //   height: '93vh',
  //   zoom: 2,
  //   pitch: 85,
  //   bearing: 80,
  // });

  // const [showPopup, setShowPopup] = useState(false);
  // const [onTour, setOnTour] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadTours());
    dispatch(
      addTour({
        name: 'The Wine Taster v4.1.1',
        startLocation: {
          type: 'Point',
          description: 'California, USA',
          coordinates: [-122.29286, 38.294065],
          address: '560 Jefferson St, Napa, CA 94559, USA',
        },
        ratingsAverage: 4.4,
        ratingsQuantity: 7,
        rating: 4.5,
        images: ['tour-7-1.jpg', 'tour-7-2.jpg', 'tour-7-3.jpg'],
        startDates: [
          '2021-02-12T10:00:00.000Z',
          '2021-04-14T09:00:00.000Z',
          '2021-09-01T09:00:00.000Z',
        ],
        secretTour: false,
        guides: [
          {
            role: 'lead-guide',
            photo: 'user-12.jpg',
            createdAt: '2020-12-19T20:56:41.195Z',
            _id: '5c8a22c62f8fb814b56fa18b',
            name: 'Miyah Myles',
            email: 'miyah@example.com',
          },
          {
            role: 'guide',
            photo: 'user-13.jpg',
            createdAt: '2020-12-19T20:56:41.195Z',
            _id: '5c8a23412f8fb814b56fa18c',
            name: 'Ben Hadley',
            email: 'ben@example.com',
          },
        ],
        duration: 5,
        maxGroupSize: 8,
        difficulty: 'easy',
        price: 1997,
        summary:
          'Exquisite wines, scenic views, exclusive barrel tastings,  and much more',
        description:
          'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        imageCover: 'tour-7-cover.jpg',
        locations: [
          {
            type: 'Point',
            coordinates: [-122.479887, 38.510312],
            _id: '5c88fa8cf4afda39709c296f',
            description: 'Beringer Vineyards',
            day: 1,
          },
          {
            type: 'Point',
            coordinates: [-122.582948, 38.585707],
            _id: '5c88fa8cf4afda39709c296e',
            description: 'Clos Pegase Winery & Tasting Room',
            day: 3,
          },
          {
            type: 'Point',
            coordinates: [-122.434697, 38.482181],
            _id: '5c88fa8cf4afda39709c296d',
            description: 'Raymond Vineyard and Cellar',
            day: 5,
          },
        ],
        slug: 'the-wine-taster',
        durationWeeks: 0.7142857142857143,
      })
    );
  }, [dispatch]);

  return (
    <section className={styles.natours}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>

      {/* <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y"
        // mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {tours.map((tour, index) => {
          return (
            <Marker
              key={index}
              latitude={tour.startLocation.coordinates[1]}
              longitude={tour.startLocation.coordinates[0]}
              className={styles.marker}
            >
              <div className={styles.markerBox}>
                <PinSvg className={styles.pin} />
                <div className={styles.popup}></div>
              </div>
            </Marker>
          );
        })}
      </ReactMapGl> */}
    </section>
  );
}

export default App;
