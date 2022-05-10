import { startFetch, endFetch, errorFetch } from '../actions/statusActions'
import { SignIn } from '../data/users'
export const SET_AUTH = 'SET_AUT'

export function setAuth(user) {
    return {
        type: SET_AUTH,
        payload: user
    }
}

export function fethAuthAsync(username, password) {
    // return async function (dispatch, getState) {
    return async function (dispatch) {
        try {
            dispatch(startFetch());
            const user = await SignIn(username, password);
            if (user) {
                dispatch(setAuth(user))
                dispatch(errorFetch(''));
                dispatch(endFetch())
            }
        } catch (error) {
            dispatch(setAuth(null))
            dispatch(errorFetch(error));
            dispatch(endFetch())
        }
    }
}