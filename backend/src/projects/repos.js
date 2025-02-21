import { projectModel } from "../projects/models.js"

export class ProjectRepo {
  model = projectModel;

  async createProject(projectName, description, user) {
    const data = { projectName, description, user}
    return await this.model.create(data);
  }
  async getProjects(user) {
    return await this.model.find({ user });
  }
  async getProjectById(id) {
    return await this.model.findOne({ id });
  }
}
