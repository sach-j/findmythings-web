import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-gray-600">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 text-center">
            <p className="text-xl font-bold text-primary mb-2">FindMyThings</p>
            <p className="text-sm">Made with ❤️</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/support" className="text-gray-600 hover:text-primary">Support</Link>
            <span className="text-gray-300">|</span>
            <Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>Copyright © {new Date().getFullYear()} FindMyThings. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 