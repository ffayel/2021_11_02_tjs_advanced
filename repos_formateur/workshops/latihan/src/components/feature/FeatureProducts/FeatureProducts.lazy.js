import React, { lazy, Suspense } from 'react';

const LazyFeatureProducts = lazy(() => import('./FeatureProducts'));

const FeatureProducts = props => (
  <Suspense fallback={null}>
    <LazyFeatureProducts {...props} />
  </Suspense>
);

export default FeatureProducts;
