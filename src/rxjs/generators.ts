import fetch from 'node-fetch';

// Define a function named asyncAlt that takes a generator function as an argument
function asyncWithGenerator(generatorFunction: any) {
  // Return a function
  return function () {
    // Create and assign the generator object
    const generator = generatorFunction();

    // Define a function that accepts the next iteration of the generator
    function resolve(next: IteratorResult<any, any>): any {
      // If the generator is closed and there are no more values to yield,
      // resolve the last value
      if (next.done) {
        return Promise.resolve(next.value);
      }

      // If there are still values to yield, they are promises and
      // must be resolved.
      return Promise.resolve(next.value).then((response) => {
        return resolve(generator.next(response));
      });
    }

    // Begin resolving promises
    return resolve(generator.next());
  };
}

// const getUsers = asyncAlt(function* () {
//   const response = yield fetch("https://jsonplaceholder.typicode.com/users");
//   const json = yield response.json();

//   return json;
// });

const getUsers = asyncWithGenerator(function* () {
  const response = yield fetch('https://jsonplaceholder.typicode.com/users');
  const json = yield response.json();

  return json;
});

// Invoking the function
getUsers().then((response: any) => console.log(response));
