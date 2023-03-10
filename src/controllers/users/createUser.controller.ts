import { Request, Response } from "express";
import { iUsersRequest } from "../../interfaces/users.interfaces";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser: iUsersRequest = req.body;

  const createdUser = await createUserService(newUser);

  return res.status(201).json(createdUser);
};

export default createUserController;
