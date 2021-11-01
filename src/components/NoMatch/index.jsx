import React from 'react';

function NoMatch() {
  return (
    <>
      <h2
        style={{
          fontSize: '5em',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}
      >
        Not found <b>404</b>
      </h2>
    </>
  );
}

export default NoMatch;
