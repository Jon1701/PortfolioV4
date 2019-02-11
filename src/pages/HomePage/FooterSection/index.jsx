import React from 'react';
import styled from 'styled-components';
import SVGInline from 'react-svg-inline';

const bgImage = require('_backgrounds/hixs_pattern_evolution_@2X.png');

const Section = styled.section`
  // Positioning.
  position: relative;

  // Dimensions.
  max-width: 100vw;
  box-sizing: border-box;
  padding: 25px 0;

  // Alignment.
  text-align: center;

  // Font.
  font-size: 2rem;
  font-weight: 300;

  // Background
  background-color: #222d32;
  background-image: url(${bgImage});
  background-attachment: fixed;
`;

const IconContainer = styled.div`
  // Link style.
  a {
    outline: none;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 25px;
    }
  }

  // SVG style.
  svg {
    // Colour.
    fill: white;

    // Dimensions.
    width: 50px;
    height: auto;

    &:hover {
      filter: drop-shadow(0px 0px 10px #fff);
      transition: 0.3s ease-in-out;
    }
  }
`;

const FooterSection = () => (
  <Section>
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

    <div>jonbalon.com &copy; 2019</div>
  </Section>
);

export default FooterSection;
