import Stack from '../data-structures/stack';

export function parenthesesChecker(symbols: string) {
  const stack = new Stack<string>();
  const opens = '([{';
  const closers = ')]}';
  let balanced = true;
  let index = 0;

  while (index < symbols.length && balanced) {
    let symbol = symbols[index];

    if (opens.includes(symbol)) {
      stack.push(symbol);
    } else {
      if (stack.isEmpty()) {
        balanced = false;
      } else {
        let top = stack.pop();

        if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
          balanced = false;
        }
      }
    }

    index++;
  }

  return balanced && stack.isEmpty();
}
