import React from 'react'

function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
      {[...Array(3)]
        .map((_, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden shadow rounded-lg animate-pulse"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-6 w-6 bg-gray-300 rounded-full" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="h-4 bg-gray-300 rounded w-24 mb-2"></dt>
                    <dd className="h-6 bg-gray-400 rounded w-12"></dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default StatsSkeleton
