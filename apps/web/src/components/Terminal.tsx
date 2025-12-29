import { useState, useRef, useEffect } from "react";
import { useDiscovery } from "./DiscoveryProvider";
import { projects, contact } from "@ryanpalermo/shared";
import type { Project } from "@ryanpalermo/shared";

interface TerminalProps {
  onClose: () => void;
}

type CommandOutput = string | string[];

const createCommands = (
  discover: (trigger: "terminal-help" | "terminal-secret") => void,
  reset: () => void,
  onClose: () => void,
): Record<string, () => CommandOutput> => ({
  help: () => {
    discover("terminal-help");
    return [
      "Available commands:",
      "  help        Show this message",
      "  about       About me",
      "  projects    List projects",
      "  stack       Tech stack",
      "  philosophy  Operational Honesty",
      "  contact     Get in touch",
      "  music       Jazz background",
      "  secret      ???",
      "  clear       Clear terminal",
      "  reset       Reset discoveries",
      "  exit        Close terminal",
      "",
      "Unix basics: ls, pwd, whoami, date, echo",
    ];
  },
  about: () => [
    "Ryan Palermo",
    "dev - builder - musician",
    "",
    "Building stuff i like.",
    "Background in jazz. Decade of professional music before code.",
    "Based in New York.",
    "",
    "Currently working on:",
    "- piecing audio models together for a bunch of micro-experiments",
    "- designing interations for when LLM-enabled software meets reality—the edge cases, error states, and micro-interactions (moments where trust is won or lost.)",
    "- figuring out how to keep my agent configs consistent while migrating to a new tool every few weeks (current favorite is `opencode`)",
  ],
  projects: () => {
    const lines = ["Projects:", ""];
    projects.forEach((p: Project) => {
      lines.push(`  ${p.name} [${p.status}]`);
      lines.push(`    ${p.tagline}`);
      lines.push("");
    });
    return lines;
  },
  stack: () => [
    "Primary Stack:",
    "  Languages:  TypeScript, Python, Go, Swift",
    "  Frontend:   React, Next.js, TanStack",
    "  Backend:    Node, Django, FastAPI",
    "  Data:       PostgreSQL, Redis, Temporal",
    "  AI/ML:      PyTorch, Core ML, LangChain",
    "  Infra:      AWS, Docker, Kubernetes",
  ],
  philosophy: () => [
    "Operational Honesty",
    "",
    "Software should tell the truth about what it's doing.",
    "Loading states that reflect actual progress.",
    "Error messages that explain what went wrong.",
    "Interfaces that don't pretend to be simpler than they are.",
    "",
    "The goal is clarity, not simplification.",
  ],
  contact: () => [
    "Contact:",
    `  Email:    ${contact.email}`,
    `  GitHub:   ${contact.github}`,
    `  LinkedIn: ${contact.linkedin}`,
  ],
  music: () => [
    "Jazz Background",
    "",
    "Professional musician for ~10 years before engineering.",
    "Drums, composition, arrangement.",
    "",
    "What transferred: obsession, taste, tolerance for plateaus.",
    "The practice room taught me to sit alone with something",
    "difficult and figure it out.",
  ],
  secret: () => {
    discover("terminal-secret");
    return ["You found a secret!", "", "Try: konami", "", "(Yes, that one.)"];
  },
  konami: () => {
    discover("terminal-secret");
    return [
      "↑ ↑ ↓ ↓ ← → ← → B A",
      "",
      "All colors unlocked. You've discovered everything.",
      "Thanks for exploring.",
    ];
  },
  clear: () => "CLEAR",
  reset: () => {
    reset();
    return "Discoveries reset. Refresh to see changes.";
  },
  exit: () => {
    onClose();
    return "";
  },
  ls: () => "README.md  projects/  about/  writing/  contact/",
  pwd: () => "/home/ryan/portfolio",
  whoami: () => "ryan",
  date: () => new Date().toString(),
});

export function Terminal({ onClose }: TerminalProps) {
  const [history, setHistory] = useState<
    Array<{ input: string; output: string[] }>
  >([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { discover, reset } = useDiscovery();

  const commands = createCommands(discover, reset, onClose);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();

    if (!trimmed) return;

    if (trimmed.startsWith("echo ")) {
      const echoText = input.trim().slice(5);
      setHistory((prev) => [...prev, { input, output: [echoText] }]);
      setInput("");
      return;
    }

    const cmd = commands[trimmed];
    if (cmd) {
      const result = cmd();
      if (result === "CLEAR") {
        setHistory([]);
      } else {
        const output = Array.isArray(result) ? result : [result];
        setHistory((prev) => [...prev, { input, output }]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        {
          input,
          output: [
            `command not found: ${trimmed}`,
            "Type 'help' for available commands.",
          ],
        },
      ]);
    }

    setInput("");
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="window-controls">
          <button type="button" className="control red" onClick={onClose} title="Close"></button>
          <span className="control yellow" title="Minimize"></span>
          <span className="control green" title="Maximize"></span>
        </div>
        <span className="terminal-title">Terminal — ryan@portfolio</span>
      </div>
      <div className="terminal-body" ref={outputRef}>
        <div className="terminal-welcome">
          Welcome to ryan's portfolio terminal.
          <br />
          Type 'help' for available commands.
        </div>
        {history.map((entry, i) => (
          <div key={i} className="terminal-entry">
            <div className="terminal-prompt">
              <span className="prompt-user">ryan@portfolio</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <span className="prompt-input">{entry.input}</span>
            </div>
            <div className="terminal-output">
              {entry.output.map((line, j) => (
                <div key={j}>{line || "\u00A0"}</div>
              ))}
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="terminal-input-line">
          <span className="prompt-user">ryan@portfolio</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <input
            ref={inputRef}
            type="text"
            aria-label="Terminal command"
            title="Terminal command"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="terminal-input"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
