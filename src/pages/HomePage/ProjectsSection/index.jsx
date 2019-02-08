import React from 'react';
import styled from 'styled-components';
import PortfolioGrid from './PortfolioGrid';

const bgImage = require('_backgrounds/hixs_pattern_evolution_@2X.png');

const Section = styled.section`
  // Positioning.
  position: relative;

  // Dimensions
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;

  // Alignment
  text-align: center;

  // Font
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  // Background
  background-color: #222d32;
  background-image: url(${bgImage});
  background-attachment: fixed;

  // Extra padding on the bottom of the section.
  padding-bottom: 100px;
`;

const ContentMargin = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 25px 0 0 0;
`;

const SectionHeader = styled.h1`
  font-size: 3rem;
  font-weight: 100;
`;

const AboutMeSection = () => {
  return (
    <Section>
      <ContentMargin>
        <SectionHeader>Projects</SectionHeader>

        <PortfolioGrid
          projectIds={[
            'evoPlugin',
            'evoMemberPortal',
            'evoPluginWebsite',
            'navigateGroupWebsite',
          ]}
        />
      </ContentMargin>
    </Section>
  );
};

export default AboutMeSection;
