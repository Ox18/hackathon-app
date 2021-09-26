import { IFeedMeCompany } from './IFeedMeCompany';
import { IFeedMeUser } from './IFeedMeUser';
import { IUser } from './IUser';

export interface IState {
    auth: null | {
        token: string;
        user: IUser;
    },
    feedMeUser: {
        loading: boolean;
        list: IFeedMeUser[];
    },
    feedMeCompany: {
        loading: boolean;
        list: IFeedMeCompany[];
    },
}