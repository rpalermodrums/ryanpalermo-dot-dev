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
      <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-gray-900 transition-colors duration-300">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">Ryan Palermo</Link>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white ${
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
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow bg-gray-100 dark:bg-gray-800 transition-colors duration-300">{children}</main>
      <footer className="border-t py-4 text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} Ryan Palermo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;