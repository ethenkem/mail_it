import { Shield, Users, Zap } from 'lucide-react'
import React from 'react'

function FeaturesSection() {
  return (
    <div className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to excel
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Powerful features to help you manage your email communications effectively.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-200 hover:bg-indigo-100  rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Lightning Fast</h3>
                  <p className="mt-5 text-base text-gray-600">
                    Send emails in seconds with our intuitive templates design and quick-send features.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-100 hover:bg-indigo-100 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Enterprise Security</h3>
                  <p className="mt-5 text-base text-gray-700">
                    Bank-grade security with advanced encryption and compliance features built-in.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-100 rounded-lg hover:bg-indigo-100  px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Team Collaboration</h3>
                  <p className="mt-5 text-base text-gray-600">
                    Work together seamlessly with role-based access control and template sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default FeaturesSection
