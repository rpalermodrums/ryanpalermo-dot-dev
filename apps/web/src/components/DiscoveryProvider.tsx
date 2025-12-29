import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { DiscoveryState, DiscoveryTrigger } from "@ryanpalermo/shared";

const STORAGE_KEY = "ryanpalermo-discoveries";

const DISCOVERY_LEVELS: Record<DiscoveryTrigger, number> = {
  "command-palette": 1,
  "keyboard-nav": 2,
  terminal: 3,
  "terminal-help": 4,
  "blog-post": 5,
  "context-menu": 6,
  "terminal-secret": 7,
};

interface DiscoveryContextValue {
  state: DiscoveryState;
  discover: (trigger: DiscoveryTrigger) => void;
  reset: () => void;
}

const DiscoveryContext = createContext<DiscoveryContextValue | null>(null);

function loadState(): DiscoveryState {
  if (typeof window === "undefined") {
    return { level: 0, items: new Set() };
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        level: parsed.level || 0,
        items: new Set(parsed.items || []),
      };
    }
  } catch {
    // ignore
  }
  return { level: 0, items: new Set() };
}

function saveState(state: DiscoveryState): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        level: state.level,
        items: Array.from(state.items),
      }),
    );
  } catch {
    // ignore
  }
}

export function DiscoveryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DiscoveryState>(() => loadState());

  useEffect(() => {
    document.body.className = state.level > 0 ? `level-${state.level}` : "";
  }, [state.level]);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const discover = useCallback((trigger: DiscoveryTrigger) => {
    setState((prev) => {
      if (prev.items.has(trigger)) return prev;

      const newItems = new Set(prev.items);
      newItems.add(trigger);

      const triggerLevel = DISCOVERY_LEVELS[trigger];
      const newLevel = Math.max(prev.level, triggerLevel);

      return { level: newLevel, items: newItems };
    });
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({ level: 0, items: new Set() });
  }, []);

  return (
    <DiscoveryContext.Provider value={{ state, discover, reset }}>
      {children}
    </DiscoveryContext.Provider>
  );
}

export function useDiscovery() {
  const context = useContext(DiscoveryContext);
  if (!context) {
    throw new Error("useDiscovery must be used within DiscoveryProvider");
  }
  return context;
}
