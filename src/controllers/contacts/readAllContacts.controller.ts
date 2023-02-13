import { Request, Response } from "express";
import readAllContactsService from "../../services/contacts/readAllContactss.service";

const readAllContactsController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const contacts = await readAllContactsService(id);

  return res.status(200).json(contacts);
};
export default readAllContactsController;
