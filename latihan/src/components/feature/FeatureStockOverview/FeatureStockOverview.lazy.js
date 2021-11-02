import React, { lazy, Suspense } from 'react';

const LazyFeatureStockOverview = lazy(() => import('./FeatureStockOverview'));

const FeatureStockOverview = props => (
  <Suspense fallback={null}>
    <LazyFeatureStockOverview {...props} />
  </Suspense>
);

export default FeatureStockOverview;
