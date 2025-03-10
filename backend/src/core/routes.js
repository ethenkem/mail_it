import express from "express";
import fs from "fs"
import { templateUploadMiddleware } from "../configs/media/middlewares.js"
import { handleUpload } from "../configs/media/cloudinary.js";
import { TemplateRepo } from "./repos.js";
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
  const template = await repo.addTemplate(templateName, templateDescription, _template, cldRes.secure_url);
  res.status(200).json({ status: true, message: "template has been added", data: template });
})

export default coreRouter;
