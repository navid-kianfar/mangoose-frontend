import {LoginState} from "../types/states";
import {LOGIN_ERROR, LOGIN_SUCCESS} from "../constants/actions";

const initialState: LoginState = {
    loggedIn: false,
    user: {},
    error: null,
};

function loginReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default loginReducer;
