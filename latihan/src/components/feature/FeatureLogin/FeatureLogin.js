import React from 'react';
import PropTypes from 'prop-types';
import './FeatureLogin.css';
import { BaseButton, BaseInput } from '../../base';

const FeatureLogin = () => (
  <div className="FeatureLogin" data-testid="FeatureLogin">
      <BaseInput label="controlled"></BaseInput>
      <BaseInput label="uncontrolado" value={null}></BaseInput>
      <BaseButton></BaseButton>
  </div>
);

FeatureLogin.propTypes = {};

FeatureLogin.defaultProps = {};

export default FeatureLogin;
