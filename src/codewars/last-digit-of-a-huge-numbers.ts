// https://www.codewars.com/kata/5511b2f550906349a70004e1/train/javascript
export function lastDigit(lst: number[]) {
  return !lst.length
    ? 1
    : Number(
        lst
          .map(v => BigInt(v))
          .reverse()
          .reduce((acc, num) => num ** (acc < 4 ? acc : (acc % 4n) + 4n), 1n) %
          10n,
      );
}

export function lastDigitIterative(lst: number[]) {
  if (!lst.length) {
    return 1;
  }

  let e = 1;
  for (let i = lst.length - 1; i >= 0; --i) {
    let n = lst[i];
    e = Math.pow(
      i === 0 ? n % 10 : n < 4 ? n : (n % 4) + 4,
      (e < 4 ? e : (e % 4) + 4) % 10,
    );
  }
  return e % 10;
}
