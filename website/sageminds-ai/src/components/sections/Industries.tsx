const Industries = () => {
  return (
    <section 
      id="industries" 
      className="w-full py-24 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-dm-sans text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Our Industries
          </div>
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI Solutions Tailored for Your Industry
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Finance Card */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 dark:bg-blue-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Finance & FinTech
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                AI Agents for risk analysis, fraud detection, and automated trading
              </p>
            </div>
          </div>

          {/* Retail Card */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 dark:bg-blue-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Retail & E-Commerce
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                AI-Agents demand forecasting, and personalized shopping
              </p>
            </div>
          </div>

          {/* Manufacturing Card */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 dark:bg-blue-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                Manufacturing & Industry 4.0
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                AI solutions for predictive maintenance, process automation, and supply chain optimization
              </p>
            </div>
          </div>

          {/* SaaS Card */}
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
              transform hover:-translate-y-2">
            <div className="group">
              <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 dark:bg-blue-900/20 
                  flex items-center justify-center transition-transform duration-300 
                  group-hover:scale-110">
                <svg 
                  className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:rotate-12" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                SaaS & Enterprise Tech
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                AI-driven SaaS automation, cloud AI integration, and customer analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries 