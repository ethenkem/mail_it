import { ProjectRepo } from "../projects/repos.js"
import { EmailRepo } from '../mailings/repo.js'
import { CustomEmailer } from "./utils.js"
import express from "express"
import { sendEmail } from "./utils.js"
import axios from "axios"
import fs from "fs"
import { log } from "console"

const mailerRouter = express.Router()


mailerRouter.get("/conf-mail", async (req, res) => {
  const _projectRepo = new ProjectRepo()
  const projectId = req.query.projectId
  const project = await _projectRepo.getProjectById(projectId)
  const cldres = await axios.get(project.template, { responseType: "text" })
  res.status(200).json({ project: project, htmlContent: cldres.data })
})

mailerRouter.post("/send-mail", async (req, res) => {
  const _projectRepo = new ProjectRepo()
  const _emailRepo = new EmailRepo()
  const projectId = req.query.projectId;
  const project = await _projectRepo.getProjectById(projectId);
  const { to, subject, message, topic, greeting } = req.body;
  console.log(message)
  try {
    if (!project.customEmail) {
      console.log("sending with default")
      _emailRepo.createEmail(project, "ethenatx@gmail.com", to, subject, message)
      console.log(project.template)
      const response = await fetch(project.template);
      if (!response.ok) {
        throw new Error(`Failed to fetch template: ${response.statusText}`);
      }
      const htmlContent = await response.text();
      const today = new Date()
      console.log(htmlContent)
      const htmlMessage = htmlContent.replace("{{ message }}", message)
        .replace("{{ topic }}", topic)
        .replace("{{ greeting }}", greeting)
        .replace("{{ year }}", today.getFullYear())
        .replace("{{ company_name }}", project.projectName);
      sendEmail("ethenatx@gmail.com", to, subject, htmlMessage)
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
