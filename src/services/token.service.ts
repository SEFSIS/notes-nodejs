import * as jwt from "jsonwebtoken";

import { ITokenPayload } from "../types/token.type";

class TokenService {
  public async generateTokenPair(payload: ITokenPayload) {
    const accessToken = jwt.sign(payload, );
  }
}

export const tokenService = new TokenService();
