import type React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation"; // Add this import

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const location = useLocation();

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<div
			className={`min-h-screen min-w-screen flex flex-col ${darkMode ? "dark" : ""}`}
		>
			<header className="sticky top-0 z-40 w-full transition-colors duration-300 border-b bg-gradient-to-r from-dreamscape-blue to-persistence-purple dark:from-dreamscape-blue dark:to-persistence-purple">
				<Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />{" "}
				{/* Replace the nav element with this */}
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
