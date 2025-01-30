import { userModel } from "./models.js";
import { hashPassowrd } from "./utils.js";

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


export class CodeRepo {
  model = verificationCodeModel

  async createCode(email, code) {
    const hashedCode = await hashPassowrd(code);
    const data = { email, hashPassowrd }
    const doc = this.model.create();
    return doc;
  }

  async getCodeEmail(email) {
    return this.model.findOne({ email })
  }
}
