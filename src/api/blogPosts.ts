import { getBlogPosts } from '../../scripts/processBlogPosts';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getBlogPostsAPI(req: any, res: any) {
  const posts = getBlogPosts();
  res.status(200).json(posts);
}

export async function getBlogPostBySlugAPI(req: any, res: any) {
  const { slug } = req.params;
  const postsDirectory = path.join(process.cwd(), 'src/assets/posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    res.status(200).json({
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
    });
  } catch (error) {
    console.error('Error reading blog post:', error);
    res.status(404).json({ error: 'Post not found' });
  }
}