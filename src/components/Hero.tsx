import React, { useState, useEffect } from 'react';
import { Cloud, Server, Database } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = profile.title;
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.substring(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [typedText, isTyping, fullText]);

  return (
    <section id="about" className="pt-28 pb-20 min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {profile.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6 h-12">
              {typedText}
              {isTyping && <span className="animate-blink">|</span>}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 inline-flex items-center shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Experience
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 inline-flex items-center shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8 p-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md">
                      <Cloud size={32} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Cloud</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl bg-teal-100 dark:bg-teal-900/60 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-md">
                      <Server size={32} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Infrastructure</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl bg-purple-100 dark:bg-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-md">
                      <Database size={32} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">DevOps</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;