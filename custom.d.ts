import {IUser} from "./src/interfaces";

declare module 'express' {
    export interface Request{
        user?: IUser;
        token?: string;
    }
}
