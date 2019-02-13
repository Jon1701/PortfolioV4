import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';

// Load core styles.
require('_static/stylesheets/styles.scss');

const App = () => <HomePage />;

ReactDOM.render(<App />, document.getElementById('app'));
