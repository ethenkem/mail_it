import epxress from "express"
import { authenticateToken } from "../auths/middlewares.js"
import { ProjectRepo } from "../projects/repos.js";

const projectRouter = express.Router();


projectRouter.post("/add-project", authenticateToken, async (req, res) => {
  const repo = new ProjectRepo()
  const user = req.user;
  console.log(user)
  const { projectName, description } = req.body
  const doc = await repo.createProject(projectName, description);
  res.status(201).json({ status: true, message: "Project created successfull", data: { id: doc.id, projectName, description } })
})

export default projectRouter;
