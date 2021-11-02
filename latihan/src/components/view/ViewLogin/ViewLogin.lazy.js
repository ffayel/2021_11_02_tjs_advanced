import React, { lazy, Suspense } from 'react';

// permet de renomé le fichier qui sera cahrger dans le network
const LazyViewLogin = lazy(() => import(/* webpackChunkName: "view-login"*/'./ViewLogin'));

const ViewLogin = props => (
  <Suspense fallback={null}>
    <LazyViewLogin {...props} />
  </Suspense>
);

export default ViewLogin;
