interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  link: string;
  date: string;
}

const BlogCard = ({ image, title, excerpt, link, date }: BlogCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg 
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 
                     group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-inter">
          {date}
        </p>

        {/* Title */}
        <h3 className="font-dm-sans text-xl font-bold text-gray-900 dark:text-white mb-3 
                       line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-inter text-gray-600 dark:text-gray-300 line-clamp-3">
          {excerpt}
        </p>
      </div>
    </a>
  )
}

export default BlogCard 