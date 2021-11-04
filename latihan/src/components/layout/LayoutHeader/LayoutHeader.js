import React from 'react';
import PropTypes from 'prop-types';
import './LayoutHeader.css';

const LayoutHeader = (props) => (
  <div className="LayoutHeader">
    <h1>LATIHAN</h1>
    <h2>{props.children}</h2>
  </div>
);

LayoutHeader.propTypes = {};

LayoutHeader.defaultProps = {};

export default LayoutHeader;
