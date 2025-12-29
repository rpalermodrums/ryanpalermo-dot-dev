import { useEffect, useRef } from "react";

interface ContextMenuProps {
  x: number;
  y: number;
  target: string;
  onClose: () => void;
}

export function ContextMenu({ x, y, target, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleCopyLink = () => {
    const url = `${window.location.origin}#${target}`;
    navigator.clipboard.writeText(url);
    onClose();
  };

  const handleOpenNewTab = () => {
    window.open(`#${target}`, "_blank");
    onClose();
  };

  return (
    <div ref={menuRef} className="context-menu" style={{ left: x, top: y }}>
      <button className="context-menu-item" onClick={handleCopyLink}>
        Copy Link
      </button>
      <button className="context-menu-item" onClick={handleOpenNewTab}>
        Open in New Tab
      </button>
      <button className="context-menu-item disabled">View Source</button>
      <button className="context-menu-item disabled">Inspect Element</button>
    </div>
  );
}
