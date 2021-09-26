import Swal from 'sweetalert2';

import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';

export const login = (uid: number, displayName: string) => {
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