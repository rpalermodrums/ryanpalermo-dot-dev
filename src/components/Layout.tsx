import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <Navigation />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default Layout;