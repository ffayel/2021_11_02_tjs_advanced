import React, { lazy, Suspense } from 'react';

const LazyViewStock = lazy(() => import('./ViewStock'));

const ViewStock = props => (
  <Suspense fallback={null}>
    <LazyViewStock {...props} />
  </Suspense>
);

export default ViewStock;
