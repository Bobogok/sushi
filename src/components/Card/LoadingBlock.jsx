import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={603}
      height={260}
      viewBox="0 0 603 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#f32b2b"
    >
      <rect x="389" y="15" rx="0" ry="0" width="173" height="23" />
      <rect x="389" y="50" rx="0" ry="0" width="206" height="74" />
      <rect x="366" y="114" rx="0" ry="0" width="1" height="1" />
      <rect x="389" y="163" rx="15" ry="15" width="69" height="27" />
      <rect x="431" y="210" rx="0" ry="0" width="76" height="30" />
      <rect x="515" y="210" rx="0" ry="0" width="76" height="30" />
      <rect x="62" y="22" rx="0" ry="0" width="278" height="214" />
    </ContentLoader>
  );
}

export default LoadingBlock;
