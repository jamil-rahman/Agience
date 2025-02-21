import BlogCard from '../cards/BlogCard'
import blogData from '../../data/blog.json'

const Blog = () => {
  return (
    <section id="blog" className="h-screen snap-start snap-always bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="font-dm-sans text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
            Our Blog
          </div>
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights & Articles
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in AI technology and business transformation.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogData.articles.map((article, index) => (
            <BlogCard key={index} {...article} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="https://medium.com/your-blog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block font-inter px-8 py-4 bg-purple-800 hover:bg-purple-900 
                     text-white rounded-lg transition-colors duration-200 text-lg font-semibold"
          >
            Read More Articles
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog 