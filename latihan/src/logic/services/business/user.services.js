import {Subject } from 'rxjs';
import {request} from '../technical'
import {env} from '../../../env';


const api = request.init(env.REACT_APP_BACKEND + '/users');


export const connect = (credentials) => {
    // TODO verifier les credentials
    const user$ = new Subject();

    api.get().then(data => user$.next(data) );
    return user$;
}