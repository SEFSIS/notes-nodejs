import joi from "joi";

import { regexConstant } from "../constants/regex.constant";
import { EGenders } from "../enums/gender.enum";

export class UserValidator {
  static create = joi.object({
    name: joi.string().min(3).max(20).trim().required(),
    age: joi.number().min(18).max(150).required(),
    genders: joi.valid(...Object.values(EGenders)).required(),
    email: joi
      .string()
      .regex(regexConstant.EMAIL)
      .trim()
      .messages({
        "string.empty": "Email is not valid",
      })
      .required(),
    password: joi.string().regex(regexConstant.PASSWORD).trim().required(),
  });
}
