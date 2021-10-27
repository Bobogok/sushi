import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, Home, Catalog, Footer, NoMatch } from './components';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/catalog/*">
          <Catalog />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
