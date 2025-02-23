import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Portfolio from '../components/sections/Portfolio'
import Services from '../components/sections/Services'
import WhyUs from '../components/sections/WhyUs'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import Blog from '../components/sections/Blog'
import Footer from '../components/sections/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Blog />
      {/* <Portfolio /> */}
      {/* <WhyUs /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      
      <Footer />
    </>
  )
}

export default Home 