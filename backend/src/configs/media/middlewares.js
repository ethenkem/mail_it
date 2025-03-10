import multer from "multer";

const upload = multer({ storage: multer.memoryStorage()})

export const templateUploadMiddleware = upload.fields(
  [{ name: "templateFile", maxCount: 1 },
  { name: "templateImage", maxCount: 1 }]
);
