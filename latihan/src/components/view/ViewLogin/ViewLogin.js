import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {BaseButton} from '../../base'


const ViewLogin = () => (
  <div>
    {/* A déplacer */}
    <Helmet>
      <title>Login page</title>
    </Helmet>
    <BaseButton onClick={()=>alert(132)}>Click Me</BaseButton>
    ViewLogin Component
  </div>
);

ViewLogin.propTypes = {};

ViewLogin.defaultProps = {};

export default ViewLogin;
