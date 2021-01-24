import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function Routes() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
