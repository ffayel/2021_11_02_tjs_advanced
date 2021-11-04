import { filter, mapTo, map, mergeMap } from 'rxjs';
import { connect, ticker$ } from '../../services/business/user.services';
import ActionTypes from '../actions/action-types'


export const userMiddleware = ( action$) => {

    return action$.pipe(
        filter(action => action.type === ActionTypes.USER_CONNECTION_REQUEST),
        mergeMap( 
            action => connect(action.payload).pipe(
                map(payload => ({ type: ActionTypes.USER_CONNECTION_SUCCESS, payload }))
            )
        )
    );

}