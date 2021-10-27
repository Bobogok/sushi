import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../../NoMatch';

import Sets from '../../Sets';
import Combo from '../../Combo';
import Rolls from '../../Rolls';

import './catalog.scss';

function Catalog() {
  return (
    <main className="catalog">
      <div className="catalog__inner container">
        <Switch>
          <Route exact path="/catalog/rolls">
            <Rolls />
          </Route>
          <Route exact path="/catalog/sets">
            <Sets />
          </Route>
          <Route exact path="/catalog/combo">
            <Combo />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default Catalog;
