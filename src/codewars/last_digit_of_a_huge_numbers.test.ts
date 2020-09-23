import { expect, test } from 'vitest';
import { lastDigit } from './last_digit_of_a_huge_numbers';

test('lastDigit of a huge numbers', () => {
  // expect(lastDigit([])).toBe(1);
  // expect(lastDigit([0, 0])).toBe(1); // 0 ^ 0
  // expect(lastDigit([0, 0, 0])).toBe(0); // 0^(0 ^ 0) = 0^1 = 0
  // expect(lastDigit([1, 2])).toBe(1);
  // expect(lastDigit([3, 4, 5])).toBe(1);
  // expect(lastDigit([4, 3, 6])).toBe(4);
  // expect(lastDigit([7, 6, 21])).toBe(1);
  // expect(lastDigit([12, 30, 21])).toBe(6);
  // expect(lastDigit([2, 2, 2, 0])).toBe(4);
  expect(lastDigit([937640, 767456, 981242])).toBe(0);
  expect(lastDigit([123232, 694022, 140249])).toBe(6);
  expect(lastDigit([499942, 898102, 846073])).toBe(6);
});
