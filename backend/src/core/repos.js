import { TemplateModel } from "./models.js";

export class TemplateRepo {
  model = TemplateModel;

  async addTemplate(templateName, templateDescription, templateFile, templateImage) {
    return await this.model.create({ templateName, templateDescription, templateFile, templateImage });
  }
  async getAll() {
    return await this.model.find({});
  }
}
