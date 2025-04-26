import React, { useState } from 'react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const categoryLabels: Record<string, string> = {
  'devops': 'DevOps',
  'cloud': 'Cloud',
  'infrastructure': 'Infrastructure',
  'tools': 'Tools',
  'languages': 'Languages'
};

const categoryColors: Record<string, { bg: string, bgDark: string, text: string, textDark: string }> = {
  'devops': { 
    bg: 'bg-purple-100', 
    bgDark: 'dark:bg-purple-900/30', 
    text: 'text-purple-800', 
    textDark: 'dark:text-purple-300' 
  },
  'cloud': { 
    bg: 'bg-blue-100', 
    bgDark: 'dark:bg-blue-900/30', 
    text: 'text-blue-800', 
    textDark: 'dark:text-blue-300' 
  },
  'infrastructure': { 
    bg: 'bg-teal-100', 
    bgDark: 'dark:bg-teal-900/30', 
    text: 'text-teal-800', 
    textDark: 'dark:text-teal-300' 
  },
  'tools': { 
    bg: 'bg-amber-100', 
    bgDark: 'dark:bg-amber-900/30', 
    text: 'text-amber-800', 
    textDark: 'dark:text-amber-300' 
  },
  'languages': { 
    bg: 'bg-gray-100', 
    bgDark: 'dark:bg-gray-800', 
    text: 'text-gray-800', 
    textDark: 'dark:text-gray-300' 
  }
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  const filteredSkills = filter === 'all' 
    ? skills
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My expertise in DevOps tools, cloud platforms, and infrastructure technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Skills' : categoryLabels[category]}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const categoryStyle = categoryColors[skill.category];
            
            return (
              <div 
                key={index}
                className={`rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 ${categoryStyle.bg} ${categoryStyle.bgDark}`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`font-bold ${categoryStyle.text} ${categoryStyle.textDark}`}>{skill.name}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/60 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300">
                    {categoryLabels[skill.category]}
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;