import { projectModel } from "../projects/models.js"

export class ProjectRepo {
  model = projectModel;

  async createProject(projectName, description, user) {
    const data = { projectName, description, user }
    return await this.model.create(data);
  }
  async getProjects(user) {
    return await this.model.find({ user });
  }
  async deleteProject(projectId) {
    return await this.model.deleteOne({ _id: projectId });
  }
  async getProjectCount(user) {
    return await this.model.countDocuments({ user });
  }
  async getProjectById(id) {
    return await this.model.findOne({ _id: id });
  }
}
