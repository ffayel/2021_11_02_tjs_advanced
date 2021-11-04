import React from 'react';
import ViewLogin from './components/view/ViewLogin'

import store from './logic/pattern/store';
import ActionTypes from './logic/pattern/actions/action-types';

// eslint-disable-next-line no-unused-vars
import {env} from './env';
import { request } from './logic/services/technical';

import {useGlobalEvent} from './components/hooks/use-global-event'

const backendMessages = request.init(env.REACT_APP_BACKEND + '/Messages');
backendMessages.get().then(console.table)

// store.subscribe( ()=> console.log(store.getState() ))

// store.dispatch({type:ActionTypes.APP_INITIALIZED ,payload:null})



class App extends React.Component {


  state = {
    text:'Bob',
    time : Date.now()
  }
  //time = Date.now();
  timer = null;

  tick(){
    const time = Date.now();
    //console.log(this.time);
    //this.setState( (state, props) => ({time}) );
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  } 


  componentDidMount(){
    this.timer = setInterval( () => this.tick(), 1000)
  }

  getSnapshotBeforeUpdate(){}
  componentDidUpdate(){}

  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  componentWillUnmount(){
    this.timer && clearInterval(this.timer)
  }

  // this.clickHandler = this.clickHandler.bind(this)
  clickHandler = evt => {
    console.log(evt.target,this)
  }

  render(){
    return (
      <React.Fragment>
        <h1>{this.state.time}</h1>
        <ViewLogin></ViewLogin>
      </React.Fragment>
    );
  }
}

export default App;
