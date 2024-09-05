import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import markdownContent from '../assets/posts/v1__20240905__music-tech-relationship.md?raw';

const MarkdownView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">Markdown Content</h3>
      <div className="container mx-auto px-4 py-8">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

export default MarkdownView;
