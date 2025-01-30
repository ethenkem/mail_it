import { Model, model, Schema } from "mongoose"


const projectSchema = Schema({
  projectName: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }
})

export const projectModel = model("projects", projectSchema);
