import { Editor } from '@monaco-editor/react';
import { Box } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import NavBar from '../layouts/NavBar';
import HtmlTemplateLoader from '../components/customize/HtmlTemplateLoader';
import { _htmlContent } from "../components/test.js"
import { useLocation, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { BACKEND_URL } from '../configs/constants.js';
import UserContext from '../contexts/UserContext.jsx';
import { ClipLoader } from 'react-spinners';
import Loading from "../components/customize/Loading.jsx"
import Options from '../components/customize/Options.jsx';

function CustomizeTemplate() {
  const [htmlContent, setHtmlContent] = useState(_htmlContent)
  const [template, setTemplate] = useState({})
  const [loading, setLoading] = useState(false)
  const [templateLoading, setTemplateLoading] = useState(false)
  const { projectId } = useParams()
  const location = useLocation()
  const { user } = useContext(UserContext)

  function handleEditorChange(value) {
    setHtmlContent(value)
  }
  const navigate = useNavigate()



  const handleCloseIde = () => {
    navigate("/")
  }

  const fetchTemplate = async () => {
    try {
      setTemplateLoading(true)
      const res = await axios.get(`${BACKEND_URL}/core/templates/load/?template=${location.state.template}`)
      setLoading(false)
      console.log(res.data)
      setTemplate(res.data)
      setHtmlContent(res.data.htmlContent)
      setTemplateLoading(false)
    } catch (err) {
      setTemplateLoading(false)
      console.log(err)
    }
  }

  const handleSubmit = async () => {
    if (projectId == undefined) {
      alert("This is a Demo, please select a project to save")
      return
    }
    setLoading(true)
    const data = {
      templateName: "custom",
      rawTemplate: htmlContent
    }
    try {
      const res = await axios.post(`${BACKEND_URL}/core/upload-raw-custom-template?projectId=${projectId}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        }
      })
      console.log(res.data)
      setLoading(false)
      alert(res.data.message)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTemplate()
  }, [])

  return (
    <>
      <Box className="h-screen relative overflow-y-scroll">
        {templateLoading ? <Loading /> : null}
        <div className='flex  flex-col w-full sm:flex-row space-x-1  bg-neutral-900  h-screen'>
          <div className="relative w-full order-2 sm:order-0 sm:w-1/2 h-screen">
            {templateLoading ?
              null : <Options handleCloseIde={handleCloseIde} handleSubmit={handleSubmit} loading={loading} />
            }
            <Editor
              theme='vs-dark'
              defaultLanguage="html"
              language='html'
              value={htmlContent}
              onChange={handleEditorChange}
            />
          </div>
          <HtmlTemplateLoader htmlContent={htmlContent} />
        </div>
      </Box>
    </>
  )
}

export default CustomizeTemplate
