import 'babel-polyfill';
import 'normalize.css';
import './globals.css';
import React from 'react';
import ReactDOM from 'react-dom';
// only for GitHub pages
// do prefer import { browserHistory } from 'react-router'
import Router, {hashHistory} from 'react-router';
import routes from './routes';

// Expose globally
window.React = React;

ReactDOM.render(
  <Router
    children={routes}
    history={hashHistory} />,
  document.getElementById('root'));
