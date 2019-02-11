import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import HomePage from './HomePage';

const GlobalStyle = createGlobalStyle`
  body {
    // Roboto font
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400');

    // Background
    background-color: #282C37;

    // Font
    font-size: 16px;
    color: #FFFFFF;

    // Remove default margin
    margin: 0;

    // Enable smooth scrolling.
    scroll-behavior: smooth;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <HomePage />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));
