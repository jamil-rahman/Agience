const WhyUs = () => {
  return (
    <section 
      id="why-us" 
      className="w-full py-24 bg-white dark:bg-dark-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-dm-sans text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Why Choose Us
          </div>
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SageMinds AI?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-12 h-12 mb-6 rounded-xl bg-green-100 dark:bg-green-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-6 h-6 text-green-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Proven AI Agent Deployments
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Across Multiple Sectors
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-12 h-12 mb-6 rounded-xl bg-green-100 dark:bg-green-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-6 h-6 text-green-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Scalable & Adaptive Solutions
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Intelligent AI Agents Solutions
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-12 h-12 mb-6 rounded-xl bg-green-100 dark:bg-green-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-6 h-6 text-green-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                End-to-End AI Solutions
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Consulting, Strategy, and Implementation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs 