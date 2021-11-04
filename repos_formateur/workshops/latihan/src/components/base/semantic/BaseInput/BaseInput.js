import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react'
import './BaseInput.css';

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

BaseInput.propTypes = {};

BaseInput.defaultProps = {
  value:'',
  onChange: e => { 
    const msg = '🐞 Controlled Input : Provide the "onChange" handler when providing "value" props.'
    console.log(`%c ${msg}`,'font-size:20px;color:hotPink;')
    // throw Error(msg); 
  }
};

export default BaseInput;
