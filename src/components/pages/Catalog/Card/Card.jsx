import React from 'react';
import classNames from 'classnames';

import Button from '../Button';

import styles from './card.module.scss';

function Card({ id, title, desc, person, price, imageURL, beige, blue, green }) {
  const currObj = {
    id,
    title,
    desc,
    person,
    price
  };

  return (
    <div
      className={classNames(styles.card, {
        [styles['card--beige']]: beige,
        [styles['card--blue']]: blue,
        [styles['card--green']]: green
      })}
    >
      <div className={styles.imageWrapper}>
        <img className={styles.image} height="312" src={imageURL} alt="" />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.infoBoxTop}>
          <div className={styles.title}>{title}</div>
          <p className={styles.desc}>{desc}</p>
        </div>
        <div className={styles.infoBoxBottom}>
          <div className={styles.personWrapper}>
            <div className={styles.person}>
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 18 18"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-422.000000, -214.000000)"
                    fill="#9B9B9B"
                    fillRule="nonzero"
                    stroke="#9B9B9B"
                    strokeWidth="0.7"
                  >
                    <g transform="translate(35.000000, 85.000000)">
                      <g>
                        <g transform="translate(374.000000, 125.000000)">
                          <g transform="translate(14.000000, 5.000000)">
                            <g>
                              <path
                                d="M8,8.76190476 C11.9973333,8.76190476 15.2380952,12.0026667 15.2380952,16 L16,16 C16,11.5817143 12.4182857,8 8,8 C3.58171429,8 0,11.5817143 0,16 L0.761904762,16 C0.761904762,12.0026667 4.00247619,8.76190476 8,8.76190476 Z"
                                id="Shape"
                              />
                              <path
                                d="M8,0 C5.58038095,0 3.61904762,1.96133333 3.61904762,4.38095238 C3.61904762,6.80057143 5.58038095,8.76190476 8,8.76190476 C10.419619,8.76190476 12.3809524,6.80057143 12.3809524,4.38095238 C12.3809524,1.96133333 10.419619,0 8,0 Z M8,8 C6.00114286,8 4.38095238,6.37980952 4.38095238,4.38095238 C4.38095238,2.38209524 6.00114286,0.761904762 8,0.761904762 C9.99885714,0.761904762 11.6190476,2.38209524 11.6190476,4.38095238 C11.6190476,6.37980952 9.99885714,8 8,8 Z"
                                id="Shape"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span className={styles.personCount}>{person}</span>
            </div>
          </div>
          <div className={styles.controls}>
            <div className={styles.price}>
              {price}
              <svg
                width="18px"
                height="23px"
                viewBox="0 0 18 23"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-1578.000000, -413.000000)" fill="#333">
                    <g transform="translate(0.000000, 207.000000)">
                      <g transform="translate(1526.000000, 195.000000)">
                        <g transform="translate(12.000000, 4.000000)">
                          <path
                            d="M45.4140625,9.359375 L45.4140625,19.15625 L49.5703125,19.15625 C53.0390625,19.15625 54.9609375,17.265625 54.9609375,14.25 C54.9609375,11.25 53.0546875,9.359375 49.5703125,9.359375 L45.4140625,9.359375 Z M52.0546875,25.96875 L45.4140625,25.96875 L45.4140625,30 L43.2890625,30 L43.2890625,25.96875 L40.1640625,25.96875 L40.1640625,24.3125 L43.2890625,24.3125 L43.2890625,21.03125 L40.1640625,21.03125 L40.1640625,19.15625 L43.2890625,19.15625 L43.2890625,7.453125 L50.0703125,7.453125 C54.3671875,7.453125 57.1484375,10.28125 57.1484375,14.25 C57.1484375,18.234375 54.3515625,21.03125 50.0546875,21.03125 L45.4140625,21.03125 L45.4140625,24.3125 L52.0546875,24.3125 L52.0546875,25.96875 Z"
                            id="₽"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <Button className={styles.button} currObj={currObj} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
