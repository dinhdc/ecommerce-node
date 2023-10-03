import {sign} from "jsonwebtoken"
import {IUser} from "../interfaces";

export const generateJWT = (user: IUser) => {
    return sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        user
    }, process.env.SECRET_KEY);
}