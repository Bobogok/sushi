import React, { memo } from 'react';

import useTotalCart from '../hooks/useTotalCart';
import CartIcon from './CartIcon';

import styles from './cart.module.scss';

const Cart = memo(function Cart() {
  const { totalPrice, totalElems } = useTotalCart();

  return (
    <div className={styles.cart}>
      {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className={styles.info}>
          {totalElems !== 0 ? (
            <>
              <span className={styles.count}>{totalElems}&nbsp;поз.</span>/
              <span className={styles.price}>{totalPrice}&nbsp;₽.</span>
              <CartIcon visible />
            </>
          ) : (
            <CartIcon />
          )}
        </a>
      }
    </div>
  );
});

export default Cart;
