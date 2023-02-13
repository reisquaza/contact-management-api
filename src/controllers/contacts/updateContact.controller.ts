import { Request, Response } from "express";
import { iContactUpdate } from "../../interfaces/contacts.interface";
import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const data: iContactUpdate = req.body;
  const { id } = req.params;

  const updatedContact = await updateContactService(data, id);

  return res
    .status(200)
    .json({ message: "Contact updated", contact: updatedContact });
};
export default updateContactController;
