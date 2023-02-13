import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import readUsersController from "../controllers/users/readUsers.controller";

const userRoutes = Router();

userRoutes.post("/", createUserController);

userRoutes.get("/", readUsersController);

export default userRoutes;
