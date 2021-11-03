import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './LayoutDefault.css';

import LayoutHeader from '../LayoutHeader/LayoutHeader'
import LayoutContent from '../LayoutContent/LayoutContent'
import LayoutFooter from '../LayoutFooter/LayoutFooter'

const LayoutDefault = (props) => (
  <div className="LayoutDefault">
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <LayoutHeader>
      {props.title}
    </LayoutHeader>
    <LayoutContent>
      {props.menu}
      {props.features}
    </LayoutContent>
    <LayoutFooter></LayoutFooter>
  </div>
);

LayoutDefault.propTypes = {
  title: PropTypes.string,
  menu: PropTypes.elementType,
  header: PropTypes.elementType,
  footer: PropTypes.elementType,
  features: PropTypes.any/*.oneOfType([
    PropTypes.elementType,
    PropTypes.arrayOf(PropTypes.elementType),
  ])*/
};

LayoutDefault.defaultProps = {
  title: 'Default Page Title'

};

export default LayoutDefault;
