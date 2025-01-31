import bcrypt from "bcrypt"
import { SALT_VALUE, TOKEN_KEY } from "../configs/constants.js";
import jwt from "jsonwebtoken";

export const hashPassowrd = async (password) => {
  const hashedPassowrd = bcrypt.hash(password, parseInt(SALT_VALUE));
  return hashedPassowrd;
}

export const checkPassword = async (password, hashedPassowrd) => {
  return await bcrypt.compare(password, hashedPassowrd);
}

export const generateToken = (id, email) => {
  const data = { id, email }
  return jwt.sign(data, TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
}

export function generateCode() {
  return Math.floor(Math.random() * (9999 - 1000)) + 1000;
}
