import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    dafault: new Date()
  }
})

const verificationCodeSchema = new Schema({
  email: {
    type: String,
    required: true
  },

  code: {
    type: String,
    required: true
  }
})

export const verificationCodeModel = model("verificationCodes", verificationCodeSchema)
export const userModel = model("users", userSchema);
