import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { iUserUpdate } from "../../interfaces/user.interfaces";

const updateUserService = async (
  { email, name, password, phoneNumber }: iUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(400, "User not found");
  }

  await userRepository.update(id, {
    name: name ? name : user.name,
    phoneNumber: phoneNumber ? phoneNumber : user.phoneNumber,
    email: email ? email : user.email,
    password: password ? await hash(password, 10) : user.password,
  });

  const updatedUser = await userRepository.findOneBy({ id });

  return updatedUser!;
};

export default updateUserService;
