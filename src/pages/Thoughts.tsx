import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Intersection of Music and Technology",
    excerpt: "Exploring how technology is shaping the future of music production and distribution.",
    date: "2024-09-01",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Scalable Web Applications: Lessons Learned",
    excerpt: "Insights and best practices from my experience in developing large-scale web applications.",
    date: "2024-08-15",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Rise of AI in Software Development",
    excerpt: "Examining the impact of artificial intelligence on coding practices and software engineering.",
    date: "2024-07-30",
    readTime: "6 min read"
  }
];

const BlogPostCard: React.FC<BlogPost> = ({ title, excerpt, date, readTime }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6"
  >
    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
      <span>{new Date(date).toLocaleDateString()}</span>
      <span>{readTime}</span>
    </div>
  </motion.div>
);

const Thoughts: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Thoughts</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Thoughts;