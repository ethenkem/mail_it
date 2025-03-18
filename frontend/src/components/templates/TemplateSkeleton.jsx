import React from 'react'

function TemplateSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="p-4 shadow-lg bg-white rounded-lg animate-pulse">
          <div className="w-full h-36 bg-gray-300 rounded-md"></div>

          <div className="mt-4 h-5 w-3/4 bg-gray-300 rounded"></div>

          <div className="flex justify-between mt-4">
            <div className="w-20 h-10 bg-gray-300 rounded"></div>
            <div className="w-24 h-10 bg-gray-300 rounded"></div>
            <div className="w-20 h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TemplateSkeleton
