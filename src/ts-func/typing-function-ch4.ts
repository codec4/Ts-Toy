export function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// sum([1, 2, 3]); // evaluates to 6

export function sumVariadic(..._: number[]): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}

// sumVariadic(1, 2, 3); // evaluates to 6

export function add(a: number, b: number): number {
  return a + b;
}

// add(10, 20); // evaluates to 30
// add.apply(null, [10, 20]); // evaluates to 30
// add.call(null, 10, 20); // evaluates to 30
// add.bind(null, 10, 20)(); // evaluates to 30

export function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// const gen = createFibonacciGenerator();

export const numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  }
};

type Reservation = {
  checkIn: string;
  checkOut: string;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
};

export const reserve: Reserve = (
  _: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    return {
      checkIn: 'fst',
      checkOut: 'scd'
    }
  } else if (typeof toOrDestination === "string") {
    return {
      checkIn: 'fst',
      checkOut: 'scd'
    }
  }

  return {
    checkIn: 'fst',
    checkOut: 'scd'
  }
};

type A = { type: string };
type C = { type: string };
type T = { type: string };
type R = { type: string };

export function createElement(tag: "a"): A;
export function createElement(tag: "canvas"): C;
export function createElement(tag: "table"): T;
export function createElement(tag: string): R {
  return { type: tag };
}

// console.log(createElement("canvas"));

type Identity = {
  (x: string): string;
  (x: number): number;
};

// no error as expected
export const identity: Identity = <T>(x: T) => x;

// identity(true);

type TreeNode = {
  value: string;
};

type LeafNode = TreeNode & {
  isLeaf: true;
};

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

export function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value)
  };
}

let a: TreeNode = { value: "a" };
let b: LeafNode = { value: "b", isLeaf: true };
let c: InnerNode = { value: "c", children: [b] };

export const a1 = mapNode(a, _ => _.toUpperCase()); // TreeNode
export const b1 = mapNode(b, _ => _.toUpperCase()); // LeafNode
export const c1 = mapNode(c, _ => _.toUpperCase()); // InnerNode

// console.log(a1);
// console.log(b1);
// console.log(c1);

type HasSides = { numberOfSides: number };
type SidesHaveLength = { sideLength: number };

export function logPerimeter<Shape extends HasSides & SidesHaveLength>(
  s: Shape
): Shape {
  // console.log(s.numberOfSides * s.sideLength);
  return s;
}

// type Square = HasSides & SidesHaveLength;
// const square: Square = { numberOfSides: 4, sideLength: 3 };
// logPerimeter(square); // Square, logs "12"

export function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}

export function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

export function fill2(length: number, value: string, _: string): string[] {
  return Array.from({ length }, () => value);
}

// const fooResult = call(fill, 10, "a"); // evaluates to an array of 10 'a's
// const booResult = call(fill2, 10, "a", "2");
// console.log(fooResult);
