import express from "express";
import { UserRepo, VerificationCodeRepo } from "./repo.js";
import { checkPassword, generateCode, generateToken, hashPassowrd } from "./utils.js";
import { sendEmail } from "../utils/emails.js";
import { StatusCodes } from "http-status-codes";
import { authenticateToken } from "./middlewares.js";


const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const repo = new UserRepo();
  const vcode = new VerificationCodeRepo()
  const { username, email, password } = req.body;
  const user = await repo.getUserEmail(email);
  if (user) {
    return res.status(400).json({ status: false, message: "User with email already exists" })
  }
  const _password = await hashPassowrd(password);
  const newUser = await repo.createUser(username, email, _password);
  const code = String(generateCode());
  await vcode.createCode(email, code);
  const context = { username: newUser.username, code }
  sendEmail("ethenatx@gmail.com", email, "Email Verification", "registration_email", context)
  res.status(201).json({ status: true, message: "User Created Successfully", data: { username, email } })
})

authRouter.post("/validate-email", async (req, res) => {
  const vcodeRepo = new VerificationCodeRepo();
  const { email, code } = req.body;
  const vcode = await vcodeRepo.getCodeEmail(email);
  if (!vcode && !(await checkPassword(code, vcode.code))) {
    res.status(400).json({ status: false, message: "invalid code or email" })
  }
  await vcodeRepo.deleteVcode(vcode.id);
  res.status(200).json({ status: true, message: "email verified" })

})

authRouter.post("/obtain-token", async (req, res) => {
  const repo = new UserRepo()
  const { email, password } = req.body;
  const user = await repo.getUserEmail(email);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({ status: false, message: "Invalid credentials" })
  }

  if (!(await checkPassword(password, user.password))) {
    const data = { status: false, message: "password incorrect", }
    return res.status(StatusCodes.BAD_REQUEST).json(data);
  }
  const token = generateToken(user.id, user.email);
  const data = { status: true, message: "successfull", data: { token, email: user.email, username: user.username } }
  return res.status(StatusCodes.OK).json(data);
})

authRouter.get("/profile", authenticateToken, async (req, res) => {
  const repo = new UserRepo()
  const user = await repo.getUserEmail(req.user.email);
  res.json({ status: true, data: { id: user.id, email: user.email, username: user.username } });
})

export default authRouter;
