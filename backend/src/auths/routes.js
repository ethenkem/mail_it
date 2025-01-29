import express from "express";
import { UserRepo } from "./repo.js";
import { checkPassword, generateToken, hashPassowrd } from "./utils.js";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const repo = new UserRepo();
  const { username, email, password } = req.body;
  const user = await repo.getUserEmail(email);
  if (user) {
    return res.status(400).json({ status: false, message: "User with email already exists" })
  }
  const _password = await hashPassowrd(password);
  const newUser = await repo.createUser(username, email, _password);
  res.status(201).json({ status: true, message: "User Created Successfully", data: { username, email } })
})

authRouter.post("/obtain-token", async (req, res) => {
  const repo = new UserRepo()
  const { email, password } = req.body;
  const user = await repo.getUserEmail(email);
  if (!user) {
    return res.status(400).json({ status: false, message: "Invalid credentials" })
  }

  if (!(await checkPassword(password, user.password))) {
    const data = { status: false, message: "password incorrect", }
    return res.status(400).json(data);
  }
  const token = generateToken(user.id, user.email);
  const data = { status: true, message: "successfull", data: { token, email: user.email, username: user.username } }
  return res.status(200).json(data);

})
authRouter.get("/profile", (req, res) => {
  res.json({ "data": "data" });
})
export default authRouter;
