// Updated task:Advanced Javascript Functions Practice

// Part 1 - Arrow function with default parameter

let greet = (name, greeting = "Hello ") => {
  return greeting + name;
};

console.log(greet("Hasan")); // without the second parameter
console.log(greet("Hasan", "Hiii ")); // with the second parameter

// Part 2 - Recursion with Arrow Function

let factorial = () => {
  factorial();
};

// Part 3 - Simplified Use of Rest Parameters in Arrow Function

let sumAll = (...rest) => {
  let sum = 0;
  for (i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  return sum;
};

console.log(sumAll(1, 2, 3, 4, 5));

// Part 4 - Understanding Call Stack with Array Functtion

let first = (a = "hello ", b = "sam") => {
  return a + b;
};

let second = (fruit = "apple ", name = "is a fruit") => {
  second();
  return fruit + name;
};

let third = (book = "Js ") => {
  return book;
  second();
};

let fourth = (name = "jason ", pro = "teacher") => {
  return name + pro;
  third();
};

console.log(second());
console.log(third());
console.log(fourth());
