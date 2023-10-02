import {Router} from 'express';

import userRoutes from "./user.routes"

const routes = Router();


routes.use("/api/users", userRoutes)


routes.get("/", (req, res) => {
    res.send("It works!")
})
export default routes