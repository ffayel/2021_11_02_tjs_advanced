import React from 'react';
import PropTypes from 'prop-types';
import './LayoutContent.css';

const LayoutContent = (props) => (
  <div className="LayoutContent">
    {props.children}
  </div>
);

LayoutContent.propTypes = {};

LayoutContent.defaultProps = {};

export default LayoutContent;
