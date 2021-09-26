import { types } from '../types/types';

import { IAction } from '../../interfaces/IAction';

import { LocalStorageHandler } from "../../utils/LocalStorageHandler"

const instanceAuth = LocalStorageHandler.instanceAuth;

let initialState = instanceAuth.get();

export const authReducer = (state = initialState, action: IAction) => {
    switch(action.type) {
        case types.login:
            return {
                token: action.payload.token,
                user: action.payload.user
            };
        case types.logout:
            return null;
        default:
            return state;
    }
}