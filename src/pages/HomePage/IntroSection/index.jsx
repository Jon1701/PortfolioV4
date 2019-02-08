import React from 'react';
import styled from 'styled-components';
import SVGInline from 'react-svg-inline';

const bgFilter = 'rgba(0, 0, 0, 0.6)';
const bgImage = require('_backgrounds/kevin-ku-364843-unsplash.jpg');

const Section = styled.section`
  // Positioning.
  position: relative;

  // Dimensions
  max-width: 100vw;
  max-height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;

  // Layout
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  // Alignment
  text-align: center;

  // Font
  font-family: 'Roboto', sans-serif;
  font-weight: 100;

  // Background
  background-color: #222d32;
  background-image: linear-gradient(${bgFilter}, ${bgFilter}), url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ContentMargin = styled.div`
  max-width: 892px;
  margin: 0 auto;
`;

const Name = styled.div`
  font-size: 5rem;
  margin-bottom: 15px;
`;

const TagLine = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
`;

const IconContainer = styled.div`
  // Link style.
  a {
    outline: none;

    &:not(:last-child) {
      margin-right: 25px;
    }
  }

  // SVG style.
  svg {
    // Colour.
    fill: white;

    // Dimensions.
    width: 100px;
    height: auto;

    &:hover {
      filter: drop-shadow(0px 0px 10px #fff);
      transition: 0.3s ease-in-out;
    }
  }
`;

const MoreInfoContainer = styled.div`
  // Positioning.
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 80px;

  // Button appearance.
  a {
    // Colour.
    background-color: #16a085;
    color: #fff;

    // Border.
    border: solid 1px #16a085;
    border-radius: 3px;

    // Font.
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;

    // Spacing.
    padding: 15px;

    // Cursor.
    cursor: pointer;

    // Outline.
    outline: none;

    // Hover effect.
    &:hover {
      background-color: #005d4b;
      border-color: #005d4b;
      transition: 0.3s ease-in-out;
    }
  }
`;

const IntroSection = () => (
  <Section>
    <ContentMargin>
      <Name>Jon Balon</Name>

      <TagLine>Modern JavaScript Developer</TagLine>

      <IconContainer>
        <a
          href="https://github.com/Jon1701"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGInline svg={require('_icons/github.svg')} />
        </a>

        <a
          href="https://www.linkedin.com/in/jonbalon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGInline svg={require('_icons/linkedin.svg')} />
        </a>
      </IconContainer>

      <MoreInfoContainer>
        <a href="#about-me">Learn More About My Work</a>
      </MoreInfoContainer>
    </ContentMargin>
  </Section>
);

export default IntroSection;
