/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useMediaQueries from '../hooks/useMediaQueries';
import useCheckPage from './hooks/useCheckPage';

import Logo from './Logo';
import Navigation from './Navigation';
import Cashback from './Cashback';
import Cart from './Cart';
import Sidemenu from './Sidemenu';

import styles from './header.module.scss';

function Header() {
  const [cartOpened, setCartOpened] = useState(false);
  const checkMainPage = useCheckPage('/');
  const { tb } = useMediaQueries();

  const openCart = useCallback(() => {
    setCartOpened(true);
  }, [setCartOpened]);

  const closeCart = useCallback(() => {
    setCartOpened(false);
  }, [setCartOpened]);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        {!checkMainPage && (
          <button onClick={openCart} type="button" className={styles.mobileBtn}>
            <span className={styles.mobileIcon}>
              <svg width="23" height="19" viewBox="0 0 23 19" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.293 9.5h21.711m-21.711 8h15.844M.293 1.5h15.844"
                  stroke="#9B9B9B"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        )}
        <Sidemenu cartOpened={cartOpened} closeCart={closeCart} />
        <Link to="/" className={styles.imageContainer}>
          <Logo />
        </Link>
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <div className={styles.lang}>
              <svg
                className={styles.langIcon}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                  <circle stroke="#979797" strokeWidth=".833" cx="10" cy="10" r="10" />
                  <circle fill="#F0F0F0" fillRule="nonzero" cx="10" cy="10" r="10" />
                  <path
                    d="M19.378 13.478A9.978 9.978 0 0 0 20 10c0-1.223-.22-2.395-.622-3.478H.622A9.979 9.979 0 0 0 0 10c0 1.223.22 2.395.622 3.478l9.378.87 9.378-.87z"
                    fill="#0052B4"
                    fillRule="nonzero"
                  />
                  <path
                    d="M10 20c4.3 0 7.965-2.714 9.378-6.522H.622A10.004 10.004 0 0 0 10 20z"
                    fill="#D80027"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            </div>
            <a className={styles.city}>
              Волгоград
              <svg
                width="13px"
                height="11px"
                viewBox="0 0 12 7"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-616.000000, -2467.000000)">
                    <g transform="translate(100.000000, 2404.000000)">
                      <g transform="translate(510.000000, 54.000000)">
                        <g>
                          <rect x="0" y="0" width="20" height="20" />
                          <path
                            className={styles.cityIcon}
                            d="M8.12,9.29 L12,13.17 L15.88,9.29 C16.27,8.9 16.9,8.9 17.29,9.29 C17.68,9.68 17.68,10.31 17.29,10.7 L12.7,15.29 C12.31,15.68 11.68,15.68 11.29,15.29 L6.7,10.7 C6.31,10.31 6.31,9.68 6.7,9.29 C7.09,8.91 7.73,8.9 8.12,9.29 Z"
                            fill="#999"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a className={styles.number} href="tel:88005503030">
              8-800-550-30-30
            </a>
          </div>
          <a className={styles.profile}>
            Личный кабинет
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="20">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </a>
        </div>
        {!checkMainPage && <Navigation className={styles.navbar} />}
        <div className={styles.about} style={{ flex: checkMainPage && '1 1 auto' }}>
          <div className={styles.aboutTop}>
            <a className={styles.aboutLink} href="#">
              О компании
            </a>
            <a className={styles.aboutLink} href="#">
              Условия доставки
            </a>
          </div>
          <div className={styles.aboutBottom}>
            <a className={styles.aboutLink} href="#">
              Пользовательское соглашение
            </a>
          </div>
        </div>
        <div className={styles.cashback}>
          <Cashback />
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
      </div>
      {tb && !checkMainPage && <Navigation className={styles.navbar} tablet />}
    </header>
  );
}

export default Header;
