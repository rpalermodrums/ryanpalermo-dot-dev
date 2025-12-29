import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_404")({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="desktop">
      <div
        className="content"
        style={{ padding: "4rem 2rem", textAlign: "center" }}
      >
        <div className="window" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div className="window-header">
            <div className="traffic-lights">
              <span className="light red"></span>
              <span className="light yellow"></span>
              <span className="light green"></span>
            </div>
            <span className="window-title">404.txt</span>
          </div>
          <div className="window-content">
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
            <p style={{ color: "var(--c-muted)", marginBottom: "2rem" }}>
              This page doesn't exist. Maybe it never did.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              Try the{" "}
              <Link to="/" style={{ color: "var(--c-cyan)" }}>
                home page
              </Link>{" "}
              instead.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--c-muted)" }}>
              Or press{" "}
              <kbd
                style={{
                  background: "var(--c-surface)",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "4px",
                  border: "1px solid var(--c-border)",
                }}
              >
                ⌘K
              </kbd>{" "}
              to navigate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
