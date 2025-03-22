import cloudinary from "cloudinary"
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "../constants.js";

const cloudinaryV2 = cloudinary.v2

cloudinaryV2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
})

export async function handleUploadTemaplates(file) {
  try {
    const res = await cloudinaryV2.uploader.upload(file, {
      resource_type: "auto",
      folder: "MailitTemplates",
      format: "html"
    });
    return res;
  } catch (err) {
    console.log(err)
  }
}


export async function handleUploadCustomTemaplates(file) {
  try {
    const res = await cloudinaryV2.uploader.upload(file, {
      resource_type: "auto",
      folder: "MailitCustomTemplates",
      format: "html"
    });
    return res;
  } catch (err) {
    console.log(err)
  }
}

export async function handleUploadTemaplateImage(file) {
  try {
    const res = await cloudinaryV2.uploader.upload(file, {
      resource_type: "auto",
      folder: "MailitTemplatesImages"
    });
    return res;
  } catch (err) {
    console.log(err)
  }
}
