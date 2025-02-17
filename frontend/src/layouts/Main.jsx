import React from 'react'
import Footer from './Footer'
import { NavLink, Outlet } from 'react-router'
import NavBar from './NavBar'

function Main() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
