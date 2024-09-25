// https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
export function lastDigit(a: bigint, b: bigint) {
  if (b === 0n) {
    return 1n;
  }
  return a ** (b < 4 ? b : (b % 4n) + 4n) % 10n;
}

export function lastDigitNotSmart(a: bigint, b: bigint) {
  // Handle the special case where b is 0
  if (b === 0n) {
    return 1;
  }

  // Calculate the last digit of a
  const lastDigitA = a % 10n;

  // Cycles for the last digit of a^b for each last digit of a (0-9)
  const cycles = {
    0: [0],
    1: [1],
    2: [2, 4, 8, 6],
    3: [3, 9, 7, 1],
    4: [4, 6],
    5: [5],
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1],
  };

  // Convert lastDigitA to a string to use as a key in the cycles object
  const cycle = cycles[Number(lastDigitA)];

  // Find the position in the cycle using (b - 1) % length_of_cycle
  const cycleIndex = Number(BigInt(b - 1n) % BigInt(cycle.length));

  // Return the last digit of a^b
  return cycle[cycleIndex];
}
