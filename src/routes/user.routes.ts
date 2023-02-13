import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import readUserByIdController from "../controllers/user/readUserById.controller";
import readUsersController from "../controllers/user/readUsers.controller";
import updateUserController from "../controllers/user/updateUser.controller";

const userRouter = Router();

userRouter.post("/", createUserController);

userRouter.get("/", readUsersController);

userRouter.get("/:id", readUserByIdController);

userRouter.patch("/:id", updateUserController);

userRouter.delete("/:id", deleteUserController);

export default userRouter;
