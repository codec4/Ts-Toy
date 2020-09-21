function lcm(x: number, y: number) {
  return !x || !y ? 0 : (x / gcd(x, y)) * y;
}

function gcd(x: number, y: number) {
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }

  return x;
}

function getTotalX(a: number[], b: number[]): number {
  const lcmOfA = a.reduce((acc, v) => {
    return lcm(acc, v);
  }, a[0]);

  const gcdOfB = b.reduce((acc, v) => {
    return gcd(acc, v);
  }, b[0]);

  let result = 0;
  for (let i = lcmOfA, j = 2; i <= gcdOfB; i = lcmOfA * j, j++) {
    if (gcdOfB % i === 0) {
      result++;
    }
  }

  return result;
}

export { getTotalX };
