import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {currentYear} DevOps Portfolio. All rights reserved.
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">
              Built with <span className="text-blue-400">React</span> and <span className="text-blue-400">Tailwind CSS</span> | Deployed on GitHub Pages
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;