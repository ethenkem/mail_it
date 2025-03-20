import { Box, Modal } from '@mui/material'
import React from 'react'

function Alert({ open, onClose, message }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="flex justify-center items-center">
        <p>kksk</p>
      </Box>
    </Modal>
  )
}

export default Alert
