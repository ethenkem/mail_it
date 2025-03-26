import { Modal, Box } from '@mui/material'
import React from 'react'
import { ClimbingBoxLoader, RingLoader } from 'react-spinners'

function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-800 opacity-75 flex justify-center items-center z-50">
      <div className="p-8 flex  justify-center flex-col items-center rounded-md">
        <RingLoader color='white' size={100} className='mb-10' />
        <p className="mb-4 text-white text-3xl">Loading Template...</p>
      </div>
    </div>
  )
}

export default Loading
