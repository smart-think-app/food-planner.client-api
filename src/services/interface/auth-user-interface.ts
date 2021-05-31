import { ILoginRequestDto } from "../models/external-models/auth-models";

export interface IAuthUserServices {
  Login(request: ILoginRequestDto): void;
}
