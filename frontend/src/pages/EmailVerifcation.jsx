import { Modal, Box } from '@mui/material'
import axios from 'axios'
import { Mail, Lock, X, User } from 'lucide-react'
import React, { useState } from 'react'
import { BACKEND_URL } from '../configs/constants'

function EmailVerification({ showEmailVerificationModal, setShowEmailVerificationModal, setShowLoginModal }) {
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)


  const handleSumit = async () => {
    setLoading(true)
    const data = {
      email, code
    }
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/validate-email`, data);
      setLoading(false)
      if (res.status == 200) {
        setShowEmailVerificationModal(false)
        setShowLoginModal(true)
      }
      else {
        console.log(res.status)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      setError(error.response.data.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <Modal className="flex justify-center items-center" open={showEmailVerificationModal} onClose={() => setShowEmailVerifcationModal(false)}>
      <Box className="flex bg-white py-2 px-5  rounded-lg justify-center items-center">
        <div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Email</h2>
            <button
              onClick={() => setShowEmailVerificationModal(false)}>
              <X size={20} />
            </button>

          </div>
          <p className="text-gray-600 mb-5">Please enter the code sent your email</p>
          {error && <p className='text-red-500 text-center text-sm'>{error}</p>}
          <div className="space-y-3">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => { setEmail(e.target.value) }}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg
                               focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
                               placeholder:text-gray-400 text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* code Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Code
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  type="code"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg
                               focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
                               placeholder:text-gray-400 text-gray-900"
                  placeholder="••••••••"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSumit}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium
                           hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-indigo-600 transition-colors duration-200"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
export default EmailVerification
