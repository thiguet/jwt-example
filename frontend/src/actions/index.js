import { LOG_IN } from './actionTypes';

export const loginAction = loginInfo => ({
    type: LOG_IN,
    loginInfo: loginInfo
});