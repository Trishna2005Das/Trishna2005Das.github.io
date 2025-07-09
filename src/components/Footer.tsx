
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <Code size={16} />
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Trishna Das</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2025 Trishna Das. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
