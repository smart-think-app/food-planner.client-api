import { Collection } from "mongodb";
import { IUserSchema } from './../models/user-schema';
import { IUserRepository } from "../interface/user-repo-interface";
export class UserRepository implements IUserRepository {
  UserCollection: Collection;

  constructor(userCollection: Collection) {
    this.UserCollection = userCollection;
  }

  CreateUser(model: IUserSchema) {
    return new Promise((resolve, reject) => {
      this.UserCollection.insertOne(model, (err: Error, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
}
