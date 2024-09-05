import React from 'react';

import Post from '../pages/Post';

export interface BlogPostProps {
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  return (
    <div className="mb-8">
      <Post />
    </div>
  );
};

export default BlogPost;
