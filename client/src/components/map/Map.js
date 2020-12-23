import { useState } from 'react';
import { Link } from 'react-router-dom';

import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './Map.module.scss';
import { ReactComponent as PinSvg } from '../../assets/icons/room-24px.svg';

const Map = ({ data }) => {
  const [viewport, setViewport] = useState({
    latitude: data[0].startLocation.coordinates[1],
    longitude: data[0].startLocation.coordinates[0],
    width: window.innerWidth,
    height: '100%',
    zoom: 2.5,
    // pitch: 85,
    // bearing: 80,
  });

  return (
    <section className={styles.mapWrapper}>
      <div className={styles.map}>
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={viewport => setViewport(viewport)}
          mapStyle="mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y"
          // mapStyle="mapbox://styles/mapbox/streets-v11"
          className={styles.map}
        >
          {data.map((tour, index) => {
            return (
              <Marker
                key={index}
                latitude={tour.startLocation.coordinates[1]}
                longitude={tour.startLocation.coordinates[0]}
                className={styles.marker}
                offsetTop={-24}
                offsetLeft={-12}
              >
                <div className={styles.markerBox}>
                  <Link to="/tour/tourid">
                    <PinSvg className={styles.pin} />
                  </Link>
                  <div className={styles.popup}></div>
                </div>
              </Marker>
            );
          })}
        </ReactMapGl>
      </div>
    </section>
  );
};

export default Map;
