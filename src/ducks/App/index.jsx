import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Search from '../../components/Search';
import SearchResults from '../../components/Results';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Search />
        <SearchResults />
      </Route>
    </Switch>
  </Router>
);
export default App;
