import jwt from "jsonwebtoken";
import {Response, NextFunction} from "express";
import {UserModel} from "../schemas";
import {AuthRequest, IUser} from "../interfaces";

export const authGuard = async(req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization').replace('JWT ', '')
    if(!token){
        return res.status(401).send({ error: 'Not authorized to access this resource' });
    }
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY)['user']
        const user = await UserModel.findOne({username: data.username})
        if (!user) {
            res.status(401).send({ error: 'Not authorized to access this resource' })
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
}

