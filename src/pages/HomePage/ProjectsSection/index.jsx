import React from 'react';
import styled from 'styled-components';
import SVGInline from 'react-svg-inline';
import PortfolioGrid from './PortfolioGrid';

const bgImage = require('_backgrounds/hixs_pattern_evolution_@2X.png');

const Section = styled.section`
  // Positioning.
  position: relative;

  // Dimensions.
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;

  // Alignment.
  text-align: center;

  // Font.
  font-size: 1rem;

  // Background.
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

const ButtonContainer = styled.div`
  margin-top: 100px;

  // Button appearance.
  a {
    display: inline-block;

    // Colour.
    background-color: #16a085;
    color: #fff;

    // Border.
    border: solid 1px #16a085;
    border-radius: 3px;
    outline: none;

    // Font.
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;

    // Spacing.
    padding: 15px;

    // Cursor.
    cursor: pointer;

    // Hover effect.
    &:hover {
      background-color: #005d4b;
      border-color: #005d4b;
      transition: 0.3s ease-in-out;
    }

    &:focus {
      outline: none;
    }

    svg {
      fill: white;
      height: 50px;
    }
  }
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

        <ButtonContainer>
          <a
            href="https://github.com/Jon1701"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <SVGInline svg={require('_icons/github.svg')} />
            </div>
            <div>More Projects Available on GitHub</div>
          </a>
        </ButtonContainer>
      </ContentMargin>
    </Section>
  );
};

export default AboutMeSection;
