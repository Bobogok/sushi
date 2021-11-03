import React, { memo } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './navigation.module.scss';

const Navigations = memo(function Navigations({ className, tablet }) {
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
    <nav className={classNames(className, styles.navigation, { [styles['navigation--tb']]: tablet })}>
      <ul className={classNames(styles.elems)}>
        {navigationLinks.map((obj) =>
          obj === navigationLinks.at(-1) ? (
            <li key={obj.title} className={classNames(styles.elem)}>
              {
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a className={styles.link}>{obj.title}</a>
              }
            </li>
          ) : (
            <li key={obj.title} className={classNames(styles.elem)}>
              <NavLink to={obj.path} className={styles.link} activeClassName={styles.active}>
                {obj.title}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
});

export default Navigations;
