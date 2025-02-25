import React, { useContext, useState } from 'react'
import { Mail, Zap, Shield, Users, ArrowRight, Code, Sparkles, Repeat, CheckCircle2, Settings, BarChart, Palette, Globe2, Clock, MessageSquare, FileText } from 'lucide-react';
import NavBar from '../layouts/NavBar';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import Login from './Login';
import Signup from './Signup'
import EmailVerification from "./EmailVerifcation"
import UserContext from '../contexts/UserContext';
import bg2 from "./../assets/bg2.svg"
import SideBar from '../components/SideBar';

function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showEmailVerificationModal, setShowEmailVerificationModal] = useState(false)
  const { user, setUser } = useContext(UserContext)



  return (
    <div style={{   backgroundImage: `url(" data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1090%26quot%3b)' fill='none'%3e%3cpath d='M1170.3434186173236 205.36257979951037L1118.6502643926935 171.79265292970564 1094.1419512003015 266.1173477015531z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M22.236772493855426 445.9631258283205L63.29989030159731 538.1923984756698 114.46604514120477 404.90000802057864z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M247.70518181570753 35.83723234545449L192.22902442153656-46.40955329021283 96.5969246651211 77.92807561887729z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M627.8180459445468 172.15511293902392L623.091947840682 303.89309417809056 725.7660128882133 251.57804503332693z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M689.4764006170759 157.6076078478114L615.503534330054 157.6076078478114 652.489967473565 268.5669072783442z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M442.8559516517745 369.68594503964533L460.63352067141676 286.04905855650486 376.9966341882763 268.2714895368626 359.219065168634 351.90837602000306z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1225.4967769851885 112.88670016019657L1198.6082571756776 229.35367501030402 1341.9637518352959 139.77521996970734z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1305.5097346478246 441.8598583366128L1299.7291241700416 359.19327713378374 1178.6195576046896 409.19748345187304z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M968.3065276767984 472.6550666560055L1111.8734632283085 405.87520459709634 999.8953412793501 324.51833679500743z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M290.8748013347416 334.6683987980326L269.4674499719225 182.3471790745896 117.1462302484795 203.7545304374087 138.5535816112986 356.0757501608517z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M19.64140043017658 534.3674066763481L114.81635407562501 651.8986863064675 232.34763370574447 556.7237326610191 137.17268006029605 439.1924530308996z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1496.9475726128478 441.524929356718L1498.92839780242 328.0435302488812 1385.4469986945833 326.06270505930894 1383.466173505011 439.5441041671458z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M532.439615519896 332.07945054379394L637.3400064787327 307.9665647478225 574.3809372087201 238.04343449454848z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M699.682931948215 321.02938709054746L568.3692338213522 427.15807445128826 705.2139516697373 482.4469293290482z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M129.4553772561391 273.3914071735533L66.84539956030179 407.6589376352255 263.72290771781127 336.0013848693906z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M501.76125878236746 370.9804665249561L588.7014487929303 366.42412423605685 497.2049164934682 284.0402765143934z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1166.9123789085131 454.8633558000057L1262.1690120180665 482.1777558070898 1289.4834120251505 386.92112269753653 1194.2267789155972 359.60672269045244z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1383.116561156015 372.3321952946513L1290.7190147982083 474.950066619142 1393.3368861226988 567.3476129769488 1485.7344324805056 464.729741652458z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1341.0558738192076 93.29635623092787L1383.5431295328597 9.910421817230329 1237.2206000554872-12.127494546399106z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1462.04885639669 43.93156491444562L1375.0084570431238 33.244347699004535 1364.3212398276828 120.28474705257082 1451.361639181249 130.97196426801193z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1090'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e ")` }} className="bg-white bg-cover min-h-screen ">	
    {/*<NavBar setShowLoginModal={setShowLoginModal} /> */}
      <HeroSection showSignupModal={showSignupModal} setShowSignupModal={setShowSignupModal} />
      <FeaturesSection />
      {/* New Section: Advanced Features */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Advanced Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for professional email management
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Globe2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Global Delivery</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Optimized delivery infrastructure across multiple regions for fast and reliable email sending.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <BarChart className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Analytics</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Detailed analytics and reporting to track opens, clicks, and engagement metrics.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Automation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Powerful automation tools for scheduled sending and triggered email sequences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* New Section: Testimonials */}
      <div className="py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                What Our Customers Say
              </h2>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">Marketing Director</p>
                    <div className="mt-2">
                      <p className="text-gray-500">
                        "Email Gateway has transformed how we handle our email marketing campaigns. The analytics are incredible!"
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">Sarah Thompson</span>
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Sarah Thompson</p>
                      <p className="text-sm text-gray-500">TechCorp Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">CEO</p>
                    <div className="mt-2">
                      <p className="text-gray-500">
                        "The template management system is intuitive and has helped us maintain brand consistency across all communications."
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">Michael Chen</span>
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                      <p className="text-sm text-gray-500">StartUp Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">Email Manager</p>
                    <div className="mt-2">
                      <p className="text-gray-500">
                        "The automation features have saved us countless hours. Customer support is also top-notch!"
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">Emily Davis</span>
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Emily Davis</p>
                      <p className="text-sm text-gray-500">Global Retail Co.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keeping existing Stats Section */}
      <div className="pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by companies worldwide
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Our platform delivers millions of emails daily with industry-leading deliverability rates.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Deliverability</dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">99.9%</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Templates</dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">100+</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Users</dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">10k+</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Support Features */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Support</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We're here to help
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Get the support you need, when you need it
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">24/7 Chat Support</h3>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Get instant help from our team of email experts any time of day.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <FileText className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Documentation</h3>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Comprehensive guides and API documentation for developers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-indigo-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Community</h3>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Join our community of email marketers and developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keeping existing CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of companies who trust Email Gateway for their communication needs.
          </p>
          <button onClick={() => setShowLoginModal(true)} className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
            Get started
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>

    
      <Signup
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
        setShowLoginModal={setShowLoginModal}
        setShowEmailVerification={setShowEmailVerificationModal}
      />
      <Login
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setShowSignupModal={setShowSignupModal}
      />
      <EmailVerification
        showEmailVerificationModal={showEmailVerificationModal}
        setShowEmailVerificationModal={setShowEmailVerificationModal}
        setShowLoginModal={setShowLoginModal}
      />

    </div>

  )
}

export default HomePage
