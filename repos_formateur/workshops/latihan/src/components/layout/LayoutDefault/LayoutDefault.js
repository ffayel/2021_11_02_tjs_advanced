import React from 'react';

// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
//import Helmet from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './LayoutDefault.css';

import LayoutHeader from '../LayoutHeader/LayoutHeader';
import LayoutContent from '../LayoutContent/LayoutContent';
import LayoutFooter from '../LayoutFooter/LayoutFooter';

const LayoutDefault = (props) => (
  <div className="LayoutDefault">
    <HelmetProvider context={{}}>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </HelmetProvider>
    <LayoutHeader>
      {props.title}
    </LayoutHeader>
    <LayoutContent>
      {props.features}
    </LayoutContent>
    <LayoutFooter></LayoutFooter>

  </div>
);

LayoutDefault.propTypes = {
  title: PropTypes.string,
  menu: PropTypes.any,
  header: PropTypes.any,
  footer: PropTypes.any,
  features: PropTypes.any /* oneOfType(
    [
    PropTypes.elementType,
    PropTypes.arrayOf(PropTypes.elementType)
    ]
  )*/
};

LayoutDefault.defaultProps = {
  title: 'Default Page Title'
};

export default LayoutDefault;
