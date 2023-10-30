import { ApiError } from "../errors/api.error";
import { userRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.type";

class UserService {
  public async getAll(): Promise<IUser[]> {
    return await userRepository.getAll();
  }

  public async createUser(dto: IUser): Promise<IUser> {
    await this.isEmailUnique(dto.email);

    return await userRepository.createUser(dto);
  }

  public async updateUser(userId: string, dto: Partial<IUser>): Promise<IUser> {
    return await userRepository.updateUser(userId, dto);
  }

  public async deleteUser(userId: string): Promise<void> {
    await userRepository.deleteUser(userId);
  }

  private async isEmailUnique(email: string): Promise<void> {
    const user = await userRepository.getOneByParams({ email });
    if (user) {
      throw new ApiError("Email is already exist", 409);
    }
  }
}

export const userService = new UserService();
