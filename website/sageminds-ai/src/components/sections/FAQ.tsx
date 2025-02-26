import { useState } from 'react'
import { Link } from 'react-router-dom'

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const faqData: FAQItem[] = [
  {
    question: "What is SageMinds AI, and how does it support Agience AI?",
    answer: "SageMinds AI is the consulting division of Agience AI, specializing in AI strategy, implementation, and automation using AI Agents. We help businesses integrate intelligent AI solutions to enhance efficiency, decision-making, and digital transformation."
  },
  {
    question: "What types of AI Agents does SageMinds AI offer?",
    answer: (
      <div>
        <p className="mb-4">We provide custom AI Agents for various business functions, including:</p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Maintenance AI Agent – Automates data retrieval & reconciliation in CMS systems.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Documentation Management AI Agent – Organizes and retrieves documents efficiently.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Customer Service AI Agent – Handles inquiries and enhances customer support.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Outbound Sales AI Agent – Engages leads and automates follow-ups.
          </li>
        </ul>
      </div>
    )
  },
  {
    question: "How can AI Agents integrate with my existing business systems?",
    answer: "Our AI Agents seamlessly integrate with ERP, CRM, CMS, SaaS platforms, cloud services, and third-party APIs, ensuring smooth automation without disrupting existing workflows."
  },
  {
    question: "How long does it take to deploy an AI Agent?",
    answer: "The deployment time depends on complexity. Basic AI Agents can be launched in weeks, while advanced integrations may take a few months. We provide agile implementation to ensure quick adoption."
  },
  {
    question: "How Can I Get Started with SageMinds AI?",
    answer: (
      <div>
        <p className="mb-4">
          Get started with SageMinds AI's Agentic Workforce Launchpad, a structured pathway to deploy, integrate, and scale AI Agents seamlessly into your business. Our expert-driven approach ensures strategic AI adoption, optimized automation, and real-time data insights to drive growth and efficiency.
        </p>
        <Link 
          to="/launchpad"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          🚀 Explore Agentic Workforce Launchpad
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    )
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section 
      id="faq" 
      className="w-full py-24 bg-gray-50  dark:bg-dark-700"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-dm-sans text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            FAQ
          </div>
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-dm-sans text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] py-4' : 'max-h-0'
                }`}
              >
                <div className="font-inter text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ 