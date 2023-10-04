import jwt from "jsonwebtoken";
import {Response, NextFunction} from "express";
import {UserModel} from "../schemas";
import {AuthRequest} from "../interfaces";

export const adminGuard = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = req?.user;
    if (user && user.isAdmin) {
        next();
    } else {
        return res.status(403).send({error: 'Not have permission for this action'});
    }
}

