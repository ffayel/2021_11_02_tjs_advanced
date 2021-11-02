import React from 'react';
import ViewLogin from './components/view/ViewLogin'
import ActionTypes from './logic/pattern/actions/action-types';

import store from './logic/pattern/store'

store.subscribe(()=> console.log(store.getState()));
store.dispatch({type: ActionTypes.APP_INITIALIZED, payload:null});


function App() {
  return (
    <React.Fragment>
      LATIHAN
      <button onClick={ 
          () => store.dispatch(
            {type:ActionTypes.USER_CONNECTION_REQUEST ,payload:null}
            )}>
              click
            </button>
      <ViewLogin></ViewLogin>
    </React.Fragment>
  );
}

export default App;
