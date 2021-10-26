import React from 'react';
import { Route } from 'react-router-dom';

import Card from '../Card';

import './sets.scss';

function Sets() {
  return (
    <Route path="/catalog/sets">
      <div className="catalog__inner container">
        {Array.from(Array(12), (_, index) => {
          if (index === 1) {
            return <Card key={index} beige />;
          }

          if (index === 3) {
            return <Card key={index} blue />;
          }

          if (index === 7) {
            return <Card key={index} green />;
          }

          return <Card key={index} />;
        })}
      </div>
    </Route>
  );
}

export default Sets;
