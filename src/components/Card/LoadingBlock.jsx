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
      <rect x="33" y="50" rx="0" ry="0" width="215" height="190" />
      <rect x="287" y="40" rx="0" ry="0" width="173" height="23" />
      <rect x="288" y="74" rx="0" ry="0" width="254" height="74" />
      <rect x="366" y="114" rx="0" ry="0" width="1" height="1" />
      <rect x="289" y="171" rx="15" ry="15" width="69" height="27" />
      <rect x="374" y="217" rx="0" ry="0" width="76" height="30" />
      <rect x="462" y="217" rx="0" ry="0" width="76" height="30" />
    </ContentLoader>
  );
}

export default LoadingBlock;
