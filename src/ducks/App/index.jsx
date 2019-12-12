import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Search from '../Search';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Search />
      </Route>
    </Switch>
  </Router>
);
export default App;
