import React from 'react';

// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import LayoutDefault from '../../layout';
import FeatureLogin from '../../feature/FeatureLogin';


const ViewLogin = () => (
  <LayoutDefault
    title="View Login"
    menu={null}
    header={null}
    footer={null}
    features={<FeatureLogin />}
    />
);

ViewLogin.propTypes = {
};

ViewLogin.defaultProps = {

};

export default ViewLogin;
