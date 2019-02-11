import React from 'react';
import propTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import styled from 'styled-components';

// Creates an object containing Icon information.
const createObj = (svg, label) => ({ svg, label });

// Collection of icons.
const iconStore = {
  babel: createObj(require('_svg/babel.svg'), 'Babel'),
  chartjs: createObj(require('_svg/chartjs.svg'), 'Chart.js'),
  confluence: createObj(require('_svg/confluence.svg'), 'Confluence'),
  css3: createObj(require('_svg/css3.svg'), 'CSS3'),
  debian: createObj(require('_svg/debian.svg'), 'Debian'),
  digitalOcean: createObj(require('_svg/digitalocean.svg'), 'DigitalOcean'),
  docker: createObj(require('_svg/docker.svg'), 'Docker'),
  d3: createObj(require('_svg/d3.svg'), 'D3.js'),
  ec2: createObj(require('_svg/ec2.svg'), 'AWS EC2'),
  eslint: createObj(require('_svg/eslint.svg'), 'ESLint'),
  expressjs: createObj(require('_svg/nodejs.svg'), 'Express.js'),
  html5: createObj(require('_svg/html5.svg'), 'HTML5'),
  git: createObj(require('_svg/git.svg'), 'Git'),
  githubLight: createObj(require('_svg/github-light.svg'), 'GitHub'),
  gulp: createObj(require('_svg/gulp.svg'), 'Gulp'),
  heroku: createObj(require('_svg/heroku.svg'), 'Heroku'),
  javascript: createObj(require('_svg/javascript.svg'), 'JavaScript'),
  jest: createObj(require('_svg/jest.svg'), 'Jest'),
  jira: createObj(require('_svg/jira.svg'), 'JIRA'),
  jquery: createObj(require('_svg/jquery.svg'), 'jQuery'),
  mocha: createObj(require('_svg/mocha.svg'), 'Mocha'),
  mongodb: createObj(require('_svg/mongodb.svg'), 'MongoDB'),
  mysql: createObj(require('_svg/mysql.svg'), 'MySQL'),
  nodejs: createObj(require('_svg/nodejs.svg'), 'Node.js'),
  php: createObj(require('_svg/php.svg'), 'PHP'),
  postcss: createObj(require('_svg/postcss.svg'), 'PostCSS'),
  prettier: createObj(require('_svg/prettier.svg'), 'Prettier'),
  python: createObj(require('_svg/python.svg'), 'Python'),
  react: createObj(require('_svg/react.svg'), 'React'),
  reactRouter: createObj(require('_svg/react-router.svg'), 'React Router'),
  redux: createObj(require('_svg/redux.svg'), 'Redux'),
  sass: createObj(require('_svg/sass.svg'), 'Sass'),
  stripe: createObj(require('_svg/stripe.svg'), 'Stripe'),
  styledComponents: createObj(
    require('_svg/styled-components.svg'),
    'Styled Components',
  ),
  stylelint: createObj(require('_svg/stylelint.svg'), 'Stylelint'),
  travis: createObj(require('_svg/travis.svg'), 'Travis CI'),
  webpack: createObj(require('_svg/webpack.svg'), 'Webpack'),
  wordpress: createObj(require('_svg/wordpress.svg'), 'WordPress'),
};

const Container = styled.div`
  //  No styles.
`;

const SVGIcon = ({ icon, label }) => (
  <Container>
    <div>
      <SVGInline svg={iconStore[icon].svg} />
    </div>
    {label ? <div>{label}</div> : <div>{iconStore[icon].label}</div>}
  </Container>
);

SVGIcon.propTypes = {
  icon: propTypes.oneOf(Object.keys(iconStore)).isRequired,
  label: propTypes.string,
};

SVGIcon.defaultProps = {
  label: '',
};

export default SVGIcon;
