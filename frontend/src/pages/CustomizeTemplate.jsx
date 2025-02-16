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
    <Box>
      <NavBar />
      <div className='flex flex-row space-x-1  bg-neutral-900  h-screen'>
        <div className="w-1/2">
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
