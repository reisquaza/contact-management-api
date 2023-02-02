import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { iUsersRequest } from "../../interfaces/users.interfaces";

const createUserService = async ({
  name,
  email,
  telephone,
  password,
}: iUsersRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  if (!password) {
    throw new AppError(400, "Password is missing");
  }

  const hashedPassword = await hash(password, 10);

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(400, "Email already exists");
  }

  const newUser = userRepository.create({
    name,
    email,
    password: hashedPassword,
    telephone,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
