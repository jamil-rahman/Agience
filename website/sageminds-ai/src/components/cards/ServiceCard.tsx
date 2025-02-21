interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  metric?: {
    value: string;
    label: string;
  };
}

const ServiceCard = ({ icon, title, description, features, metric }: ServiceCardProps) => {
  return (
    <div className="bg-white dark:bg-dark-700 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
        {description}
      </p>

      {/* Metric if provided */}
      {metric && (
        <div className="mb-6">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {metric.value}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {metric.label}
          </div>
        </div>
      )}

      {/* Features list if provided */}
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-inter text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard 