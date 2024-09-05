import React, { useState } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main className="flex-grow bg-gray-100 dark:bg-gray-800 transition-colors duration-300">{children}</main>
      <footer className="border-t py-4 text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} Ryan Palermo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;