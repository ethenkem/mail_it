import { AlignJustify, Mail } from 'lucide-react'
import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext'
import { NavLink, useNavigate } from 'react-router'
import SideBar from '../components/SideBar'

function NavBar({ setShowLoginModal }) {
  const { user, setUser } = useContext(UserContext)

  const [openSideBar, setOpenSideBar] = useState(false)

  const navigate = useNavigate()


  return (
    <header className="relative">
      <nav className="max-w-7xl mx-auto py-0.5 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to={"/"} className="flex items-center">
            <Mail className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Mailit</span>
          </NavLink>
          <div className='flex items-center sm:hidden'>
            <AlignJustify onClick={() => setOpenSideBar(true)} className='text-indigo-600 hover:text-indigo-200' size={35} />
          </div>
          <div className="hidden md:flex items-center text-lg space-x-8">
            <a href="#features" className="text-gray-600  hover:text-gray-900">Features</a>
            <NavLink to={"/templates"} className="text-gray-600 hover:text-gray-900">View Templates</NavLink>
            <NavLink to={"/docs"} className="text-gray-600 hover:text-gray-900">Documentation</NavLink>
            {user ?
              (<NavLink to={"/dashboard"} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Dashboard
              </NavLink>)
              :
              (<NavLink
                to={"/login"} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Login
              </NavLink>)
            }
          </div>
        </div>
      </nav>

      <SideBar open={openSideBar} setOpenSideBar={setOpenSideBar} />
    </header>

  )
}

export default NavBar
