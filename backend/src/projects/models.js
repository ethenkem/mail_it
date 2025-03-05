import mongoose, { Model, model, Schema } from "mongoose"


const projectSchema = Schema({
  projectName: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  template: {
    type: String,
    default: null
  },

  customEmail: {
    type: String,
    default: null
  },

  customEmailPassword: {
    type: String,
    default: null
  },

  user: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  }
},
  {
    timestamps: true
  })

export const projectModel = model("projects", projectSchema);
