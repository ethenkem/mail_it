import React from 'react';
import { Mail, Zap, Shield, Users, ArrowRight, Code, Sparkles, Repeat, CheckCircle2, Settings, BarChart, Palette, Globe2, Clock, MessageSquare, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header - Keeping existing header */}
      <header className="relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Email Gateway</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900">Documentation</a>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Keeping existing hero */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Streamline Your Email</span>
              <span className="block text-indigo-600">Communication Strategy</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Create, manage, and send beautiful email templates with ease. Perfect for teams who want to maintain consistent communication with their customers.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Start Free Trial
                </button>
                <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Keeping existing features */}
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
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <Zap className="h-6 w-6 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900">Lightning Fast</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Create and send emails in seconds with our intuitive template builder and quick-send features.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <Shield className="h-6 w-6 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900">Enterprise Security</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Bank-grade security with advanced encryption and compliance features built-in.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <Users className="h-6 w-6 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900">Team Collaboration</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Work together seamlessly with role-based access control and template sharing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section: How It Works */}
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

        {/* New Section: Advanced Features */}
        <div className="py-16 bg-white">
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
        </div>

        {/* New Section: Testimonials */}
        <div className="bg-gray-50 py-16 lg:py-24">
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
        <div className="bg-gray-50 pt-12 sm:pt-16">
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
          <div className="mt-10 pb-12 bg-white sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50" />
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
        <div className="bg-white py-16 sm:py-24">
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
            <button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
              Get started
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Keeping existing Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Code className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <Sparkles className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Discord</span>
                <Repeat className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2024 Email Gateway. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;
