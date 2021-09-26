import { types } from "../types/types";

export const getAllFeedMeUsers = () => {
    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch(startLoadFeedMeUsers());
        dispatch(setAllFeedmeUsers([{
            id: "#Le Wagon222",
            name: "Le Wagon",
            description: "Le Wagon es una escuela de programación presente en 44 ciudades de 25 países."
        },
        {
            id: "#Iron Hack.",
            name: "Iron Hack.",
            description: "Ironhack partners with leading companies to make their talent acquisition process easy and convenient."       
        },
        {
            id: "#Laboratoria",
            name: "Laboratoria",
            description: "Empoderando a las mujeres para que trabajen y prosperen en el mundo de la tecnología."
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

