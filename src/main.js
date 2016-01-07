import 'babel-polyfill';
import 'normalize.css';
import './globals.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import routes from './routes';

// Expose globally
window.React = React;

// only for GitHub pages
// do prefer createBrowserHistory
const history = createHashHistory();

ReactDOM.render(
  <Router
    children={routes}
    history={history} />,
  document.getElementById('root'));
