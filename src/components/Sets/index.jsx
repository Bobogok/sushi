/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Card, LoadingBlock } from '../Card';

import useFetchCatalog from '../hooks/useFetchCatalog';

function Sets() {
  const { catalogSets, isLoaded } = useFetchCatalog('sets');

  return (
    <>
      {isLoaded
        ? catalogSets.map((obj, index) => {
            if (index === 1) {
              return <Card key={obj.id} {...obj} beige />;
            }

            if (index === 3) {
              return <Card key={obj.id} {...obj} blue />;
            }

            if (index === 7) {
              return <Card key={obj.id} {...obj} green />;
            }

            return <Card key={obj.id} {...obj} />;
          })
        : Array.from(Array(6), (_, index) => <LoadingBlock key={index} />)}
    </>
  );
}

export default Sets;
