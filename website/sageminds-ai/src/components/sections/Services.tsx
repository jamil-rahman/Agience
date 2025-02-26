import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section 
      id="services" 
      className="w-full py-24 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-dm-sans text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Our Services
          </div>
          <h2 className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI Solutions for Enterprise Success
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI Strategy Card */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                AI Strategy & Roadmap
              </h3>
            </div>
          </div>

          {/* Custom AI Solutions Card */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Custom AI Solutions
              </h3>
            </div>
          </div>

          {/* Data-Driven Insights Card */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Data-Driven Insights
              </h3>
            </div>
          </div>

          {/* Enterprise AI Integration Card */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Enterprise AI Integration
              </h3>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link 
            to="/expertise"
            className="inline-block font-inter px-8 py-4 bg-purple-800 hover:bg-purple-900 
                     text-white rounded-lg transition-colors duration-200 text-lg font-semibold"
          >
            Explore Our Expertise
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services 