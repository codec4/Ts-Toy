import tap from 'tap';
const test = tap.test;
import {lastDigit, lastDigitIterative} from './last-digit-of-a-huge-numbers';

test('lastDigit of X1^X2^X3^...^Xn', t => {
  t.equal(lastDigit([]), 1);
  t.equal(lastDigit([0, 0]), 1); // 0 ^ 0
  t.equal(lastDigit([0, 0, 0]), 0); // 0^(0 ^ 0) = 0^1 = 0
  t.equal(lastDigit([0, 0, 0, 0]), 1); // 0^(0 ^ 0) = 0^1 = 0
  t.equal(lastDigit([1, 2]), 1);
  t.equal(lastDigit([3, 4, 5]), 1);
  t.equal(lastDigit([4, 3, 6]), 4);
  t.equal(lastDigit([7, 6, 21]), 1);
  t.equal(lastDigit([12, 30, 21]), 6);
  t.equal(lastDigit([2, 2, 2, 0]), 4);
  t.equal(lastDigit([937640, 767456, 981242]), 0);
  t.equal(lastDigit([123232, 694022, 140249]), 6);
  t.equal(lastDigit([499942, 898102, 846073]), 6);
  t.end();
});

test('lastDigitIterative of X1^X2^X3^...^Xn', t => {
  t.equal(lastDigitIterative([]), 1);
  t.equal(lastDigitIterative([0, 0]), 1); // 0 ^ 0
  t.equal(lastDigitIterative([0, 0, 0]), 0); // 0^(0 ^ 0) = 0^1 = 0
  t.equal(lastDigitIterative([0, 0, 0, 0]), 1); // 0^(0 ^ 0) = 0^1 = 0
  t.equal(lastDigitIterative([1, 2]), 1);
  t.equal(lastDigitIterative([3, 4, 5]), 1);
  t.equal(lastDigitIterative([4, 3, 6]), 4);
  t.equal(lastDigitIterative([7, 6, 21]), 1);
  t.equal(lastDigitIterative([12, 30, 21]), 6);
  t.equal(lastDigitIterative([2, 2, 2, 0]), 4);
  t.equal(lastDigitIterative([937640, 767456, 981242]), 0);
  t.equal(lastDigitIterative([123232, 694022, 140249]), 6);
  t.equal(lastDigitIterative([499942, 898102, 846073]), 6);
  t.end();
});
