import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/thoughts', label: 'Thoughts' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 z-40 w-full border-b bg-gradient-to-r from-dreamscape-blue to-persistence-purple dark:from-dreamscape-blue dark:to-persistence-purple transition-colors duration-300">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-melting-gold">Ryan Palermo</Link>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-canvas-cream hover:text-surreal-coral transition-colors duration-200 ${
                    location.pathname === item.path ? 'font-bold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDarkMode}
                className="text-canvas-cream hover:text-surreal-coral transition-colors duration-200"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow bg-gradient-to-br from-canvas-cream to-ethereal-teal dark:from-dreamscape-blue dark:to-persistence-purple transition-colors duration-300">
        {children}
      </main>
      <footer className="border-t py-4 text-center bg-gradient-to-r from-dreamscape-blue to-persistence-purple dark:from-dreamscape-blue dark:to-persistence-purple text-canvas-cream transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} Ryan Palermo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;