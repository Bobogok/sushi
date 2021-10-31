import React from 'react';

import useTotalCart from '../hooks/useTotalCart';
import CartIcon from './CartIcon';

import './cart.scss';

function Cart() {
  const { totalPrice, totalElems } = useTotalCart();

  return (
    <div className="cart">
      {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className="cart__info">
          {totalElems !== 0 ? (
            <>
              <span className="cart__count">{totalElems}&nbsp;поз.</span>/
              <span className="cart__price">{totalPrice}&nbsp;₽.</span>
              <CartIcon visible />
            </>
          ) : (
            <CartIcon />
          )}
        </a>
      }
    </div>
  );
}

export default Cart;
