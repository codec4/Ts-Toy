import { call, fill, fill2 } from './prog-ts/typing-function-ch4'


const fooResult = call(fill, 10, "a");
const booResult = call(fill2, 10, "a", "2");

console.log('fooResult >>> ', fooResult);
console.log('booResult >>> ', booResult);
