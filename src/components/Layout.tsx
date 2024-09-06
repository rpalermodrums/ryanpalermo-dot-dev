import type React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const location = useLocation();

	const toggleDarkMode = () => setDarkMode(!darkMode);

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/projects", label: "Projects" },
		{ path: "/thoughts", label: "Thoughts" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<div className={`min-h-screen min-w-screen flex flex-col ${darkMode ? "dark" : ""}`}>
			<header className="sticky top-0 z-40 w-full transition-colors duration-300 border-b bg-gradient-to-r from-dreamscape-blue to-persistence-purple dark:from-dreamscape-blue dark:to-persistence-purple">
				<nav className="container flex items-center justify-between px-4 py-4 mx-auto">
					<Link to="/" className="text-2xl font-bold text-melting-gold">
						Ryan Palermo
					</Link>
					<ul className="flex space-x-4">
						{navItems.map((item) => (
							<li key={item.path}>
								<Link
									to={item.path}
									className={`text-canvas-cream hover:text-surreal-coral transition-colors duration-200 ${
										location.pathname === item.path ? "font-bold" : ""
									}`}
								>
									{item.label}
								</Link>
							</li>
						))}
						<li>
							<button
								type="button"
								onClick={toggleDarkMode}
								className="transition-colors duration-200 text-canvas-cream hover:text-surreal-coral"
							>
								{darkMode ? "☀️" : "🌙"}
							</button>
						</li>
					</ul>
				</nav>
			</header>
			<main className="flex-grow transition-colors duration-300 bg-gradient-to-br from-canvas-cream to-ethereal-teal dark:from-dreamscape-blue dark:to-persistence-purple">
				{children}
			</main>
			<footer className="py-4 text-center transition-colors duration-300 border-t bg-gradient-to-r from-dreamscape-blue to-persistence-purple dark:from-dreamscape-blue dark:to-persistence-purple text-canvas-cream">
				<p>
					&copy; {new Date().getFullYear()} Ryan Palermo. All rights reserved.
				</p>
			</footer>
		</div>
	);
};

export default Layout;
