import { types } from "../types/types"

import { IAction } from "../../interfaces/IAction"

let initialState = {
    loading: false,
    list: [],
}

export const feedMeCompanyReducer = (state = initialState, action: IAction) => {
    switch(action.type) {
        case types.setAllFeedMeCompany:
            return {
                ...state,
                list: action.payload
            };
        case types.startLoadFeedMeCompany:
            return {
                ...state,
                loading: true
            };
        case types.stopLoadFeedMeCompany:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}