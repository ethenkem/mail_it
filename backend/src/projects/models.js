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

  user: {
    type: mongoose.Types.ObjectId, 
    ref: "users",
  }
})

export const projectModel = model("projects", projectSchema);
