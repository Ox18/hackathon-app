import { IUser } from './IUser';

export interface IState {
    auth: null | {
        token: string;
        user: IUser;
    }
}