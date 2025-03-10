import express from "express";
import morgan from "morgan";
import authRouter from "./auths/routes.js";
import mailerRouter from "./mailings/routes.js"
import { runMongoDbConfig } from "./configs/db.js";
import cors from "cors"
import projectRouter from "./projects/routes.js";
import coreRouter from "./core/routes.js";
import { admin, adminRouter } from "./configs/admin/admin.js";
//import { corsOptions } from "./configs/cors.js"

const app = express();

runMongoDbConfig();

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);
app.use("/projects", projectRouter)
app.use("/mailers", mailerRouter)
app.use("/core", coreRouter)

app.use(admin.options.rootPath, adminRouter);

export default app;
