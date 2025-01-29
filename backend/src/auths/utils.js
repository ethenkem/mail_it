import bcrypt from "bcrypt"
import { SALT_VALUE, TOKEN_KEY } from "../configs/constants.js";
import jwt from "jsonwebtoken";

export const hashPassowrd = async (password) => {
  const hashedPassowrd = await bcrypt.hash(password, SALT_VALUE);
  return hashedPassowrd;
}


export const checkPassword = async (password, hashedPassowrd) => {
  return await bcrypt.compare(password, hashedPassowrd);
}

export const generateToken = async (id, email) => {
  const data = { id, email }
  return jwt.sign(data, TOKEN_KEY);
}
