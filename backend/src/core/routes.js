import express from "express";
import fs from "fs"
import { templateUploadMiddleware } from "../configs/media/middlewares.js"
import { handleUploadTemaplateImage, handleUploadTemaplates, handleUploadCustomTemaplates } from "../configs/media/cloudinary.js";
import { TemplateRepo } from "./repos.js";
import { authenticateToken } from "../auths/middlewares.js";
import { ProjectRepo } from "../projects/repos.js";
import { EmailRepo } from "../mailings/repo.js";
import { UserRepo } from "../auths/repo.js";
import axios from "axios";
const coreRouter = express.Router()

coreRouter.post("/upload-template", templateUploadMiddleware, async (req, res) => {
  const repo = new TemplateRepo()
  const { templateName, templateDescription } = req.body;
  const templateFile = req.files["templateFile"][0];
  const templateImage = req.files["templateImage"][0];
  const templateImageB64 = Buffer.from(templateImage.buffer).toString("base64");
  const templateFileB64 = Buffer.from(templateFile.buffer).toString("base64");
  let dataURI = "data:" + templateImage.mimetype + ";base64," + templateImageB64;
  let templateFileDataURI = "data:" + templateFile.mimetype + ";base64," + templateFileB64;
  const cldRes = await handleUploadTemaplateImage(dataURI);
  const cldTemplateRes = await handleUploadTemaplates(templateFileDataURI)
  const template = await repo.addTemplate(templateName, templateDescription, cldTemplateRes.secure_url, cldRes.secure_url);
  res.status(200).json({ status: true, message: "template has been added", data: template });
})


coreRouter.post("/upload-raw-custom-template", templateUploadMiddleware, async (req, res) => {
  const repo = new TemplateRepo()
  const projectRepo = new ProjectRepo()
  const projectId = req.query.projectId;
  const { templateName, rawTemplate } = req.body;
  console.log(rawTemplate)
  const date = new Date()
  const _templateFile = `email_templates/${templateName + "_" + projectId}.html`
  fs.writeFileSync(_templateFile, rawTemplate);
  const cldRes = await handleUploadCustomTemaplates(_templateFile)
  fs.unlinkSync(_templateFile)
  const project = await projectRepo.updateProject(projectId, { template: cldRes.secure_url })
  res.status(200).json({ status: true, message: "Template has been added", data: null });
})


coreRouter.get("/templates", async (req, res) => {
  const repo = new TemplateRepo()
  const templates = await repo.getAll()
  res.status(200).json(templates);
})

coreRouter.get("/templates/load", async (req, res) => {
  console.log(req.query.template)
  const templateFileUri = req.query.template
  try {
    const cldres = await axios.get(templateFileUri, { responseType: "text" })
    res.status(200).json({ htmlContent: cldres.data })
  } catch (err) {
    console.log(err)
    res.status(400).json({ htmlContent: null })
  }
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
