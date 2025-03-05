import nodemailer from "nodemailer"
import hbs from "nodemailer-express-handlebars";
import { handlebarOptions } from "../utils/hbs.js";

export class CustomEmailer {
  constructor(EMAIL_USER, EMAIL_USER_PASSWORD) {
    this.EMAIL_USER = EMAIL_USER
    this.EMAIL_USER_PASSWORD = EMAIL_USER_PASSWORD
  }

  createTransport() {
    this.emailTranspoter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: this.EMAIL_USER,
        pass: this.EMAIL_USER_PASSWORD
      }
    })
  }

  sendEmail(to, subject, template, context) {
    this.emailTranspoter.use("compile", hbs(handlebarOptions));
    const mail = {
      from: this.EMAIL_USER,
      to,
      subject,
      template,
      context
    }
    this.emailTranspoter.sendMail(mail);
    this.emailTranspoter.close()
  }
}
