import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const MarkdownView: React.FC = () => {
  const [markdown, setMarkdown] = useState('');
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    import(`../assets/posts/${id}.md`)
      .then((module) => {
        setMarkdown(module.default);
      })
      .catch((error) => console.error('Error loading markdown:', error));
  }, [id]);

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">Markdown Content</h3>
      <div className="container mx-auto px-4 py-8">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default MarkdownView;
