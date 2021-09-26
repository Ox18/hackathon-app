import { types } from "../types/types";

export const getAllFeedMeCompany = () => {
    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch(startLoadFeedMeCompany());
        dispatch(setAllFeedmeCompany([{
            id: "#22113123",
            name: "a",
            description: "lorem ipsum"
        },
        {
            id: "#22113144",
            name: "b",
            description: "lorem ipsum"
        },
        {
            id: "#22113166",
            name: "c",
            description: "lorem ipsum"
        },]))
        dispatch(stopLoadFeedMeCompany());
    }
}

export const startLoadFeedMeCompany = () => ({
    type: types.startLoadFeedMeCompany
});

export const stopLoadFeedMeCompany = () => ({
    type: types.stopLoadFeedMeCompany
});

export const setAllFeedmeCompany = (payload: any) => ({
    type: types.setAllFeedMeCompany,
    payload
});

