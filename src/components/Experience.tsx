import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in DevOps and cloud infrastructure roles across different organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div 
              key={index} 
              className={`relative pl-8 ${index !== experience.length - 1 ? 'pb-12' : ''}`}
            >
              {index !== experience.length - 1 && (
                <div className="absolute left-3.5 top-8 bottom-0 w-px bg-blue-200 dark:bg-blue-700/50"></div>
              )}
              <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mt-2 md:mt-0">
                    {job.duration}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <ChevronRight size={18} className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;