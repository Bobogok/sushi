/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Card, LoadingBlock } from '../Card';

import useFetchCatalog from '../hooks/useFetchCatalog';

function Combo() {
  const { catalogSets, isLoaded } = useFetchCatalog('combo');

  return (
    <>
      {isLoaded
        ? catalogSets.map((obj) => <Card key={obj.id} {...obj} />)
        : Array.from(Array(6), (_, index) => <LoadingBlock key={index} />)}
    </>
  );
}

export default Combo;
