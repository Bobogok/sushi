import React from 'react';
import classNames from 'classnames';

function CartIcon({ visible }) {
  return (
    <svg width="26" height="23" viewBox="0 0 26 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          className={classNames('cart__icon', { visible })}
          transform="translate(-278.000000, -19.000000)"
          fill="#979797"
        >
          <path d="M286,25.4642686 L296,25.4642686 L293.133975,20.500167 C292.857832,20.0218744 293.021707,19.4102839 293.5,19.1341416 C293.978293,18.8579992 294.589883,19.0218744 294.866025,19.500167 L298.309401,25.4642686 L302,25.4642686 C303.104569,25.4642686 304,26.3596991 304,27.4642686 L304,39.4642686 C304,40.5688381 303.104569,41.4642686 302,41.4642686 L280,41.4642686 C278.895431,41.4642686 278,40.5688381 278,39.4642686 L278,27.4642686 C278,26.3596991 278.895431,25.4642686 280,25.4642686 L283.690599,25.4642686 L287.133975,19.500167 C287.410117,19.0218744 288.021707,18.8579992 288.5,19.1341416 C288.978293,19.4102839 289.142168,20.0218744 288.866025,20.500167 L286,25.4642686 Z M298,28.4642686 C297.447715,28.4642686 297,28.9119838 297,29.4642686 L297,37.4642686 C297,38.0165533 297.447715,38.4642686 298,38.4642686 C298.552285,38.4642686 299,38.0165533 299,37.4642686 L299,29.4642686 C299,28.9119838 298.552285,28.4642686 298,28.4642686 Z M291,28.4642686 C290.447715,28.4642686 290,28.9119838 290,29.4642686 L290,37.4642686 C290,38.0165533 290.447715,38.4642686 291,38.4642686 C291.552285,38.4642686 292,38.0165533 292,37.4642686 L292,29.4642686 C292,28.9119838 291.552285,28.4642686 291,28.4642686 Z M284,28.4642686 C283.447715,28.4642686 283,28.9119838 283,29.4642686 L283,37.4642686 C283,38.0165533 283.447715,38.4642686 284,38.4642686 C284.552285,38.4642686 285,38.0165533 285,37.4642686 L285,29.4642686 C285,28.9119838 284.552285,28.4642686 284,28.4642686 Z" />
        </g>
      </g>
    </svg>
  );
}

export default CartIcon;
