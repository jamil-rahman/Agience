import { motion } from 'framer-motion';

type FeatureCard = {
    title: string;
    description: string[];
    icon: string;
    tag: string;
};

const features: FeatureCard[] = [
    {
        title: "BUILDERS",
        description: [
            "Create AI functions with our intuitive SDK.",
            "Curate powerful AI functions with a simple no-code interface."
        ],
        icon: "/builder.svg",
        tag: "TRANSFORMATION"
    },
    {
        title: "EXPERTS",
        description: [
            "Share research and expertise as a thought leader.",
            "Share opinions, and personal insights."
        ],
        icon: "/experts.svg",
        tag: "INFORMATION"
    },
    {
        title: "HOSTS",
        description: [
            "Deploy to any self-hosted environment.",
            "Deploy easily to secured, managed infrastructure."
        ],
        icon: "/hosts.svg",
        tag: "COMPUTATION"
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-20 bg-agience-bg ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-8 flex flex-col relative overflow-hidden"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <img
                                    src={feature.icon}
                                    alt={`${feature.title} icon`}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-agience-650 mb-4">
                                {feature.title}
                            </h3>

                            {/* Description List */}
                            <ul className="space-y-3 mb-6 flex-grow">
                                {feature.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tag */}
                            <div className="mt-auto">
                                <span className="text-agience_text-50 font-semibold">
                                    {feature.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <h2 className="text-2xl text-white font-medium">
                        Agience simplifies AI technology, making powerful solutions easily accessible to you.
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection; 