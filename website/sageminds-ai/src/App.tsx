import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/AboutPage'
import Contact from './pages/Contact'
import Launchpad from './pages/Launchpad'
import Partnership from './pages/PartnershipPage'
import ExpertisePage from './pages/ExpertisePage'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/sections/Footer'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="/partnership" element={<Partnership />} />
          </Routes>
        </Layout>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
