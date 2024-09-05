import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-gradient-to-r from-dreamscape-blue to-persistence-purple dark:from-dreamscape-blue dark:to-persistence-purple text-canvas-cream transition-colors duration-300">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight text-melting-gold">Ryan Palermo</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-canvas-cream hover:text-surreal-coral mr-4 transition-all duration-200 hover:scale-110">
            Home
          </Link>
          <Link to="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-canvas-cream hover:text-surreal-coral mr-4 transition-all duration-200 hover:scale-110">
            Projects
          </Link>
          <Link to="/thoughts" className="block mt-4 lg:inline-block lg:mt-0 text-canvas-cream hover:text-surreal-coral mr-4 transition-all duration-200 hover:scale-110">
            Thoughts
          </Link>
          <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-canvas-cream hover:text-surreal-coral transition-all duration-200 hover:scale-110">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-canvas-cream dark:bg-dreamscape-blue text-dreamscape-blue dark:text-canvas-cream transition-colors duration-300 hover:bg-melting-gold dark:hover:bg-melting-gold hover:text-dreamscape-blue"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;