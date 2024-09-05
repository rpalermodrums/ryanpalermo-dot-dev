import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import musicTechContent from '../assets/posts/v1__20240905__music-tech-relationship.md?raw';

const markdownFiles = {
  'music-tech-relationship': musicTechContent,
  // Add more markdown files here as needed
};

const MarkdownView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);
  const content = slug ? markdownFiles[slug as keyof typeof markdownFiles] : '';

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">Markdown Content</h3>
      <div className="container mx-auto px-4 py-8">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default MarkdownView;
