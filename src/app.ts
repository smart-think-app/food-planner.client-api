import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import * as mongodb from "mongodb"
import { UserController } from "./controller/user.controller";
import { BaseRequestNotFoundDto } from "./controller/models/base-request-dto";
const app: Application = express();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

var Database
const url = "mongodb://localhost:27017/"
mongodb.MongoClient.connect(url , (err , db) => {
  if (err) {
    throw err
  }
  Database = db.db("food-planner-user")
})

app.get("/api/v1/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Food-Planner-API",
    code: 200
  });
});

app.use("/api/v1/users", UserController);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(400).json(new BaseRequestNotFoundDto());
});

export { app };
