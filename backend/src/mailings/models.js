import mongoose, { model, Schema } from "mongoose"

const EmailSchema = Schema({
  project: {
    type: mongoose.Types.ObjectId,
    ref: "projects"
  },

  from: {
    required: true,
    type: String,
  },

  to: {
    required: true,
    type: String,
  },

  subject: {
    required: true,
    type: String,
  },

  message: {
    required: true,
    type: String,
  },
  sent: {
    type: Boolean,
    default: false
  }
})

export const EmailModel = model("emails", EmailSchema)
