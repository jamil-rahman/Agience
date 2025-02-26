import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Portfolio from '../components/sections/Portfolio'
import Services from '../components/sections/Services'
import WhyUs from '../components/sections/WhyUs'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import Blog from '../components/sections/Blog'
import Footer from '../components/sections/Footer'
import UseCases from '../components/sections/UseCases'
import Industries from '../components/sections/Industries'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <UseCases />
      <Industries />
      <WhyUs />
      {/* <Blog /> */}
      <FAQ />
      {/* <Portfolio /> */}
      {/* <WhyUs /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
    
    </div>
  )
}

export default Home 