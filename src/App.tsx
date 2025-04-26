import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profile';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero profile={profileData} />
        <Experience experience={profileData.experience} />
        <Skills skills={profileData.skills} />
        <Contact contacts={profileData.contacts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;