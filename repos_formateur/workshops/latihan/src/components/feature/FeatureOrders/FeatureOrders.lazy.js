import React, { lazy, Suspense } from 'react';

const LazyFeatureOrders = lazy(() => import('./FeatureOrders'));

const FeatureOrders = props => (
  <Suspense fallback={null}>
    <LazyFeatureOrders {...props} />
  </Suspense>
);

export default FeatureOrders;
