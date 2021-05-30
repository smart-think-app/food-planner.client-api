import express, { Router, Request, Response, NextFunction } from "express";
import { BaseSuccessRequestDto } from './models/base-request-dto';
export const UserController: Router = express.Router();
UserController.post(
  "/sign-in",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(new BaseSuccessRequestDto("sign-in-success", null));
  }
);

UserController.post(
  "/login",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(new BaseSuccessRequestDto("login success" , null));
  }
);

UserController.post(
  "/user-params",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(new BaseSuccessRequestDto("init user parameters success" , null));
  }
);

UserController.get(
  "/user-params",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(new BaseSuccessRequestDto("get user parameters" , null));
  }
);
