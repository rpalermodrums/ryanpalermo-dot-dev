import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Terminal } from "./components/Terminal";
import { CommandPalette } from "./components/CommandPalette";
import { ContextMenu } from "./components/ContextMenu";
import { useKeyboardNav } from "./hooks/useKeyboardNav";
import { useDiscovery } from "./components/DiscoveryProvider";
import { projects, blogPosts, contact } from "@ryanpalermo/shared";
import type { BlogPost, Project } from "@ryanpalermo/shared";

const BLOG_URL = "/blog";

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
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
      ".window, .post, .contact-item, .sidebar-item, .project-row, .project-featured",
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

  const featuredPost = blogPosts.find((p: BlogPost) => p.featured);
  const otherPosts = blogPosts.filter((p: BlogPost) => !p.featured);

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

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
              <p className="tagline">dev - builder - musician</p>
              Currently working on:
              <ul className="readme-list">
                <li>piecing audio models together for a bunch of micro-experiments</li>
                <li>designing interations for when LLM-enabled software meets reality—the edge cases, error states, and micro-interactions (moments where trust is won or lost.)</li>
                <li>figuring out how to keep my agent configs consistent while migrating to a new tool every few weeks (current favorite is `opencode`)</li>
              </ul>
              <div className="readme-meta">
                <div>New York, NY</div>
                <div className="badge">
                  <span className="badge-dot"></span>
                  <span>Available for select projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          
          <div className="project-featured" data-id={featuredProject.id}>
            <div className="project-featured-header">
              <div className="project-featured-stat">
                <span className="stat-label">PID</span>
                <span className="stat-value">8392</span>
              </div>
              <div className="project-featured-stat">
                <span className="stat-label">USER</span>
                <span className="stat-value">ryan</span>
              </div>
              <div className="project-featured-stat">
                <span className="stat-label">%CPU</span>
                <span className="stat-value">12.4</span>
              </div>
              <div className="project-featured-stat flex-grow">
                <span className="stat-label">COMMAND</span>
                <span className="stat-value">./{featuredProject.id} --watch</span>
              </div>
              <div className="project-featured-status">
                <span className={`status-dot ${featuredProject.status.toLowerCase().replace(" ", "-")}`}></span>
                {featuredProject.status}
              </div>
            </div>
            
            <div className="project-featured-body">
              <div className="project-featured-main">
                <h3 className="project-featured-title">{featuredProject.name}</h3>
                <p className="project-featured-tagline">&gt; {featuredProject.tagline}</p>
                <p className="project-featured-desc">{featuredProject.description}</p>
              </div>
              <div className="project-featured-meta">
                <div className="meta-block">
                  <span className="meta-header">DEPENDENCIES</span>
                  <div className="stack-tags">
                    {featuredProject.stack.map((tech) => (
                      <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-table">
            <div className="projects-table-header">
              <span className="col-perm">PERMISSIONS</span>
              <span className="col-user">USER</span>
              <span className="col-status">STATUS</span>
              <span className="col-name">NAME</span>
              <span className="col-desc">DESCRIPTION</span>
            </div>
            {otherProjects.map((project) => (
              <div key={project.id} className="project-row" data-id={project.id}>
                <span className="col-perm text-dim">-rwxr-xr-x</span>
                <span className="col-user text-dim">ryan</span>
                <span className="col-status">
                  <span className={`status-text ${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status === "In Development" ? "Dev" : project.status}
                  </span>
                </span>
                <span className="col-name">
                  <span className="file-icon">./</span>{project.name}
                </span>
                <span className="col-desc text-muted">
                  {project.tagline} <span className="hide-mobile stack-inline">[{project.stack.join(", ")}]</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          
          <div className="project-featured" data-id={featuredProject.id}>
            <div className="project-featured-header">
              <div className="project-featured-stat">
                <span className="stat-label">PID</span>
                <span className="stat-value">8392</span>
              </div>
              <div className="project-featured-stat">
                <span className="stat-label">USER</span>
                <span className="stat-value">ryan</span>
              </div>
              <div className="project-featured-stat">
                <span className="stat-label">%CPU</span>
                <span className="stat-value">12.4</span>
              </div>
              <div className="project-featured-stat flex-grow">
                <span className="stat-label">COMMAND</span>
                <span className="stat-value">./{featuredProject.id} --watch</span>
              </div>
              <div className="project-featured-status">
                <span className={`status-dot ${featuredProject.status.toLowerCase().replace(" ", "-")}`}></span>
                {featuredProject.status}
              </div>
            </div>
            
            <div className="project-featured-body">
              <div className="project-featured-main">
                <h3 className="project-featured-title">{featuredProject.name}</h3>
                <p className="project-featured-tagline">// {featuredProject.tagline}</p>
                <p className="project-featured-desc">{featuredProject.description}</p>
              </div>
              <div className="project-featured-meta">
                <div className="meta-block">
                  <span className="meta-header">DEPENDENCIES</span>
                  <div className="stack-tags">
                    {featuredProject.stack.map((tech) => (
                      <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-table">
            <div className="projects-table-header">
              <span className="col-perm">PERMISSIONS</span>
              <span className="col-user">USER</span>
              <span className="col-status">STATUS</span>
              <span className="col-name">NAME</span>
              <span className="col-desc">DESCRIPTION</span>
            </div>
            {otherProjects.map((project) => (
              <div key={project.id} className="project-row" data-id={project.id}>
                <span className="col-perm text-dim">-rwxr-xr-x</span>
                <span className="col-user text-dim">ryan</span>
                <span className="col-status">
                  <span className={`status-text ${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status === "In Development" ? "Dev" : project.status}
                  </span>
                </span>
                <span className="col-name">
                  <span className="file-icon">./</span>{project.name}
                </span>
                <span className="col-desc text-muted">
                  {project.tagline} <span className="hide-mobile stack-inline">[{project.stack.join(", ")}]</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          
          <div className="project-featured" data-id={featuredProject.id}>
            <div className="project-featured-header">
              <div className="project-featured-stat">
                <span className="stat-label">PID</span>
                <span className="stat-value">8392</span>
              </div>
              <div className="project-featured-stat">
                <span className="stat-label">USER</span>
                <span className="stat-value">ryan</span>
              </div>
              <div className="project-featured-stat">
                <span className="stat-label">%CPU</span>
                <span className="stat-value">12.4</span>
              </div>
              <div className="project-featured-stat flex-grow">
                <span className="stat-label">COMMAND</span>
                <span className="stat-value">./{featuredProject.id} --watch</span>
              </div>
              <div className="project-featured-status">
                <span className={`status-dot ${featuredProject.status.toLowerCase().replace(" ", "-")}`}></span>
                {featuredProject.status}
              </div>
            </div>
            
            <div className="project-featured-body">
              <div className="project-featured-main">
                <h3 className="project-featured-title">{featuredProject.name}</h3>
                <p className="project-featured-tagline">// {featuredProject.tagline}</p>
                <p className="project-featured-desc">{featuredProject.description}</p>
              </div>
              <div className="project-featured-meta">
                <div className="meta-block">
                  <span className="meta-header">DEPENDENCIES</span>
                  <div className="stack-tags">
                    {featuredProject.stack.map((tech) => (
                      <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-table">
            <div className="projects-table-header">
              <span className="col-perm">PERMISSIONS</span>
              <span className="col-user">USER</span>
              <span className="col-status">STATUS</span>
              <span className="col-name">NAME</span>
              <span className="col-desc">DESCRIPTION</span>
            </div>
            {otherProjects.map((project) => (
              <div key={project.id} className="project-row" data-id={project.id}>
                <span className="col-perm text-dim">-rwxr-xr-x</span>
                <span className="col-user text-dim">ryan</span>
                <span className="col-status">
                  <span className={`status-text ${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status === "In Development" ? "Dev" : project.status}
                  </span>
                </span>
                <span className="col-name">
                  <span className="file-icon">./</span>{project.name}
                </span>
                <span className="col-desc text-muted">
                  {project.tagline} <span className="hide-mobile stack-inline">[{project.stack.join(", ")}]</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          
          {/* Featured Project - Process Monitor Style */}
          <div className="project-featured" data-id={featuredProject.id}>
            <div className="project-featured-header">
              <div className="project-featured-stat">
                <span className="stat-label">PID</span>
                <span className="stat-value">8392</span>
              </div>
              <div className="project-featured-stat">
                <span className="stat-label">USER</span>
                <span className="stat-value">ryan</span>
              </div>
              <div className="project-featured-stat">
                <span className="stat-label">%CPU</span>
                <span className="stat-value">12.4</span>
              </div>
              <div className="project-featured-stat flex-grow">
                <span className="stat-label">COMMAND</span>
                <span className="stat-value">./{featuredProject.id} --watch</span>
              </div>
              <div className="project-featured-status">
                <span className={`status-dot ${featuredProject.status.toLowerCase().replace(" ", "-")}`}></span>
                {featuredProject.status}
              </div>
            </div>
            
            <div className="project-featured-body">
              <div className="project-featured-main">
                <h3 className="project-featured-title">{featuredProject.name}</h3>
                <p className="project-featured-tagline">// {featuredProject.tagline}</p>
                <p className="project-featured-desc">{featuredProject.description}</p>
              </div>
              <div className="project-featured-meta">
                <div className="meta-block">
                  <span className="meta-header">DEPENDENCIES</span>
                  <div className="stack-tags">
                    {featuredProject.stack.map((tech) => (
                      <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project List - File System Style */}
          <div className="projects-table">
            <div className="projects-table-header">
              <span className="col-perm">PERMISSIONS</span>
              <span className="col-user">USER</span>
              <span className="col-status">STATUS</span>
              <span className="col-name">NAME</span>
              <span className="col-desc">DESCRIPTION</span>
            </div>
            {otherProjects.map((project) => (
              <div key={project.id} className="project-row" data-id={project.id}>
                <span className="col-perm text-dim">-rwxr-xr-x</span>
                <span className="col-user text-dim">ryan</span>
                <span className="col-status">
                  <span className={`status-text ${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status === "In Development" ? "Dev" : project.status}
                  </span>
                </span>
                <span className="col-name">
                  <span className="file-icon">./</span>{project.name}
                </span>
                <span className="col-desc text-muted">
                  {project.tagline} <span className="hide-mobile stack-inline">[{project.stack.join(", ")}]</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="windows-grid">
            {projects.map((project: Project) => (
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
                      {project.stack.map((tech: string) => (
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
                A decade of professional music performance before engineering. Drums,
                composition, arrangement. The practice room taught me that taste
                matters more than technique, and that the best work comes from
                sitting alone with something difficult until you figure it out.
              </p>
            </div>
            <div className="about-block">
              <h3>Current Focus</h3>
              <ul className="readme-list">
                <li>piecing audio models together for a bunch of micro-experiments</li>
                <li>designing interations for when LLM-enabled software meets reality—the edge cases, error states, and micro-interactions (moments where trust is won or lost.)</li>
                <li>figuring out how to keep my agent configs consistent while migrating to a new tool every few weeks (current favorite is `opencode`)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="writing" className="section">
          <h2 className="section-title">Writing</h2>
          <div className="posts-list">
            {featuredPost && (
              <a
                href={`${BLOG_URL}/${featuredPost.slug}/`}
                className="post featured"
                data-id={featuredPost.slug}
              >
                <span className="featured-badge">Featured</span>
                <h3>{featuredPost.title}</h3>
                <p className="post-subtitle">{featuredPost.subtitle}</p>
                <p className="post-excerpt">{featuredPost.excerpt}</p>
                <time>{featuredPost.date}</time>
              </a>
            )}
            {otherPosts.map((post: BlogPost) => (
              <a
                key={post.slug}
                href={`${BLOG_URL}/${post.slug}/`}
                className="post"
                data-id={post.slug}
              >
                <h3>{post.title}</h3>
                <p className="post-subtitle">{post.subtitle}</p>
                <time>{post.date}</time>
              </a>
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
