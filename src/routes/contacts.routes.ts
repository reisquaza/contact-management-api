import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import deleteCOntactController from "../controllers/contacts/deleteContact.controller";
import readAllContactsController from "../controllers/contacts/readAllContacts.controller";
import updateContactController from "../controllers/contacts/updateContact.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const contactRouter = Router();

contactRouter.post("/", tokenAuthMiddleware, createContactController);

contactRouter.get("/users/:id", tokenAuthMiddleware, readAllContactsController);

contactRouter.patch("/:id", updateContactController);

contactRouter.delete('/:id', deleteCOntactController)

export default contactRouter;
