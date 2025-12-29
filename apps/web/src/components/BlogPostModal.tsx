import { useEffect, useRef } from "react";
import type { BlogPost } from "@ryanpalermo/shared";

interface BlogPostModalProps {
  post: BlogPost;
  onClose: () => void;
}

export function BlogPostModal({ post, onClose }: BlogPostModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <div
      className="modal-backdrop"
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      <article className="post-modal">
        <div className="post-modal-header">
          <div className="window-controls">
            <button className="control red" onClick={onClose}></button>
            <span className="control yellow"></span>
            <span className="control green"></span>
          </div>
          <span className="post-modal-title">{post.slug}.md</span>
        </div>
        <div className="post-modal-content">
          <header>
            <h1>{post.title}</h1>
            <p className="post-modal-subtitle">{post.subtitle}</p>
            <time>{post.date}</time>
          </header>
          <div
            className="post-modal-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
