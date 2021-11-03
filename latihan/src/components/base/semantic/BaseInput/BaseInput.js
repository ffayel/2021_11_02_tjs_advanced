import React from 'react';
import PropTypes from 'prop-types';
import './BaseInput.css';

import { Input } from 'semantic-ui-react'
// correspondance a React.memo /  React.PureComponent
const BaseInput = React.memo( ({ label, placeholder, value, onChange}) => (
  <>
  { 
    value !== null 
    ? 
    <Input 
    label={label} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange}
    />
    :
    <Input 
    label={label} 
    placeholder={placeholder} 
    />
  }

  </>
));

BaseInput.propTypes = {
  label: PropTypes.string, 
  placeholder: PropTypes.string,
  value: PropTypes.string, 
  onChange: PropTypes.func,
};

BaseInput.defaultProps = {
  value:'',
  onChange: e => {
    const msg = '🐞 Controlled Input : Provide the "onChange" handler when providing "value" props.'
    //style replace pattern pour avoir une mise en forme
    console.log(`%c ${msg}`,'font-size:20px;color:red;')
    // throw Error(msg); 
  }
};

export default BaseInput;
