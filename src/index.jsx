import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { CartContext, LangContext } from './Context';

import './styles/index.scss';

import App from './App';

const Main = () => {
  const [cartItems, setCartItems] = useState([]);
  const [language, setLanguage] = useState('rus');

  return (
    <StrictMode>
      <Router>
        <LangContext.Provider value={{ language, setLanguage }}>
          <CartContext.Provider value={{ cartItems, setCartItems }}>
            <App />
          </CartContext.Provider>
        </LangContext.Provider>
      </Router>
    </StrictMode>
  );
};
ReactDOM.render(<Main />, document.getElementById('root'));
