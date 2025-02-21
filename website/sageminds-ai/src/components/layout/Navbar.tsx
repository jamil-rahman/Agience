import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home">
              <img 
                src="/logo.png" 
                alt="SageMinds AI" 
                className="h-8 w-auto" // Adjust height as needed
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center space-x-8 font-inter">
              <a href="#home" className="text-blue-600 hover:text-gray-900 dark:text-blue-600 dark:hover:text-white">Home</a>
              <a href="#about" className="text-blue-600 hover:text-gray-900 dark:text-blue-600 dark:hover:text-white">About Us</a>
              <a href="#blog" className="text-blue-600 hover:text-gray-900 dark:text-blue-600 dark:hover:text-white">Blog</a>
              <a href="#contact" className="text-blue-600 hover:text-gray-900 dark:text-blue-600 dark:hover:text-white">Contact Us</a>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white rounded-full"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 font-inter">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">About Us</a>
            <a href="#blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 