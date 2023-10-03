import {Request, Response} from "express";
import {UserModel} from "../schemas";
import {hashSync} from "bcrypt"
import {ISignUp, IUser} from "../interfaces";
import {generateJWT} from "../utils";

type signUpRequest = Request & { body: ISignUp }
type signInRequest = Request & { body: { username: string, password: string } }

const saltRounds = 12;

const signUp = async (req: signUpRequest, res: Response) => {
    const data = req.body;

    // check username exists
    const check = await checkExistUser(data.username);
    if (check) {
        return res.send({"message": "Username has already created"}).status(400)
    }

    // hash password
    const hashPassword = hashSync(data.password, saltRounds)
    const user = await UserModel.create({...data, password: hashPassword, isAdmin: false})
    if (user) {
        res.send(user).status(201)
    }
}

const signIn = async (req: signInRequest, res: Response) => {
    const data = req.body;
    const user = await checkExistUser(data.username);
    if (!user) {
        return res.send({"message": "User not found in our database"}).status(400)
    }
    const token = generateJWT(user.toJSON() as IUser);

    return res.send({token}).status(200)
}

const getProfile = async (req: Request, res: Response) => {
    const data = req.body;
    const user = await checkExistUser(data.username);
    if (!user) {
        return res.send({"message": "User not found in our database"}).status(400)
    }
    const token = generateJWT(user.toJSON() as IUser);

    return res.send({token}).status(200)
}
const checkExistUser = async (username: string) => {
    return UserModel.findOne({username}, {password: 0});
}

export const UserController = {
    signUp,
    signIn
}