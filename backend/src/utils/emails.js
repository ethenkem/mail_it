import { emailTranspoter } from "../configs/email.js";
import hbs from "nodemailer-express-handlebars";
import { handlebarOptions } from "./hbs.js";

export const sendEmail = (from, to, subject, template, context) => {
  emailTranspoter.use("compile", hbs(handlebarOptions));
  const mail = {
    from,
    to,
    subject,
    template,
    context
  }
  emailTranspoter.sendMail(mail);
}



