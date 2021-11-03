import React from 'react';
import ViewLogin from './components/view/ViewLogin'

import store from './logic/pattern/store'
import ActionTypes from './logic/pattern/actions/action-types';

store.subscribe(()=> console.log(store.getState()));
store.dispatch({type: ActionTypes.APP_INITIALIZED, payload:null});



class App extends React.Component {

  state = {}
  time = Date.now();
  timer = null;

  tick(){
    this.time = Date.now();
    console.log(this.time);
    this.setState({});
  }

  // Permet d'ignorer les alert ESLINT --->
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.timer = setInterval( () => this.tick(), 1000);
  }

  getSnapshotBeforeUpdate(){}
  componentDidUpdate(){}

  //doit etre mis a jours si retourne true
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  componentWillUnmount(){
    this.timer && clearInterval(this.timer);
  }


  render(){
    return (
      <React.Fragment>
        <h1>{this.time}</h1>
        <ViewLogin></ViewLogin>
      </React.Fragment>
    );
  }
}
export default App;
