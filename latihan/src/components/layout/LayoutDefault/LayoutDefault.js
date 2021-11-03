import React from 'react';
import PropTypes from 'prop-types';
import './LayoutDefault.css';
import LayoutFooter from '../LayoutFooter/LayoutFooter'
import LayoutHeader from '../LayoutHeader/LayoutHeader'
import LayoutContent from '../LayoutContent/LayoutContent'

const LayoutDefault = (props) => (
  <div className="LayoutDefault">
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      {props.children}
    </LayoutContent>
    <LayoutFooter></LayoutFooter>
  </div>
);

LayoutDefault.propTypes = {};

LayoutDefault.defaultProps = {};

export default LayoutDefault;
