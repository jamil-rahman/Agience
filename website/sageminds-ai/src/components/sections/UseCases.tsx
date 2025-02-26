const UseCases = () => {
    return (
        <section
            id="use-cases"
            className="w-full py-24 bg-white dark:bg-dark-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="font-dm-sans text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
                        Use Cases
                    </div>
                    <h2 className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        AI-Powered Process Automation for Enterprise Efficiency
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Documentation Management Card */}
                    <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
                        transform hover:-translate-y-2">
                        <div className="group">
                            <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                            flex items-center justify-center transition-transform duration-300 
                            group-hover:scale-110">
                                <svg
                                    className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Documentation Management AI Agent
                            </h3>
                            <p className="font-inter text-gray-600 dark:text-gray-300">
                                Intelligent Content Structuring & Compliance
                            </p>
                        </div>
                    </div>

                    {/* Customer Service Card */}
                    <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
                        transform hover:-translate-y-2">
                        <div className="group">
                            <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                            flex items-center justify-center transition-transform duration-300 
                            group-hover:scale-110">
                                <svg
                                    className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Customer Service Representative AI Agents
                            </h3>
                            <p className="font-inter text-gray-600 dark:text-gray-300">
                                Transforming Customer Engagement
                            </p>
                        </div>
                    </div>

                    {/* Outbound Sales Card */}
                    <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl
                        transform hover:-translate-y-2">
                        <div className="group">
                            <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                            flex items-center justify-center transition-transform duration-300 
                            group-hover:scale-110">
                                <svg
                                    className="w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:rotate-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Outbound Sales AI Agent
                            </h3>
                            <p className="font-inter text-gray-600 dark:text-gray-300">
                                Intelligent Lead Generation & Engagement
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UseCases 