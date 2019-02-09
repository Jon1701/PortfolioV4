import React from 'react';

// Page sections.
import IntroSection from './IntroSection';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import FooterSection from './FooterSection';

const HomePage = () => (
  <div>
    <IntroSection />
    <AboutMeSection />
    <ProjectsSection />
    <FooterSection />
  </div>
);

export default HomePage;
