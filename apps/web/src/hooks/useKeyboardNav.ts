import { useEffect, useRef } from "react";

interface UseKeyboardNavOptions {
  onOpenTerminal: () => void;
  onOpenPalette: () => void;
  onNavigate: (section: string) => void;
}

const NAV_KEYS: Record<string, string> = {
  h: "home",
  p: "projects",
  a: "about",
  b: "blog",
  c: "contact",
};

export function useKeyboardNav({
  onOpenTerminal,
  onOpenPalette,
  onNavigate,
}: UseKeyboardNavOptions) {
  const gPressedRef = useRef(false);
  const gTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const terminalBufferRef = useRef("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenPalette();
        return;
      }

      if (e.key === "/" && !isInput) {
        e.preventDefault();
        onOpenPalette();
        return;
      }

      if (e.key === "Escape") {
        return;
      }

      if (!isInput) {
        terminalBufferRef.current += e.key.toLowerCase();
        if (terminalBufferRef.current.length > 8) {
          terminalBufferRef.current = terminalBufferRef.current.slice(-8);
        }
        if (terminalBufferRef.current.includes("terminal")) {
          terminalBufferRef.current = "";
          onOpenTerminal();
          return;
        }
      }

      if (!isInput && e.key.toLowerCase() === "g") {
        gPressedRef.current = true;
        if (gTimeoutRef.current) clearTimeout(gTimeoutRef.current);
        gTimeoutRef.current = setTimeout(() => {
          gPressedRef.current = false;
        }, 500);
        return;
      }

      if (!isInput && gPressedRef.current) {
        const section = NAV_KEYS[e.key.toLowerCase()];
        if (section) {
          e.preventDefault();
          onNavigate(section);
        }
        gPressedRef.current = false;
        if (gTimeoutRef.current) clearTimeout(gTimeoutRef.current);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (gTimeoutRef.current) clearTimeout(gTimeoutRef.current);
    };
  }, [onOpenTerminal, onOpenPalette, onNavigate]);
}
