import nodemailer from "nodemailer"
import { EMAIL_USER, EMAIL_USER_PASSWORD } from "./constants"

export const emailTranspoter = nodemailer.createTransport({
  service: "gmail",
  auth:{
    user: EMAIL_USER,
    pass: EMAIL_USER_PASSWORD
  }
})
