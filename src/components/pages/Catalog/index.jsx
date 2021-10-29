import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useMedia } from 'react-use';
import classNames from 'classnames';
import NoMatch from '../../NoMatch';

import Sets from '../../Sets';
import Combo from '../../Combo';
import Rolls from '../../Rolls';

import './catalog.scss';

function Catalog() {
  const mb = useMedia('(min-width: 750px)');

  return (
    <main className="catalog">
      <div className={classNames('catalog__inner', { container: mb })}>
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
