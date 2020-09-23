// https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
export function lastDigit(items: number[]) {
  if (!items.length) {
    return 1;
  }

  if (items.length === 0) return 1;
  if (items.length === 1) return items[0] % 10;

  let exponent = items[items.length - 1];
  for (let i = items.length - 2; i >= 0; i--) {
    const base = items[i];
    const cycle = cycles[base % 10];
    const cycleIndex = Number((exponent - 1) % cycle.length);
    exponent = power(base, cycle[cycleIndex]);
  }
  return power(items[0], exponent);
}

function power(x: number, y: number, p = 10) {
  let res = 1;
  while (y > 0) {
    if (y & 1) {
      res = res * x; // If y is odd, multiply x with result
    }
    // y must be even now
    y = y >> 1; // y = y/2
    x = x * x; // change x to x^2
  }
  return res % p;
}

const cycles = [[0], [1], [2, 4, 8, 6], [3, 9, 7, 1], [4, 6], [5], [6], [7, 9, 3, 1], [8, 4, 2, 6], [9, 1]];
