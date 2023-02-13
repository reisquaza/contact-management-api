import { Request, Response } from "express";
import { iContactRequest } from "../../interfaces/contacts.interface";
import createContactService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const data: iContactRequest = req.body;
  const userId = req.user.id;

  data.userId = userId;

  const newContact = await createContactService(data);

  return res.status(201).json(newContact);
};

export default createContactController;
