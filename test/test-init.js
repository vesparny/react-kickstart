import { expect } from 'chai';

global.expect = expect;

require.extensions['.css'] = function () {
  return null;
};
