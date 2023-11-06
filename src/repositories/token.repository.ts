import { FilterQuery } from "mongoose";

import { Token } from "../models/Token.model";
import { IToken } from "../types/token.type";

export class TokenRepository {
  public async create(dto: Partial<IToken>): Promise<IToken> {
    return (await Token.create(dto)) as IToken;
  }

  public async findOne(params: FilterQuery<IToken>): Promise<IToken> {
    return await Token.findOne(params);
  }

  public async deleteOne(params: FilterQuery<IToken>): Promise<void> {
    await Token.deleteOne(params);
  }

  public async deleteManyByParams(params: FilterQuery<IToken>): Promise<void> {
    await Token.deleteMany(params);
  }

  public async deleteManyByUserId(userId: string): Promise<void> {
    await Token.deleteMany({ _userId: userId });
  }

  // public async deleteManyByUserId(userId: string): Promise<void> {о
  //   await Token.deleteMany(); //суперадмін так розлогує всіх юзерів
  // }
}

export const tokenRepository = new TokenRepository();
