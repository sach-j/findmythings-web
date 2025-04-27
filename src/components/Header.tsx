import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 border-b border-gray-100">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}images/FindMyThingsIcon.jpg`} alt="FindMyThings" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-primary">FindMyThings</span>
        </Link>        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
          <Link to="/features" className="text-gray-600 hover:text-primary">Features</Link>
          <a href="#download" className="ml-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">Download</a>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 container">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <Link to="/features" className="text-gray-600 hover:text-primary">Features</Link>
            <a href="#download" className="bg-primary text-white px-4 py-2 rounded-md text-center">Download</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 