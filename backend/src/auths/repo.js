import { userModel, verificationCodeModel } from "./models.js";
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


  async getUserById(id) {
    return this.model.findOne({ id });
  }
}


export class VerificationCodeRepo {
  model = verificationCodeModel

  async createCode(email, code) {
    const hashedCode = await hashPassowrd(code);
    const data = { email, code: hashedCode }
    const doc = this.model.create(data);
    return doc;
  }

  async getCodeEmail(email) {
    return this.model.findOne({ email })
  }

  async deleteVcode(email) {
    await this.model.deleteOne({ email });
  }
}
