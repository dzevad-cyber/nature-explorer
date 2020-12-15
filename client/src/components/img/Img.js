import React from 'react';

import styles from './Img.module.scss';

const Img = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.img} />;
};

export default Img;
