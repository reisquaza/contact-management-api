import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";
import { iUserRequest } from "../../interfaces/user.interfaces";

const createUserController = async (req: Request, res: Response) => {
  const newUser: iUserRequest = req.body;

  const createdUser = await createUserService(newUser);

  return res.status(201).json(instanceToPlain(createdUser));
};

export default createUserController;
