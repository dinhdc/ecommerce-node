import {sign} from "jsonwebtoken"
import {IUser} from "../interfaces";

const MINUTE = 60
const HOUR = MINUTE * 60

export const generateJWT = (user: IUser) => {
    return sign({
        exp: Math.floor(Date.now() / 1000) + HOUR,
        user
    }, process.env.SECRET_KEY);
}