// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
import React from 'react'; /* eslint no-unused-vars:0 */

import { Route, DefaultRoute } from 'react-router';
import App from './components/App';

import Home from './components/dumb/Home';
import CounterPage from './components/smart/CounterPage';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} name="home"/>
    <Route
      name="counter"
      path="counter"
      handler={CounterPage}
    />
  </Route>
);

export default routes;
