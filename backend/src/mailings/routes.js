import { ProjectRepo } from "../projects/repos.js"
import { EmailRepo } from '../mailings/repo.js'
import { EmailModel } from "./models.js"
import { CustomEmailer } from "./utils.js"
import express from "express"

const mailerRouter = express.Router()

mailerRouter.post("/send-mail", async (req, res) => {
  const _projectRepo = new ProjectRepo()
  const _emailRepo = new EmailModel()
  const projectId = req.param.projectId;
  const project = await _project_repo.getProjectById(projectId);
  const { to, subject, message } = req.body;
  try {
    if (!project.customEmail) {
      _emailRepo.createEmail(project, "ethenatx@gmail.com", to, subject, message)
      sendEmail("ethenatx@gmail.com", to, subject, project.template, { message: message })
    }
    else {
      _emailRepo.createEmail(project, project.customEmail, to, subject, message)
      const customEmailConfig = new CustomEmailer(project.customEmail, project.customEmailPassword);
      customEmailConfig.createTransport()
      customEmailConfig.sendEmail(to, subject, project.template, { message: message })
    }
    res.status(200).json({ status: true, message: "Email Sent" })
  }
  catch {
    res.status(400).json({ status: false, message: "Mailing failed" })
  }
})

export default mailerRouter;
