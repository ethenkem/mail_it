import { Editor } from '@monaco-editor/react';
import { Box } from '@mui/material'
import React, { useState } from 'react'
import NavBar from '../layouts/NavBar';
import HtmlTemplateLoader from '../components/customize/HtmlTemplateLoader';
import { _htmlContent } from "../components/test.js"

function CustomizeTemplate() {
  const [htmlContent, setHtmlContent] = useState(_htmlContent)
  function handleEditorChange(value) {
    setHtmlContent(value)
  }

  return (
    <Box className="h-screen overflow-y-scroll">
      <div className='flex  flex-col w-full sm:flex-row space-x-1  bg-neutral-900  h-screen'>
        <div className="w-full order-2 sm:order-0 sm:w-1/2 h-screen">
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
