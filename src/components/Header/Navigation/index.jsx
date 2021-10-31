import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './navigation.module.scss';

function Navigations({ className, closeCart, mobile }) {
  const navigationLinks = [
    { title: 'Роллы', path: '/catalog/rolls' },
    { title: 'Комбо', path: '/catalog/combo' },
    { title: 'Сеты', path: '/catalog/sets' },
    { title: 'Сеты Edition', path: '/catalog/sets-edition' },
    { title: 'Суши', path: '/catalog/sushi' },
    { title: 'Воки', path: '/catalog/wok' },
    { title: 'Супы', path: '/catalog/sups' },
    { title: 'Темпура', path: '/catalog/tempura' },
    { title: 'Десерт', path: '/catalog/desserts' },
    { title: 'Ещё' }
  ];

  return (
    <nav className={classNames(className, styles.navigation)}>
      <ul className={classNames(styles.elems, { [styles['elems--mb']]: mobile })}>
        {navigationLinks.map((obj) =>
          obj === navigationLinks.at(-1) ? (
            <li key={obj.title} className={classNames(styles.elem, { [styles['elem--mb']]: mobile })}>
              {
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a className={styles.link}>{obj.title}</a>
              }
            </li>
          ) : (
            <li key={obj.title} className={classNames(styles.elem, { [styles['elem--mb']]: mobile })}>
              <NavLink
                to={obj.path}
                className={styles.link}
                onClick={() => closeCart && closeCart()}
                activeClassName={styles.active}
              >
                {obj.title}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navigations;
