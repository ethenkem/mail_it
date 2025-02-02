import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BACKEND_URL } from "../../configs/constants"

function Projects() {
  const [userProjects, setUserProjects] = useState([])

  const fetchProjects = async () => {
    const res = await axios.get(`${BACKEND_URL}/projects`);
    setUserProjects(res.data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div>
      {userProjects ? "Projects" : "No Projects"}
    </div>
  )
}

export default Projects
