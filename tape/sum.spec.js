import test from 'tape';
import sum from '../src/sum.js';

test('Counter', (assert) => {
  assert.equal(sum.sum(1, 1), 2);
  assert.end();
});
