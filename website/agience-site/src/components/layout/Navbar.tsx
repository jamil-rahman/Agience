import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  // const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className="relative w-full bg-white shadow-sm text-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 items-center flex gap-x-4">
            <Link to="/">
              <img
                src="/logo.png"
                title='SageMinds AI Logo'
                alt="SageMinds AI"
                className="h-12 w-auto"
              />
            </Link>
            <span className='text-3xl md:text-4xl font-dm-sans'>Agience</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center space-x-8 font-inter">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/about" className="">
                About Us
              </Link>
              {/* <Link to="/expertise" className="">
                Areas of Expertise
              </Link> */}


              {/* Theme Toggle */}
              {/* <button
                onClick={toggleTheme}
                className="p-2 "
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
              </button> */}

              {/* Contact Button */}
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
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
              className="inline-flex items-center justify-center p-2 rounded-md "
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
        className={`md:hidden transition-all duration-300 ease-in-out transform ${isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible h-0'
          }`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white text-gray-900 font-inter
                      transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'
          }`}>
          <Link
            to="/"
            className="block px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2"
          >
            About Us
          </Link>
          {/* <Link to="/expertise" className="block px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
            Areas of Expertise
          </Link> */}

          <Link
            to="/contact"
            className="block w-full mt-4 px-4 py-3 rounded-lg font-medium text-center
                   text-white 
                     transform transition-all duration-300
                     shadow-md hover:shadow-lg"
          >
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Let's Talk</span>
            </div>
          </Link>
          {/* <button
            onClick={toggleTheme}
            className="p-2 "
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
          </button> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 