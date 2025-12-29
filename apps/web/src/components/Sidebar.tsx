interface SidebarProps {
  activeSection?: string;
  onOpenTerminal?: () => void;
}

const navItems = [
  { id: "home", label: "README.md", icon: "📄", shortcut: "1" },
  { id: "projects", label: "Projects", icon: "📁", shortcut: "2" },
  { id: "about", label: "About", icon: "👤", shortcut: "3" },
  { id: "blog", label: "Blog", icon: "✍️", shortcut: "4" },
  { id: "contact", label: "Contact", icon: "📬", shortcut: "5" },
];

const BLOG_URL = "/blog";

export function Sidebar({ activeSection, onOpenTerminal }: SidebarProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon" />
          <span>Home</span>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Navigate</div>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item${activeSection === item.id ? " active" : ""}`}
            data-section={item.id}
            onClick={() => scrollTo(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
            <span className="sidebar-shortcut">{item.shortcut}</span>
          </button>
        ))}
        <a
          href={BLOG_URL}
          className="sidebar-item"
        >
          <span className="sidebar-icon">✍️</span>
          <span>Blog</span>
        </a>
      </div>

      <div className="sidebar-status">
        <div className="status-row">
          <span className="status-dot" />
        </div>
        {/* {onOpenTerminal && (
          <button className="sidebar-item" onClick={onOpenTerminal}>
            <span className="sidebar-icon">⌨️</span>
            <span>Terminal</span>
          </button>
        )} */}
      </div>
    </aside>
  );
}
