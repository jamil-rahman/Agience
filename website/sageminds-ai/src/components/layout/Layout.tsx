import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-800 transition-colors duration-200">
      <Navbar />
      <main 
        className="text-gray-900 dark:text-white overflow-y-auto scroll-smooth"
        style={{
          scrollbarWidth: 'none',  // Hide scrollbar for Firefox
          msOverflowStyle: 'none',  // Hide scrollbar for IE/Edge
          WebkitOverflowScrolling: 'touch'  // Smooth scrolling for iOS
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout 