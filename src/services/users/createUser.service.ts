import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { iUserRequest } from "../../interfaces/user.interfaces";

const createUserService = async ({
  email,
  name,
  password,
  phoneNumber,
}: iUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  if (!password) {
    throw new AppError(400, "Password is missing");
  }

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(400, "Email already exists");
  }

  const hashedPassword = await hash(password, 10);

  const newUser = userRepository.create({
    name,
    email,
    password: hashedPassword,
    phoneNumber,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
