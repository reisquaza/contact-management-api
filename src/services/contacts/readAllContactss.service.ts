import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const readAllContactsService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(400, "User not found");
  }

  return user.contacts;
};

export default readAllContactsService;
