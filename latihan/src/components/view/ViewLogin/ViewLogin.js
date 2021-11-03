import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


const ViewLogin = () => (
  <div>
    {/* A déplacer */}
    <Helmet>
      <title>Login page</title>
    </Helmet>
    ViewLogin Component
  </div>
);

ViewLogin.propTypes = {};

ViewLogin.defaultProps = {};

export default ViewLogin;
