import { test, expect } from 'vitest';
import { add } from './foo.js';

test('add', () => {
  expect(add(1, 1)).toBe(2);
});
