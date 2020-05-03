console.time('first');
function repeatedString(s: string, n: number): number {
  const sRepeats = Math.floor(n / s.length);

  let aInS = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      aInS++;
    }
  }

  if (n % s.length === 0) {
    return aInS * sRepeats;
  }

  let start = s.length * sRepeats;
  let aTotal = aInS * sRepeats;
  for (let i = start, j = 0; i < n && j < s.length; i++, j++) {
    if (s[j] === 'a') {
      aTotal++;
    }
  }

  return aTotal;
}
console.timeEnd('first');

console.time('second');
function repeatedStringHr(s: string, n: number): number {
  let A = 0;
  let B = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      A++;
    }

    if (i < n % s.length && s[i] === 'a') {
      B++;
    }
  }

  return Math.floor(n / s.length) * A + B;
}
console.timeEnd('second');

// console.log(repeatedString('aba', 10));
// console.log(repeatedStringHr('aba', 10));

// console.log(repeatedString('abac', 11));
// console.log(repeatedStringHr('abac', 11));

// console.log(repeatedString('abcac', 10));
// console.log(repeatedStringHr('abcac', 10));

// console.log(repeatedString('a', 1000000000000));
// console.log(repeatedStringHr('a', 1000000000000));

export { repeatedString, repeatedStringHr };
