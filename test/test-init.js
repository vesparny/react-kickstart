import { expect } from 'chai';

global.expect = expect;

require.extensions['.css'] = function () {
  return null;
};

require.extensions['.scss'] = function () {
  return null;
};

require.extensions['.styl'] = function () {
  return null;
};
