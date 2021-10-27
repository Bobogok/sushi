import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CartContext from './context';

import './styles/index.scss';

import App from './App';

const Main = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <StrictMode>
      <Router>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <App />
        </CartContext.Provider>
      </Router>
    </StrictMode>
  );
};
ReactDOM.render(<Main />, document.getElementById('root'));
