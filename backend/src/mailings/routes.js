import { ProjectRepo } from "../projects/repos.js"
import { EmailRepo } from '../mailings/repo.js'
import { CustomEmailer } from "./utils.js"
import express from "express"
import { sendEmail } from "../utils/emails.js"
import fs from "fs"

const mailerRouter = express.Router()


mailerRouter.get("/conf-mail", async (req, res) => {
  const _projectRepo = new ProjectRepo()
  const projectId = req.query.projectId
  const project = await _projectRepo.getProjectById(projectId)
  const file = fs.readFileSync(String(`email_templates/${project.template}.handlebars`), "utf-8")
  res.status(200).json({ project: project, htmlContent: file })
})

mailerRouter.post("/send-mail", async (req, res) => {
  const _projectRepo = new ProjectRepo()
  const _emailRepo = new EmailRepo()
  const projectId = req.query.projectId;
  const project = await _projectRepo.getProjectById(projectId);
  const { to, subject, message, topic, greeting } = req.body;
  try {
    if (!project.customEmail) {
      console.log("sending with default")
      _emailRepo.createEmail(project, "ethenatx@gmail.com", to, subject, message)
      console.log(project.template.split("/"))
      sendEmail("ethenatx@gmail.com", to, subject, project.template, { message: message, topic, greeting })
    }
    else {
      console.log("sending with custom")
      _emailRepo.createEmail(project, project.customEmail, to, subject, message)
      const customEmailConfig = new CustomEmailer(project.customEmail, project.customEmailPassword);
      customEmailConfig.createTransport()
      customEmailConfig.sendEmail(to, subject, project.template, { message: message })
    }
    res.status(200).json({ status: true, message: "Email Sent" })
  }
  catch (err) {
    console.log(err)
    res.status(400).json({ status: false, message: "Mailing failed Check your custom email and code if you are using one" })
  }
})

export default mailerRouter;
