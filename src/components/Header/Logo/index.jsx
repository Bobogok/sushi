import React from 'react';
import useMediaQueries from '../../hooks/useMediaQueries';

import styles from './logo.module.scss';

function Logo() {
  const { xxl } = useMediaQueries();

  return (
    <>
      <img
        className={styles.logo}
        width="auto"
        src={xxl ? `${process.env.PUBLIC_URL}/img/logo.png` : `${process.env.PUBLIC_URL}/img/banner-logo.png`}
        alt="logo"
      />
    </>
  );
}

export default Logo;
