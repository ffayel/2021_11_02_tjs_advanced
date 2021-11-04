import {Observable, Subject} from 'rxjs';
import {env} from '../../../env'
import {request} from '../technical'

const api = request.init( env.REACT_APP_BACKEND + '/users');

export const connect = (credentials) => {

    const user$ = new Subject();

    api.post(credentials).then( data => user$.next(data) );

    return user$;
} 