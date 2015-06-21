import { expect } from 'chai';

global.expect = expect;

// force requiring css not to throw
require.extensions['.css'] = function () {
  return null;
};
