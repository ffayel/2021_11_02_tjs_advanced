import { filter, mapTo, map, mergeMap } from 'rxjs';
import { connect } from '../../services/business/user.services';
import ActionTypes from '../actions/action-types';

// le '$' a la fin sert a indiquer qu'on a une variable qui représente un objet observable action$ (car rxjs)
export const userMiddleware = action$ => {
    return action$.pipe(
        filter(action => action.type === ActionTypes.USER_CONNECTION_REQUEST),
        mergeMap( 
            action => connect(action.payload).pipe(
                map(payload => ({ type: ActionTypes.USER_CONNECTION_SUCESS, payload }))
            )
        )
    );
}