import { types } from "../types/types";

export const getAllFeedMeUsers = () => {
    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch(startLoadFeedMeUsers());
        dispatch(setAllFeedmeUsers([{
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
        dispatch(stopLoadFeedMeUsers());
    }
}

export const startLoadFeedMeUsers = () => ({
    type: types.startLoadFeedMeUsers
});

export const stopLoadFeedMeUsers = () => ({
    type: types.stopLoadFeedMeUsers
});

export const setAllFeedmeUsers = (payload: any) => ({
    type: types.setAllFeedMeUsers,
    payload
});

