import { ApiError } from "../errors/api.error";
import { userRepository } from "../repositories/user.repository";
import { IUserCredentials } from "../types/user.type";
import { passwordService } from "./password.service";

class AuthService {
  public async register(dto: IUserCredentials): Promise<void> {
    try {
      const hashedPassword = await passwordService.hash(dto.password);
      await userRepository.register({ ...dto, password: hashedPassword });
    } catch (e) {
      throw new ApiError(e.messages, e.status);
    }
  }

  public async login(dto: IUserCredentials): Promise<ITokensPair> {
    try {
      const user = await userRepository.getOneByParams({ email: dto.email });

      if (!user) {
        throw new ApiError("Invalid credentials provided", 401);
      }

      const isMatched = await passwordService.compare(
        dto.password,
        user.password,
      );
      if (!isMatched) {
        throw new ApiError("Invalid credentials provided", 401);
      }
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const authService = new AuthService();
