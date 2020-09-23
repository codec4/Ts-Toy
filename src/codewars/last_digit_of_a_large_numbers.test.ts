import { expect, test } from 'vitest';
import { lastDigit } from './last_digit_of_a_large_numbers';

test('lastDigit pow(7, 9) to equal 7', () => {
  expect(lastDigit(BigInt(7), BigInt(9))).toBe(7);
});

test('lastDigit pow(10, 10000000000) to equal 0', () => {
  expect(lastDigit(BigInt(10), BigInt(10000000000))).toBe(0);
});
