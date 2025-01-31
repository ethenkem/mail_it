import React from 'react'

function Workings() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-500">
            Get started with Email Gateway in just a few simple steps
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">1. Setup</h3>
              <p className="mt-2 text-base text-gray-500">
                Quick setup process with guided configuration
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">2. Design</h3>
              <p className="mt-2 text-base text-gray-500">
                Create templates using our drag-and-drop builder
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">3. Test</h3>
              <p className="mt-2 text-base text-gray-500">
                Preview and test across different email clients
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">4. Send</h3>
              <p className="mt-2 text-base text-gray-500">
                Schedule and send your campaigns with confidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Workings
