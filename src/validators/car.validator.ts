import joi from "joi";

import { EProducer } from "../enums/producer.enum";

export class CarValidator {
  static year = joi.number().min(1990).max(2023);
  static modelka = joi.string().min(3).max(30).trim();
  static producer = joi.valid(...Object.values(EProducer));

  static create = joi.object({
    year: this.year.required(),
    modelka: this.modelka.required(),
    producer: this.producer.required(),
  });
  static update = joi.object({
    year: this.year,
    modelka: this.modelka,
  });
}
