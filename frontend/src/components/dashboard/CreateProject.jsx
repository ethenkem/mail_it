import { Box, Modal } from '@mui/material'
import axios from 'axios'
import { FeatherIcon, Pin, SquareChartGantt } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { BACKEND_URL } from '../../configs/constants'
import UserContext from '../../contexts/UserContext'

function CreateProject({ showCreateProjectModal, setShowCreateProjectModal, fetchProjects }) {
  const [projectName, setProjectName] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const { user } = useContext(UserContext)

  const handleSubmit = async () => {
    const data = { projectName, description }
    console.log(user)
    setLoading(true)
    try {
      const res = await axios.post(`${BACKEND_URL}/projects/create`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        }
      },)
      setShowCreateProjectModal(false);
      setProjectName("")
      setDescription("")
      setLoading(false)
      await fetchProjects()
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <Modal className="flex justify-center items-center px-4 md:px-0" open={showCreateProjectModal} onClose={() => setShowCreateProjectModal(false)}>
      <Box className="flex flex-col space-y-4 justify-center bg-white w-auto px-8 py-8 rounded-md">
        <div>
          <div className='mb-4'>
            <p className='text-xl line-clamp-1'>Create a project for your brand or organiation</p>
          </div>
          <div className='flex flex-col justify-center mb-4'>
            <label className='text-lg mb-2'>Project Name</label>
            <div className="relative">
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Pin size={20} className='text-gray-400' />
              </div>
              <input className='bg-white pl-10 w-full outline-1 outline-gray-300 rounded-md px-4 py-2' placeholder='Shop Project' value={projectName} onChange={(e) => { setProjectName(e.target.value) }} />
            </div>
          </div>
          <div className='flex flex-col justify-center mb-4'>
            <label className='text-lg mb-2'>Project Describtion</label>
            <div className='relative'>
              <div className='absolute pl-3 pt-2 left-0 flex items-center'>
                <SquareChartGantt className='text-gray-400' />
              </div>
              <textarea rows={10} className='bg-white pl-10 w-full outline-1 outline-gray-300 rounded-md px-4 py-2' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='For emailing my users'></textarea>
            </div>
          </div>
          <button onClick={() => handleSubmit()} className='w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium
                           hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-indigo-600 transition-colors duration-200'>
            {loading ? "Adding..." : "Add Project"}
          </button>
        </div>
      </Box>
    </Modal>
  )
}

export default CreateProject
