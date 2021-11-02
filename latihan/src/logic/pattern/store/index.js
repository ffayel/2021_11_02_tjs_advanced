import {createStore} from 'redux';
import ActionTypes from '../actions/action-types';

// Déplacer le state
const applicationState /* initial state */ = {
    env: {
        location: null,
        online: true,
        voiceActive: false
    },
    users:  [],
    administrator : null,
    products : [],
    stock : {
        entries: [] // {product:quantity}
    },
    orders:[],
    sales:[],
}
const reducer /* state presenter*/ = (state, action) => {
  switch (action.type) {

  case ActionTypes.APP_INITIALIZED:
    return { ...state };

  default:
    return state; 
  }
}

const store = createStore(reducer, applicationState);

/*
store.dispatch(action)
store.getState()
store.subscribe()
*/

export default store;
