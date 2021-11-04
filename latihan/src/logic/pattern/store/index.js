import {applyMiddleware, createStore} from 'redux';
import ActionTypes from '../actions/action-types';
import { createEpicMiddleware} from 'redux-observable';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

import { logger } from '../middlewares/logger';
import { userMiddleware } from '../middlewares/user.middleware';

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
    return {...state, env:{...state.env, voiceActive:true} };

  default:
    return state; 
  }
}

const actionMiddelware = createEpicMiddleware();

const store = createStore( 
    reducer, 
    applicationState,
    /** Middleware */
    /* devToolsEnhancer() */
    composeWithDevTools(
      applyMiddleware(
          logger
          , actionMiddelware
      )
    )
);

/*
store.dispatch(action)
store.getState()
store.subscribe()
*/
actionMiddelware.run(userMiddleware);

export default store;
