import React from 'react';
import propTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import styled from 'styled-components';

const createObj = (svg, label) => ({ svg, label });

const iconStore = {
  chartjs: createObj(require('_svg/chartjs.svg'), 'Chart.js'),
  css3: createObj(require('_svg/css3.svg'), 'CSS3'),
  docker: createObj(require('_svg/docker.svg'), 'Docker'),
  d3: createObj(require('_svg/d3.svg'), 'D3.js'),
  eslint: createObj(require('_svg/eslint.svg'), 'ESLint'),
  expressjs: createObj(require('_svg/nodejs.svg'), 'Express.js'),
  html5: createObj(require('_svg/html5.svg'), 'HTML5'),
  git: createObj(require('_svg/git.svg'), 'Git'),
  gulp: createObj(require('_svg/gulp.svg'), 'Gulp'),
  heroku: createObj(require('_svg/heroku.svg'), 'Heroku'),
  javascript: createObj(require('_svg/javascript.svg'), 'JavaScript'),
  jquery: createObj(require('_svg/jquery.svg'), 'jQuery'),
  mocha: createObj(require('_svg/mocha.svg'), 'Mocha'),
  mongodb: createObj(require('_svg/mongodb.svg'), 'MongoDB'),
  mysql: createObj(require('_svg/mysql.svg'), 'MySQL'),
  nodejs: createObj(require('_svg/nodejs.svg'), 'Node.js'),
  php: createObj(require('_svg/php.svg'), 'PHP'),
  postcss: createObj(require('_svg/postcss.svg'), 'PostCSS'),
  react: createObj(require('_svg/react.svg'), 'React'),
  reactRouter: createObj(require('_svg/react-router.svg'), 'React Router'),
  redux: createObj(require('_svg/redux.svg'), 'Redux'),
  sass: createObj(require('_svg/sass.svg'), 'Sass'),
  stylelint: createObj(require('_svg/stylelint.svg'), 'Stylelint'),
  webpack: createObj(require('_svg/webpack.svg'), 'Webpack'),
  wordpress: createObj(require('_svg/wordpress.svg'), 'WordPress'),
};

const Container = styled.div``;

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