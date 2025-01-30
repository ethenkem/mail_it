import path from "path";
import { emailTranspoter } from "../configs/email.js";
import hbs from "nodemailer-express-handlebars";
import { handlebarOptions } from "./hbs.js";

const emailTemplates = path.join(__dirname, "email_templates");

export const renderWithContext = function(template, context = {}) {
  try {
    const file = fs.readFileSync(`${emailTemplates}/${template}`, "utf-8");
    let html_text = file;
    for (var key in context) {
      html_text = html_text.replace(`{{${key}}}`, context[key]);
    }
    return html_text;
  } catch (error) {
    console.log(error);
    return null;
  }
};

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



