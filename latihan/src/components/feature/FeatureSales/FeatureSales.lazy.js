import React, { lazy, Suspense } from 'react';

const LazyFeatureSales = lazy(() => import('./FeatureSales'));

const FeatureSales = props => (
  <Suspense fallback={null}>
    <LazyFeatureSales {...props} />
  </Suspense>
);

export default FeatureSales;
