import { Schema, model } from "mongoose"

const TemplateSchema = Schema({
  templateName: {
    type: String,
    required: true
  },
  templateDescription: {
    type: String,
    required: true
  },
  templateImage: {
    type: String,
    required: true
  },

  templateFile: {
    type: String,
    required: true
  }
}, { timestamps: true })

export const TemplateModel = model("templates", TemplateSchema);
