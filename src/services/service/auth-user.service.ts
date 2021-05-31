import { IUserSchema } from "../../repository/models/user-schema";
import { IUserRepository } from "../../repository/interface/user-repo-interface";
import { ILoginRequestDto } from "../models/external-models/auth-models";
import { IAuthUserServices } from "../interface/auth-user-interface";

export class AuthUserService implements IAuthUserServices {
  UserRepo: IUserRepository;
  constructor(userRepo: IUserRepository) {
    this.UserRepo = userRepo;
  }

  async Login(request: ILoginRequestDto) {
    try {
      const modelUser: IUserSchema = {
        first_name : "",
        last_name : "",
        age: 0,
        password: request.password,
        created_date : Date.now(),
        email:request.email,
        body_params: null,
        status: 0,
      }

      await this.UserRepo.CreateUser(modelUser)

    } catch (err) {
      console.log(err)
      throw new Error("Internal Error")
    }
  }
}
