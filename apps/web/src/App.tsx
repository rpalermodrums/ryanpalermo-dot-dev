import { useState, useEffect, useRef } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);

  const openTerminal = () => setTerminalOpen(true);
  const openPalette = () => setPaletteOpen(true);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useKeyboardNav({
    onOpenTerminal: openTerminal,
    onOpenPalette: openPalette,
    onNavigate: (section) => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    },
  });

  const featuredPost = blogPosts.find((p: BlogPost) => p.featured);
  const otherPosts = blogPosts.filter((p: BlogPost) => !p.featured);

  const handleProjectsClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsProjectsClicked(true);
    setTimeout(() => {
      setIsProjectsClicked(false);
      setMobileMenuOpen(false);
    }, 1300);
  };

  return (
    <div className="desktop">
      <main className="content">
        <header className="header" ref={mobileMenuRef}>
          <div className="header-inner">
            <div className="header-left">
              <button 
                className={`header-title-btn ${mobileMenuOpen ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="header-title">Ryan Palermo</span>
                <span className="header-chevron">▼</span>
              </button>
            </div>
            
            <div className="header-right">
              <ThemeToggle />
            </div>
          </div>

          <div className={`nav-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
            <nav className="nav-links">
              <a href="#projects" onClick={handleProjectsClick} className="nav-item">
                {isProjectsClicked ? "(soon 🚧)" : "Projects"}
              </a>
              <a href={BLOG_URL} className="nav-item">Thoughts</a>
            </nav>
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
              <li>Searching for problems worth solving</li>
              <li>Wiring AI audio models together for micro-experiments</li>
              <li>Figuring out how to keep my agent configs consistent while migrating to a new tool every week 😭 (current favorite is `opencode`)</li>
            </ul>
          </div>

          <div className="about-meta">
            <div className="about-meta-item">
              <span className="status-indicator">Open to select opportunities</span>
            </div>
          </div>
        </section>

        <section id="blog" className="section">
          <h2 className="section-title">Writing</h2>
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
