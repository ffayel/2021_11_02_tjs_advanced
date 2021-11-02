import React, { lazy, Suspense } from 'react';

const LazyFeatureIncidentTIckets = lazy(() => import('./FeatureIncidentTIckets'));

const FeatureIncidentTIckets = props => (
  <Suspense fallback={null}>
    <LazyFeatureIncidentTIckets {...props} />
  </Suspense>
);

export default FeatureIncidentTIckets;
