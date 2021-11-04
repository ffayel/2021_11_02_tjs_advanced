// eslint-disable-next-line no-unused-vars
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import ActionTypes from '../actions/action-types'
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';


import { logger } from '../middlewares/logger';
import { userMiddleware } from '../middlewares/user.middleware';



// Déplacer le state
const applicationState  /* initial state  */ = {
    env: {
        location: null,
        online: true,
        voiceActive: false
    },
    users: [],
    administrator: null,
    products: [],
    stock: {
        entries: [] // {product:quantitiy}
    },
    orders: [],
    sales: []
}

const reducer /* state presenter */ = (state, action) => {

    switch (action.type) {
        case ActionTypes.APP_INITIALIZED:
            return { ...state, env: { ...state.env, voiceActive: true } };
        default:
            return state; /* NEVER USER DEFAULT */
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
            ,actionMiddelware
        )
    ) 
);

actionMiddelware.run(userMiddleware);

export default store;