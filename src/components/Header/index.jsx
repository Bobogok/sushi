/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from 'react-use';
import useCheckPage from '../hooks/useCheckPage';
import Navigation from '../Navigation';

import Cart from '../Cart';

import './header.scss';

function Header() {
  const [cartOpened, setCartOpened] = useState(false);

  const openCart = () => {
    setCartOpened(true);
  };

  const closeCart = () => {
    setCartOpened(false);
  };

  const xxl = useMedia('(min-width: 1630px)');
  const xl = useMedia('(min-width: 1150px)');
  const tb = useMedia('(min-width: 750px) and (max-width: 1149px)');
  const mb = useMedia('(max-width: 750px)');

  // console.log(mb);

  const checkMainPage = useCheckPage('/');

  useEffect(() => {
    const handler = (e) => {
      if (e.target.className === 'header__overlay') {
        setCartOpened(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="header">
      <div className="header__inner container">
        {mb && !checkMainPage && (
          <button onClick={openCart} type="button" className="header__mobile-btn">
            <span className="header__mobile-icon">
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
        {cartOpened && (
          <>
            <div className="header__mobile-menu">
              <Link to="/" onClick={closeCart}>
                <img
                  className="header__mobile-image"
                  height="38"
                  width="auto"
                  src={`${process.env.PUBLIC_URL}/img/logo.png`}
                  alt="logo"
                />
              </Link>
              <Navigation className="header__mobile-navbar" closeCart={closeCart} mobile />
            </div>
            <div className="header__overlay" />
          </>
        )}
        {!mb && (
          <Link to="/" className="header__imageContainer">
            <img
              className="header__image"
              height={xxl ? 38 : 42}
              width="auto"
              src={xxl ? `${process.env.PUBLIC_URL}/img/logo.png` : `${process.env.PUBLIC_URL}/img/banner-logo.png`}
              alt="logo"
            />
          </Link>
        )}
        <div className="header__info">
          <div className="header__info-top">
            <div className="header__lang">
              <svg
                className="header__lang-icon"
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
            <div className="header__info-city">
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
                            className="header__info-city-icon"
                            d="M8.12,9.29 L12,13.17 L15.88,9.29 C16.27,8.9 16.9,8.9 17.29,9.29 C17.68,9.68 17.68,10.31 17.29,10.7 L12.7,15.29 C12.31,15.68 11.68,15.68 11.29,15.29 L6.7,10.7 C6.31,10.31 6.31,9.68 6.7,9.29 C7.09,8.91 7.73,8.9 8.12,9.29 Z"
                            fill="#999"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {!mb && (
              <a className="header__info-number" href="tel:88005503030">
                8-800-550-30-30
              </a>
            )}
          </div>
          <div className="header__info-bottom">
            <a className="header__info-profile" href="#">
              Личный кабинет
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="20">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </a>
          </div>
        </div>
        {xl && !checkMainPage && <Navigation className="header__navbar" />}
        {xxl && (
          <div className="header__about">
            <div className="header__about-top">
              <a href="#" className="header__about-link">
                О компании
              </a>
              <a href="#" className="header__about-link">
                Условия доставки
              </a>
            </div>
            <div className="header__about-bottom">
              <a href="#" className="header__about-link">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        )}
        {/* {xxl && (
          <div className="header__cashback">
            <div className="header__cashback-inner">
              <span>Икринки</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
                <defs>
                  <linearGradient id="a" x1="77.907%" x2="19.092%" y1="8.74%" y2="90.154%">
                    <stop offset="0%" stopColor="#FB9A59" />
                    <stop offset="100%" stopColor="#F5612D" />
                  </linearGradient>
                </defs>
                <g fill="none" transform="matrix(-1 0 0 1 17 .686)">
                  <circle cx="8.5" cy="8.5" r="8.5" fill="url(#a)" />
                  <circle cx="10.289" cy="6.711" r="5.816" fill="#F3F52D" opacity=".143" />
                  <circle cx="5.368" cy="5.368" r="2.684" fill="#FFF" opacity=".684" />
                </g>
              </svg>
            </div>
          </div>
        )} */}
        <div className="header__cart">
          <Cart />
        </div>
      </div>
      {tb && !checkMainPage && <Navigation className="header__navbar" />}
    </header>
  );
}

export default Header;
