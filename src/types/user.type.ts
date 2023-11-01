import { Document } from "mongoose";

import { EGenders } from "../enums/gender.enum";

export interface IUser extends Document {
  name?: string;
  age?: number;
  genders?: EGenders;
  email?: string;
  password?: string;
}
export type IUserCredentials = Pick<IUser, "email" | "password" | "name">;

// export interface IUserCredentials {
//   email: string;
//   password: string;
// }

// export type IUserCredentials = Omit<IUser, "email" | "password">;
//     ==== те саме, що і наступні рядки
// export interface IUserCredentials {
//   name?: string;
//   age?: number;
//   genders?: EGenders;
// }
