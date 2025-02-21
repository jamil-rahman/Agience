const About = () => {
  return (
    <section id="about" className="h-screen snap-start snap-always bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="flex flex-col items-start w-full lg:w-1/2 space-y-8">
            {/* Small heading above main title */}
            <div className="font-dm-sans text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              ◆ ABOUT US
            </div>
            
            {/* Main heading */}
            <h2 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Transform Your Business<br />
              With AI Technology
            </h2>
            
            {/* Progress bars */}
            {/* <div className="space-y-6 py-8">
              <div className="space-y-2">
                <div className="flex justify-between font-inter text-sm">
                  <span className="text-gray-700 dark:text-gray-300">Artificial Intelligence</span>
                  <span className="text-gray-900 dark:text-white">90%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-cyan-400 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between font-inter text-sm">
                  <span className="text-gray-700 dark:text-gray-300">Client Service</span>
                  <span className="text-gray-900 dark:text-white">71%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-cyan-400 rounded-full" style={{ width: '71%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between font-inter text-sm">
                  <span className="text-gray-700 dark:text-gray-300">Quality</span>
                  <span className="text-gray-900 dark:text-white">85%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-cyan-400 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div> */}

            {/* Body text */}
            <p className="font-inter text-gray-600 dark:text-gray-300 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Button */}
            <button className="font-inter px-8 py-4 bg-purple-800 hover:bg-purple-900 text-white rounded-lg 
                             transition-colors duration-200 text-lg font-semibold mt-4">
              More About
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/all-hands-on-deck.png" 
              alt="AI Robot" 
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 