import HeroSection from '../components/sections/home/HeroSection';
import FeaturesSection from '../components/sections/home/FeaturesSection';

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default Home;