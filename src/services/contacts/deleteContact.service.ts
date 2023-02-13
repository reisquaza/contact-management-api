import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id });

  if (!contact) {
    throw new AppError(400, "Contact not found");
  }

  await contactRepository.delete(contact);
};

export default deleteContactService