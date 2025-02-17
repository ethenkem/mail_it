import { Users } from 'lucide-react'
import React from 'react'

function Documentation() {
  return (
    <div className='h-screen px-2'>
      <div className='bg-gray-300 h-full mt-1 rounded-md py-2'>

        <p className='text-3xl text-center flex justify-center items-center space-x-2 text-indigo-600'>
          <Users size={35} className='pr-2' />
          Developer Documentation
        </p>

      </div>
    </div>
  )
}

export default Documentation
