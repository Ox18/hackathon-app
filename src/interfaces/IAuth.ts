import { IUser } from "./IUser";

export interface IAuth {
    token: string;
    user: IUser;
}