import {Request, Response} from "express";
import {UserModel} from "../schemas";


const signUpFunction = async (req: Request, res: Response) => {
    console.log(req.body)
    const user = await UserModel.create(req.body)
    if (user) {
        res.send(user).status(201)
    }
}

const UserController = {
    signUpFunction
}

export default UserController