import type React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
	darkMode,
	toggleDarkMode,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/projects", label: "Projects" },
		{ path: "/thoughts", label: "Thoughts" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<nav className="flex flex-wrap items-center justify-between p-4 transition-colors duration-300 bg-gradient-to-r from-dreamscape-blue to-persistence-purple dark:from-dreamscape-blue dark:to-persistence-purple text-canvas-cream">
			<div className="flex items-center flex-shrink-0 mr-6">
				<Link
					to="/"
					className="text-xl font-semibold tracking-tight text-melting-gold"
				>
					Ryan Palermo
				</Link>
			</div>
			<div className="flex items-center">
				<button
					type="button"
					onClick={toggleDarkMode}
					className="p-2 mr-2 transition-colors duration-300 rounded-full bg-canvas-cream dark:bg-dreamscape-blue text-dreamscape-blue dark:text-canvas-cream hover:bg-[#FFF9E6] dark:hover:bg-[#FFF9E6] hover:text-dreamscape-blue"
				>
					{darkMode ? "🌞" : "🌙"}
				</button>
				<button
					onClick={toggleMenu}
					className="flex items-center px-3 py-2 text-canvas-cream hover:text-surreal-coral lg:hidden"
				>
					<svg
						className="w-6 h-6 fill-current"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div
				className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? "block" : "hidden"}`}
			>
				<div className="text-sm lg:flex-grow">
					{navItems.map((item) => (
						<Link
							key={item.path}
							to={item.path}
							className={`block mt-4 lg:inline-block lg:mt-0 mr-4 transition-all duration-200 text-canvas-cream hover:text-surreal-coral hover:scale-110 ${
								location.pathname === item.path ? "font-bold" : ""
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
