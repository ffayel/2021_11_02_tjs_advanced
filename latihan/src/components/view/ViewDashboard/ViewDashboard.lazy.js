import React, { lazy, Suspense } from 'react';

const LazyViewDashboard = lazy(() => import('./ViewDashboard'));

const ViewDashboard = props => (
  <Suspense fallback={null}>
    <LazyViewDashboard {...props} />
  </Suspense>
);

export default ViewDashboard;
