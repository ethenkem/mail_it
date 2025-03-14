import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { BACKEND_URL } from "../../configs/constants"
import UserContext from '../../contexts/UserContext'
import NoProjects from './NoProjects'
import { FileIcon, ImageIcon, Layout, Mail, MailIcon, Settings } from 'lucide-react'
import { NavLink } from 'react-router'

function Projects({ userProjects }) {
  const { user } = useContext(UserContext)

  return (
    <div>
      {userProjects ?
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Projects</h2>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {userProjects.map((project) => (
                <li key={project?._id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-items-stretch justify-between">
                    <div className="flex items-center">
                      <FileIcon className="h-5 w-5 text-gray-400" />
                      <div className="ml-3 w-20 overflow-hidden">
                        <p className="text-sm font-medium text-gray-900 truncate">{project?.projectName}</p>
                        <p className="text-sm text-gray-500 truncate">{project?.description}</p>
                      </div>
                    </div>

                    <div>
                      <NavLink to={`/templates/${project._id}/`} className='text-gray-500 border-gray-500 border border-1 rounded-md px-1 py-1 flex items-center'><Layout className='mr-1' /> Select Template</NavLink>
                    </div>
                    <div>
                      <NavLink to={`/dashboard/compose-email/${project._id}/`} className='text-gray-500 flex items-center  border-gray-500 border border-1 rounded-md px-1 py-1'><Settings className='mr-1' />Project Settings</NavLink>
                    </div>
                    <div>
                      <NavLink to={`/dashboard/compose-email/${project._id}/`} className='text-gray-500 flex items-center  border-gray-500 border border-1 rounded-md px-1 py-1'><MailIcon className='mr-1' /> Compose Email</NavLink>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        :
        <NoProjects />}
    </div>
  )
}

export default Projects
