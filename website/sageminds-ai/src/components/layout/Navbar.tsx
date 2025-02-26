import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (isDropdownOpen && !(e.target as Element).closest('.dropdown-container')) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('click', closeDropdown)
    return () => document.removeEventListener('click', closeDropdown)
  }, [isDropdownOpen])

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="SageMinds AI" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center space-x-8 font-inter">
              <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                About Us
              </Link>
              {/* <Link to="/expertise" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Areas of Expertise
              </Link> */}
              
              {/* Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsDropdownOpen(!isDropdownOpen)
                  }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white inline-flex items-center"
                >
                  <span>Explore</span>
                  <svg 
                    className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div 
                  className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-800 ring-1 ring-black ring-opacity-5 
                    transition-all duration-200 ${
                      isDropdownOpen 
                        ? 'transform opacity-100 scale-100' 
                        : 'transform opacity-0 scale-95 pointer-events-none'
                    }`}
                >
                  <div className="py-1">
                    <Link
                      to="/launchpad"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Agent Workforce Launchpad
                    </Link>
                    <Link
                      to="/partnership"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Partnership
                    </Link>
                  </div>
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Contact Button */}
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg 
                         transition-colors duration-200 font-semibold flex items-center space-x-2"
              >
                <span>Let's talk</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-2 invisible h-0'
        }`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 font-inter
                      transition-all duration-300 ease-in-out ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}>
          <Link 
            to="/" 
            className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
            About Us
          </Link>
          {/* <Link to="/expertise" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
            Areas of Expertise
          </Link> */}
          <div className="px-3 py-2 space-y-1">
            <div className="font-medium text-gray-600 dark:text-gray-200">Explore</div>
            <Link 
              to="/launchpad" 
              className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white
                       transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              Agent Workforce Launchpad
            </Link>
            <Link 
              to="/partnership" 
              className="block pl-4 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white
                       transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              Partnership
            </Link>
          </div>
          <button
            onClick={() => {
              navigate('/contact')
              setIsOpen(false)
            }}
            className="block w-full px-3 py-2 text-left text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
          >
            Let's talk
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 