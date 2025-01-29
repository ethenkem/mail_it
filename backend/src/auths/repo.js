import { userModel } from "./models.js";

export class UserRepo {
  model = userModel;

  async createUser(username, email, password) {
    const data = { username, email, password }
    const doc = this.model.create(data);
    return doc;
  }

  async getUserEmail(email) {
    return this.model.findOne({ email });
  }
}
