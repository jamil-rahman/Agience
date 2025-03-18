import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            
            {/* 404 page - catches all unmatched routes */}
            {/* <Route path="/404" element={<NotFound />} /> */}
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
    </Router>
  )
}

export default App
