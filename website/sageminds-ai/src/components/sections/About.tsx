const About = () => {
  return (
    <section 
      id="about" 
      className="w-full py-24 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="flex flex-col items-start w-full lg:w-1/2 space-y-8">
            {/* Small heading above main title */}
            <h2 className="font-dm-sans text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              ABOUT US
            </h2>

            {/* Main heading */}
            <h2 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Unlock the Power of AI Agents for Your Business
            </h2>
            
            <h3 className="font-dm-sans text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Transform. Automate. Innovate.
            </h3>
            {/* Body text */}
            <p className="font-inter text-gray-600 dark:text-gray-300 text-sm">
            At SageMinds AI, we specialize in delivering cutting-edge AI consulting services, helping businesses like yours unlock the power of AI agents for enhanced decision-making, automation, and transformation. Our expertise spans multiple industries, enabling organizations to leverage AI-driven strategies for maximum impact.
            </p>

            {/* Bullet Points */}
            <div className="space-y-6 w-full">
              {/* AI Strategy & Roadmap */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-dm-sans text-lg font-bold text-gray-900 dark:text-white mb-1">
                    AI Strategy & Roadmap
                  </h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">
                    Develop comprehensive AI strategies aligned with your business objectives
                  </p>
                </div>
              </div>

              {/* Custom AI Solutions */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-dm-sans text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Custom AI Solutions
                  </h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">
                    Tailored AI solutions designed for your specific industry needs
                  </p>
                </div>
              </div>

              {/* Data-Driven Insights */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-dm-sans text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Data-Driven Insights
                  </h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">
                    Transform raw data into actionable business intelligence
                  </p>
                </div>
              </div>

              {/* Enterprise AI Integration */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-dm-sans text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Enterprise AI Integration
                  </h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">
                    Seamlessly integrate AI solutions into your existing infrastructure
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="font-inter px-8 py-4 bg-purple-800 hover:bg-purple-900 text-white rounded-lg 
                             transition-colors duration-200 text-lg font-semibold mt-8">
              More About
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/all-hands-on-deck.png" 
              alt="AI Robot" 
              className="w-full h-[600px] md:h-[700px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 