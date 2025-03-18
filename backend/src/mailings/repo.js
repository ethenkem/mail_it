import { EmailModel } from "./models.js"

export class EmailRepo {
  model = EmailModel;

  async createEmail(project, from, to, subject, message) {
    return await this.model.create({ project, from, to, subject, message })
  }

  async getUserEmailCount(user) {
    return await this.model.countDocuments({ user })
  }
}

