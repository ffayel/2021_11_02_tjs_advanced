import React from 'react';

// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'
import './BaseButton.css';

const BaseButton = React.memo((props) => (
  <Button primary {...props}></Button>
));

BaseButton.propTypes = {
  children:PropTypes.string,
  onClick:PropTypes.func
};

BaseButton.defaultProps = {
  children:'Default Button Text',
  onClick:() => false
};

export default BaseButton;
