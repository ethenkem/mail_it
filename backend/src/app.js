import express from "express";
import morgan from "morgan";
import authRouter from "./auths/routes.js";
import { TOKEN_KEY } from "./configs/constants.js";
import { mongoDbConfig } from "./configs/db.js";

const app = express();

mongoDbConfig();

app.use(morgan("dev"));

app.use(express.json());

app.use("/auth", authRouter);
export default app;
