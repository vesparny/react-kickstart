// load global styles before everything else
import 'basscss/css/basscss.css';

import React from 'react';
import Router from 'react-router';
import routes from './routes';
import attachFastClick from 'fastclick';

// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body);

// Expose globally
window.React = React;

const router = Router.create({
  routes: routes,
  location: Router.HashLocation // Router.HistoryLocation
});

router.run((Handler, state) => {
  React.render(<Handler {...state} />,
    document.getElementById('root'));
});
