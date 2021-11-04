import React, { lazy, Suspense } from 'react';

const LazyFeatureIncidentTickets = lazy(() => import('./FeatureIncidentTickets'));

const FeatureIncidentTickets = props => (
  <Suspense fallback={null}>
    <LazyFeatureIncidentTickets {...props} />
  </Suspense>
);

export default FeatureIncidentTickets;
