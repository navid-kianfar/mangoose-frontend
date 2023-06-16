import axios from 'axios';
import {LOGIN_ERROR, LOGIN_SUCCESS} from "../constants/actions";

export function loginSuccess(user: any) {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    };
}

export function loginError(error: any) {
    return {
        type: LOGIN_ERROR,
        payload: error,
    };
}

export function loginUser(credentials: any): any {
    return (dispatch: any) => {
        axios.post('/api/login', credentials)
            .then(user => dispatch(loginSuccess(user)))
            .catch(error => dispatch(loginError(error)));
    };
}
