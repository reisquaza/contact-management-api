import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(400, "User not found");
  }

  if (user.isActive === false) {
    throw new AppError(400, "This user is inactive");
  }

  user.isActive = false;
  await userRepository.save(user);

  const deletedUser = await userRepository.findOneBy({ id });

  return deletedUser;
};
export default deleteUserService;
