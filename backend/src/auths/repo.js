import { userModel } from "./models.js";

export class UserRepo {
  model = userModel;

  async createUser(username, email, password) {
    const data = { username, email, password }
    const doc = new this.model({ data });
    doc.save();
    return doc;
  }

  async getUserEmail(email) {
    //const
  }
}
