import React from 'react';
import ViewLogin from './components/view/ViewLogin'

import store from './logic/pattern/store'
import ActionTypes from './logic/pattern/actions/action-types';

store.subscribe(()=> console.log(store.getState()));
store.dispatch({type: ActionTypes.APP_INITIALIZED, payload:null});



class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <ViewLogin></ViewLogin>
      </React.Fragment>
    );
  }
}
export default App;
