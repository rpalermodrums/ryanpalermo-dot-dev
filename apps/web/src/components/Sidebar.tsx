interface SidebarProps {
  activeSection?: string;
  onOpenTerminal?: () => void;
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { id: "home", label: "README.md", icon: "📄", shortcut: "1" },
  { id: "projects", label: "Projects", icon: "📁", shortcut: "2" },
  { id: "about", label: "About", icon: "👤", shortcut: "3" },
];

const BLOG_URL = "/blog";

export function Sidebar({ activeSection, onOpenTerminal: _onOpenTerminal, collapsed, onToggle }: SidebarProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon" />
          <span>Home</span>
        </div>
        <button 
          className="sidebar-toggle" 
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Navigate</div>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item${activeSection === item.id ? " active" : ""}`}
            data-section={item.id}
            onClick={() => scrollTo(item.id)}
            title={collapsed ? item.label : undefined}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
            <span className="sidebar-shortcut">{item.shortcut}</span>
          </button>
        ))}
        <a
          href={BLOG_URL}
          className="sidebar-item"
          title={collapsed ? "Blog" : undefined}
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
