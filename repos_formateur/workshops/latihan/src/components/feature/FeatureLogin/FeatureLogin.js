import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './FeatureLogin.css';

import {
  BaseButton,
  // eslint-disable-next-line no-unused-vars
  BaseInput
} from '../../base'

import { useGlobalEvent } from '../../hooks/use-global-event';
import { useStateObject } from '../../hooks/use-state-object';
import { Translator } from '../../Widget/Translator';
// import store from '../../../logic/pattern/store';
import ActionTypes from '../../../logic/pattern/actions/action-types';
import { useStore } from '../../../logic/pattern/hooks/use-store';

const FeatureLogin = () => {

  const [credentials, setCredentialValue] = useStateObject(
    { username: '', password: '' }
  );

  // useGlobalEvent('click', e => console.warn('click', e));
  
  /* useGlobalEvent('keydown', e => {
    console.warn('keydown', e);
    store.dispatch({type:ActionTypes.USER_CONNECTION_REQUEST , payload:e.key})
  }); */

  // const clickHandler = e => store.dispatch({type:ActionTypes.USER_CONNECTION_REQUEST , payload:credentials})

  const [state,dispatch] = useStore('users');
  console.log({state})
  const clickHandler = () => dispatch({type:ActionTypes.USER_CONNECTION_REQUEST , payload:credentials})

  
  return (
    <div className="FeatureLogin" data-testid="FeatureLogin">

      <BaseInput
        label="Username"
        value={credentials.username}
        onChange={setCredentialValue('username')}
      />
      <BaseInput
        label="Password"
        value={credentials.password}
        onChange={setCredentialValue('password')}
      />
      {/* <BaseInput label="uncontrolado" value={null}></BaseInput> */}
      <hr />
      <BaseButton onClick={clickHandler}>
        <Translator target='es'>{credentials.username}</Translator>
      </BaseButton>
    </div>
  )
};

FeatureLogin.propTypes = {};

FeatureLogin.defaultProps = {};

export default FeatureLogin;
