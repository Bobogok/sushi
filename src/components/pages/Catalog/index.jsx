import React from 'react';
import { Switch } from 'react-router-dom';

import Sets from '../../Sets';

import './catalog.scss';

function Catalog() {
  return (
    <main className="catalog">
      <Switch>
        <Sets />
      </Switch>
    </main>
  );
}

export default Catalog;
