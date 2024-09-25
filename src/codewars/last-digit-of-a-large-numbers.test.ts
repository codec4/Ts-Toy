import tap from 'tap';
const test = tap.test;
import {lastDigit} from './last-digit-of-a-large-numbers';

test('lastDigit of large pow', t => {
  t.equal(lastDigit(4n, 1n), 4n);
  t.equal(lastDigit(4n, 2n), 6n);
  t.equal(lastDigit(9n, 7n), 9n);
  t.equal(lastDigit(10n, 10000000000n), 0n);
  t.equal(
    lastDigit(
      1606938044258990275541962092341162602522202993782792835301376n,
      2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376n,
    ),
    6n,
  );
  t.equal(
    lastDigit(
      3715290469715693021198967285016729344580685479654510946723n,
      68819615221552997273737174557165657483427362207517952651n,
    ),
    7n,
  );
  t.equal(lastDigit(243672785622419656365195053214030768152024n, 0n), 1n);
  t.end();
});
