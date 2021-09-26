import { types } from "../types/types"

import { IAction } from "../../interfaces/IAction"

let initialState = {
    loading: false,
    list: [],
}

export const feedMeUserReducer = (state = initialState, action: IAction) => {
    switch(action.type) {
        case types.setAllFeedMeUsers:
            return {
                ...state,
                list: action.payload
            };
        case types.startLoadFeedMeUsers:
            return {
                ...state,
                loading: true
            };
        case types.stopLoadFeedMeUsers:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}