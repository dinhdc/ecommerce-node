import {Router} from 'express';
import {UserController} from "../controllers";
const userRoutes = Router();

userRoutes.post("/signup", UserController.signUpFunction)

export default userRoutes