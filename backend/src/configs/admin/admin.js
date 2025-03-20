import AdminJS from "adminjs";
import AdminJSExpress, { log } from "@adminjs/express";
import * as AdminJsMongoose from "@adminjs/mongoose";
import { userModel } from "../../auths/models.js";
import { projectModel } from "../../projects/models.js";
import { EmailModel } from "../../mailings/models.js";
import { TemplateModel } from "../../core/models.js";
import uploadFeature from "@adminjs/upload"
import { componentLoader, Components } from "./components.js";

AdminJS.registerAdapter({
  Resource: AdminJsMongoose.Resource,
  Database: AdminJsMongoose.Database
})

const adminOptions = {
  resources: [
    userModel,
    projectModel,
    EmailModel,
    {
      resource: TemplateModel,
      options: {
        properties: {
          templateName: {
            isVisible: { show: true, edit: true }
          },
        },
        //actions: {
        //  new: {
        //    before: async (request) => {
        //      console.log(request.payload)
        //      console.log("testting the addmin")
        //    }
        //  }
        //}
      }
    }
  ],
  componentLoader,
  branding: {
    companyName: "Mailit",
    logo: "https://res.cloudinary.com/dogmtkcsq/image/upload/v1741617055/Screenshot_From_2025-03-10_14-28-52_ctldyw.png",
    withMadeWithLove: false,
  }
}


export const admin = new AdminJS(adminOptions);

//admin.watch();

export const adminRouter = AdminJSExpress.buildRouter(admin);


