import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { projects, blogPosts, contactLinks, Project, BlogPost, ContactLink } from "@ryanpalermo/shared";
import { Sidebar } from "../components/Sidebar";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const featuredPost = blogPosts.find((p: BlogPost) => p.featured);
  const otherPosts = blogPosts.filter((p: BlogPost) => !p.featured);

  return (
    <div className="desktop">
      <Sidebar activeSection={activeSection} />

      <main className="content">
        <section id="home" className="section">
          <div className="readme">
            <div className="readme-header">
              <span className="readme-icon">📄</span>
              <span>README.md</span>
            </div>
            <div className="readme-content">
              <h1 className="readme-title">Ryan Palermo</h1>
              <span className="readme-badge">Open to work</span>

              <p className="readme-intro">
                Staff software engineer. Former professional drummer. Based in
                NYC.
              </p>

              <div className="readme-section">
                <h2 className="readme-heading">Work</h2>
                <p>
                  Full-stack product engineering — TypeScript, React, Node,
                  Python, Go. I've shipped consumer products, internal tools,
                  and infrastructure. Currently focused on AI-assisted legal
                  tech.
                </p>
              </div>

              <div className="readme-section">
                <h2 className="readme-heading">Background</h2>
                <p>
                  Ten years as a working musician before tech. Toured, recorded,
                  taught. The practice room is good preparation for debugging.
                </p>
              </div>

              <div className="readme-section">
                <h2 className="readme-heading">Now</h2>
                <ul className="readme-list">
                  <li>Building tools for musicians</li>
                  <li>Looking for my next role</li>
                  <li>Writing occasionally</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="windows-grid">
            {projects.map((project: Project) => (
              <article
                key={project.id}
                className="window"
                data-project={project.id}
              >
                <div className="window-header">
                  <div className="window-chrome">
                    <span className="chrome-dot red" />
                    <span className="chrome-dot yellow" />
                    <span className="chrome-dot green" />
                  </div>
                  <span className="window-title">{project.name}</span>
                  <span
                    className={`window-status status-${project.status.toLowerCase().replace(" ", "-")}`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="window-body">
                  <p className="window-tagline">{project.tagline}</p>
                  <p className="window-description">{project.description}</p>
                  <div className="window-stack">
                    {project.stack.map((tech: string) => (
                      <span key={tech} className="stack-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3 className="about-heading">Background</h3>
              <p>
                Ten years as a professional musician before writing code. Drums,
                composition, arranging. The practice room taught me patience
                with plateaus and the value of deliberate work.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-heading">Philosophy</h3>
              <p>
                Software should tell the truth. Users deserve to know what's
                happening, what went wrong, and what they can do about it. I
                call this operational honesty.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-heading">Stack</h3>
              <p>
                TypeScript, React, Node, Python, Go. PostgreSQL, Redis. Whatever
                solves the problem without creating new ones.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-heading">Interests</h3>
              <p>
                Jazz, cooking, hiking, reading. Anything that rewards patience
                and attention to detail.
              </p>
            </div>
          </div>
        </section>

        <section id="writing" className="section">
          <h2 className="section-title">Writing</h2>
          <div className="posts-list">
            {featuredPost && (
              <article className="post featured" data-slug={featuredPost.slug}>
                <div className="post-featured-badge">Featured</div>
                <h3 className="post-title">{featuredPost.title}</h3>
                <p className="post-subtitle">{featuredPost.subtitle}</p>
                <p className="post-excerpt">{featuredPost.excerpt}</p>
                <time className="post-date">
                  {formatDate(featuredPost.date)}
                </time>
              </article>
            )}
            {otherPosts.map((post: BlogPost) => (
              <article key={post.slug} className="post" data-slug={post.slug}>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-subtitle">{post.subtitle}</p>
                <time className="post-date">{formatDate(post.date)}</time>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            {contactLinks.map((link: ContactLink) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-item"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
