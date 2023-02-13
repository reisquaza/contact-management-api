import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { iContactRequest } from "../../interfaces/contacts.interface";

const createContactService = async ({ email, userId }: iContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const contact = await userRepository.findOneBy({ email });
  const user = await userRepository.findOneBy({ id: userId });

  if (!contact) {
    throw new AppError(400, "User doesn't exists");
  }

  if (!user) {
    throw new AppError(400, "User not found");
  }

  const newContact = contactRepository.create({
    email,
    name: contact.name,
    phoneNumber: contact.phoneNumber,
  });

  await contactRepository.save({ ...newContact, user });

  return newContact;
};

export default createContactService;
