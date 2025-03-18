import React, { useContext, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import { EyeIcon, EyeOff, Pencil } from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../configs/constants";
import UserContext from "../contexts/UserContext";

const ProjectSettings = ({ open, handleClose, project, handleSave }) => {
  const { user, setUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [viewCode, setViewCode] = useState("password")
  const [projectNamedisabled, setProjectNamedisabled] = useState(true)
  const [projectName, setProjectName] = useState(project.projectName)
  const [description, setDescription] = useState(project.description)
  const [customEmail, setCustomEmail] = useState(project.customEmail ? project.projectName : "No Custom Email")
  const [customEmailPassword, setCustomEmailPassword] = useState(project.customEmailPassword ? project.customEmailPassword : "No Email Secret Code")
  const [projectTemplate, setProjectTemplate] = useState(project.template ? project.template : "No Temaplate Selected")

  const navigate = useNavigate()

  const handleSubmit = async () => {
    setLoading(true)
    const data = {
      projectName,
      description,
      customEmail,
      customEmailPassword,
      template: projectTemplate,
    }
    const res = await axios.put(`${BACKEND_URL}/projects/update/?projectId=${project._id}`, data, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json',
      }
    })
    console.log(res)
    handleClose();
    setLoading(false)
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg"
      >
        <Typography variant="h6" className="mb-4">
          Edit Project
        </Typography>
        <div className="flex mb-7 justify-between items-center">
          <p className="w-1/3">Project Name</p>
          <div className="w-full relative">
            <TextField
              fullWidth
              disabled={projectNamedisabled}
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mb-3"
            />
            <Pencil size={30} onClick={() => setProjectNamedisabled(!projectNamedisabled)} className="absolute left-107 bottom-3 text-gray-500 border-1 rounded-md px-1 py-1" />
          </div>
        </div>

        <div className="flex mb-7 justify-between items-center">
          <p className="w-1/3">Project Description</p>

          <div className="w-full relative">
            <TextField
              fullWidth
              name="description"
              disabled={projectNamedisabled}
              multiline
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mb-3"
            />
            <Pencil size={30} onClick={() => setProjectNamedisabled(!projectNamedisabled)} className="absolute left-107 bottom-3 text-gray-500 border-1 rounded-md px-1 py-1" />
          </div>
        </div>

        <div className="flex mb-7 justify-between items-center">
          <p className="w-1/3">Project Email</p>
          <div className="w-full relative">
            <TextField
              fullWidth
              disabled={projectNamedisabled}
              value={customEmail}
              name="name"
              onChange={(e) => setCustomEmail(e.target.value)}
              className="mb-3"
            />
            <Pencil size={30} onClick={() => setProjectNamedisabled(!projectNamedisabled)} className="absolute left-107 bottom-3 text-gray-500 border-1 rounded-md px-1 py-1" />
          </div>
        </div>


        <div className="flex mb-7 justify-between items-center">
          <p className="w-1/3">Email Password</p>
          <div className="relative w-full">
            <TextField
              fullWidth
              type={viewCode}
              disabled={projectNamedisabled}
              name="emailCode"
              value={customEmailPassword}
              onChange={(e) => setCustomEmailPassword(e.target.value)}
              className="mb-3"
            />
            {viewCode == "text" ? <EyeOff onClick={() => setViewCode("password")} className="absolute left-106 bottom-4 text-gray-400" /> : <EyeIcon onClick={() => setViewCode("text")} size={30} className="absolute left-106 bottom-4 text-gray-400" />}
          </div>
        </div>
        <div className="flex items-center mb-4">
          <p className="w-1/3">Project Template</p>
          <div className="flex relative border-gray-400 border-2 px-4 items-center hover:border-gray-500 hover:text-indigo-800 rounded-md  justify-between w-full">
            <p className="">{projectTemplate}</p>
            <button onClick={() => navigate(`/templates/${project._id}`)} className="text-center rounded-md py-3 text-indigo-600 ">
              Change
            </button>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <button onClick={handleClose} className="border-2 border-red-400 py-2 px-2 rounded-md text-red-400 hover:text-red-600 hover:border-red-600">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-indigo-600 text-white rounded-md px-4 hover:bg-indigo-700 py-2" variant="contained">
            {loading ? "updating.." : "Save"}
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectSettings;
