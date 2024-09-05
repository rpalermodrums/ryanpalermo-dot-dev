import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../../scripts/processBlogPosts';

const Thoughts: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      }
    };

    fetchBlogPosts();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>My Thoughts | Ryan Palermo</title>
        <meta name="description" content="Explore Ryan Palermo's thoughts on software development, music, and technology." />
        <link rel="canonical" href="https://ryanpalermo.com/thoughts" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-8 text-dreamscape-blue dark:text-canvas-cream">My Thoughts</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-dreamscape-blue dark:text-canvas-cream">
              <Link to={`/thoughts/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="mb-2 text-soft-shadow dark:text-canvas-cream">
              <span>{new Date(post.date).toLocaleDateString()}</span> | <span>{post.author}</span> | <span>{post.readTime}</span>
            </div>
            <p className="mb-4 text-dreamscape-blue dark:text-canvas-cream">{post.excerpt}</p>
            <Link
              to={`/thoughts/${post.slug}`}
              className="text-surreal-coral hover:text-melting-gold transition-colors duration-200"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;