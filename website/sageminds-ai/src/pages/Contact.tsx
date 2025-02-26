import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface FormData {
  fullName: string
  phone: string
  email: string
  service: string
  companySize: string
  message: string
}

const ContactInfo = () => (
  <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
    <h3 className="font-dm-sans text-2xl font-bold text-gray-900 dark:text-white mb-8">
      Contact Information
    </h3>
    <div className="space-y-6">
      {/* Address */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg 
            flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </div>
        <div>
          <h4 className="font-dm-sans text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Our Global Headquarters
          </h4>
          <p className="font-inter text-gray-600 dark:text-gray-300">
            50 Richmond St. E<br />
            Oshawa, ON L1G 7C7<br />
            Canada
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg 
            flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <div>
          <h4 className="font-dm-sans text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Email Us
          </h4>
          <a 
            href="mailto:support@sageminds.ai"
            className="font-inter text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            support@sageminds.ai
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg 
            flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </div>
        <div>
          <h4 className="font-dm-sans text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Phone
          </h4>
          <a 
            href="tel:+1234567890"
            className="font-inter text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            (+123) 456-7890
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg 
            flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
          </svg>
        </div>
        <div>
          <h4 className="font-dm-sans text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Connect With Us
          </h4>
          <div className="flex space-x-4">
            <a 
              href="https://twitter.com/sagemindsai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/sagemindsai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com/@sagemindsai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Contact = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    companySize: '',
    message: ''
  })

  const services = [
    'AI Strategy & Roadmap',
    'Custom AI Solutions',
    'Data-Driven Insights',
    'Enterprise AI Integration',
    'Other'
  ]

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-24">
            <h1 className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Talk about the next <span className="text-blue-600">Big Thing</span>
            </h1>
            <p className="font-inter text-lg text-gray-600 dark:text-gray-300 mb-6">
              Fill out the information and an SageMinds AI representative will reach out to you.
            </p>
            <div className="flex items-center space-x-2 text-lg text-gray-600 dark:text-gray-300">
              <span>Have a simple question?</span>
              <button 
                onClick={() => navigate('/#faq')}
                className="text-blue-600 hover:text-blue-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
              >
                Check out our FAQ
              </button>
            </div>

            {/* Contact Information Section */}
            <ContactInfo />
          </div>

          {/* Right Column - Form */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-sm">
            {/* Form Header */}
            <div className="mb-8">
              <h2 className="font-dm-sans text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Let's Start a Conversation
              </h2>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Share your project details and let's transform your vision into reality.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block font-dm-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-dark-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-colors duration-200"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-dm-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-dark-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-colors duration-200"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-dm-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-dark-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-colors duration-200"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Services Dropdown */}
              <div>
                <label className="block font-dm-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Services You are interested in <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-dark-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-colors duration-200"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Size */}
              <div>
                <label className="block font-dm-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Size
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-dark-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-colors duration-200"
                  value={formData.companySize}
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                >
                  <option value="">Select company size</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-dm-sans text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-dark-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-colors duration-200 resize-y"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg 
                         transition-colors duration-200 font-semibold text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 