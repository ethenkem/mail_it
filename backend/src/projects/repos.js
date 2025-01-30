import { projectModel } from "../projects/models.js"

export class ProjectRepo {
  model = projectModel;

  async createProject(projectName, description) {
    const data = { projectName, description }
    return await this.model.create(data);
  }
  async getProjectById(id) {
    return await this.model.findOne({ id });
  }
}
