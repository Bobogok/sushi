/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import classNames from 'classnames';

import { CartContext } from '../../Context';

import './button.scss';

function Button({ className, currObj }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = () => {
    setCartItems((prev) => [...prev, currObj]);
  };

  const deleteFromCart = () => {
    setCartItems((prev) => {
      const indexDelete = prev.findIndex((obj) => obj.id === currObj.id);
      prev.splice(indexDelete, 1);
      return [...prev];
    });
  };

  const countInCart = cartItems.reduce((total, obj) => (obj.id === currObj.id ? total + 1 : total), 0);

  const controlsToCart = cartItems.find((obj) => obj.id === currObj.id);

  return controlsToCart ? (
    <button className={classNames('button', className, { 'button--controls': controlsToCart })} type="button">
      <div className="button__controls-dec">
        <svg onClick={deleteFromCart} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
          <path
            fillRule="evenodd"
            d="M11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10zm.5-10.5h5v1h-11v-1h6z"
          />
        </svg>
      </div>
      <div className="button__controls-count">{countInCart}</div>
      <div className="button__controls-inc">
        <svg onClick={addToCart} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
          <path
            fillRule="evenodd"
            d="M11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10zm-.5-10.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1h5z"
          />
        </svg>
      </div>
    </button>
  ) : (
    <button className={classNames('button', className)} onClick={addToCart} type="button">
      В КОРЗИНУ
    </button>
  );
}

export default Button;
