import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteCOntactController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteContactService(id);

  return res.status(204).json({ message: "contact deleted" });
};

export default deleteCOntactController