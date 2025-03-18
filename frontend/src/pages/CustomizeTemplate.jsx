import { Editor } from '@monaco-editor/react';
import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import NavBar from '../layouts/NavBar';
import HtmlTemplateLoader from '../components/customize/HtmlTemplateLoader';
import { _htmlContent } from "../components/test.js"
import { SaveIcon, X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { BACKEND_URL } from '../configs/constants.js';
import UserContext from '../contexts/UserContext.jsx';
import { ClipLoader } from 'react-spinners';

function CustomizeTemplate() {
  const [htmlContent, setHtmlContent] = useState(_htmlContent)
  const [loading, setLoading] = useState(false)
  const { projectId } = useParams()
  const { user } = useContext(UserContext)

  function handleEditorChange(value) {
    setHtmlContent(value)
  }
  const navigate = useNavigate()

  const handleCloseIde = () => {
    navigate("/")
  }

  const handleSubmit = async () => {
    setLoading(true)
    const data = {
      templateName: "s",
      rawTemplate: htmlContent
    }
    try {
      const res = await axios.post(`${BACKEND_URL}/core/upload-raw-template?projectId=jsjs`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        }
      })
      setLoading(false)
      alert(projectId)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <Box className="h-screen relative overflow-y-scroll">
      <div className="absolute flex flex-row items-center z-50 space-x-3 left-120 px-6 mt-2">
        <X size={30} onClick={handleCloseIde} className='text-gray-600 hover:text-gray-200 bg-white rounded-md' />
        {loading ? <div className='bg-white px-2 py-1 rounded-md'><ClipLoader size={15} className='text-gray-600' /></div> : <SaveIcon onClick={handleSubmit} size={30} className='text-gray-600 bg-white hover:text-gray-200 rounded-md' />}
      </div>
      <div className='flex  flex-col w-full sm:flex-row space-x-1  bg-neutral-900  h-screen'>
        <div className="relative w-full order-2 sm:order-0 sm:w-1/2 h-screen">
          <Editor
            theme='vs-dark'
            defaultLanguage="html"
            language='html'
            defaultValue={htmlContent}
            onChange={handleEditorChange}
          />
        </div>
        <HtmlTemplateLoader htmlContent={htmlContent} />
      </div>
    </Box>
  )
}

export default CustomizeTemplate
