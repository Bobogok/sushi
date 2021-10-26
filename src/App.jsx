import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, Home, Catalog, Footer } from './components';

function App() {
  function NoMatch() {
    return (
      <div>
        <h2 style={{ fontSize: 50, padding: 100 }}>In development</h2>
      </div>
    );
  }

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
