import { IUserSchema } from "../models/user-schema";

export interface IUserRepository {
  CreateUser(model: IUserSchema): void;
}
