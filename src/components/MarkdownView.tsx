import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const MarkdownView: React.FC = () => {
  const [markdown, setMarkdown] = useState('');
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch('/src/assets/posts/v1__20240905__music-tech-relationship.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error fetching markdown:', error));
  }, [id]);

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">***TODO: PARSE AND RENDER ACTUAL MARKDOWN FILE***</h3>
      <div className="container mx-auto px-4 py-8">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default MarkdownView;
