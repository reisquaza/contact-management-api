import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const readUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return users;
};

export default readUsersService