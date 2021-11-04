import React, { lazy, Suspense } from 'react';

const LazyViewLogin = lazy(() => import(/* webpackChunkName: "chunk-view-login" */'./ViewLogin'));

const ViewLogin = props => (
  <Suspense fallback={null}>
    <LazyViewLogin {...props} />
  </Suspense>
);

export default ViewLogin;
