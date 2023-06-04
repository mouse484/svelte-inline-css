import { expect, test } from 'vitest';
import { buildStyle } from '.';

test('Object Syntax', () => {
  const result = buildStyle({ color: 'red', fontSize: '1px' });
  expect(result).toEqual([
    ['color', 'red'],
    ['font-size', '1px'],
  ]);
});

test('Array Syntax', () => {
  const result = buildStyle([{ color: 'red' }, { backgroundColor: 'blue' }]);
  expect(result).toEqual([
    ['color', 'red'],
    ['background-color', 'blue'],
  ]);
});
