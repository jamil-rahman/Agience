import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        // Container with gradient background and padding
        <section className="relative min-h-screen bg-gradient-to-b from-agience-900 via-agience-950 to-agience-bg overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-to-bl from-agience-500/5 to-transparent" />
                <div className="absolute right-10 bottom-10 w-72 h-72 bg-agience-600/5 rounded-full blur-3xl" />
            </div>

            {/* Content container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-agience_text-50 mb-6">
                            AI Agents Powered by You
                        </h1>
                        <h4 className='text-2xl md:text-3xl font-bold text-white mb-6'>The open agentic platform & ecosystem for everyone.</h4>
                        <p className="text-md text-gray-300 mb-8 max-w-2xl">
                            Agience activates humanity's potential in AI with a secure, distributed architecture enhancing privacy,
                            scalability, and efficiency while empowering people to innovate and earn rewards.
                        </p>
                        <motion.button
                            className="px-8 py-3 bg-gradient-to-r from-agience-600 to-blue-600 text-white rounded-lg
                       text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1
                       transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                    {/* Image/Illustration */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="/hero.png"
                            alt="AI Platform Illustration"
                            title='Agience Hero'
                            className="w-full max-w-2xl mx-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 