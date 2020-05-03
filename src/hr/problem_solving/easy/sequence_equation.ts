console.time('first');
function permutationEquation(p: number[]): number[] {
  const result = [];
  p.reduce(
    (acc, _, i) =>
      acc.set(
        i + 1,
        p.reduce((acc, v, j) => (v === i + 1 ? j + 1 : 0) + acc, 0)
      ),
    new Map<number, number>()
  ).forEach((v, _, m) => result.push(m.get(v)));

  return result;
}
console.timeEnd('first');

console.time('second');
function permutationEquationIterative(p: number[]) {
  const m = new Map<number, number>();
  const result: number[] = [];

  for (let i = 0; i < p.length; i++) {
    let xIndex = 0;

    for (let j = 0; j < p.length; j++) {
      if (p[j] === i + 1) {
        xIndex = j + 1;
        break;
      }
    }

    m.set(i + 1, xIndex);
  }

  for (const [, value] of m) {
    result.push(m.get(value));
  }

  return result;
}
console.timeEnd('second');

// from editorial
console.time('third');
function permutationEquationIterativeArray(p: number[]) {
  const ans = new Array(100);
  const pp = new Array(100);

  for (let i = 1; i <= p.length; i++) {
    pp[i] = p[i - 1];
  }

  for (let i = 1; i <= p.length; i++) {
    ans[pp[pp[i]]] = i;
  }

  return ans;
}
console.timeEnd('third');

export {
  permutationEquation,
  permutationEquationIterative,
  permutationEquationIterativeArray,
};

// console.log(permutationEquation([5, 2, 1, 3, 4]));
// console.log(permutationEquationIterative([5, 2, 1, 3, 4]));
// console.log(permutationEquationIterativeArray([5, 2, 1, 3, 4]));

// console.log(permutationEquation([2, 3, 1]));
// console.log(permutationEquationIterative([2, 3, 1]));
// console.log(permutationEquationIterativeArray([2, 3, 1]));
