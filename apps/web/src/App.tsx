import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Terminal } from "./components/Terminal";
import { CommandPalette } from "./components/CommandPalette";
import { ContextMenu } from "./components/ContextMenu";
import { BlogPostModal } from "./components/BlogPostModal";
import { useKeyboardNav } from "./hooks/useKeyboardNav";
import { useDiscovery } from "./components/DiscoveryProvider";
import { projects, blogPosts, contact } from "@ryanpalermo/shared";
import type { BlogPost } from "@ryanpalermo/shared";

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    target: string;
  } | null>(null);

  const { discover } = useDiscovery();

  const openTerminal = () => {
    discover("terminal");
    setTerminalOpen(true);
  };

  const openPalette = () => {
    discover("command-palette");
    setPaletteOpen(true);
  };

  useKeyboardNav({
    onOpenTerminal: openTerminal,
    onOpenPalette: openPalette,
    onNavigate: (section) => {
      discover("keyboard-nav");
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    },
  });

  const handleContextMenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const clickable = target.closest(
      ".window, .post, .contact-item, .sidebar-item",
    );
    if (clickable) {
      e.preventDefault();
      discover("context-menu");
      setContextMenu({
        x: e.clientX,
        y: e.clientY,
        target: clickable.getAttribute("data-id") || "",
      });
    }
  };

  const openPost = (post: BlogPost) => {
    discover("blog-post");
    setSelectedPost(post);
  };

  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div
      className="desktop"
      onContextMenu={handleContextMenu}
      onClick={() => setContextMenu(null)}
    >
      <Sidebar onOpenTerminal={openTerminal} />

      <main className="content">
        <section id="home" className="section">
          <div className="readme">
            <div className="readme-header">
              <span className="readme-icon">📄</span>
              <span>README.md</span>
            </div>
            <div className="readme-content">
              <h1>Ryan Palermo</h1>
              <p className="tagline">Staff Software Engineer</p>
              <p>
                I build products that tell the truth. Currently focused on
                AI-assisted legal tech, previously built infrastructure at
                scale. I care about what happens when software meets reality—the
                edge cases, the error states, the moments where trust is won or
                lost.
              </p>
              <p>
                Background in jazz performance. It taught me that feel matters
                more than correctness, and that the best work comes from
                obsession, not optimization.
              </p>
              <div className="readme-meta">
                <span>New York, NY</span>
                <span>•</span>
                <span>Available for interesting problems</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="windows-grid">
            {projects.map((project) => (
              <div key={project.id} className="window" data-id={project.id}>
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <span className="window-title">{project.name}</span>
                </div>
                <div className="window-content">
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span
                      className={`status status-${project.status.toLowerCase().replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                    <div className="stack">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <div className="about-grid">
            <div className="about-block">
              <h3>Philosophy</h3>
              <p>
                <strong>Operational Honesty:</strong> Software should tell the
                truth about what it's doing. Loading states that reflect actual
                progress. Error messages that explain what went wrong.
                Interfaces that don't pretend to be simpler than they are.
              </p>
            </div>
            <div className="about-block">
              <h3>Background</h3>
              <p>
                A decade of professional music before engineering. Drums,
                composition, arrangement. The practice room taught me that taste
                matters more than technique, and that the best work comes from
                sitting alone with something difficult until you figure it out.
              </p>
            </div>
            <div className="about-block">
              <h3>Current Focus</h3>
              <p>
                AI-assisted legal technology. Building systems that help people
                navigate complex processes without hiding the complexity. The
                goal is clarity, not simplification.
              </p>
            </div>
          </div>
        </section>

        <section id="writing" className="section">
          <h2 className="section-title">Writing</h2>
          <div className="posts-list">
            {featuredPost && (
              <article
                className="post featured"
                data-id={featuredPost.slug}
                onClick={() => openPost(featuredPost)}
              >
                <span className="featured-badge">Featured</span>
                <h3>{featuredPost.title}</h3>
                <p className="post-subtitle">{featuredPost.subtitle}</p>
                <p className="post-excerpt">{featuredPost.excerpt}</p>
                <time>{featuredPost.date}</time>
              </article>
            )}
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="post"
                data-id={post.slug}
                onClick={() => openPost(post)}
              >
                <h3>{post.title}</h3>
                <p className="post-subtitle">{post.subtitle}</p>
                <time>{post.date}</time>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            <a
              href={`mailto:${contact.email}`}
              className="contact-item"
              data-id="email"
            >
              <span className="contact-icon">✉️</span>
              <span>{contact.email}</span>
            </a>
            <a
              href={contact.github}
              className="contact-item"
              data-id="github"
              target="_blank"
              rel="noopener"
            >
              <span className="contact-icon">💻</span>
              <span>GitHub</span>
            </a>
            <a
              href={contact.linkedin}
              className="contact-item"
              data-id="linkedin"
              target="_blank"
              rel="noopener"
            >
              <span className="contact-icon">💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}

      {paletteOpen && (
        <CommandPalette
          onClose={() => setPaletteOpen(false)}
          onOpenTerminal={openTerminal}
        />
      )}

      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}

      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          target={contextMenu.target}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  );
}
