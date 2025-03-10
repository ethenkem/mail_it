import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const ProjectSettings = ({ open, handleClose, project, handleSave }) => {
  const [formData, setFormData] = useState({ ...project });

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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <Typography variant="h6" className="mb-4">
          Edit Project
        </Typography>
        <TextField
          fullWidth
          label="Project Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-3"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          className="mb-3"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-3"
        />
        <TextField
          fullWidth
          label="Email Code"
          name="emailCode"
          value={formData.emailCode}
          onChange={handleChange}
          className="mb-3"
        />
        <TextField
          fullWidth
          label="Template Selected"
          name="templateSelected"
          value={formData.templateSelected}
          onChange={handleChange}
          className="mb-4"
        />
        <div className="flex justify-end space-x-2">
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectSettings;
