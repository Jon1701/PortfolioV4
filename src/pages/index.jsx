import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ProjectPage from './ProjectPage';

// Load core styles.
require('_static/stylesheets/styles.scss');

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/project/:projectId" component={ProjectPage} />
      <Route component={() => <div>not found</div>} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
