import ServiceCard from '../cards/ServiceCard'
import servicesData from '../../data/services.json'
import { icons } from '../../utils/icons'

const Services = () => {
  return (
    <section id="services" className="h-screen snap-start snap-always bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header - reduced bottom margin from mb-16 to mb-10 */}
        <div className="text-center mb-10">
          <div className="font-dm-sans text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
            Our Services
          </div>
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transform Your Business With AI Technology
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {servicesData.services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              icon={icons[service.icon as keyof typeof icons]}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="font-inter px-8 py-4 bg-purple-800 hover:bg-purple-900 text-white rounded-lg 
                           transition-colors duration-200 text-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services 