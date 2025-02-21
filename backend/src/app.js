import express from "express";
import morgan from "morgan";
import authRouter from "./auths/routes.js";
import { runMongoDbConfig } from "./configs/db.js";
import cors from "cors"
import projectRouter from "./projects/routes.js";
//import { corsOptions } from "./configs/cors.js"

const app = express();

runMongoDbConfig();

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);
app.use("/projects", projectRouter)

export default app;
