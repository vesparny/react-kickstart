// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
import React from 'react'; /* eslint no-unused-vars:0 */

import { Route, DefaultRoute } from 'react-router';
import App from './components/App';

import Home from './components/Home';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home} name="home"/>
    /* another route
    <Route name="another" path="another" handler={AnotherRoute} /> */
  </Route>
);

export default routes;
