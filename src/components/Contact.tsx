import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Contact as ContactType } from '../types';

interface ContactProps {
  contacts: ContactType[];
}

const Contact: React.FC<ContactProps> = ({ contacts }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for professional opportunities or to discuss cloud and DevOps technologies.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => {
              // Dynamic access to Lucide icons
              const IconComponent = (LucideIcons as any)[contact.icon] || LucideIcons.Link;
              
              return (
                <a 
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{contact.platform}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{contact.platform === 'Email' ? 'Send me an email' : `Connect on ${contact.platform}`}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;