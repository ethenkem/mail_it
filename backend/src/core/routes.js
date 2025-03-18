import express from "express";
import fs from "fs"
import { templateUploadMiddleware } from "../configs/media/middlewares.js"
import { handleUpload } from "../configs/media/cloudinary.js";
import { TemplateRepo } from "./repos.js";
import { authenticateToken } from "../auths/middlewares.js";
import { ProjectRepo } from "../projects/repos.js";
import { EmailRepo } from "../mailings/repo.js";
import { UserRepo } from "../auths/repo.js";
const coreRouter = express.Router()

coreRouter.post("/upload-template", templateUploadMiddleware, async (req, res) => {
  const repo = new TemplateRepo()
  const { templateName, templateDescription } = req.body;
  const templateFile = req.files["templateFile"][0];
  const templateImage = req.files["templateImage"][0];
  const b64 = Buffer.from(templateImage.buffer).toString("base64");
  const _template = `email_templates/${templateFile.originalname}.hbs`
  fs.writeFileSync(_template, templateFile.buffer);
  let dataURI = "data:" + templateImage.mimetype + ";base64," + b64;
  const cldRes = await handleUpload(dataURI);

  console.log("ksks")
  const template = await repo.addTemplate(templateName, templateDescription, _template, cldRes.secure_url);
  res.status(200).json({ status: true, message: "template has been added", data: template });
})


coreRouter.post("/upload-raw-template", templateUploadMiddleware, async (req, res) => {
  const repo = new TemplateRepo()
  const projectId = req.query.projectId;
  const { templateName, rawTemplate } = req.body;
  console.log(rawTemplate)
  //const b64 = Buffer.from(templateImage.buffer).toString("base64");
  const date = new Date()
  const _template = `email_templates/${templateName + "_" + projectId}.hbs`
  fs.writeFileSync(_template, rawTemplate);
  //let dataURI = "data:" + templateImage.mimetype + ";base64," + b64;
  res.status(200).json({ status: true, message: "template has been added", data: null });
})

coreRouter.get("/templates", async (req, res) => {
  const repo = new TemplateRepo()
  const templates = await repo.getAll()
  res.status(200).json(templates);
})

coreRouter.get("/stats", authenticateToken, async (req, res) => {
  const _user = req.user;
  const projectRepo = new ProjectRepo()
  const userRepo = new UserRepo()
  const emailCampaignsRepo = new EmailRepo()
  const user = await userRepo.getUserEmail(_user.email)
  const projectCount = await projectRepo.getProjectCount(user);
  //const campaignCount = emailCampaignsRepo.getUserEmailCount(user);
  res.status(200).json({ projectCount, campaignCount: 0 })
})

export default coreRouter;
