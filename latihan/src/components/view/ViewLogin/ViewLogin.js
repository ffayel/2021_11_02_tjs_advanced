import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {BaseButton} from '../../base'
import {LayoutDefault} from '../../layout/'
import FeatureLogin from '../../feature/FeatureLogin'


const ViewLogin = () => (
  <LayoutDefault>
  <FeatureLogin></FeatureLogin>
</LayoutDefault>
);

ViewLogin.propTypes = {};

ViewLogin.defaultProps = {};

export default ViewLogin;
