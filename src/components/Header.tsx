import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-blue-600 dark:text-blue-400 font-bold text-xl">
          <span className="font-mono">&lt;</span>
          DevOps Portfolio
          <span className="font-mono">/&gt;</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <nav className="flex space-x-6">
            <button 
              onClick={() => scrollTo('about')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('experience')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollTo('skills')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full top-full bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col container mx-auto px-4 py-4">
            <button 
              onClick={() => scrollTo('about')} 
              className="py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('experience')} 
              className="py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollTo('skills')} 
              className="py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;