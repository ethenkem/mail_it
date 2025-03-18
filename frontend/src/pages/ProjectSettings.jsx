import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import { EyeIcon, EyeOff, Pencil } from "lucide-react";

const ProjectSettings = ({ open, handleClose, project, handleSave }) => {
  const [formData, setFormData] = useState({ ...project });
  const [viewCode, setViewCode] = useState("password")
  const [projectNamedisabled, setProjectNamedisabled] = useState(true)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    handleSave(formData);
    handleClose();
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
              value={project?.projectName}
              name="name"
              onChange={handleChange}
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
              //label="Description"
              name="description"
              disabled={projectNamedisabled}
              multiline
              rows={2}
              value={project?.description}
              onChange={handleChange}
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
              value={project?.customEmail}
              name="name"
              onChange={handleChange}
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
              name="emailCode"
              value={project?.customEmailPassword}
              className="mb-3"
            />
            {viewCode == "text" ? <EyeOff onClick={() => setViewCode("password")} className="absolute left-106 bottom-4 text-gray-400" /> : <EyeIcon onClick={() => setViewCode("text")} size={30} className="absolute left-106 bottom-4 text-gray-400" />}
          </div>
        </div>
        <button onClick={() => navigate(`/templates/${project._id}`)} className="bg-indigo-600 hover:bg-indigo-700 text-center rounded-md py-3 mb-3 text-white w-full">
          Select Template
        </button>
        <div className="flex justify-between space-x-2">
          <Button className="mr-3" onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-indigo-600" variant="contained">
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectSettings;
