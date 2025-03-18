import express from "express"
import { authenticateToken } from "../auths/middlewares.js"
import { ProjectRepo } from "../projects/repos.js";
import { UserRepo } from "../auths/repo.js";

const projectRouter = express.Router();

projectRouter.get("", authenticateToken, async (req, res) => {
  const repo = new ProjectRepo()
  const user_repo = new UserRepo();
  const user = await user_repo.getUserEmail(req.user.email)
  const projects = await repo.getProjects(user);
  res.status(200).json(projects);
})

projectRouter.get("/delete/:projectId", async (req, res) => {
  const projectId = req.params.projectId;
  console.log(projectId)
  const repo = new ProjectRepo()
  await repo.deleteProject(projectId)
  res.status(200);
})

projectRouter.put("/update", authenticateToken, async (req, res) => {
  const projectId = req.query.projectId;
  const data = req.body;
  const repo = new ProjectRepo();
  const project = await repo.updateProject(projectId, data)
  res.status(200).json({ project })

})

projectRouter.put("/update/template", authenticateToken, async (req, res) => {
  const projectId = req.query.projectId;
  const data = req.body;
  const repo = new ProjectRepo();
  const project = await repo.updateProject(projectId, data)
  res.status(200).json({ project })

})

projectRouter.post("/create", authenticateToken, async (req, res) => {
  const repo = new ProjectRepo()
  const user_repo = new UserRepo();
  const user = await user_repo.getUserEmail(req.user.email)
  const { projectName, description } = req.body
  const doc = await repo.createProject(projectName, description, user);
  res.status(201).json({ status: true, message: "Project created successfull", data: { id: doc.id, projectName, description } })
})

export default projectRouter;
