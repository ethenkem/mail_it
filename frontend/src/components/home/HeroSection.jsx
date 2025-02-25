import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { NavLink } from "react-router";
import HeroBg from "../../assets/bg.jpg"
import MailImg from "../../assets/mailimg.png"
import bg from "./../../assets/bg.svg"

const HeroSection = ({ showSignupModal, setShowSignupModal }) => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div className="relative px-8 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="max-w-7xl sm:w-1/2 px-4 z-50 sm:px-6 lg:px-8  pt-16 pb-16 rounded-4xl text-center lg:pt-20">
        <h1 className="text-4xl text-start tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Streamline Your Email</span>
          <span className="block text-indigo-600">Communication Strategy</span>
        </h1>
        <p className="mt-3 max-w-md text-start mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create, manage, and send beautiful email templates with ease. Perfect for teams who want to maintain consistent communication with their customers.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-start">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-center sm:items-center sm:space-x-4">
            {user ? (
              <NavLink to={"/dashboard"} className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Activities
              </NavLink>) :
              (<button onClick={() => setShowSignupModal(!showSignupModal)} className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get Started
              </button>)

            }
            <NavLink to={"/customizer"} className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              Live Demo
            </NavLink>
          </div>
        </div>
      </div>
      <div  style={{backgroundImage: `url(${bg})`}}  className="sm:w-1/2">
        <img src={MailImg}  alt="img" />
      </div>
    </div>


  )
}

export default HeroSection;
