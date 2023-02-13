import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { iUserUpdate } from "../../interfaces/user.interfaces";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const data: iUserUpdate = req.body;
  const { id } = req.params;

  const updatedUser = await updateUserService(data, id);

  return res
    .status(200)
    .json({ message: "User updated", user: instanceToPlain(updatedUser) });
};

export default updateUserController;
