import React, { useContext, useEffect, useState } from 'react'
import { Mail, Plus, Settings, Search, Layout, Clock, Star } from 'lucide-react';
import CreateProject from "../components/dashboard/CreateProject"
import UserContext from '../contexts/UserContext';
import { NavLink, useNavigate } from 'react-router';
import Projects from '../components/dashboard/Projects';
import { BACKEND_URL } from '../configs/constants';
import axios from 'axios';

function Dashboard() {
  const [showAddProject, setShowAddProject] = useState(false)
  const { user, setUser } = useContext(UserContext)
  const [userProjects, setUserProjects] = useState([])

  const navigate = useNavigate()

  const fetchProjects = async () => {
    const res = await axios.get(`${BACKEND_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json',
      }
    });
    setUserProjects(res.data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])


  return (
    <div className="min-h-screen bg-gray-50">
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
              placeholder="Search templates..."
            />
          </div>
          <button onClick={() => setShowAddProject(true)} className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-5 w-5 mr-2" />
            New Project
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Layout className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Templates</dt>
                    <dd className="text-lg font-medium text-gray-900">24</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Campaigns</dt>
                    <dd className="text-lg font-medium text-gray-900">8</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Favorite Templates</dt>
                    <dd className="text-lg font-medium text-gray-900">12</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Projects */}
        <Projects userProjects={userProjects}/>
      </main>
      <CreateProject showCreateProjectModal={showAddProject} setShowCreateProjectModal={setShowAddProject} fetchProjects={fetchProjects} />
    </div>
  );

}

export default Dashboard
