import matter from 'gray-matter';

const postsDirectory = '/src/assets/posts';
console.log('Posts directory:', postsDirectory);

export async function getBlogPosts() {
  console.log('Fetching blog posts from:', postsDirectory);
  
  try {
    const response = await fetch('/api/blog-posts');
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const posts = await response.json();
    
    return posts.map((post: any) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      content: post.content,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  console.log('Fetching post with slug:', slug);
  
  try {
    const response = await fetch(`/api/blog-posts/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const contentType = response.headers.get("content-type");
    let post;
    
    if (contentType && contentType.includes("application/json")) {
      post = await response.json();
    } else {
      // Fallback to text content
      const textContent = await response.text();
      post = { content: textContent };
    }
    
    // Assume the server has already parsed the frontmatter
    return {
      slug,
      title: post.title || 'Untitled',
      date: post.date || new Date().toISOString(),
      excerpt: post.excerpt || '',
      content: post.content || '',
    };
  } catch (error: any) {
    console.error('Error fetching blog post:', error);
    // Return a minimal post object with error information
    return {
      slug,
      title: 'Error Loading Post',
      date: new Date().toISOString(),
      excerpt: 'There was an error loading this post.',
      content: `Error details: ${error.message}`,
    };
  }
}
