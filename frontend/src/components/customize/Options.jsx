import React from 'react'
import { SaveIcon, X } from 'lucide-react';
import { ClipLoader } from 'react-spinners';

function Options({ handleCloseIde, handleSubmit, loading}) {
  return (
    <div className="absolute flex flex-row items-center z-50 space-x-3 right-2 px-6 mt-2">
      <X size={30} onClick={handleCloseIde} className='text-gray-600 hover:text-gray-200 bg-white rounded-md' />
      {loading ? <div className='bg-white px-2 py-1 rounded-md'><ClipLoader size={15} className='text-gray-600' /></div> : <SaveIcon onClick={handleSubmit} size={30} className='text-gray-600 bg-white hover:text-gray-200 rounded-md' />}
    </div>
  )
}

export default Options
