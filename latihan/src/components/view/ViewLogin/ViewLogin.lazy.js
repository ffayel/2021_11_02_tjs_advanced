import React, { lazy, Suspense } from 'react';

const LazyViewLogin = lazy(() => import('./ViewLogin'));

const ViewLogin = props => (
  <Suspense fallback={null}>
    <LazyViewLogin {...props} />
  </Suspense>
);

export default ViewLogin;
