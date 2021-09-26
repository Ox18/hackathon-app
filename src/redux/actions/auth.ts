import { IFormSubmitRegister, IFormSubmitRegisterCompany, IFormSubmitLogin } from '../../interfaces/IFormSubmit'
import { IUser } from '../../interfaces/IUser'

import { types } from '../types/types'

import { LocalStorageHandler } from "../../utils/LocalStorageHandler"

const instanceAuth = LocalStorageHandler.instanceAuth;

export const startRegisterUser = (formSubmitRegister: IFormSubmitRegister ) => {
    return (dispatch: (arg0: { type: string; }) => void) => {
        console.log(formSubmitRegister);
        dispatch(logout());
    }    
}

export const startRegisterCompany = (formSubmitRegister: IFormSubmitRegisterCompany ) => {
    return (dispatch: (arg0: { type: string; }) => void) => {
        console.log(formSubmitRegister);
        dispatch(logout());
    }    
}

export const startLogin = (formSubmitLogin: IFormSubmitLogin ) => {
    return (dispatch: (arg0: { type: string; }) => void) => {
        console.log(formSubmitLogin);
        dispatch(logout());
    }
}

export const login = (token: string, user: IUser) => {
    return {
        type: types.login,
        payload: {
            token,
            user
        }
    }
}

export const logout = () => {
    instanceAuth.saveEmpty();

    return {
        type: types.logout
    }
}
