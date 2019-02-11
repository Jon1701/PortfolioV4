import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVGIcon from '_components/SVGIcon';

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
`;

const ContentMargin = styled.div`
  max-width: 892px;
  margin: 0 auto;
  padding: 25px 0;
`;

const SectionHeader = styled.h1`
  font-size: 3rem;
  font-weight: 100;
`;

const TechnologiesLayout = styled.div`
  // Layout.
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  // Spacing.
  margin: 25px 0;

  // Icon container.
  & > div {
    flex-basis: 150px;

    &:not(:last-child) {
      margin-bottom: 35px;
    }
  }

  // Icon.
  & > div > div:first-child {
    svg {
      width: auto;
      height: 60px;
    }
  }

  // Label.
  & > div > div:last-child {
    font-size: 1rem;
  }
`;

const AboutMeSection = ({ refProp }) => {
  const technologies = [
    'html5',
    'css3',
    'javascript',
    'react',
    'redux',
    'reactRouter',
    'jquery',
    'd3',
    'chartjs',
    'docker',
    'git',
    'webpack',
    'babel',
    'gulp',
    'sass',
    'postcss',
    'nodejs',
    'mongodb',
    'mysql',
    'heroku',
    'mocha',
    'jest',
    'eslint',
    'stylelint',
    'prettier',
    'styledComponents',
    'expressjs',
    'php',
    'wordpress',
    'jira',
    'confluence',
    'travis',
    'stripe',
    'githubLight',
    'debian',
    'ec2',
    'digitalOcean',
    'python',
  ];

  return (
    <Section ref={refProp}>
      <ContentMargin>
        <SectionHeader>About Me</SectionHeader>
        <p>
          Hi! My name is Jon, and I am a Modern JavaScript Developer based in
          Toronto.
        </p>

        <p>Here are some of the technologies I have used:</p>

        <TechnologiesLayout>
          {technologies.map(item => (
            <SVGIcon icon={item} key={item} />
          ))}
        </TechnologiesLayout>
      </ContentMargin>
    </Section>
  );
};

AboutMeSection.propTypes = {
  refProp: PropTypes.instanceOf(Object).isRequired,
};

export default AboutMeSection;
