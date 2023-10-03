import {Router} from 'express';
import {UserController} from "../controllers";
const userRoutes = Router();

userRoutes.post("/sign-up", UserController.signUp)
userRoutes.post("/sign-in", UserController.signIn)

export default userRoutes