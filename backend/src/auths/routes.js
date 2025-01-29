import express from "express";
import { UserRepo } from "./repo.js";
import { hashPassowrd } from "./utils.js";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const repo = new UserRepo();
  const { username, email, password } = req.body;
  console.log(username, email);

  const _password = await hashPassowrd(password);
  const newUser = await repo.createUser(username, email, _password);
  res.status(201).json({ status: true, message: "User Created Successfully", data: { username, email } })
})

authRouter.post("/obtain-token", async (req, res) => {
  const { email, password } = req.body;

})
authRouter.get("/profile", (req, res) => {
  res.json({ "data": "data" });
})
export default authRouter;
