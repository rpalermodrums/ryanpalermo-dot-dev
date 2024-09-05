import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '../../scripts/processBlogPosts';

const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ title: string; date: string; excerpt: string; slug: string; content: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      getBlogPostBySlug(slug)
        .then((result) => setPost(result))
        .catch((err: Error) => {
          console.error('Error fetching blog post:', err);
          setError('Failed to load the blog post. Please try again later.');
        });
    }
  }, [slug]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="mb-8">  
      <h1 className="text-2xl font-bold mb-4">{post?.title ?? 'Loading...'}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
    </div>
  );
};

export default Post;
