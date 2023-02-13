import { Request, Response } from "express";
import readUsersService from "../../services/users/readUsers.service";

const readUsersController = async (req: Request, res: Response) => {
  const users = await readUsersService();

  return res.status(200).json(users);
};

export default readUsersController;
