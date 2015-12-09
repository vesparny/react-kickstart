import {jsdom} from 'jsdom';
import sinon from 'sinon';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

global.sinon = sinon;
global.__DEV__ = true;

// ensure requiring css not to throw
require.extensions['.css'] = () => {
  return null;
};


require('./components/App.spec');
require('./components/Counter.spec');
require('./components/Home.spec');
