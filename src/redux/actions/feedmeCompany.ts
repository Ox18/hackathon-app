import { types } from "../types/types";

export const getAllFeedMeCompany = () => {
    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch(startLoadFeedMeCompany());
        dispatch(setAllFeedmeCompany([{
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

