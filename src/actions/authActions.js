export const SET_AUTH = 'SET_AUT'

export function setAuth(user) {
    return {
        type: SET_AUTH,
        payload: user
    }
}