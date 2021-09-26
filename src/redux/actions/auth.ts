import { types } from '../types/types';

export const login = (uid: string, displayName: string) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return (dispatch: any) => {
        dispatch(logout());
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}