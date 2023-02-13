import { compare } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { iUserLogin } from "../../interfaces/user.interfaces";
import jwt from "jsonwebtoken";

const loginService = async ({ email, password }: iUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email,
  });

  if (!user) {
    throw new AppError(403, "Invalid email or password");
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError(403, "Invalid email or passwordssssss");
  }

  if (user.isActive === false) {
    throw new AppError(403, "User is inactive");
  }

  const token = jwt.sign(
    {
      isActive: user.isActive,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};

export default loginService;
