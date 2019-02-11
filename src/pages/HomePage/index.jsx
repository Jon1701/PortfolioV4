import React, { useRef } from 'react';

// Page sections.
import IntroSection from './IntroSection';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import FooterSection from './FooterSection';

const HomePage = () => {
  // Create a ref to the About Me section.
  const refAboutMe = useRef(null);

  // Handler to scroll to the About me section.
  const scrollToAboutMe = () => {
    window.scrollTo(0, refAboutMe.current.offsetTop);
  };

  return (
    <React.Fragment>
      <IntroSection handleScrollToAboutMe={scrollToAboutMe} />
      <AboutMeSection refProp={refAboutMe} />
      <ProjectsSection />
      <FooterSection />
    </React.Fragment>
  );
};

export default HomePage;
