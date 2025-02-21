const companyLogos = [
  '/bluesky.svg',
  '/nodejs.svg',
  '/sap.svg',
  '/x.svg',
  '/fastapi.svg',
  '/claude.svg',
  '/google-gemini.svg',
  '/anthropic.svg',
  '/bluesky.svg',
  '/nodejs.svg',
  '/sap.svg',
  '/x.svg',
  '/fastapi.svg',
  '/claude.svg',
  '/google-gemini.svg',
  '/anthropic.svg',
  '/bluesky.svg',
  '/nodejs.svg',
  '/sap.svg',
  '/x.svg',
  '/fastapi.svg',
  '/claude.svg',
  '/google-gemini.svg',
  '/anthropic.svg',
]

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen snap-start snap-always bg-fixed bg-center bg-no-repeat bg-cover flex flex-col"
      style={{ backgroundImage: 'url(/hero-transparent.png)' }}
    >

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Hero Content */}
        <div className="flex flex-col justify-center flex-1 pt-20 md:pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-[80%] lg:w-[40%] md:pt-0">
            <h1 className="font-dm-sans text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering the Future With AI
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button className="font-inter px-8 py-4 bg-purple-800 hover:bg-purple-900 text-white rounded-lg 
                             transition-colors duration-200 text-lg font-semibold">
              Explore More
            </button>
          </div>
        </div>

        {/* Company Logos Carousel - pushed to bottom */}
        <div className="mt-2">
          <div className="relative bg-white/90 dark:bg-gray-800 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
              <div className="relative overflow-hidden">
                <div className="flex items-center space-x-12 animate-carousel-fast">
                  {companyLogos.map((logo, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0"
                    >
                      <img 
                        src={logo} 
                        alt={`Company logo ${index + 1}`} 
                        className="h-12 md:h-16 w-24 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 