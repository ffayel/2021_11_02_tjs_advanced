import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './FeatureLogin.css';
import { BaseButton, BaseInput } from '../../base';
import { useGlobalEvent } from '../../hooks/use-global-event';
import { Translator } from '../../widget/Translator';

const FeatureLogin = () => {

  const [credentials, setCredentials] = React.useState(
    {username:'', password:''}
  );

  //HOF : Higher Order Function
  const inputChangeHandler = val => e => {
    setCredentials({ ...credentials, ...{ [val]: e.target.value } })
  }

  useGlobalEvent('click', e => console.warn('Global Click', e));
  useGlobalEvent('keydown', e => console.warn('Global Click', e));
  /*
  //lifecycle
  useEffect(
    function initial (){ 
      // componenDidMount : A faire à la montée du composant
      const globalListener = e => console.warn('Global Click')

      window.addEventListener('click', globalListener );

      return function cleanup(){
      // componenWillUnMount : A faire lorsques que le composant est démonté
        window.removeEventListener('click', globalListener );
      }
    }
    // shouldcomponentUpdate : conditions de rédeclenchement de l'effet
  , [] )
*/

  return (
  <div className="FeatureLogin" data-testid="FeatureLogin">
      <BaseInput 
        label="UserName" 
        value={credentials.username} onChange={inputChangeHandler('username')} 
      />
      <BaseInput 
        label="Password" 
        value={credentials.password} onChange={inputChangeHandler('password')} 
      />
      <Translator target="es">{credentials.username}</Translator>
      {/* <BaseInput label="uncontrolado" value={null}></BaseInput> */}
      <BaseButton></BaseButton>
  </div>
  )
};

FeatureLogin.propTypes = {};

FeatureLogin.defaultProps = {};

export default FeatureLogin;
