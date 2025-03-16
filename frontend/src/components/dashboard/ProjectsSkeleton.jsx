import React from 'react'

function ProjectsSkeleton() {
  return (
    <ul className="divide-y h-full overflow-y-scroll divide-gray-200">
      {[...Array(10)]
        .map((_, index) => (
          <li
            key={index}
            className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer animate-pulse"
          >
            <div className="flex items-center justify-items-stretch justify-between">
              <div className="flex items-center">
                <div className="h-5 w-5 bg-gray-300 rounded"></div>
                <div className="ml-3 w-20">
                  <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
                  <div className="h-3 bg-gray-300 rounded w-32"></div>
                </div>
              </div>

              <div className="h-8 w-32 bg-gray-300 rounded"></div>
              <div className="h-8 w-32 bg-gray-300 rounded"></div>
              <div className="h-8 w-32 bg-gray-300 rounded"></div>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default ProjectsSkeleton
