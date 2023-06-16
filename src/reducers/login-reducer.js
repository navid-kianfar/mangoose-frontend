import {LOGIN_ERROR, LOGIN_SUCCESS} from "../constants/actions";

const initialState = {
    loggedIn: false,
    user: {},
    error: null,
};

function loginReducer(state = initialState, action) {
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
