import { useEffect, useRef } from "react";
import { contact } from "@ryanpalermo/shared";
import { useDiscovery } from "./DiscoveryProvider";

interface CommandPaletteProps {
  onClose: () => void;
  onOpenTerminal: () => void;
}

const actions = [
  { id: "home", label: "Go to Home", shortcut: "G H", section: "home" },
  {
    id: "projects",
    label: "Go to Projects",
    shortcut: "G P",
    section: "projects",
  },
  { id: "about", label: "Go to About", shortcut: "G A", section: "about" },
  {
    id: "writing",
    label: "Go to Writing",
    shortcut: "G W",
    section: "writing",
  },
  {
    id: "contact",
    label: "Go to Contact",
    shortcut: "G C",
    section: "contact",
  },
  { id: "terminal", label: "Open Terminal", shortcut: null, section: null },
  { id: "email", label: "Copy Email", shortcut: null, section: null },
];

export function CommandPalette({
  onClose,
  onOpenTerminal,
}: CommandPaletteProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const { discover } = useDiscovery();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleAction = (action: (typeof actions)[0]) => {
    if (action.section) {
      discover("keyboard-nav");
      document
        .getElementById(action.section)
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (action.id === "terminal") {
      onOpenTerminal();
    } else if (action.id === "email") {
      navigator.clipboard.writeText(contact.email);
    }
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <div
      className="palette-backdrop"
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      <div className="palette">
        <div className="palette-header">
          <span className="palette-icon">⌘</span>
          <span>Command Palette</span>
        </div>
        <div className="palette-list">
          {actions.map((action) => (
            <button
              key={action.id}
              className="palette-item"
              onClick={() => handleAction(action)}
            >
              <span>{action.label}</span>
              {action.shortcut && (
                <kbd className="palette-shortcut">{action.shortcut}</kbd>
              )}
            </button>
          ))}
        </div>
        <div className="palette-footer">
          <span>
            Press <kbd>Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
