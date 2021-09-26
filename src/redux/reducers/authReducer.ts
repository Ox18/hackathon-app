import { types } from '../types/types';

interface IAction {
    type: string;
    payload: any;
};

export const authReducer = (state = {}, action: IAction) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case types.logout:
            return {};
        default:
            return state;
    }
}