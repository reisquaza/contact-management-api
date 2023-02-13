import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";
import { iContactUpdate } from "../../interfaces/contacts.interface";

const updateContactService = async (
  { email, name, phoneNumber }: iContactUpdate,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id });

  if (!contact) {
    throw new AppError(400, "Contact not found");
  }

  await contactRepository.update(id, {
    name: name ? name : contact.name,
    phoneNumber: phoneNumber ? phoneNumber : contact.phoneNumber,
    email: email ? email : contact.email,
  });

  const updatedContact = await contactRepository.findOneBy({ id });

  return updatedContact!;
};
export default updateContactService;
