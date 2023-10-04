import {Router} from 'express';
import {UserController} from "../controllers";
import {authGuard} from "../middlewares";

const userRoutes = Router();

userRoutes.post("/sign-up", UserController.signUp);
userRoutes.post("/sign-in", UserController.signIn);
userRoutes.get("/profile", authGuard, UserController.getProfile);

export default userRoutes
