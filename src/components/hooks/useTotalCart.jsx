import { useContext } from 'react';
import { CartContext } from '../../Context';

function useTotalCart() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, obj) => sum + +obj.price, 0);

  const totalElems = cartItems.length;

  return { totalPrice, totalElems };
}

export default useTotalCart;
