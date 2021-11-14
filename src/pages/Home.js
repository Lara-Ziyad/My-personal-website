import React from 'react';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';

import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';


export default function Home() {
  return (
    <div>
      <HeroSection />
     
      <ServicesSection />
      <ProjectsSection />
      <ContactBanner />
     
    </div>
  );
}
