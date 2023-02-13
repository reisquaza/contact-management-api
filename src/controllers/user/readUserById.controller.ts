import { Request, Response } from "express";
import readUserByIdService from "../../services/users/readUserById.service";
import { instanceToPlain } from "class-transformer";

const readUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await readUserByIdService(id);

  return res.status(200).json(instanceToPlain(user));
};
export default readUserByIdController;
