import { LOG_IN } from '../actions/actionTypes.js';

const initialState = {
    loginInfo: {}
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN :
            return {
                ...state,
                loginInfo: action.loginInfo
            };
        default:
            return state;
    }
};