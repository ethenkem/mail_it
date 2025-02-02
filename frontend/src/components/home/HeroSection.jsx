const HeroSection = ({ showSignupModal, setShowSignupModal }) => {
  return (
    <div className="relative px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  bg-gradient-to-b from-white  to-white pt-20 pb-16 rounded-4xl text-center lg:pt-32">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Streamline Your Email</span>
          <span className="block text-indigo-600">Communication Strategy</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create, manage, and send beautiful email templates with ease. Perfect for teams who want to maintain consistent communication with their customers.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <button onClick={() => setShowSignupModal(!showSignupModal)} className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Get Started
            </button>
            <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default HeroSection;
