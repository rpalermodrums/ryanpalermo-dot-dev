import { contact } from "@ryanpalermo/shared";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a 
          href={`mailto:${contact.email}`} 
          className="footer-icon" 
          aria-label="Email"
        >
          ✉️
        </a>
        <a 
          href={contact.github} 
          className="footer-icon" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          💻
        </a>
        <a 
          href={contact.linkedin} 
          className="footer-icon" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          💼
        </a>
      </div>
    </footer>
  );
}
