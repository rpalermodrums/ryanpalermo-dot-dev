import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <Navigation />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="border-t py-4 text-center bg-primary text-white">
        <p>&copy; {new Date().getFullYear()} Ryan Palermo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;