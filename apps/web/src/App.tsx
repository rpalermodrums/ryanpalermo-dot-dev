import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Terminal } from "./components/Terminal";
import { CommandPalette } from "./components/CommandPalette";
import { useKeyboardNav } from "./hooks/useKeyboardNav";
import { blogPosts } from "@ryanpalermo/shared";
import type { BlogPost } from "@ryanpalermo/shared";

declare const __DEV_BLOG_URL__: string;
const BLOG_URL = typeof __DEV_BLOG_URL__ !== "undefined" ? __DEV_BLOG_URL__ : "/blog";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [isProjectsClicked, setIsProjectsClicked] = useState(false);

  const openTerminal = () => setTerminalOpen(true);
  const openPalette = () => setPaletteOpen(true);

  useKeyboardNav({
    onOpenTerminal: openTerminal,
    onOpenPalette: openPalette,
    onNavigate: (section) => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    },
  });

  const visiblePosts = blogPosts.filter((p: BlogPost) => !p.draft);
  const featuredPost = visiblePosts.find((p: BlogPost) => p.featured);
  const otherPosts = visiblePosts.filter((p: BlogPost) => !p.featured);

  const handleProjectsClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsProjectsClicked(true);
    setTimeout(() => {
      setIsProjectsClicked(false);
    }, 1300);
  };

  return (
    <div className="desktop">
      <main className="content">
        <header className="header">
          <div className="header-inner">
            <a href="/" className="header-initials" aria-label="Home">RP</a>
            
            <nav className="header-nav">
              <a href="#projects" onClick={handleProjectsClick} className="header-nav-item">
                {isProjectsClicked ? "(soon 🚧)" : "Projects"}
              </a>
              <a href={BLOG_URL} className="header-nav-item">Thoughts</a>
            </nav>
            
            <div className="header-right">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section id="about" className="section">
          <p className="about-intro">
          <span className="about-intro-highlight">
            Building software for humans. Based in NYC.
            </span>
          </p>
          
          <div className="about-status">
            <div className="about-status-title">What I'm probably up to</div>
            <ul className="about-list">
              <li>Wiring AI audio models together for micro-experiments</li>
              <li>Figuring out how to keep my agent configs consistent while migrating to a new tool every week 😭 (currently opencode)</li>
              <li>Searching for problems worth solving</li>
            </ul>
          </div>

          <div className="about-meta">
            <div className="about-meta-item">
              <span className="status-indicator">Open to select opportunities</span>
            </div>
          </div>
        </section>

        <section id="blog" className="section">
          <h2 className="section-title">Thoughts</h2>
          <div className="posts-list">
            {featuredPost && (
              <a
                href={`${BLOG_URL}/${featuredPost.slug}/`}
                className="post featured"
              >
                <div className="post-content">
                  <h3 className="post-title">{featuredPost.title}</h3>
                  <p className="post-excerpt">{featuredPost.excerpt}</p>
                </div>
                <time>{featuredPost.date}</time>
              </a>
            )}
            {otherPosts.map((post: BlogPost) => (
              <a
                key={post.slug}
                href={`${BLOG_URL}/${post.slug}/`}
                className="post"
              >
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-subtitle">{post.subtitle}</p>
                </div>
                <time>{post.date}</time>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </main>

      {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}

      {paletteOpen && (
        <CommandPalette
          onClose={() => setPaletteOpen(false)}
          onOpenTerminal={openTerminal}
        />
      )}
    </div>
  );
}
