import { Modal, Box } from '@mui/material'
import axios from 'axios'
import { Mail, Lock, X, User } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { BACKEND_URL } from '../configs/constants'
import UserContext from '../contexts/UserContext'
import { useNavigate } from "react-router";

function Login({ showLoginModal, setShowLoginModal, setShowSignupModal }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()


  const handleSumit = async () => {
    setLoading(true)
    const data = {
      email, password
    }
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/obtain-token`, data);
      setLoading(false)
      //setError(res.data.message)
      const user = res.data.data
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/dashboard")
    } catch (error) {
      setLoading(false)
      setError(error.response.data.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <Modal className="flex justify-center items-center px-2 md:px-0" open={showLoginModal} onClose={() => setShowLoginModal(false)}>
      <Box className="flex bg-white py-2 px-5 border border-gray-400 rounded-lg justify-center items-center">
        <div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <button
              onClick={() => setShowLoginModal(false)}>
              <X size={20} />
            </button>

          </div>
          <p className="text-gray-600 mb-5">Please enter your details to sign in</p>
          {error && <p className='text-red-500 text-center text-sm'>{error}</p>}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
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

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg
                               focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
                               placeholder:text-gray-400 text-gray-900"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-600 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSumit}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium
                           hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-indigo-600 transition-colors duration-200"
            >
              {loading ? "Submiting..." : "Submit"}
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{"  "}
              <button onClick={() => {
                setShowLoginModal(false)
                setShowSignupModal(true)
              }} type="button" className="font-medium text-indigo-600 hover:text-indigo-700">
                Sign up
              </button>
            </p>
          </form>
        </div>
      </Box>
    </Modal>
  )
}
export default Login
