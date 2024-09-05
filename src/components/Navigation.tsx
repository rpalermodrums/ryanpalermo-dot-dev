import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Ryan Palermo</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-accent mr-4 transition-all duration-200 hover:scale-110">
            Home
          </Link>
          <Link to="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-accent mr-4 transition-all duration-200 hover:scale-110">
            Projects
          </Link>
          <Link to="/thoughts" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-accent mr-4 transition-all duration-200 hover:scale-110">
            Thoughts
          </Link>
          <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-accent transition-all duration-200 hover:scale-110">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;