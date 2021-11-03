import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './sidemenu.module.scss';

const Sidemenu = memo(function Sidemenu({ cartOpened, closeCart }) {
  return (
    <>
      <div className={`${styles.menu} ${cartOpened ? styles.visible : ''}`}>
        <Link to="/" onClick={closeCart}>
          <img
            className={styles.image}
            height="38"
            width="auto"
            src={`${process.env.PUBLIC_URL}/img/banner-logo.png`}
            alt="logo"
          />
        </Link>
        {/* <Navigation className={styles.mobileNavbar} closeCart={closeCart} /> */}
      </div>
      <div className={`${styles.overlay} ${cartOpened ? styles.visible : ''}`} onClick={closeCart} />
    </>
  );
});

export default Sidemenu;
