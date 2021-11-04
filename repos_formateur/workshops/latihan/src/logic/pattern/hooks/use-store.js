import React from 'react';
import store from '../store'

const {dispatch,getState} = store;

export const useStore = (slice,autoSubscribe = false) => {


    const [state,setState] = React.useState(
        slice && store.getState()[slice] ||store.getState()
        );
    
    React.useEffect(()=> {
        store.subscribe( () => setState(
            slice && store.getState()[slice] ||store.getState()
         ))
    },[])

    return [state, dispatch]

}