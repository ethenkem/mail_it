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
  const [customEmail, setCustomEmail] = useState(project.customEmail ? project.projectName : null)
  const [companyName, setCompanyName] = useState(project.companyName ? project.companyName : "No company name set")
  const [customEmailPassword, setCustomEmailPassword] = useState(project.customEmailPassword ? project.customEmailPassword : null)
  const [projectTemplate, setProjectTemplate] = useState(project.template ? project.template : "No Temaplate Selected")

  const navigate = useNavigate()

  const handleSubmit = async () => {
    setLoading(true)
    const data = {
      projectName,
      description,
      companyName,
      customEmail,
      customEmailPassword,
      template: project.template,
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
        className="absolute top-1/2 left-1/2 w-full max-w-lg transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg mx-4"
      >
        <Typography variant="h6" className="mb-4 text-center sm:text-left">
          Edit Project
        </Typography>

        {/* Project Name */}
        <div className="flex flex-col sm:flex-row mb-6 items-start sm:items-center">
          <p className="w-full sm:w-1/3 mb-2 sm:mb-0">Project Name</p>
          <div className="w-full relative">
            <TextField
              fullWidth
              disabled={projectNamedisabled}
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mb-3"
            />
            <Pencil
              size={24}
              onClick={() => setProjectNamedisabled(!projectNamedisabled)}
              className="absolute right-2 bottom-3 text-gray-500 border rounded-md p-1 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mb-6 items-start sm:items-center">
          <p className="w-full sm:w-1/3 mb-2 sm:mb-0">Project Description</p>
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
            <Pencil
              size={24}
              onClick={() => setProjectNamedisabled(!projectNamedisabled)}
              className="absolute right-2 bottom-3 text-gray-500 border rounded-md p-1 cursor-pointer"
            />
          </div>
        </div>


        <div className="flex flex-col sm:flex-row mb-6 items-start sm:items-center">
          <p className="w-full sm:w-1/3 mb-2 sm:mb-0">Company Name</p>
          <div className="w-full relative">
            <TextField
              fullWidth
              name="companyName"
              disabled={projectNamedisabled}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mb-3"
            />
            <Pencil
              size={24}
              onClick={() => setProjectNamedisabled(!projectNamedisabled)}
              className="absolute right-2 bottom-3 text-gray-500 border rounded-md p-1 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mb-6 items-start sm:items-center">
          <p className="w-full sm:w-1/3 mb-2 sm:mb-0">Project Email</p>
          <div className="w-full relative">
            <TextField
              fullWidth
              disabled={projectNamedisabled}
              value={customEmail}
              name="name"
              onChange={(e) => setCustomEmail(e.target.value)}
              className="mb-3"
            />
            <Pencil
              size={24}
              onClick={() => setProjectNamedisabled(!projectNamedisabled)}
              className="absolute right-2 bottom-3 text-gray-500 border rounded-md p-1 cursor-pointer"
            />
          </div>
        </div>

        {/* Email Password */}
        <div className="flex flex-col sm:flex-row mb-6 items-start sm:items-center">
          <p className="w-full sm:w-1/3 mb-2 sm:mb-0">Email Password</p>
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
            {viewCode === "text" ? (
              <EyeOff
                onClick={() => setViewCode("password")}
                className="absolute right-2 bottom-3 text-gray-400 cursor-pointer"
              />
            ) : (
              <EyeIcon
                onClick={() => setViewCode("text")}
                size={24}
                className="absolute right-2 bottom-3 text-gray-400 cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Project Template */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
          <p className="w-full sm:w-1/3 mb-2 sm:mb-0">Project Template</p>
          <div className="flex w-full border-2 border-gray-400 px-4 py-2 rounded-md justify-between hover:border-gray-500 hover:text-indigo-800">
            <p>{projectTemplate}</p>
            <button
              onClick={() => navigate(`/templates/${project._id}`)}
              className="text-indigo-600 hover:text-indigo-700"
            >
              Change
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={handleClose}
            className="border-2 border-red-400 py-2 px-4 rounded-md text-red-400 hover:text-red-600 hover:border-red-600 w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 w-full sm:w-auto"
          >
            {loading ? "Updating..." : "Save"}
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectSettings;
