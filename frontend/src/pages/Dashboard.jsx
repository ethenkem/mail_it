import React, { useContext, useEffect, useState } from 'react'
import { Mail, Plus, Settings, Search, Layout, Clock, Star, MessageSquareIcon, MessageSquareXIcon, MessageSquareTextIcon, SpeakerIcon, MonitorSpeakerIcon, PinIcon, FileIcon, FilesIcon } from 'lucide-react';
import CreateProject from "../components/dashboard/CreateProject"
import UserContext from '../contexts/UserContext';
import { NavLink, useNavigate } from 'react-router';
import Projects from '../components/dashboard/Projects';
import { BACKEND_URL } from '../configs/constants';
import axios from 'axios';
import StatsSkeleton from "../components/dashboard/StatsSkeleton"
import ProjectsSkeleton from "../components/dashboard/ProjectsSkeleton"

function Dashboard() {
  const [showAddProject, setShowAddProject] = useState(false)
  const { user, setUser } = useContext(UserContext)
  const [userProjects, setUserProjects] = useState([])
  const [loadingStats, setLoadingStats] = useState(false)
  const [loadingProjects, setLoadingProjects] = useState(false)
  const [stats, setStats] = useState({})
  const navigate = useNavigate()

  const fetchProjects = async () => {
    console.log("shshsh")
    try {
      setLoadingProjects(true)
      const res = await axios.get(`${BACKEND_URL}/projects`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        }
      });
      const sortedData = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setLoadingProjects(false)
      setUserProjects(sortedData)
    } catch (err) {
      console.log(err)
      setLoadingProjects(false)
    }
  }


  const fetchStats = async () => {
    try {
      setLoadingStats(true)
      const res = await axios.get(`${BACKEND_URL}/core/stats`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        }
      }
      )
      setStats(res.data)
      setLoadingStats(false)
    } catch (err) {
      console.log(err)
      setLoadingStats(false)
    }
  }

  useEffect(() => {
    fetchProjects()
    fetchStats()
  }, [])


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-indigo-600" />
              <NavLink to={"/"}>
                <h1 className="ml-2 text-xl font-bold text-gray-900">Email Gateway</h1>
              </NavLink>
            </div>
            <div className="flex items-center space-x-4">
              <p className='text-lg border rounded-md px-2 border-gray-400'>{user.username}</p>
              <button onClick={() => {
                setUser(null)
                localStorage.removeItem("user")
                navigate("/")
              }}>
                Logout
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Create Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex-1 max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search projects..."
            />
          </div>
          <button onClick={() => setShowAddProject(true)} className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-5 w-5 mr-2" />
            New Project
          </button>
        </div>

        {/* Quick Stats */}
        {loadingStats ? <StatsSkeleton /> :
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
            <div className="relative hover:bg-gray-50 border-1 border-white hover:border-1 hover:shadow-none hover:border-gray-300 bg-white overflow-hidden shadow rounded-lg">
              <div className='absolute left-60 flex justify-end'>
                <FilesIcon className='animate-pulse text-gray-200' size={114} />
              </div>
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FileIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Projects</dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.projectCount}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hover:bg-gray-50 border-1 border-white hover:border-1 hover:shadow-none hover:border-gray-300 bg-white overflow-hidden shadow rounded-lg">
              <div className='absolute left-60 flex justify-end'>
                <MonitorSpeakerIcon className='animate-pulse text-gray-200' size={114} />
              </div>
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Active Campaigns</dt>
                      <dd className="text-lg font-medium text-gray-900">{stats.campaignCount}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  hover:bg-gray-50 border-1 border-white hover:border-1 hover:shadow-none hover:border-gray-300 bg-white overflow-hidden shadow rounded-lg">
              <div className='absolute left-60 flex justify-end'>
                <MessageSquareTextIcon className='animate-pulse text-gray-200' size={114} />
              </div>
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MessageSquareIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Delivered Campaigns</dt>
                      <dd className="text-lg font-medium text-gray-900">12</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {loadingProjects ? <ProjectsSkeleton /> :
          <Projects userProjects={userProjects} fetchStats={fetchStats} fetchProjects={fetchProjects}  />
        }
      </main>
      <CreateProject showCreateProjectModal={showAddProject} setShowCreateProjectModal={setShowAddProject} fetchStats={fetchStats} fetchProjects={fetchProjects} />
    </div>
  );

}

export default Dashboard
