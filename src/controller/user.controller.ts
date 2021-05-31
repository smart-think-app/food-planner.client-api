import express, { Router, Request, Response, NextFunction } from "express";
import { BaseSuccessResponseDto, InternalErrorResponseDto } from './models/base-request-dto';
import { UserRepository } from './../repository/repo/user.repo';
import { DbConnection } from './../provider/mongo-provider';
import * as mongodb from "mongodb"
import { AuthUserService } from './../services/service/auth-user.service';
export const UserController: Router = express.Router();
UserController.post(
  "/sign-in",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(new BaseSuccessResponseDto("sign-in-success", null));
  }
);

UserController.post(
  "/login",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      var dbo: any = DbConnection().Get()
      let userCollection: mongodb.Collection = dbo.collection("user")
      const userRp = new UserRepository(userCollection)
      const authSv = new AuthUserService(userRp)
      authSv.Login(req.body)
      res.status(200).json(new BaseSuccessResponseDto("login success" , null));
    } catch (error) {
      res.status(500).json(new InternalErrorResponseDto());
    }
  }
);

UserController.post(
  "/user-params",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(new BaseSuccessResponseDto("init user parameters success" , null));
  }
);

UserController.get(
  "/user-params",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(new BaseSuccessResponseDto("get user parameters" , null));
  }
);
