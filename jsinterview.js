// 1. What is the difference between 'Pass by Value' and 'Pass by Reference'?
// Ans:
// In Pass by Value, a copy of the original value is created and passed to the
//  function. Any changes made to the value within the function do not affect
//   the original value outside the function.

function changeValue(x) {
  x = 10; // changing the value of x
  console.log("Inside function: x =", x);
}
let x = 5;
console.log("Before calling function: x =", x);
changeValue(x);
console.log("After calling function: x =", x);
// output:
// Before calling function: x = 5
// Inside function: x = 10
// After calling function: x = 5
// Pass by Reference
// In Pass by Reference, a reference to the original value is passed to the function. Any changes made
//  to the value within the function affect the original value outside the function.

function changeValue(obj) {
  obj.value = 10; // changing the value of the object
  console.log("Inside function: obj.value =", obj.value);
}
let obj = { value: 5 };
console.log("Before calling function: obj.value =", obj.value);
changeValue(obj);
console.log("After calling function: obj.value =", obj.value);
// output:
// Before calling function: obj.value = 5
// Inside function: obj.value = 10
// After calling function: obj.value = 10
// ----------------------------------------------------------------------------------
// 2. What is the difference between map and filter ?
// The map() method creates a new array with the results of applying a provided
// function to every element in the original array. It returns a new array with
//  the same length as the original array, where each element is the result of the
// transformation function.
// Syntax
// arr.map(callbackFunction(currentValue, index, array))
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((x) => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// Filter()
// The filter() method creates a new array with all elements that pass the test
//  implemented by the provided function. It returns a new array with a length that
// is less than or equal to the original array, where each element is an element from
//  the original array that meets the condition.
// Syntax
// arr.filter(callbackFunction(currentValue, index, array))
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter((x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4]
// -----------------------------------------------------------------------------------

// 3. What is the difference between 'let', 'const', and 'var'?
// var is the oldest way of declaring variables in JavaScript. It has a function
//  scope, which means that a variable declared with var is accessible throughout
//  the function it is declared in.
function example() {
  var x = 10;
  if (true) {
    var x = 20; // same variable!
    console.log(x); // outputs 20
  }
  console.log(x); // outputs 20
}
example();
// Let
// let is a newer way of declaring variables in JavaScript, introduced in ECMAScript
//  2015 (ES6). It has a block scope, which means that a variable declared with let
// is only accessible within the block it is declared in.
function example() {
  let x = 10;
  if (true) {
    let x = 20; // different variable!
    console.log(x); // outputs 20
  }
  console.log(x); // outputs 10
}
example();
// Const
// const is also a newer way of declaring variables in JavaScript, introduced in
// ECMAScript 2015 (ES6). It has the same block scope as let, but with an additional
// restriction: a variable declared with const cannot be reassigned.
function example() {
  const obj = { foo: "bar" };
  obj.foo = "baz"; // works!
  console.log(obj); // outputs { foo: 'baz' }
}
// Hoisting
// var variables are "hoisted" to the top of their scope, which means that they are
// moved to the top of the function or script, regardless of where they are actually
//  declared. This can lead to unexpected behavior.
// let and const variables are not hoisted in the same way. They are only accessible after they are declared.
function example() {
  console.log(x); // ReferenceError: x is not defined
  let x = 10;
}
// --------------------------------------------------------------------------------------
// 4. What is the difference between Pure and Impure functions?
// A pure function is a function that:
// Always returns the same output given the same inputs.
// Has no side effects, such as modifying external state or making API calls.
// Does not rely on external state or variables.
// In other words, a pure function is a self-contained, deterministic function that
// only depends on its input arguments and does not affect the outside world.
// Example of a pure function:
function add(a, b) {
  return a + b;
}

// Impure Functions
// May return different outputs given the same inputs.
// Has side effects, such as modifying external state or making API calls.
// Relies on external state or variables.
// Impure functions can have unintended consequences, making them harder to
// reason about and test.
let counter = 0;

function increment() {
  counter++;
  return counter;
}
// }-----------------------------------------------------------------------
// 5. What is the difference between for-in and for-of ?
// Answe:
// for-in Loop
// Purpose: The for-in loop is used to iterate over the enumerable properties of an object.
// Usage: It is primarily used with objects, but it can also be used with arrays (though this is not recommended).
const obj5 = { a: 1, b: 2, c: 3 };
for (let key in obj5) {
  console.log(key, obj5[key]); // Outputs: a 1, b 2, c 3
}
//   for-of Loop
// Purpose: The for-of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, etc.
// Usage: It is specifically designed for collections that are iterable.
const array = [1, 2, 3];
for (let value of array) {
  console.log(value); // Outputs: 1, 2, 3
}
// 6. What are the differences between call(), apply() and bind() ?
// Answer
// call()
// Purpose: Invokes a function with a specified this value and individual arguments.
// Syntax: functionName.call(thisArg, arg1, arg2, ...);
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person5 = { name: "Alice" };
greet.call(person5, "Hello"); // Outputs: Hello, Alice
//   apply()
// Purpose: Invokes a function with a specified this value and arguments provided as an array (or array-like object).
// Syntax: functionName.apply(thisArg, [argsArray]);
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "Bob" };
greet.apply(person, ["Hi"]); // Outputs: Hi, Bob

// bind()
// Purpose: Returns a new function that, when called, has its this keyword set to the provided value, with a given
//  sequence of arguments preceding any provided when the new function is called.
// Syntax: functionName.bind(thisArg, arg1, arg2, ...);
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person9 = { name: "Charlie" };
const greetCharlie = greet.bind(person9);
greetCharlie("Hey"); // Outputs: Hey, Charlie

// Key Differences
// Invocation:

// call() and apply() immediately invoke the function.
// bind() returns a new function that can be invoked later.
// Argument Handling:

// call() takes arguments individually.
// apply() takes an array of arguments.
// bind() allows you to preset arguments that will be passed when the new function is called.
// Use Cases:

// Use call() when you want to invoke a function immediately with a specific this context and individual arguments.
// Use apply() when you want to invoke a function immediately with a specific this context and an array of arguments.
// Use bind() when you want to create a new function with a specific this context that can be called later.

// 7. List out some key features of ES6 ?
// 8. What’s the spread operator in javascript ?

// The spread operator in JavaScript, denoted by three consecutive dots (...), is a syntax that allows an iterable
//  (like an array or an object) to be expanded in places where zero or more arguments or elements are expected.
//  It is commonly used for array manipulation, function calls, and object cloning or merging.

// Key Uses of the Spread Operator:-
// Array Expansion

// You can use the spread operator to expand an array into individual elements.
const arr11 = [1, 2, 3];
const arr22 = [4, 5, ...arr1, 6]; // arr2 = [4, 5, 1, 2, 3, 6]

// Function Arguments
// It allows you to pass elements of an array as individual arguments to a function.

function sum(a, b, c) {
  return a + b + c;
}

const numbers0 = [1, 2, 3];
console.log(sum(...numbers)); // Outputs: 6

//    Object Expansion
// You can use the spread operator to create a new object by copying properties from an existing object.

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // obj2 = { a: 1, b: 2, c: 3 }

// Merging Arrays
// The spread operator can be used to merge multiple arrays into one.

const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2]; // mergedArray = [1, 2, 3, 4]

//    Cloning Arrays and Objects
// It provides a simple way to create shallow copies of arrays and objects.
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray]; // clonedArray = [1, 2, 3]

const originalObject = { a: 1, b: 2 };
const clonedObject = { ...originalObject }; // clonedObject = { a: 1, b: 2 }

//    Important Notes
// The spread operator creates a shallow copy of the array or object. This means that nested objects or arrays are still referenced, not cloned.
// It is different from the rest operator, which is used to collect multiple elements into an array.
// ---------------------------------------------------------------------------------------------------------------
// 9. What is rest operator in javascript ?
// The rest operator in JavaScript, denoted by three consecutive dots (...), is a syntax that allows you to represent an
// indefinite number of arguments as an array. It is commonly used in function parameters to collect multiple arguments
// into a single array, making it easier to work with variable numbers of arguments.
// Key Uses of the Rest Operator
// Function Parameters
// The rest operator can be used in function definitions to gather all remaining arguments into an array.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum(4, 5, 6, 7, 8)); // Outputs: 30

//    Destructuring Assignment
// The rest operator can be used in destructuring assignments to collect the remaining elements of an array or
// properties of an object into a new array or object.
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr; // first = 1, second = 2, rest = [3, 4, 5]

console.log(rest); // Outputs: [3, 4, 5]

//    Combining with Other Parameters
// You can combine the rest operator with other parameters in a function definition. However, the rest
//  parameter must always be the last parameter.
function multiply(multiplier, ...numbers) {
  return numbers.map((num) => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Outputs: [2, 4, 6]

// Important Notes
// The rest operator collects all remaining arguments into a single array, while the spread operator
// (also denoted by ...) expands an array into individual elements.
// You can only have one rest parameter in a function, and it must be the last parameter in the function signature.
// ------------------------------------------------------------------------------------------------------------------------------
// 10. What are DRY, KISS, YAGNI, SOLID Principles ?
// DRY, KISS, YAGNI, and SOLID are important software development principles that help developers create
//  maintainable, efficient, and scalable code. Here’s a brief overview of each principle:

// 1. DRY (Don't Repeat Yourself)
// Definition: The DRY principle emphasizes the importance of reducing duplication in code. Every piece
// of knowledge or logic should have a single, unambiguous representation within a system.
// Purpose: By avoiding code duplication, you reduce the risk of inconsistencies and make the codebase
// easier to maintain. Changes need to be made in only one place, which minimizes the chance of errors.
// Example: Instead of writing the same function multiple times, create a single function and call it wherever needed.
// 2. KISS (Keep It Simple, Stupid)
// Definition: The KISS principle advocates for simplicity in design and implementation. Systems should be as simple
// as possible, avoiding unnecessary complexity.
// Purpose: Simple designs are easier to understand, maintain, and extend. Complexity can lead to bugs and make the code harder to work with.
// Example: When designing a function, focus on the core functionality and avoid adding features that are not essential.
// 3. YAGNI (You Aren't Gonna Need It)
// Definition: The YAGNI principle states that you should not add functionality until it is necessary. Developers often
// add features based on assumptions about future needs, which can lead to bloated code.
// Purpose: By adhering to YAGNI, you keep the codebase lean and focused on current requirements, reducing the time spent on
// unnecessary features and minimizing maintenance overhead.
// Example: If a feature is not required for the current project scope, do not implement it. Wait until there is a clear need.
// 4. SOLID Principles
// The SOLID principles are a set of five design principles aimed at making software designs more understandable, flexible, and maintainable. They are:

// S: Single Responsibility Principle (SRP)

// A class should have only one reason to change, meaning it should have only one job or responsibility.
// O: Open/Closed Principle (OCP)

// Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
// This means you should be able to add new functionality without changing existing code.
// L: Liskov Substitution Principle (LSP)

// Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
// This ensures that a subclass can stand in for its superclass.
// I: Interface Segregation Principle (ISP)

// Clients should not be forced to depend on interfaces they do not use. This principle encourages creating smaller, more
// specific interfaces rather than a large, general-purpose one.
// D: Dependency Inversion Principle (DIP)

// High-level modules should not depend on low-level modules; both should depend on abstractions. Additionally, abstractions
// should not depend on details; details should depend on abstractions. This promotes loose coupling between components.
// Summary
// DRY: Avoid code duplication.
// KISS: Keep designs simple and straightforward.
// YAGNI: Do not implement features until they are necessary.
// SOLID: A set of five principles (SRP, OCP, LSP, ISP, DIP) that guide software design for better maintainability and flexibility.
// -------------------------------------------------------------------------------------------------------------------------------------
// 11. What is temporal dead zone ?
// The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the period of time during which a variable is in a "dead zone" and cannot be accessed. This occurs when a variable is declared using let or const but has not yet been initialized. Accessing the variable during this time will result in a ReferenceError.

// Key Points about Temporal Dead Zone
// Scope: The TDZ applies to block-scoped variables declared with let and const. It exists from the start of the block until the variable is initialized.
// Initialization: A variable declared with let or const is not hoisted in the same way as variables declared with var. While var declarations are
// hoisted and initialized to undefined, let and const declarations are hoisted but remain uninitialized until the line of code where they are defined is executed.
// ReferenceError: If you try to access a variable in the TDZ, JavaScript will throw a ReferenceError, indicating that the variable is not defined.
// Example of Temporal Dead Zone
// Here’s an example to illustrate the concept:
function example() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10; // x is in the TDZ until this line is executed
  console.log(x); // Outputs: 10
}
example();
// In this example:
// The first console.log(x) tries to access x before it has been initialized, resulting in a ReferenceError.
// The second console.log(x) is executed after x has been initialized, so it outputs 10.
// Summary
// The Temporal Dead Zone is an important concept to understand when working with let and const in JavaScript.
//  It helps prevent the use of variables before they are initialized, promoting better coding practices and
//  reducing potential bugs. By being aware of the TDZ, developers can write cleaner and more predictable code.
// ---------------------------------------------------------------------------------------------------------------------
// 12. Different ways to create object in javascript ?
// 1. Object Literal
// The simplest way to create an object is by using an object literal. This method allows you to define an
// object with properties and methods directly
const person55 = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person55.greet(); // Outputs: Hello, my name is Alice

// 2. Constructor Function
// You can create objects using constructor functions. A constructor function is a regular function that is used to create and initialize objects.
// 3. ES6 Classes
// With the introduction of ES6, you can create objects using class syntax, which is a more modern and cleaner way to define constructor functions.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person2 = new Person("Charlie", 28);
person2.greet(); // Outputs: Hello, my name is Charlie
// 4. Object.create()
// The Object.create() method creates a new object with the specified prototype object and properties. This method is useful
// for creating objects that inherit from other objects.
const animal = {
  speak: function () {
    console.log("Animal speaks");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Dog barks");
};

dog.speak(); // Outputs: Animal speaks
dog.bark(); // Outputs: Dog barks
// 5. Factory Function
// A factory function is a function that returns a new object each time it is called. This approach allows you to create
// multiple instances of an object without using the new keyword.
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

const person3 = createPerson("David", 22);
person3.greet(); // Outputs: Hello, my name is David
// 6. Using new Object()
// You can also create an object using the Object constructor, although this method is less common and not recommended for creating objects with properties.
const person4 = new Object();
person4.name = "Eve";
person4.age = 35;
person4.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
person4.greet(); // Outputs: Hello, my name is Eve
// Summary
// Object Literal: Simple and straightforward way to create objects.
// Constructor Function: Allows for creating multiple instances of an object.
// ES6 Classes: Modern syntax for creating objects and handling inheritance.
// Object.create(): Creates an object with a specified prototype.
// Factory Function: Returns a new object each time it is called.
// Using new Object(): Less common method for creating objects
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// 13. Whats the difference between Object.keys,values and entries
// 1. Object.keys(obj)
// Returns: array of property names (keys)
// Type: string[]
const user = { name: "Sai", age: 24, country: "India" };

console.log(Object.keys(user));
// ["name", "age", "country"]

// 2. Object.values(obj)
// Returns: array of property values
// Type: any[] (depends on the values stored)

// ✅ Example:
console.log(Object.values(user));
// ["Sai", 24, "India"]


// 3. Object.entries(obj)
// Returns: array of key-value pairs
// Type: [string, any][] (array of arrays)
// ✅ Example:
console.log(Object.entries(user));
// [["name", "Sai"], ["age", 24], ["country", "India"]]

// | Method                | Returns                       | Example Result for `{a:1, b:2}` |
// | --------------------- | ----------------------------- | ------------------------------- |
// | `Object.keys(obj)`    | Array of keys (strings)       | `["a", "b"]`                    |
// | `Object.values(obj)`  | Array of values               | `[1, 2]`                        |
// | `Object.entries(obj)` | Array of `[key, value]` pairs | `[["a",1], ["b",2]]`            |

// ------------------------------------------------------------------------------------------------
// 14. Whats the difference between Object.freeze() vs Object.seal()
// Object.freeze(obj)

// Purpose: Makes an object completely immutable.
// What happens:
// ❌ Cannot add new properties
// ❌ Cannot remove properties
// ❌ Cannot change values of existing properties
// ❌ Cannot reconfigure properties (writable/configurable)
// ✅ Example:

const user = { name: "Sai", age: 24 };
Object.freeze(user);

user.age = 25;      // ❌ ignored
user.city = "India"; // ❌ ignored
delete user.name;   // ❌ ignored

console.log(user); // { name: "Sai", age: 24 }
// 🔹 Object.seal(obj)
// Purpose: Seals an object, meaning you can’t add or remove properties, but you can still update values of existing ones.
// What happens:
// ❌ Cannot add new properties
// ❌ Cannot remove properties
// ✅ Can change values of existing properties
// ❌ Cannot reconfigure properties (like making them non-writable)
// ✅ Example:

const user = { name: "Sai", age: 24 };
Object.seal(user);

user.age = 25;      // ✅ works
user.city = "India"; // ❌ ignored
delete user.name;   // ❌ ignored

console.log(user); // { name: "Sai", age: 25 }

// | Feature                    | `Object.freeze()` | `Object.seal()` |
// | -------------------------- | ----------------- | --------------- |
// | Add new properties         | ❌ No              | ❌ No            |
// | Delete properties          | ❌ No              | ❌ No            |
// | Modify existing values     | ❌ No              | ✅ Yes           |
// | Reconfigure property attrs | ❌ No              | ❌ No            |
// Use Object.freeze() when you want a fully immutable object.

// Use Object.seal() when you want to lock the shape of the object but still allow updates to existing values.
// ------------------------------------------------------------------------------------
// 15. What is a polyfill in javascript ?
// Example 1 – Polyfill for Array.prototype.includes()
// Some old browsers (like Internet Explorer) don’t support includes().
// We can polyfill it ourselves:

if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, fromIndex) {
    return this.indexOf(searchElement, fromIndex) !== -1;
  };
}

console.log([1, 2, 3].includes(2)); // true


// Here, if the browser doesn’t have includes(), we define it using older indexOf().

// ✅ Example 2 – Polyfill for Object.assign()
if (typeof Object.assign !== "function") {
  Object.assign = function (target, ...sources) {
    sources.forEach(src => {
      for (let key in src) {
        if (Object.prototype.hasOwnProperty.call(src, key)) {
          target[key] = src[key];
        }
      }
    });
    return target;
  };
}

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// console.log(Object.assign({}, obj1, obj2)); // { a:1, b:2 }

// 🔹 Difference Between Polyfill and Transpiler

// Polyfill → Runtime code that adds missing methods/features.

// Transpiler (like Babel) → Converts modern JS syntax (e.g. ES6+) into older syntax (e.g. ES5) before running in the browser.

// 👉 Example:

// Babel converts () => {} into a normal function.

// A polyfill provides missing features like Promise, fetch, Array.includes, etc.

// 📌 In simple words:
// A polyfill is a patch for browsers that don’t know how to do something new in JavaScript.
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// 16. What is a generator function in JavaScript?

// A generator function is a special function that can pause its execution and later resume from where it left off.

// Syntax: function* myGenerator() { yield 1; yield 2; }

// You use yield to pause execution and next() to resume.

// Example:

// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = numbers();
// console.log(gen.next()); // {value: 1, done: false}
// console.log(gen.next()); // {value: 2, done: false}
// console.log(gen.next()); // {value: 3, done: false}
// console.log(gen.next()); // {value: undefined, done: true}


// 17. What is prototype in JavaScript?

// Every JavaScript object has a prototype property, which is used to share methods and properties across instances.

// It allows inheritance in JS.

// Example:

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function() {
//   console.log(`Hello, ${this.name}`);
// };
// const person1 = new Person("Saikrishna");
// person1.greet(); // Hello, Saikrishna


// 18. What is IIFE? (Immediately Invoked Function Expression)

// A function that runs immediately after it’s defined.

// Helps avoid polluting the global scope.

// Syntax:

// (function() {
//   console.log("IIFE executed!");
// })();


// 19. What is CORS? (Cross-Origin Resource Sharing)

// CORS is a browser security feature that restricts web pages from making requests to a different domain than the one that served the web page.

// Servers can allow cross-origin requests by sending specific headers like Access-Control-Allow-Origin.

// 20. What are the different datatypes in JavaScript?

// Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Non-primitive (Reference): Object, Array, Function

// 21. Difference between TypeScript and JavaScript:

// Feature	JavaScript	TypeScript
// Typing	Dynamic	Static (optional)
// Compilation	Interpreted	Compiled to JS
// Tooling	Basic	Advanced (autocompletion, type-checking)
// ES6+ Features	Supported	Fully supported with extra types

// 22. Authentication vs Authorization:

// Authentication: Verifying who a user is (login).

// Authorization: Verifying what a user can access (permissions).

// 23. Difference between null and undefined:

// Feature	null	undefined
// Value	Explicitly assigned empty value	Default value for uninitialized variables
// Type	object	undefined

// 24. What is the output of 3 + 2 + "7"?

// Output: "57"

// Explanation: JS evaluates left-to-right: (3+2)=5, then 5 + "7" → string concatenation → "57".

// 25. Slice vs Splice:

// Feature	slice	splice
// Modifies original array	No	Yes
// Returns	New array	Removed elements
// Syntax	arr.slice(start, end)	arr.splice(start, deleteCount, items...)

// 26. What is destructuring?

// A way to extract values from arrays or objects into variables.

// Example:

// const [a, b] = [1, 2]; // array destructuring
// const {name, age} = {name: "Sai", age: 25}; // object destructuring


// 27. What is setTimeout in JavaScript?

// Executes a function once after a specified delay (in milliseconds).

// Example:

// setTimeout(() => {
//   console.log("Executed after 2 seconds");
// }, 2000);


// 28. What is setInterval in JavaScript?

// Executes a function repeatedly  at a specified interval (in milliseconds).

// Example:

// setInterval(() => {
//   console.log("Repeating every 1 second");
// }, 1000);


// 29. What are Promises in JavaScript?

// A Promise represents a value that may be available now, later, or never.

// Used to handle asynchronous operations.

// Example:

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 1000);
// });
// promise.then(result => console.log(result)); // "Done!" after 1 sec


// 30. What is a call stack in JavaScript?

// A call stack is a data structure that keeps track of function calls in execution order.

// JS is single-threaded, so it uses the call stack to manage execution.

// Example:

// function a() { b(); }
// function b() { c(); }
// function c() { console.log("Hello"); }
// a(); // Call stack: a → b → c


// If you want, I can also make a one-page “cheat sheet” with all these JS concepts and examples for quick revision. It’ll be super handy for interviews.

// Do you want me to do that?

// You said:
// // 31. What is a closure ?
// // 32. What are callbacks in javascript ?
// // 33. What are Higher Order Functions in javascript ?
// // 34. What is the difference between == and === in javascript ?
// // 35. Is javascript a dynamically typed language or a statically typed language
// // 36. What is the difference between Indexeddb and sessionstorage ?
// // 37. What are Interceptors ?
// // 38. What is Hoisting ?
// // 39. What are the differences let, var and const ?
// // 41. Differences between Promise.all, allSettled, any, race ?
// // 42. What are limitations of arrow functions?
// ChatGPT said:

// Here’s a detailed explanation for your next set of JavaScript questions:

// 31. What is a closure?

// A closure is a function that remembers and can access variables from its outer scope, even after the outer function has finished executing.

// Example:

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2


// Here, inner forms a closure over count.

// 32. What are callbacks in JavaScript?

// A callback is a function passed as an argument to another function, executed after some operation.

// Example:

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }
// greet("Sai", () => console.log("Callback executed!"));


// 33. What are Higher Order Functions (HOF) in JavaScript?

// A function that takes another function as an argument or returns a function.

// Examples: map, filter, reduce.

// const numbers = [1, 2, 3];
// const doubled = numbers.map(n => n * 2); // map is HOF
// console.log(doubled); // [2, 4, 6]


// 34. Difference between == and ===:

// Operator	Comparison	Type Conversion
// ==	Checks value equality	Performs type coercion
// ===	Checks value & type equality	No type coercion
// 5 == "5";  // true
// 5 === "5"; // false


// 35. Is JavaScript dynamically typed or statically typed?

// JavaScript is dynamically typed: variable types are determined at runtime and can change.

// let x = 10; // number
// x = "Hello"; // now string


// 36. Difference between IndexedDB and SessionStorage:

// Feature	IndexedDB	SessionStorage
// Type	NoSQL DB in browser	Key-value storage
// Capacity	Large (~50MB+)	Small (~5MB)
// Persistence	Persistent until explicitly deleted	Cleared on tab close
// Structure	Stores objects, supports transactions	Stores strings only

// 37. What are Interceptors?

// In frameworks like Axios, interceptors are functions that intercept requests or responses before they are handled.

// Used for: adding headers, logging, handling errors globally.

// axios.interceptors.request.use(config => {
//   config.headers['Authorization'] = 'Bearer token';
//   return config;
// });


// 38. What is Hoisting?

// JS moves variable and function declarations to the top of their scope during compilation.

// Example:

// console.log(a); // undefined
// var a = 5;      // declaration is hoisted


// Note: let and const are hoisted but cannot be accessed before declaration (Temporal Dead Zone).

// 39. Differences between let, var, and const:

// Feature	var	let	const
// Scope	Function	Block	Block
// Hoisting	Yes, initialized undefined	Yes, but TDZ	Yes, but TDZ
// Reassignable	Yes	Yes	No
// Redeclarable	Yes	No	No

// 41. Differences between Promise.all, allSettled, any, race:

// Method	Behavior
// Promise.all([p1,p2])	Resolves when all promises resolve; rejects if any fail
// Promise.allSettled([p1,p2])	Resolves when all promises settle (resolve or reject) with status
// Promise.any([p1,p2])	Resolves when any promise resolves; rejects only if all fail
// Promise.race([p1,p2])	Resolves or rejects as soon as any promise resolves/rejects

// 42. Limitations of arrow functions:

// No this binding — uses this from the enclosing context.

// Cannot be used as constructors (new fails).

// No arguments object (use rest parameters ...args).

// Cannot use yield — cannot be generator functions.

// I can also combine all 30+ JS interview questions with examples into a single, easy-to-read cheat sheet for rapid interview revision. It’ll save you a ton of time.

// Do you want me to create that?

// You said:
// // 43. What is difference between find vs findIndex ?
// // 44. What is tree shaking in javascript ?
// // 45. What is the main difference between Local Storage and Session storage ?
// // 46. What is eval() ?
// // 47. What is the difference between Shallow copy and deep copy ?
// // 48. What are the difference between undeclared and undefined variables ?
// // 49. What is event bubbling
// // 50. What is event capturing ?
// // 51. What are cookies ?
// // 52. typeOf operator ?
// // 53. What is this in javascript and How it behaves in various scenarios ?
// // 54. How do you optimize the performance of application
// // 55. What is meant by debouncing and throttling
// ChatGPT said:

// Here’s a detailed explanation for your next set of JavaScript questions:

// 43. Difference between find and findIndex:

// Method	Returns	Description
// find()	The first element that satisfies the condition	Returns the element itself
// findIndex()	The index of the first element that satisfies the condition	Returns -1 if not found
// const arr = [10, 20, 30];
// arr.find(x => x > 15);      // 20
// arr.findIndex(x => x > 15); // 1


// 44. What is tree shaking in JavaScript?

// Tree shaking is a technique to remove unused code during the bundling process (commonly in ES6 modules).

// Helps reduce bundle size for production.

// 45. Main difference between Local Storage and Session Storage:

// Feature	LocalStorage	SessionStorage
// Lifetime	Persistent until cleared	Cleared when tab closes
// Storage limit	~5MB	~5MB
// Scope	Shared across tabs of same origin	Specific to tab/window

// 46. What is eval()?

// eval() executes a string as JavaScript code.

// Example:

// eval("console.log(2 + 3)"); // 5


// ⚠️ Security risk: Can execute malicious code; avoid using it.

// 47. Difference between Shallow copy and Deep copy:

// Feature	Shallow Copy	Deep Copy
// Nested objects	References copied	Values copied recursively
// Libraries/Methods	Object.assign, spread ({...obj})	structuredClone, JSON.parse(JSON.stringify(obj))
// let obj = { a: 1, b: { c: 2 } };
// let shallow = {...obj}; // nested object is reference
// let deep = JSON.parse(JSON.stringify(obj)); // fully copied


// 48. Difference between undeclared and undefined variables:

// Type	Description
// Undeclared	Not declared at all in any scope; accessing throws ReferenceError
// Undefined	Declared but not assigned a value; default value is undefined
// console.log(x); // ReferenceError (undeclared)
// let y;
// console.log(y); // undefined


// 49. What is event bubbling?

// Event propagates from child element to parent elements in the DOM.

// Default behavior in JavaScript.

// <div onclick="console.log('parent')">
//   <button onclick="console.log('child')">Click</button>
// </div>
// // Click → logs: "child" then "parent"


// 50. What is event capturing?

// Event propagates from parent element to child elements (opposite of bubbling).

// Use addEventListener with capture = true.

// element.addEventListener('click', handler, true); // capturing phase


// 51. What are cookies?

// Small pieces of data stored in the browser and sent to the server with requests.

// Used for session management, personalization, tracking.

// 52. typeof operator:

// Returns a string indicating the type of a variable.

// typeof 5;        // "number"
// typeof "hello";  // "string"
// typeof {};       // "object"
// typeof undefined; // "undefined"
// typeof null;      // "object" (historical bug)


// 53. What is this in JavaScript and how it behaves:

// Scenario	Value of this
// Global context	window (browser) or global (Node.js)
// Function call	window (non-strict) or undefined (strict)
// Method call	Object that owns the method
// Constructor (new)	New instance created
// Arrow function	this from enclosing scope (lexical)

// 54. How do you optimize application performance?

// Minimize DOM manipulations.

// Use lazy loading & code splitting.

// Debounce/throttle expensive events.

// Use requestAnimationFrame for animations.

// Optimize images & assets.

// Avoid memory leaks.

// Use efficient algorithms & data structures.

// 55. What is meant by debouncing and throttling?

// Debouncing: Ensures a function runs only after a delay since the last call.

// Throttling: Ensures a function runs at most once every interval, no matter how many times triggered.

// // Debounce
// function debounce(func, delay) {
//   let timer;
//   return function(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// // Throttle
// function throttle(func, limit) {
//   let lastCall = 0;
//   return function(...args) {
//     const now = Date.now();
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }


// If you want, I can now combine all 55+ JavaScript interview Q&A into a single, neatly formatted “ultimate JS cheat sheet” with examples ready for interview prep.

// Do you want me to create that?

// You said:

// // 1. What is React?
// //  2. What is useMemo ?
// //  3. What are the features of React ?
// //  4. What is JSX ?
// //  5. What is DOM ?
// //  6. What is Virtual Dom ?
// //  7. What is component life cycle of React class component ?
// //  8. What are fragments in react ?
// //  9. What are props in react ?
// //  10. What are synthetic events in react ?
// //  11. What are the difference between Package.json and Package.lock.json ?
// //  12. What are the differences between client side and server side rendering ?
// //  13. What is state in Reactjs?
// //  14. What are props ?
// //  15. What are the differences between State and Props in react ?
// ChatGPT said:

// Here’s a detailed explanation for your React questions:

// 1. What is React?

// React is a JavaScript library for building user interfaces, mainly for single-page applications.

// Maintained by Facebook, React allows component-based architecture and efficient UI updates using the Virtual DOM.

// 2. What is useMemo?

// useMemo is a React hook that memoizes a value to avoid expensive recalculations on every render.

// Syntax: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Useful for performance optimization.

// 3. Features of React:

// JSX (JavaScript + HTML) for templating.

// Component-based architecture.

// Virtual DOM for efficient updates.

// One-way data binding (parent → child).

// Hooks for managing state and lifecycle in functional components.

// Declarative UI.

// 4. What is JSX?

// JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML.

// Example:

// const element = <h1>Hello, React!</h1>;


// JSX is transpiled to React.createElement() calls.

// 5. What is DOM?

// DOM (Document Object Model) is a tree-like representation of HTML elements in the browser, which allows JS to manipulate content and structure.

// 6. What is Virtual DOM?

// Virtual DOM is a lightweight copy of the real DOM in memory.

// React diffs the virtual DOM and real DOM to update only changed elements, improving performance.

// 7. Component lifecycle of React class component:

// Mounting: constructor(), static getDerivedStateFromProps(), render(), componentDidMount()

// Updating: static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()

// Unmounting: componentWillUnmount()

// Error handling: componentDidCatch()

// 8. What are Fragments in React?

// Fragments allow grouping multiple elements without adding extra nodes to the DOM.

// <>
//   <h1>Title</h1>
//   <p>Description</p>
// </>


// 9. What are props in React?

// Props (properties) are read-only inputs passed from parent to child components.

// function Child({ name }) {
//   return <h1>Hello {name}</h1>;
// }
// <Child name="Saikrishna" />


// 10. What are Synthetic Events in React?

// Synthetic events are cross-browser wrappers around native browser events.

// They behave consistently across different browsers.

// <button onClick={handleClick}>Click</button>


// 11. Difference between package.json and package-lock.json:

// Feature	package.json	package-lock.json
// Purpose	Lists dependencies & scripts	Records exact dependency versions
// Created	Manually or npm init	Automatically on npm install
// Updates	Can change version ranges	Locks versions to ensure consistent installs

// 12. Differences between Client-side Rendering (CSR) and Server-side Rendering (SSR):

// Feature	CSR	SSR
// Rendering	Browser	Server
// First load	Slower	Faster
// SEO	Poor	Good
// Example	React SPA	Next.js

// 13. What is state in React?

// State is a local, mutable data that controls component behavior and re-renders when updated.

// const [count, setCount] = useState(0);


// 14. What are props?

// Props are immutable inputs passed from parent to child to configure or display data in components.

// 15. Differences between State and Props in React:

// Feature	State	Props
// Mutability	Mutable	Immutable
// Managed by	Component itself	Parent component
// Purpose	Store dynamic data	Pass data/configuration
// Triggers render	Yes	Yes (when parent changes)

// If you want, I can combine all your React + JavaScript interview questions into one ultimate cheat sheet with code examples so you can revise all in one place.

// Do you want me to do that?

// You said:
// //  16. What is props drilling ?
// //  17. What are the disadvantages of props drilling and How we can avoid props drilling ?
// //  18. What are Pure components in React ?
// //  19. Whatare Ref’s in React?
// //  20. What is meant by forward ref ?
// //  21. What are Error boundaries ?
// //  22. What are Higher order components in react ?
// //  23. What are the differences between controlled and uncontrolled components ?
// //  24. What is useCallback ?
// //  25. What are the differences between useMemo and useCallback ?
// //  26. What are keys in React ?
// //  27. What is Lazy loading in React ?
// //  28. What is suspense in React ?
// //  29. What are custom hooks ?
// //  30. What is useReducer hook ?
// ChatGPT said:

// Here’s a detailed explanation for your next set of React questions:

// 16. What is props drilling?

// Props drilling occurs when props are passed through multiple intermediate components just to reach a deeply nested component.

// Example: Grandparent → Parent → Child → DeepChild

// 17. Disadvantages of props drilling & how to avoid it:

// Disadvantages:

// Makes components tightly coupled.

// Hard to maintain in large apps.

// Solutions:

// Context API

// State management libraries like Redux, MobX, Zustand

// 18. What are Pure Components in React?

// Pure Components only re-render if their props or state change (shallow comparison).

// Class-based: extends React.PureComponent

// Helps optimize performance by preventing unnecessary renders.

// 19. What are Refs in React?

// Refs provide a way to access DOM nodes or React elements directly.

// const inputRef = useRef();
// <input ref={inputRef} />;
// inputRef.current.focus();


// 20. What is meant by forwardRef?

// forwardRef allows a parent component to pass a ref to a child component.

// Example:

// const Child = React.forwardRef((props, ref) => <input ref={ref} />);
// const ref = React.createRef();
// <Child ref={ref} />;


// 21. What are Error Boundaries?

// Components that catch JavaScript errors in their child components, log them, and display a fallback UI.

// Only works for class components.

// class ErrorBoundary extends React.Component {
//   state = { hasError: false };
//   static getDerivedStateFromError() { return { hasError: true }; }
//   componentDidCatch(error, info) { console.log(error, info); }
//   render() { return this.state.hasError ? <h1>Something went wrong</h1> : this.props.children; }
// }


// 22. What are Higher Order Components (HOC) in React?

// HOC is a function that takes a component and returns a new component with enhanced functionality.

// Example: withAuth(Component)

// 23. Differences between Controlled and Uncontrolled Components:

// Feature	Controlled	Uncontrolled
// Data handling	React state	DOM state
// Update	via onChange	via ref
// Example	<input value={state} onChange={handleChange} />	<input ref={inputRef} />

// 24. What is useCallback?

// useCallback memoizes a function, so it doesn’t get recreated on every render.

// const memoizedFn = useCallback(() => { doSomething(); }, [dependencies]);


// Useful when passing functions to child components to prevent unnecessary re-renders.

// 25. Differences between useMemo and useCallback:

// Feature	useMemo	useCallback
// Returns	Memoized value	Memoized function
// Usage	Expensive calculations	Functions passed as props

// 26. What are keys in React?

// Keys help React identify which items in a list have changed, added, or removed.

// {items.map(item => <li key={item.id}>{item.name}</li>)}


// 27. What is Lazy Loading in React?

// Lazy loading loads components only when needed instead of upfront.

// const LazyComponent = React.lazy(() => import('./LazyComponent'));


// 28. What is Suspense in React?

// Suspense wraps lazy-loaded components to show a fallback UI while the component is loading.

// <Suspense fallback={<div>Loading...</div>}>
//   <LazyComponent />
// </Suspense>


// 29. What are Custom Hooks?

// Functions that reuse stateful logic across components.

// Naming convention: useSomething.

// function useCounter() {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(c => c + 1);
//   return { count, increment };
// }


// 30. What is useReducer hook?

// useReducer is used for complex state logic with multiple sub-values.

// Similar to Redux reducer.

// const initialState = { count: 0 };
// function reducer(state, action) {
//   switch(action.type) {
//     case 'increment': return { count: state.count + 1 };
//     default: return state;
//   }
// }
// const [state, dispatch] = useReducer(reducer, initialState);
// dispatch({ type: 'increment' });


// If you want, I can combine all your 1–55 JavaScript & React questions into one complete interview-ready cheat sheet with examples, so you can revise everything in one place efficiently.

// Do you want me to do that?

// You said:
// // 1. What is the difference between id and class attributes?
// // 2. How does the doctype declaration affect a webpage?
// // 3. Explain semantic HTML and its importance.
// // 4. What are meta tags, and why are they used?
// // 5. What is the difference between span and div tags?
// // 6. How does the defer attribute in a script tag work?
// // 7. What is the difference between inline, block, and inline-block elements?
// // 8. How do you optimize images for web performance in HTML?
// // 9. What are custom data attributes, and how are they used?
// // 10. How would you create an accessible custom tooltip using only HTML?
// ChatGPT said:

// Here’s a detailed explanation for your HTML questions:

// 1. Difference between id and class attributes:

// Attribute	Description	Uniqueness	Usage
// id	Identifies a single element	Must be unique on a page	Targeting specific element in CSS/JS
// class	Identifies one or more elements	Can be shared across elements	Applying styles to multiple elements
// <div id="header"></div>
// <div class="card"></div>
// <div class="card"></div>


// 2. How does the <!DOCTYPE> declaration affect a webpage?

// Declares the HTML version and rendering mode for the browser.

// Modern HTML uses: <!DOCTYPE html> → triggers standards mode instead of quirks mode.

// Helps ensure consistent rendering across browsers.

// 3. Explain semantic HTML and its importance:

// Semantic HTML uses meaningful tags to describe content.

// Examples: <header>, <nav>, <article>, <footer>.

// Importance:

// Improves accessibility (screen readers).

// Helps SEO.

// Makes code readable & maintainable.

// 4. What are meta tags, and why are they used?

// <meta> tags provide metadata about the webpage, like charset, viewport, or description.

// Example:

// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <meta name="description" content="A sample webpage">


// Used for SEO, responsiveness, and page info.

// 5. Difference between span and div tags:

// Tag	Type	Purpose
// div	Block-level	Groups content into sections
// span	Inline	Groups small pieces of content inside other elements
// <div>This is a block</div>
// <span>This is inline</span>


// 6. How does the defer attribute in a script tag work?

// <script src="script.js" defer></script> loads the script asynchronously but executes it after the HTML parsing is complete.

// Ensures DOM is ready before script runs.

// 7. Difference between inline, block, and inline-block elements:

// Type	Behavior	Examples
// Inline	Doesn’t start a new line, width & height ignored	<span>, <a>
// Block	Starts on new line, full-width by default	<div>, <p>
// Inline-block	Like inline but respects width & height	<img>, <button>

// 8. How do you optimize images for web performance in HTML?

// Use compressed formats (WebP, JPEG, PNG).

// Use responsive images (srcset).

// Lazy load images: <img loading="lazy">.

// Proper dimensions to avoid layout shifts.

// 9. What are custom data attributes, and how are they used?

// Custom attributes store extra info on HTML elements.

// Format: data-*

// Access via JS: element.dataset.

// <div data-user-id="123" data-role="admin"></div>
// <script>
//   const div = document.querySelector('div');
//   console.log(div.dataset.userId); // 123
// </script>


// 10. How would you create an accessible custom tooltip using only HTML?

// Use the title attribute for basic accessibility.

// For custom HTML tooltips: combine aria attributes and hidden elements.

// <button aria-describedby="tooltip1">Hover me</button>
// <div role="tooltip" id="tooltip1" hidden>
//   This is an accessible tooltip.
// </div>


// Screen readers read aria-describedby.

// Can toggle hidden on hover/focus for visual display with CSS.

// If you want, I can also prepare a complete HTML + CSS + JS interview cheat sheet with 50+ questions and clear examples, so you can revise efficiently before interviews.

// Do you want me to do that?

// You said:
// // 1. What are closures, and how are they used?
// // 2. Explain the difference between var, let, and const.
// // 3. What is the event loop in JavaScript?
// // 4. How does prototypal inheritance work?
// // 5. What are promises, and how do they compare to async/await?
// // 6. What is the difference between == and ===?
// // 7. Explain the concept of "hoisting" in JavaScript.
// // 8. How do you handle errors in JavaScript?
// // 9. What is debouncing and throttling in JavaScript?
// // 10. How would you implement a deep clone of an object without using libraries?
// ChatGPT said:

// Here’s a detailed explanation for your advanced JavaScript questions:

// 1. What are closures, and how are they used?

// Closure: A function that remembers variables from its outer scope even after the outer function has finished executing.

// Use cases: Encapsulation, private variables, function factories.

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   }
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2


// 2. Difference between var, let, and const:

// Feature	var	let	const
// Scope	Function	Block	Block
// Hoisting	Yes (initialized as undefined)	Yes (TDZ)	Yes (TDZ)
// Reassignable	Yes	Yes	No
// Redeclarable	Yes	No	No

// 3. What is the event loop in JavaScript?

// The event loop handles asynchronous operations in JS.

// JS is single-threaded. The event loop checks the call stack and task queue, executing callbacks when the stack is empty.

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");
// // Output: Start → End → Timeout


// 4. How does prototypal inheritance work?

// Objects inherit properties and methods from a prototype object.

// Example:

// function Person(name) { this.name = name; }
// Person.prototype.greet = function() { console.log(`Hello ${this.name}`); };
// const p = new Person("Sai");
// p.greet(); // Hello Sai


// p accesses greet via its prototype chain.

// 5. What are promises, and how do they compare to async/await?

// Promise: Represents a value that may be available now, later, or never.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 1000);
// });
// promise.then(console.log);


// async/await: Syntactic sugar over promises for cleaner asynchronous code.

// async function fetchData() {
//   const result = await promise;
//   console.log(result);
// }


// 6. Difference between == and ===:

// Operator	Comparison	Type Conversion
// ==	Value equality	Performs type coercion
// ===	Value + type equality	No coercion
// 5 == "5";  // true
// 5 === "5"; // false


// 7. Explain the concept of hoisting in JavaScript:

// JS moves variable and function declarations to the top of their scope during compilation.

// console.log(a); // undefined
// var a = 5;


// let and const are hoisted but cannot be accessed before declaration (Temporal Dead Zone).

// 8. How do you handle errors in JavaScript?

// Using try…catch…finally for synchronous code.

// For promises: .catch() or try/catch with async/await.

// try {
//   let x = y; // ReferenceError
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Execution complete");
// }


// 9. What is debouncing and throttling in JavaScript?

// Debouncing: Executes a function after a delay since the last call.

// Throttling: Executes a function at most once every interval, no matter how many times called.

// // Debounce
// function debounce(fn, delay) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   }
// }

// // Throttle
// function throttle(fn, limit) {
//   let lastCall = 0;
//   return (...args) => {
//     const now = Date.now();
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       fn(...args);
//     }
//   }
// }


// 10. How would you implement a deep clone of an object without using libraries?

// Using recursion or JSON.parse(JSON.stringify(obj)) (simple objects).

// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") return obj;
//   if (Array.isArray(obj)) return obj.map(deepClone);
//   const copy = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) copy[key] = deepClone(obj[key]);
//   }
//   return copy;
// }
// const original = { a: 1, b: { c: 2 } };
// const clone = deepClone(original);


// If you want, I can create a single ultimate JavaScript + React + HTML/CSS interview cheat sheet with 100+ Q&A and code examples, so you can revise all topics efficiently in one place.

// Do you want me to do that?

// You said:
// // 1. What is the virtual DOM, and how does it work?
// // 2. How do React functional components differ from class components?
// // 3. What are React hooks, and why are they used?
// // 4. Explain the concept of lifting state up in React.
// // 5. What is the purpose of useEffect and how is it used?
// // 6. How does context API work in React?
// // 7. What is the difference between controlled and uncontrolled components?
// // 8. How do you optimize a React application’s performance?
// // 9. What are React portals, and how are they useful?
// // 10. How would you implement a custom hook to debounce user input in a React application?
// ChatGPT said:

// Here’s a detailed explanation for your React questions:

// 1. What is the Virtual DOM, and how does it work?

// Virtual DOM is a lightweight copy of the real DOM in memory.

// React diffs the virtual DOM with the previous virtual DOM (reconciliation) and only updates the parts of the real DOM that changed, improving performance.

// DOM Update:
// Old Virtual DOM → Compare → Patch → Real DOM update


// 2. How do React functional components differ from class components?

// Feature	Functional Component	Class Component
// Syntax	JS function	ES6 class
// State	useState hook	this.state
// Lifecycle	useEffect hook	Lifecycle methods
// this keyword	Not used	Required to access state/methods
// Performance	Slightly better, simpler	Slightly heavier, verbose

// 3. What are React hooks, and why are they used?

// Hooks are functions that let you use state and other React features in functional components.

// Common hooks: useState, useEffect, useMemo, useCallback.

// Benefits:

// Avoids class components.

// Reusable logic.

// Cleaner and simpler code.

// 4. Explain the concept of lifting state up in React.

// When multiple components need shared state, move the state to the closest common parent.

// The parent passes the state and updater functions as props.

// function Parent() {
//   const [value, setValue] = useState('');
//   return <><ChildA value={value} setValue={setValue} /><ChildB value={value} /></>;
// }


// 5. What is the purpose of useEffect and how is it used?

// useEffect handles side effects like API calls, subscriptions, or DOM manipulations in functional components.

// useEffect(() => {
//   console.log("Component mounted or updated");
//   return () => console.log("Cleanup before unmount or next effect");
// }, [dependencies]); // [] = run once, [var] = run when var changes


// 6. How does Context API work in React?

// Context API allows passing data through the component tree without props drilling.

// Create a context, provide a value, consume with useContext.

// const ThemeContext = React.createContext('light');
// <ThemeContext.Provider value="dark">
//   <Child />
// </ThemeContext.Provider>
// const theme = useContext(ThemeContext);


// 7. Difference between controlled and uncontrolled components:

// Feature	Controlled	Uncontrolled
// State	React state	DOM state
// Input value	Controlled by value prop	Managed by DOM, accessed via ref
// Example	<input value={state} onChange={handleChange} />	<input ref={inputRef} />

// 8. How do you optimize a React application’s performance?

// Memoization: React.memo, useMemo, useCallback.

// Lazy loading components with React.lazy and Suspense.

// Avoid unnecessary re-renders.

// Code splitting.

// Optimize images and assets.

// Use efficient data structures and algorithms.

// 9. What are React portals, and how are they useful?

// Portals allow rendering a component outside its parent DOM hierarchy.

// Useful for modals, tooltips, or overlays.

// ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));


// 10. How would you implement a custom hook to debounce user input in React?

// import { useState, useEffect } from "react";

// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value);
//   useEffect(() => {
//     const handler = setTimeout(() => setDebouncedValue(value), delay);
//     return () => clearTimeout(handler); // cleanup
//   }, [value, delay]);
//   return debouncedValue;
// }

// // Usage
// const [search, setSearch] = useState('');
// const debouncedSearch = useDebounce(search, 500);


// The hook delays updating debouncedSearch until the user stops typing for 500ms.

// If you want, I can combine all your React + JavaScript + HTML/CSS questions into a single 100+ Q&A interview cheat sheet with examples so you can revise everything efficiently in one place.

// Do you want me to create that?

// You said:
// // 1. What is ARIA, and why is it important?
// // 2. How would you ensure a form is accessible?
// // 3. What are some common accessibility issues in web development?
// // 4. How do you make images accessible?
// // 5. What is a screen reader, and how does it work?
// // 6. How would you create an accessible navigation menu?
// // 7. What is the difference between role="button" and a <button> element?
// // 8. How do you test a webpage for accessibility?
// ChatGPT said:

// Here’s a detailed explanation for your accessibility (a11y) questions:

// 1. What is ARIA, and why is it important?

// ARIA (Accessible Rich Internet Applications) provides attributes to make web content more accessible to users with disabilities.

// Adds semantic meaning to non-semantic elements for assistive technologies (like screen readers).

// Example: role="dialog", aria-label="Close menu".

// 2. How would you ensure a form is accessible?

// Use <label> elements for inputs.

// Group related inputs with <fieldset> and <legend>.

// Ensure keyboard navigation (tabindex).

// Provide clear error messages with ARIA roles or aria-describedby.

// <label for="email">Email:</label>
// <input type="email" id="email" aria-required="true">
// <span id="emailError" role="alert">Invalid email</span>


// 3. Common accessibility issues in web development:

// Missing alt text for images.

// Poor color contrast.

// Non-semantic HTML.

// Inaccessible forms (missing labels).

// Keyboard navigation issues.

// Improper use of ARIA roles.

// 4. How do you make images accessible?

// Use descriptive alt attributes.

// For decorative images, use alt="".

// Use captions or surrounding context when needed.

// <img src="profile.jpg" alt="Profile photo of John Doe">


// 5. What is a screen reader, and how does it work?

// A screen reader is software that reads out webpage content to visually impaired users.

// Works by interpreting HTML, ARIA roles, and semantic tags.

// Examples: NVDA, JAWS, VoiceOver.

// 6. How would you create an accessible navigation menu?

// Use semantic <nav> element.

// Ensure all links are focusable (tabindex).

// For dropdowns, use proper ARIA attributes:

// <nav>
//   <ul>
//     <li><a href="#home">Home</a></li>
//     <li>
//       <button aria-expanded="false" aria-controls="submenu">Services</button>
//       <ul id="submenu">
//         <li><a href="#web">Web Development</a></li>
//       </ul>
//     </li>
//   </ul>
// </nav>


// 7. Difference between role="button" and a <button> element:

// Feature	<button>	role="button"
// Native behavior	Has keyboard support & accessibility	Only adds semantic role; needs extra JS for keyboard events
// Recommended	✅	Use only when styling non-button elements (like <div>)

// 8. How do you test a webpage for accessibility?

// Manual testing: keyboard navigation, screen readers.

// Automated tools:

// Lighthouse (Chrome)

// axe DevTools

// WAVE accessibility tool

// Check color contrast: WCAG guidelines.

// Validate semantic HTML and ARIA roles.

// If you want, I can create a complete “Frontend Interview Cheat Sheet” covering JavaScript, React, HTML, CSS, and Accessibility with 100+ questions and examples, all in one document for easy revision.

// Do you want me to do that?

// You said:
// // 1. What is lazy loading, and how do you implement it?
// // 2. How do you reduce the size of a JavaScript bundle?
// // 3. What are the benefits of using a Content Delivery Network (CDN)?
// // 4. How do you optimize CSS delivery?
// // 5. What is caching, and how does it improve performance?
// // 6. What are critical rendering paths?
// // 7. How do you optimize for Time to First Byte (TTFB)?
// // 8. How do service workers improve web performance?
// ChatGPT said:

// Here’s a detailed explanation for your web performance optimization questions:

// 1. What is lazy loading, and how do you implement it?

// Lazy loading delays loading of resources (images, scripts, or components) until they are needed.

// Benefits: Reduces initial load time, improves performance.

// Implementation in React:

// import React, { Suspense } from 'react';
// const LazyComponent = React.lazy(() => import('./LazyComponent'));
// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <LazyComponent />
//     </Suspense>
//   );
// }


// In HTML for images:

// <img src="image.jpg" loading="lazy" alt="Example Image">


// 2. How do you reduce the size of a JavaScript bundle?

// Use tree shaking to remove unused code.

// Split code using dynamic imports / code splitting.

// Minify and compress JS files.

// Remove unused dependencies and polyfills.

// Use lightweight libraries.

// 3. Benefits of using a Content Delivery Network (CDN):

// Serves content from servers closest to the user → faster load.

// Reduces server load and bandwidth costs.

// Provides redundancy and high availability.

// Can improve SEO and global performance.

// 4. How do you optimize CSS delivery?

// Inline critical CSS for above-the-fold content.

// Minify CSS files.

// Use media queries to load CSS only when needed.

// Remove unused CSS (tools like PurgeCSS).

// Load non-critical CSS asynchronously:

// <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">


// 5. What is caching, and how does it improve performance?

// Caching stores frequently used resources locally (browser, CDN) to avoid repeated downloads.

// Benefits: Faster load times, reduced server requests.

// Example headers:

// Cache-Control: max-age=3600
// ETag: "12345"


// 6. What are critical rendering paths?

// The sequence of steps the browser takes to render a page.

// Includes: HTML parsing → CSSOM building → JS execution → DOM rendering → painting.

// Optimizing this path reduces Time to First Paint (TTFP) and improves UX.

// 7. How do you optimize for Time to First Byte (TTFB)?

// Use fast servers and CDNs.

// Optimize backend processing and database queries.

// Enable server-side caching.

// Use HTTP/2 or CDN edge caching.

// 8. How do service workers improve web performance?

// Service workers intercept network requests to cache resources and enable offline support.

// Benefits:

// Faster page loads (cached assets).

// Offline capabilities.

// Background sync for API updates.

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => response || fetch(event.request))
//   );
// });


// I can also combine all your Frontend topics—JavaScript, React, HTML, CSS, Accessibility, and Performance—into a single 100+ Q&A interview cheat sheet with examples, so you can revise efficiently in one place.

// Do you want me to create that?

// You said:
// // ‣ What happens when you type a URL in the browser?
// // ‣ How does the browser show a webpage (Critical Rendering Path)?
// // ‣ What’s the difference between synchronous and asynchronous scripts?
// // ‣ What are CORS and Same-Origin Policy?
// // ‣ How does browser caching work?
// // ‣ How do you debug performance issues using Chrome DevTools?
// // ‣ What is the difference between prefetching, preloading, and prerendering?
// ChatGPT said:

// Here’s a detailed explanation for your web fundamentals and performance questions:

// 1. What happens when you type a URL in the browser?

// DNS lookup: Converts domain to IP address.

// TCP connection: Browser connects to the server (via HTTP/HTTPS).

// HTTP request: Browser sends a request to the server.

// Server response: Server sends back HTML, CSS, JS, images, etc.

// Browser rendering: Parses HTML, builds DOM, CSSOM, executes JS.

// Page display: Browser paints content on the screen.

// 2. How does the browser show a webpage (Critical Rendering Path)?

// Critical Rendering Path (CRP): Steps the browser takes to convert HTML/CSS/JS into pixels:

// HTML parsing → DOM tree

// CSS parsing → CSSOM tree

// Render tree construction (DOM + CSSOM)

// Layout / Reflow: Calculates geometry.

// Paint: Draw pixels to screen.

// Composite: Combine layers for final display.

// Optimizing CRP improves Time to First Paint (TTFP) and Largest Contentful Paint (LCP).

// 3. Difference between synchronous and asynchronous scripts:

// Type	Behavior	Example
// Synchronous	Browser blocks parsing until script is executed	<script src="script.js"></script>
// Asynchronous	Script is downloaded in parallel and executed without blocking HTML parsing	<script src="script.js" async></script>
// Defer	Script downloads in parallel, executes after HTML parsing	<script src="script.js" defer></script>

// 4. What are CORS and Same-Origin Policy?

// Same-Origin Policy: Browser restricts scripts from accessing data from a different origin (protocol, domain, port).

// CORS (Cross-Origin Resource Sharing): Server allows cross-origin requests via response headers:

// Access-Control-Allow-Origin: https://example.com


// 5. How does browser caching work?

// Browser stores resources locally to reduce network requests.

// Types:

// HTTP caching: Cache-Control, Expires, ETag.

// Service Worker caching: Offline-first or custom strategies.

// On repeat visits, browser may serve cached resources instead of downloading again.

// 6. How do you debug performance issues using Chrome DevTools?

// Network tab: Check requests, load times, and caching.

// Performance tab: Record page load, JavaScript execution, layout shifts.

// Lighthouse: Audit page speed, accessibility, SEO, best practices.

// Coverage: Find unused CSS and JS.

// Memory tab: Detect memory leaks and heap usage.

// 7. Difference between prefetching, preloading, and prerendering:

// Technique	Purpose	Example
// Preload	Load critical resources early to improve render	<link rel="preload" href="style.css" as="style">
// Prefetch	Load non-critical resources for future navigation	<link rel="prefetch" href="next-page.js">
// Prerender	Load and render a full page in background before user visits	<link rel="prerender" href="next-page.html">

// Preload = needed now, prefetch = needed later, prerender = fully render page ahead.

// If you want, I can create a single complete Frontend Interview Cheat Sheet with 100+ Q&A covering JavaScript, React, HTML, CSS, Performance, and Accessibility, with code examples and diagrams for easy revision.

// Do you want me to create that?

// You said:
// // ‣ What is the difference between unit, integration, and end-to-end testing?
// // ‣ What is snapshot testing?
// // ‣ How would you test APIs in a frontend project?
// // ‣ How do you ensure a website works in all browsers?
// // ‣ What tools are used for testing accessibility?
// // ‣ How do you test React components?
// ChatGPT said:

// Here’s a detailed explanation for your frontend testing questions:

// 1. Difference between unit, integration, and end-to-end (E2E) testing:

// Testing Type	Purpose	Scope	Example
// Unit testing	Test individual functions/components in isolation	Single function/component	Testing a sum() function
// Integration testing	Test interaction between modules/components	Multiple units together	Testing a form component + input validation + submit handler
// End-to-end (E2E) testing	Test full application flow from user perspective	Whole app	Testing login → dashboard → logout workflow

// 2. What is snapshot testing?

// Snapshot testing captures a rendered output of a component and compares it to a saved snapshot file.

// Useful to detect unexpected changes in UI.

// Tools: Jest + React Testing Library

// import { render } from '@testing-library/react';
// import Button from './Button';

// test('matches snapshot', () => {
//   const { asFragment } = render(<Button label="Click" />);
//   expect(asFragment()).toMatchSnapshot();
// });


// 3. How would you test APIs in a frontend project?

// Manual testing: Postman, Insomnia.

// Automated testing: Jest + Axios or fetch mocks.

// import axios from 'axios';
// jest.mock('axios');

// test('fetches data from API', async () => {
//   axios.get.mockResolvedValue({ data: { id: 1, name: 'Test' } });
//   const response = await fetchData();
//   expect(response.name).toBe('Test');
// });


// 4. How do you ensure a website works in all browsers?

// Use cross-browser testing tools: BrowserStack, LambdaTest.

// Test on major browsers (Chrome, Firefox, Safari, Edge).

// Use vendor prefixes in CSS or autoprefixer.

// Use polyfills for unsupported JS features (Babel).

// Follow progressive enhancement and feature detection.

// 5. Tools used for testing accessibility:

// Automated tools: Lighthouse, axe DevTools, WAVE, Pa11y.

// Manual testing: Keyboard navigation, screen readers (NVDA, VoiceOver, JAWS).

// Linting: eslint-plugin-jsx-a11y for React projects.

// 6. How do you test React components?

// Unit testing: Jest + React Testing Library / Enzyme.

// Snapshot testing: Verify UI changes.

// Simulate events: Test user interactions with fireEvent or userEvent.

// import { render, fireEvent } from '@testing-library/react';
// import Counter from './Counter';

// test('increments counter', () => {
//   const { getByText } = render(<Counter />);
//   fireEvent.click(getByText('Increment'));
//   expect(getByText('Count: 1')).toBeInTheDocument();
// });


// If you want, I can compile all your frontend topics (JavaScript, React, HTML/CSS, Performance, Accessibility, and Testing) into one ultimate 100+ Q&A interview cheat sheet with examples, so you can revise everything efficiently in one place.

// Do you want me to create that?

// You said:
// // ‣ What is a micro-frontend?
// // ‣ How does a Single Page Application (SPA) differ from a Multi-Page Application (MPA)?
// // ‣ How does server-side rendering (SSR) compare to client-side rendering (CSR)?
// // ‣ What are the benefits of modular or reusable components?
// ChatGPT said:

// Here’s a detailed explanation for your frontend architecture and best practices questions:

// 1. What is a micro-frontend?

// Micro-frontend is an architecture pattern where a frontend app is split into smaller, independently deployable parts.

// Each micro-frontend can be developed and deployed by different teams.

// Benefits: scalability, independent releases, and easier maintenance.

// Example: A large e-commerce site with separate micro-frontends for cart, product listing, and checkout.

// 2. How does a Single Page Application (SPA) differ from a Multi-Page Application (MPA)?

// Feature	SPA	MPA
// Page reload	No full reload, only dynamic content updates	Full page reload for each navigation
// URL routing	Handled client-side (React Router, Vue Router)	Handled server-side
// Performance	Faster navigation after initial load	Slower due to multiple full page loads
// SEO	Needs extra setup (SSR or prerendering)	Naturally SEO-friendly
// Example	React, Angular, Vue apps	Traditional PHP, Java, or .NET apps

// 3. How does server-side rendering (SSR) compare to client-side rendering (CSR)?

// Feature	SSR	CSR
// Rendering	HTML generated on the server	HTML generated in the browser
// First load	Faster (content visible immediately)	Slower initial load
// SEO	Good (search engines see content)	Poor without SSR/prerendering
// Interaction	Requires more client JS for dynamic behavior	Fully handled by client JS
// Example	Next.js, Nuxt.js	React SPA, Vue SPA

// 4. Benefits of modular or reusable components:

// Reusability: Write once, use in multiple places.

// Maintainability: Isolated changes don’t affect unrelated components.

// Testability: Smaller units are easier to test.

// Consistency: Uniform design and behavior across the app.

// Scalability: Makes large applications easier to manage and extend.

// If you want, I can combine all your Frontend questions—from JS, React, HTML/CSS, Performance, Accessibility, Testing, and Architecture—into one ultimate 100+ Q&A interview cheat sheet with code examples, so you can revise efficiently in one place.

// Do you want me to create that?

// You said:
// // ‣ Difference between picture and img elements?
// // ‣ Purpose of object tag vs. iframe?
// // ‣ What are ARIA attributes and their importance?
// // ‣ How do you implement a responsive grid in HTML5?
// // ‣ localStorage vs. sessionStorage?
// // ‣ What are Web Components and how to create one?
// // ‣ How does Shadow DOM work?
// // ‣ What are Web Workers and their benefits?
// // ‣ What is contenteditable attribute?
// // ‣ canvas vs. SVG for graphics?
// ChatGPT said:

// Here’s a detailed explanation for your advanced HTML5 and web APIs questions:

// 1. Difference between <picture> and <img> elements:

// <img>: Standard image element, single source.

// <picture>: Allows responsive images and multiple sources (e.g., WebP fallback, different sizes).

// <picture>
//   <source srcset="image.webp" type="image/webp">
//   <img src="image.jpg" alt="Example">
// </picture>


// 2. Purpose of <object> tag vs. <iframe>:

// Tag	Purpose	Notes
// <object>	Embeds external content (HTML, images, PDFs, multimedia)	Can fallback content if unsupported
// <iframe>	Embeds another HTML document inside a page	Isolated browsing context

// 3. What are ARIA attributes and their importance?

// ARIA (Accessible Rich Internet Applications) attributes enhance accessibility for screen readers.

// Examples: role, aria-label, aria-expanded, aria-hidden.

// Importance: Improves a11y, ensures dynamic content is accessible.

// 4. How do you implement a responsive grid in HTML5?

// Using CSS Grid or Flexbox with media queries:

// <div class="grid">
//   <div>1</div><div>2</div><div>3</div>
// </div>
// <style>
// .grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 10px;
// }
// </style>


// 5. localStorage vs. sessionStorage:

// Feature	localStorage	sessionStorage
// Lifespan	Persistent	Until tab/browser closes
// Storage limit	~5–10MB	~5MB
// Scope	Shared across all tabs of same origin	Tab-specific
// API	setItem, getItem, removeItem	Same

// 6. What are Web Components and how to create one?

// Web Components: Encapsulated, reusable custom HTML elements.

// Created using: Custom Elements, Shadow DOM, HTML Templates

// class MyComponent extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = "<p>Hello Web Component</p>";
//   }
// }
// customElements.define('my-component', MyComponent);


// 7. How does Shadow DOM work?

// Shadow DOM provides encapsulation for DOM and CSS.

// Prevents styles from leaking in/out.

// const shadow = document.querySelector('#host').attachShadow({mode: 'open'});
// shadow.innerHTML = `<p>Shadow content</p>`;


// 8. What are Web Workers and their benefits?

// Web Workers run JavaScript in a background thread, preventing UI blocking.

// Benefits: Smooth UI, heavy computations offloaded.

// const worker = new Worker('worker.js');
// worker.postMessage('data');
// worker.onmessage = (e) => console.log(e.data);


// 9. What is contenteditable attribute?

// Makes an element editable in the browser.

// <div contenteditable="true">Edit me</div>


// 10. canvas vs. SVG for graphics:

// Feature	canvas	SVG
// Type	Raster (pixel-based)	Vector (scalable)
// Use case	Complex animations, game graphics	Charts, icons, illustrations
// DOM integration	Not part of DOM	Part of DOM, accessible
// Performance	Better for many dynamic objects	Better for few static/scalable objects

// If you want, I can compile all your Frontend topics—HTML, CSS, JS, React, Performance, Accessibility, Testing, Architecture—into one ultimate 100+ Q&A cheat sheet with examples, so you can revise everything efficiently in one place.

// Do you want me to create that?

// You said:
// // ‣ How does this work in different contexts?
// // ‣ Shallow vs. deep copy in JS?
// // ‣ What is the Module Pattern in JS?
// // ‣ How do callbacks, promises, and async/await affect the event loop?
// // ‣ What are decorators in JS?
// // ‣ Difference between call(), apply(), bind()?
// // ‣ What is the Reflect API in JS?
// // ‣ How to handle race conditions in JS?
// // ‣ What is WeakMap vs. Map?
// // ‣ Explain event delegation in JS.
// ChatGPT said:

// Here’s a detailed explanation for your advanced JavaScript questions:

// 1. How does this work in different contexts?

// Context	this value
// Global scope	window (browser) / undefined (strict mode)
// Function	window / undefined (strict mode)
// Object method	The object calling the method
// Constructor (new)	Newly created object
// Arrow function	Lexical this (inherits from surrounding scope)
// const obj = {
//   a: 10,
//   method: function() { console.log(this.a); }
// };
// obj.method(); // 10


// 2. Shallow vs. Deep copy in JS:

// Shallow copy: Copies only top-level properties; nested objects are still referenced.

// Deep copy: Recursively copies all nested objects, no references to original.

// const obj = { a: 1, b: { c: 2 } };
// const shallow = {...obj};
// const deep = JSON.parse(JSON.stringify(obj));


// 3. What is the Module Pattern in JS?

// Encapsulates code into private and public parts using closures.

// Prevents global namespace pollution.

// const Module = (function() {
//   let privateVar = 0;
//   return {
//     increment() { privateVar++; },
//     getValue() { return privateVar; }
//   };
// })();
// Module.increment();
// console.log(Module.getValue()); // 1


// 4. How do callbacks, promises, and async/await affect the event loop?

// Callbacks: Added to task queue after main thread execution.

// Promises: .then callbacks go to microtask queue, executed before task queue.

// async/await: Syntax sugar over promises, still uses microtask queue.

// console.log('Start');
// setTimeout(() => console.log('Timeout'), 0);
// Promise.resolve().then(() => console.log('Promise'));
// console.log('End');
// // Output: Start → End → Promise → Timeout


// 5. What are decorators in JS?

// Functions that wrap or modify classes/methods/properties.

// Common in frameworks like Angular or TypeScript.

// function readonly(target, key, descriptor) {
//   descriptor.writable = false;
//   return descriptor;
// }
// class Example {
//   @readonly
//   name = "Sai";
// }


// 6. Difference between call(), apply(), and bind():

// Method	Purpose
// call(thisArg, arg1, arg2)	Invokes function with given this and arguments
// apply(thisArg, [args])	Same as call, but takes arguments as array
// bind(thisArg, arg1, arg2)	Returns a new function with bound this and arguments

// 7. What is the Reflect API in JS?

// Provides methods for interceptable object operations (like proxy traps).

// Examples: Reflect.get, Reflect.set, Reflect.has

// const obj = {a: 1};
// console.log(Reflect.get(obj, 'a')); // 1


// 8. How to handle race conditions in JS?

// Avoid shared mutable state.

// Use Promises / async/await sequencing.

// Example: Chain async operations instead of running concurrently if order matters.

// await firstAsync();
// await secondAsync(); // Ensures correct sequence


// 9. What is WeakMap vs. Map?

// Feature	Map	WeakMap
// Keys	Any type	Only objects
// Garbage collection	Keys prevent GC	Keys do not prevent GC (weak reference)
// Iteration	Iterable	Not iterable
// Use case	General key-value storage	Private data for objects

// 10. Explain event delegation in JS:

// Event delegation attaches a single event listener to a parent element and leverages event bubbling.

// Efficient for dynamically added elements.

// document.querySelector('#parent').addEventListener('click', (e) => {
//   if(e.target.tagName === 'BUTTON') console.log('Button clicked');
// });


// If you want, I can combine all your JS, React, HTML, CSS, Performance, Accessibility, and Testing questions into a single ultimate 100+ Q&A interview cheat sheet with code examples, so you can revise everything efficiently in one place.

// Do you want me to create that?

// You said:
// // ‣ useEffect vs. useLayoutEffect?
// // ‣ React lifecycle methods in class vs. functional components?
// // ‣ Managing global state without Redux/Context API?
// // ‣ How does React's reconciliation work?
// // ‣ Implementing SSR and SSG in React?
// // ‣ What are Suspense and Lazy loading in React?
// // ‣ Error boundaries in React?
// // ‣ What is React strict mode?
// // ‣ React memoization: React.memo(), useMemo(), useCallback()?
// // ‣ What is React Fiber architecture?
// ChatGPT said:

// Here’s a detailed explanation for your advanced React questions:

// 1. useEffect vs. useLayoutEffect:

// Feature	useEffect	useLayoutEffect
// Timing	Runs after painting (non-blocking)	Runs before painting (blocking)
// Use case	Fetching data, subscriptions	Measuring DOM, synchronously manipulating layout
// Performance	Doesn’t block UI	Can block rendering if heavy
// useLayoutEffect(() => {
//   console.log('DOM updated, before paint');
// }, []);
// useEffect(() => {
//   console.log('After paint');
// }, []);


// 2. React lifecycle methods: class vs. functional components:

// Phase	Class Component	Functional Component
// Mount	constructor → render → componentDidMount	useEffect(() => {}, [])
// Update	shouldComponentUpdate → render → componentDidUpdate	useEffect(() => {}, [deps])
// Unmount	componentWillUnmount	useEffect(() => return cleanup, [])

// 3. Managing global state without Redux/Context API:

// Use lifting state up to common parent.

// Use custom hooks with shared state.

// Third-party libraries: Zustand, Jotai, Recoil.

// 4. How does React’s reconciliation work?

// React uses a diffing algorithm to update the Virtual DOM efficiently.

// Steps:

// Compare new virtual DOM with previous.

// Find minimum changes.

// Update only the changed parts of the real DOM.

// Uses keys in lists to identify elements and avoid unnecessary re-renders.

// 5. Implementing SSR and SSG in React:

// SSR (Server-Side Rendering): HTML is generated on the server on each request.

// Example: Next.js getServerSideProps().

// SSG (Static Site Generation): HTML is generated at build time.

// Example: Next.js getStaticProps().

// 6. Suspense and Lazy loading in React:

// Lazy loading: Load components on demand to reduce bundle size.

// Suspense: Shows a fallback while a lazy component is loading.

// const LazyComp = React.lazy(() => import('./LazyComp'));
// <Suspense fallback={<div>Loading...</div>}>
//   <LazyComp />
// </Suspense>


// 7. Error boundaries in React:

// Components that catch JavaScript errors in their child tree and render a fallback UI.

// Only class components can be error boundaries.

// class ErrorBoundary extends React.Component {
//   state = { hasError: false };
//   static getDerivedStateFromError() { return { hasError: true }; }
//   render() { return this.state.hasError ? <h1>Error occurred</h1> : this.props.children; }
// }


// 8. React Strict Mode:

// Development-only tool to highlight potential problems (deprecated APIs, side effects).

// Does double-invocation of certain functions to detect issues.

// <React.StrictMode>
//   <App />
// </React.StrictMode>


// 9. React memoization: React.memo(), useMemo(), useCallback():

// Method	Purpose
// React.memo(Component)	Memoizes functional component rendering based on props
// useMemo(() => compute, [deps])	Memoizes computed values
// useCallback(() => fn, [deps])	Memoizes functions to prevent re-creation

// 10. React Fiber architecture:

// Fiber is React’s reconciliation engine introduced in React 16.

// Enables:

// Incremental rendering (pause, resume work).

// Prioritized updates.

// Better handling of asynchronous rendering.

// Improves responsiveness for large component trees.

// If you want, I can compile all your React + JS + HTML/CSS + Performance + Accessibility + Testing + Architecture Q&A into a single ultimate 100+ Q&A interview cheat sheet with code examples, so you can revise efficiently in one place.

// Do you want me to create that?

// You said:
// // ‣ How to create an accessible custom dropdown?
// // ‣ What is aria-live and its use?
// // ‣ Focus management in SPAs?
// // ‣ Use of aria-hidden for dynamic content?
// // ‣ Making tables accessible to screen readers?
// // ‣ Explain tabindex and focus order in forms?
// // ‣ Accessible multimedia elements?
// // ‣ Best practices for accessible form error messages?
// // ‣ Testing accessibility: automated vs. manual methods?
// // ‣ accesskey attribute in accessibility?
// ChatGPT said:

// Here’s a detailed explanation for your accessibility (a11y) questions in frontend development:

// 1. How to create an accessible custom dropdown?

// Use semantic roles and keyboard navigation.

// Example:

// <div role="combobox" aria-expanded="false" tabindex="0" id="dropdown">
//   <span>Choose an option</span>
//   <ul role="listbox" aria-labelledby="dropdown" hidden>
//     <li role="option" tabindex="-1">Option 1</li>
//     <li role="option" tabindex="-1">Option 2</li>
//   </ul>
// </div>


// Ensure arrow keys navigate options, Enter selects, Esc closes.

// 2. What is aria-live and its use?

// aria-live notifies screen readers of dynamic content changes.

// Values: polite, assertive, off.

// <div aria-live="polite" id="notification">New message received</div>


// 3. Focus management in SPAs

// SPAs don’t reload pages; focus must move to updated content.

// Best practices:

// Set focus to main heading or modal when route changes.

// Use tabindex="-1" for programmatic focus.

// document.getElementById('main-heading').focus();


// 4. Use of aria-hidden for dynamic content

// aria-hidden="true" hides non-visible elements from screen readers.

// Example: Hiding background content when modal is open.

// <div aria-hidden="true">Background content</div>


// 5. Making tables accessible to screen readers

// Use <thead>, <tbody>, <th> for headers.

// Use scope="col" / scope="row" for clarity.

// Example:

// <table>
//   <thead>
//     <tr><th scope="col">Name</th><th scope="col">Age</th></tr>
//   </thead>
//   <tbody>
//     <tr><td>John</td><td>25</td></tr>
//   </tbody>
// </table>


// 6. Explain tabindex and focus order in forms

// tabindex controls keyboard focus order.

// 0 → follows natural DOM order.

// -1 → focusable programmatically only.

// >0 → custom tab order (use sparingly).

// <input tabindex="2">
// <input tabindex="1">


// 7. Accessible multimedia elements

// Videos: Provide captions, transcripts, audio descriptions.

// Audio: Provide transcripts.

// Use <track> for subtitles:

// <video controls>
//   <source src="movie.mp4" type="video/mp4">
//   <track src="subs.vtt" kind="subtitles" srclang="en" label="English">
// </video>


// 8. Best practices for accessible form error messages

// Associate errors with inputs using aria-describedby.

// Provide clear and descriptive messages.

// <input id="email" aria-describedby="emailError">
// <span id="emailError" role="alert">Enter a valid email</span>


// 9. Testing accessibility: automated vs. manual methods

// Automated tools: Lighthouse, axe DevTools, WAVE.

// Manual testing:

// Keyboard navigation (Tab, Shift+Tab).

// Screen reader testing (NVDA, JAWS, VoiceOver).

// Color contrast and focus visibility.

// 10. accesskey attribute in accessibility

// Assign keyboard shortcuts to elements.

// Example:

// <button accesskey="s">Save</button>


// Use carefully to avoid conflicts with browser shortcuts.

// If you want, I can compile all your accessibility, React, JS, HTML, CSS, Performance, Testing, and Architecture questions into one ultimate 100+ Q&A Frontend Interview Cheat Sheet with examples, so you can revise everything efficiently in one place.

// Do you want me to create that?

// You said:
// // ‣ Difference between HTTP/1.1 and HTTP/2?
// // ‣ How to implement Critical CSS?
// // ‣ Efficient caching strategies for performance?
// // ‣ Preventing layout shifts (CLS)?
// // ‣ What is resource prefetching?
// // ‣ Using Intersection Observer for lazy loading?
// // ‣ Code-splitting in React for performance?
// // ‣ Prioritizing critical resources for page load?
// // ‣ Optimizing performance of large image galleries?
// // ‣ What are Web Vitals and how to optimize Core Web Vitals?
// ChatGPT said:

// Here’s a detailed explanation for your frontend performance and optimization questions:

// 1. Difference between HTTP/1.1 and HTTP/2:

// Feature	HTTP/1.1	HTTP/2
// Multiplexing	No (1 request per connection)	Yes (multiple requests over a single connection)
// Header compression	No	Yes (HPACK compression)
// Server push	❌	✅ (push resources proactively)
// Latency	Higher due to multiple connections	Lower due to multiplexing and binary protocol

// 2. How to implement Critical CSS:

// Extract CSS needed for above-the-fold content and inline it in <head> to render faster.

// Example:

// <style>
//   body { margin:0; font-family:sans-serif; }
//   header { background:#333; color:#fff; }
// </style>
// <link rel="stylesheet" href="main.css">


// Tools: Critical, Penthouse, or webpack plugins.

// 3. Efficient caching strategies for performance:

// Cache-Control: max-age, public/private, immutable for static assets.

// ETags: Track changes and reduce redundant downloads.

// Service workers: Offline caching and precaching.

// CDN caching: Serve resources from nearest edge servers.

// 4. Preventing layout shifts (CLS – Cumulative Layout Shift):

// Always set width/height for images and videos.

// Reserve space for dynamic content (ads, banners).

// Avoid inserting content above visible content after load.

// Example:

// <img src="hero.jpg" width="1200" height="600" alt="Hero">


// 5. What is resource prefetching?

// Browser loads resources in advance for future use.

// Types:

// preload → needed now (critical resources).

// prefetch → needed later (next page or navigation).

// prerender → fully render future page in background.

// 6. Using Intersection Observer for lazy loading:

// Detects when elements enter the viewport and loads them dynamically.

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting) {
//       entry.target.src = entry.target.dataset.src;
//       observer.unobserve(entry.target);
//     }
//   });
// });
// document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));


// 7. Code-splitting in React for performance:

// Split app into smaller chunks that load on demand using React.lazy or dynamic imports.

// const LazyComp = React.lazy(() => import('./LazyComp'));
// <Suspense fallback={<div>Loading...</div>}><LazyComp /></Suspense>


// Reduces initial bundle size and improves load time.

// 8. Prioritizing critical resources for page load:

// Inline critical CSS.

// Use rel="preload" for fonts, scripts, and above-the-fold images.

// Defer non-critical JS with async or defer.

// 9. Optimizing performance of large image galleries:

// Use lazy loading (loading="lazy" or Intersection Observer).

// Serve responsive images (<picture> element or srcset).

// Compress images (WebP/AVIF).

// Consider virtualization to render only visible images.

// 10. What are Web Vitals and how to optimize Core Web Vitals?

// Web Vitals: Key metrics for UX performance:

// LCP (Largest Contentful Paint): Optimize server response, critical CSS, and images.

// FID (First Input Delay): Minimize JS execution, use web workers.

// CLS (Cumulative Layout Shift): Reserve space for images, ads, and dynamic content.








// ------------------------------


// Interview Question - 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 (𝐑𝐞𝐚𝐜𝐭 𝐉𝐒)

//  I wanted to share some of the interesting and thought-provoking questions that were asked. I believe these topics can be helpful for anyone preparing for a similar role in Frontend development in React JS!

// 1. Reverse a string without using reverse()
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("Hello")); // Output: "olleH"

// 2. Generator Function in JavaScript

// A generator function allows you to pause execution and resume it later. It returns an iterator.

// function* generatorExample() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = generatorExample();
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: undefined, done: true }


// * marks a generator.

// yield pauses the function and returns a value.

// 3. Closures in JavaScript

// A closure is a function that remembers the scope in which it was created.

// function outerFunction(outerVar) {
//     return function innerFunction(innerVar) {
//         console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
//     };
// }

// const closureExample = outerFunction("outside");
// closureExample("inside"); // Outer: outside, Inner: inside


// Inner function retains access to outerVar even after outerFunction finishes.

// 4. Higher-Order Components (HOC) in React

// A HOC is a function that takes a component and returns a new component with additional functionality.

// const withLogger = (WrappedComponent) => {
//     return (props) => {
//         console.log("Rendering component with props:", props);
//         return <WrappedComponent {...props} />;
//     };
// };


// Used for code reuse, logic abstraction, or conditional rendering.

// 5. Difference between State and Props
// Aspect	State	Props
// Mutability	Mutable (can be changed)	Immutable (read-only)
// Scope	Local to the component	Passed from parent to child
// Purpose	Manage internal component data	Pass data to child components
// 6. Callback Function

// A callback is a function passed as an argument to another function, executed later.

// function greet(name, callback) {
//     console.log(`Hello, ${name}`);
//     callback();
// }

// greet("Saikrishna", () => console.log("Callback executed!"));

// 7. Spread Operator ... in JavaScript

// Used to expand arrays/objects or merge them.

// // Array
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// console.log(arr2); // [1, 2, 3, 4]

// // Object
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };
// console.log(obj2); // { a: 1, b: 2, c: 3 }

// 8. Shallow Copy vs Deep Copy

// Shallow Copy: Copies only first-level properties; nested objects still reference original.

// Deep Copy: Copies everything recursively, creating independent nested objects.

// // Shallow copy
// const obj1 = { a: 1, b: { c: 2 } };
// const shallowCopy = { ...obj1 };
// shallowCopy.b.c = 99;
// console.log(obj1.b.c); // 99 (nested object still shared)

// // Deep copy
// const deepCopy = JSON.parse(JSON.stringify(obj1));
// deepCopy.b.c = 42;
// console.log(obj1.b.c); // 99 (original remains unchanged)

// 9. Virtual DOM in React

// Virtual DOM is an in-memory representation of the real DOM.

// React updates only the necessary parts of the real DOM by comparing changes (diffing), which improves performance.

// 10. Hooks in React

// Hooks let you use state and lifecycle features in functional components.

// Common hooks:

// useState() → manage state

// useEffect() → handle side effects

// useContext() → access context

// useRef() → access DOM elements

// useMemo() / useCallback() → optimize performance

// import React, { useState, useEffect } from "react";

// function Counter() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log(`Count updated: ${count}`);
//     }, [count]);

//     return <button onClick={() => setCount(count + 1)}>Increment</button>;
// }


// 11. useMemo vs React.memo

// useMemo: A hook that memoizes a computed value so it doesn’t get recalculated on every render.

// React.memo: A higher-order component that memoizes the whole functional component, preventing unnecessary re-renders if props don’t change.

// import React, { useMemo } from "react";

// const ExpensiveComponent = ({ num }) => {
//   const computed = useMemo(() => {
//     console.log("Computing...");
//     return num * 2;
//   }, [num]); // recalculates only if num changes

//   return <div>{computed}</div>;
// };

// export default React.memo(ExpensiveComponent); // memoizes component render


// Difference:

// Feature	useMemo	React.memo
// Scope	Value inside component	Entire component render
// Usage	Prevent expensive recalcs	Prevent unnecessary re-renders
// Dependency	Dependencies array required	Compares props by default
// 12. Use cases for useCallback and useMemo

// useCallback: Memoizes a function reference to prevent re-creation on every render.

// useMemo: Memoizes a computed value.

// import React, { useState, useCallback, useMemo } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const double = useMemo(() => count * 2, [count]); // memoized value

//   const increment = useCallback(() => {
//     setCount(prev => prev + 1);
//   }, []); // memoized function

//   return (
//     <div>
//       <p>Double: {double}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }


// Use case: Optimize performance for components passed as props or expensive computations.

// 13. Timer with Start and Stop buttons
// import React, { useState, useRef } from "react";

// function Timer() {
//   const [time, setTime] = useState(0);
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     if (!timerRef.current) {
//       timerRef.current = setInterval(() => {
//         setTime(prev => prev + 1);
//       }, 1000);
//     }
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   };

//   return (
//     <div>
//       <h1>Time: {time}s</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// 14. Handling lifecycle events in functional components

// Using useEffect:

// import React, { useEffect } from "react";

// function LifecycleDemo() {
//   // componentDidMount
//   useEffect(() => {
//     console.log("Mounted");

//     // componentWillUnmount
//     return () => console.log("Unmounted");
//   }, []);

//   // componentDidUpdate (on count change)
//   useEffect(() => {
//     console.log("Updated");
//   });

//   return <div>Check console for lifecycle logs</div>;
// }

// 15. Passing data from child to parent
// function Parent() {
//   const handleData = (childData) => {
//     console.log("Data from child:", childData);
//   };

//   return <Child sendData={handleData} />;
// }

// function Child({ sendData }) {
//   return <button onClick={() => sendData("Hello Parent")}>Send</button>;
// }


// Pass a function from parent as prop and call it in the child.

// 16. Why copy state before updating in React

// React state must be immutable to detect changes and trigger re-renders.

// Direct mutation does not trigger re-render.

// const [arr, setArr] = useState([1, 2]);
// const addItem = () => {
//   setArr([...arr, 3]); // new array
// };

// 17. Why use Redux in React

// Centralized state management

// Predictable state updates

// Easy debugging with DevTools

// Simplifies passing state across multiple components

// 18. Middlewares in Redux

// Functions that intercept actions before reaching the reducer

// Useful for:

// Logging

// Async requests

// Error handling

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log("Dispatching:", action);
//   return next(action);
// };

// 19. redux-thunk vs redux-saga

// redux-thunk: Middleware to handle async logic using functions (simpler).

// redux-saga: Middleware to handle async using generator functions (more powerful, supports complex flows).

// redux-thunk example:

// const fetchUser = () => {
//   return async (dispatch) => {
//     dispatch({ type: "FETCH_USER_REQUEST" });
//     try {
//       const res = await fetch("/api/user");
//       const data = await res.json();
//       dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
//     } catch (err) {
//       dispatch({ type: "FETCH_USER_FAILURE", error: err });
//     }
//   };
// };

// 20. How reducers work and example

// Reducers are pure functions that take (state, action) and return a new state.

// const initialState = { count: 0 };

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }


// 21. Preventing component re-render in React

// Use React.memo to memoize functional components.

// Use useMemo / useCallback to memoize values or functions passed as props.

// const Child = React.memo(({ data }) => {
//   console.log("Child rendered");
//   return <div>{data}</div>;
// });

// 22. Context API in React

// Provides a way to pass data through the component tree without props drilling.

// import React, { createContext, useContext } from "react";

// const ThemeContext = createContext();

// function Parent() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Child />
//     </ThemeContext.Provider>
//   );
// }

// function Child() {
//   const theme = useContext(ThemeContext);
//   return <div>Theme: {theme}</div>;
// }

// 23. Sharing data across multiple components

// Options:

// Props drilling – simple but tedious for deep trees.

// Context API – avoid drilling.

// State management libraries – Redux, Zustand, Recoil.

// 24. React optimization techniques

// React.memo for functional components

// useMemo / useCallback for expensive computations and functions

// Code splitting and lazy loading

// Avoid anonymous functions in JSX

// Virtualization for long lists (e.g., react-window)

// 25. Lazy loading in React

// Loads components only when needed (improves performance).

// import React, { Suspense } from "react";

// const LazyComponent = React.lazy(() => import("./LazyComponent"));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <LazyComponent />
//     </Suspense>
//   );
// }

// 26. Preventing unnecessary re-renders

// Use React.memo

// Use useMemo / useCallback

// Keep state local where possible

// Avoid changing references unnecessarily

// 27. Basic unit test for a component

// Using Jest + React Testing Library:

// import { render, screen, fireEvent } from "@testing-library/react";
// import Counter from "./Counter";

// test("renders counter and increments", () => {
//   render(<Counter />);
//   const button = screen.getByText(/Increment/i);
//   fireEvent.click(button);
//   expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
// });

// 28. Check if an object is empty in JS
// const obj = {};
// console.log(Object.keys(obj).length === 0); // true

// // OR
// console.log(JSON.stringify(obj) === "{}"); // true

// 29. Bootstrap experience

// Usage: Rapid UI development using prebuilt components and responsive grid.

// Experience:

// Responsive layouts with container, row, col-*

// Buttons, modals, and navbars

// Integration with React (react-bootstrap)

// 30. Immediately Invoked Function Expression (IIFE)

// A function executed immediately after creation.

// Used for scoping variables and avoiding global pollution.

// (function() {
//   const message = "Hello IIFE";
//   console.log(message);
// })();

// 31. Server-side rendering (SSR)

// Rendering React components on the server instead of the client.

// Benefits:

// Faster initial load

// SEO-friendly

// Experience: Using Next.js, pages are pre-rendered on the server and sent as HTML to clients.

// // Next.js example
// export async function getServerSideProps() {
//   const res = await fetch("https://api.example.com/data");
//   const data = await res.json();
//   return { props: { data } };
// }

// 32. Implement a cricket score functionality in a table format that has 2 columns:
// 1) Ball Number
// 2) Number of runs
// A button to update score
import React, { useState } from "react";

function CricketScore() {
  const [balls, setBalls] = useState([]);

  const addBall = () => {
    const run = Math.floor(Math.random() * 7); // Random runs between 0-6
    const ballNumber = balls.length + 1;
    setBalls([...balls, { ballNumber, run }]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Cricket Score</h2>
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Ball Number</th>
            <th>Runs</th>
          </tr>
        </thead>
        <tbody>
          {balls.map((ball) => (
            <tr key={ball.ballNumber}>
              <td>{ball.ballNumber}</td>
              <td>{ball.run}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addBall}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Add Ball
      </button>
    </div>
  );
}

export default CricketScore;


// ---------------------------------------------
// 1. What is Node.js?

// Node.js is a JavaScript runtime built on Chrome’s V8 engine.

// It allows running JavaScript on the server-side.

// Key features:

// Non-blocking I/O

// Event-driven architecture

// Scalable for real-time applications

// # Example: Run a simple server
// node server.js

// 2. Difference between Node.js and JavaScript
// Feature	JavaScript	Node.js
// Environment	Browser	Server (V8 engine)
// Usage	Client-side scripting	Server-side scripting
// APIs	DOM, BOM	File system, HTTP, OS
// Modules	No native module system	Built-in module system (CommonJS)
// 3. Is Node.js single-threaded?

// Yes, Node.js runs on a single main thread.

// Uses event-driven, non-blocking I/O to handle multiple requests concurrently.

// Heavy computation can block the thread, so workers or child processes are recommended for CPU-intensive tasks.

// 4. What kind of API function is supported by Node.js?

// Node.js supports asynchronous and non-blocking API functions.

// Examples:

// File system: fs.readFile() (async) vs fs.readFileSync() (sync)

// HTTP server: http.createServer()

// const fs = require("fs");
// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// 5. What is a module in Node.js?

// A module is a reusable block of code in Node.js.

// Types:

// Built-in modules: fs, http, path

// User-defined modules: Your own JS files

// Third-party modules: Installed via npm

// // userModule.js
// module.exports = function greet(name) { console.log(`Hello ${name}`); };

// // main.js
// const greet = require("./userModule");
// greet("Saikrishna"); // Hello Saikrishna

// 6. What is npm and its advantages?

// npm = Node Package Manager.

// Used to install, share, and manage packages for Node.js.

// Advantages:

// Easy dependency management

// Access to a huge library of packages

// Simplifies project setup

// npm install express

// 7. What is middleware?

// Middleware is a function that processes requests before sending a response.

// Commonly used in Express.js for logging, authentication, and parsing request data.

// const express = require("express");
// const app = express();

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next(); // move to next middleware
// };

// app.use(logger);

// 8. How does Node.js handle concurrency despite being single-threaded?

// Node.js uses non-blocking I/O and an event loop.

// It delegates I/O tasks to the libuv thread pool and continues executing other tasks.

// Callback functions or Promises are invoked when the I/O task completes.

// 9. What is the control flow in Node.js?

// Node.js uses event-driven asynchronous control flow:

// Start execution

// Register callbacks for I/O or timers

// Continue execution

// Execute callbacks when events complete

// console.log("Start");
// setTimeout(() => console.log("Middle"), 0);
// console.log("End");
// // Output: Start, End, Middle

// 10. What do you mean by the event loop in Node.js?

// The event loop allows Node.js to perform non-blocking I/O.

// It continuously checks:

// Callbacks queue

// Microtasks queue (Promises)

// Executes pending operations

// Flow: Event Loop → Callback Queue → Execution
// 11. What are the main disadvantages of Node.js?

// Single-threaded nature can be a bottleneck for CPU-intensive tasks.
// Callback hell can make code hard to read and maintain.
// Limited support for multi-threading (though worker threads are available).

// 12. What is REPL in Node.js?

// REPL = Read-Eval-Print Loop.

// It is an interactive shell to execute Node.js commands line by line.

// Features:

// Read input

// Evaluate code

// Print output

// Loop back

// $ node
// > console.log("Hello REPL")
// Hello REPL

// 13. How to import a module in Node.js?

// Using CommonJS require():

// const fs = require("fs"); // built-in
// const myModule = require("./myModule"); // custom module


// Using ES Module import (requires "type": "module" in package.json):

// import fs from "fs";
// import myModule from "./myModule.js";

// 14. Difference between Node.js and AJAX
// Feature	Node.js	AJAX
// Type	Server-side runtime	Client-side technique
// Language	JavaScript	JS (XHR / Fetch API)
// Purpose	Build server apps	Asynchronous requests from browser
// Environment	Server	Browser
// 15. What is package.json in Node.js?

// A manifest file containing:

// Project metadata (name, version, author)

// Dependencies

// Scripts (start, test, build)

// {
//   "name": "my-app",
//   "version": "1.0.0",
//   "dependencies": {
//     "express": "^4.18.2"
//   },
//   "scripts": {
//     "start": "node index.js"
//   }
// }

// 16. Most popular Node.js framework

// Express.js – lightweight, flexible, and widely used for building APIs and web apps.

// 17. What are promises in Node.js?

// Promises represent asynchronous operations that may succeed or fail.

// States: pending, fulfilled, rejected.

// const fs = require("fs").promises;

// fs.readFile("file.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// 18. Event-driven programming in Node.js

// Programming style where actions are triggered by events.

// Node.js emits events, and listeners handle them:

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("message", (msg) => console.log(msg));
// emitter.emit("message", "Hello Event!");

// 19. What is Buffer in Node.js?

// Buffer is used to handle binary data.

// Useful for reading files, streams, or network packets.

// const buffer = Buffer.from("Hello");
// console.log(buffer); // <Buffer 48 65 6c 6c 6f>

// 20. What are streams in Node.js?

// Streams allow reading/writing data piece by piece rather than loading the whole file into memory.

// Types:

// Readable: fs.createReadStream()

// Writable: fs.createWriteStream()

// Duplex: both read and write

// Transform: modify data while reading/writing

// const fs = require("fs");
// const readStream = fs.createReadStream("file.txt");
// readStream.on("data", (chunk) => console.log(chunk.toString()));

// 21. Crypto module in Node.js

// Provides cryptographic functionalities:

// Hashing, encryption, decryption

// HMAC, signing, key generation

// const crypto = require("crypto");
// const hash = crypto.createHash("sha256").update("hello").digest("hex");
// console.log(hash);

// 22. Callback hell

// Nested callbacks causing hard-to-read code.

// doSomething((err, data1) => {
//   if (err) return;
//   doSomethingElse(data1, (err, data2) => {
//     if (err) return;
//     doAnotherThing(data2, (err, data3) => {
//       console.log(data3);
//     });
//   });
// });


// Solutions: Promises, async/await

// 23. Timers module in Node.js

// Provides delayed or repeated execution:

// setTimeout(callback, ms)

// setInterval(callback, ms)

// setImmediate(callback)

// 24. Difference between setImmediate() and process.nextTick()
// Feature	setImmediate()	process.nextTick()
// Execution time	After I/O events in next loop	Immediately after current operation
// Purpose	Schedule after I/O	Schedule before next event loop


// 25. Difference between setTimeout() and setImmediate()
// Feature	setTimeout()	setImmediate()
// Execution timing	After specified delay	After current poll phase of event loop
// Use case	Delay execution	Execute immediately after I/O


// 26. Difference between spawn() and fork()
// Feature	spawn()	fork()
// Purpose	Launch new processes (any command)	Launch new Node.js process
// Communication	Streams (stdout, stdin, stderr)	IPC channel for sending messages
// Use case	Running shell commands	Creating child Node processes
// const { spawn, fork } = require("child_process");

// const ls = spawn("ls", ["-lh"]);
// ls.stdout.on("data", (data) => console.log(`Output: ${data}`));

// const child = fork("child.js");
// child.send({ msg: "Hello child" });

// 27. Use of Passport module

// Passport.js is a popular middleware for authentication in Node.js.

// Supports:

// Local username/password

// OAuth (Google, Facebook, GitHub)

// JWT authentication

// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// passport.use(new LocalStrategy((username, password, done) => {
//   // Verify user
// }));

// 28. What is a fork in Node.js?

// fork() creates a new Node.js child process with IPC (inter-process communication) enabled.

// Useful for scaling apps or offloading CPU-heavy tasks.

// 29. Three methods to avoid callback hell

// Promises

// Async/Await

// Modularizing callbacks into separate functions

// async function fetchData() {
//   const data1 = await getData1();
//   const data2 = await getData2(data1);
//   console.log(data2);
// }

// 30. What is body-parser?

// Middleware to parse incoming request bodies in Express.js.

// Converts JSON or URL-encoded data to req.body.

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// 31. What is CORS?

// Cross-Origin Resource Sharing – allows controlled access to resources from different origins.

// Enable in Express:

// const cors = require("cors");
// app.use(cors({ origin: "*" }));

// 32. TLS module in Node.js

// Provides Transport Layer Security for secure communication.

// Can create HTTPS servers or clients.

// const tls = require("tls");
// const server = tls.createServer(options, (socket) => {
//   console.log("Secure connection established");
// });

// 33. What is a cluster in Node.js?

// Clusters allow running multiple Node.js processes to utilize multi-core CPUs.

// Improves performance and handles more requests.

// const cluster = require("cluster");
// const http = require("http");
// const numCPUs = require("os").cpus().length;

// if (cluster.isMaster) {
//   for (let i = 0; i < numCPUs; i++) cluster.fork();
// } else {
//   http.createServer((req, res) => res.end("Hello")).listen(8000);
// }

// 34. Managing sessions in Node.js

// Use express-session middleware:

// const session = require("express-session");

// app.use(session({
//   secret: "mySecret",
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));

// 35. Types of streams in Node.js

// Readable – read data (fs.createReadStream)

// Writable – write data (fs.createWriteStream)

// Duplex – read & write (net.Socket)

// Transform – modify data while streaming (zlib.createGzip())

// 36. Implementing authentication and authorization

// Authentication: Verify user identity (e.g., Passport.js, JWT).

// Authorization: Control access based on roles/permissions.

// // Example: JWT
// const jwt = require("jsonwebtoken");
// app.post("/login", (req, res) => {
//   const token = jwt.sign({ userId: 1 }, "secret");
//   res.json({ token });
// });

// 37. Packages for file uploading

// multer – most popular middleware for handling file uploads in Express.js.

// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// app.post("/upload", upload.single("file"), (req, res) => {
//   res.send("File uploaded");
// });

// 38. Handling database connections

// Use database drivers or ORMs (Mongoose for MongoDB, Sequelize for SQL).

// Example (MongoDB + Mongoose):

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/mydb")
//   .then(() => console.log("DB Connected"))
//   .catch(err => console.error(err));

// 39. Reading command line arguments
// // Run: node app.js arg1 arg2
// console.log(process.argv); // ['node', 'app.js', 'arg1', 'arg2']

// 40. What are child processes?

// Child processes allow running external commands or scripts from Node.js.

// Methods: spawn(), fork(), exec(), execFile().

// const { exec } = require("child_process");
// exec("ls", (err, stdout) => console.log(stdout));
// -----------------------------------------------------------------------------------------------------

// **🚀 Level Up Your JavaScript Skills with These 40 Essential Interview Questions! 🧑‍💻🔍**

// 1. 💡 What are the different data types in JavaScript?
// 2. 📈 What is hoisting in JavaScript?
// 3. ❓ What is the difference between `null` and `undefined`?
// 4. 🔒 What are closures in JavaScript?
// 5. 🔄 What is a callback function?
// 6. ⚙️ What are promises in JavaScript?
// 7. ⏰ What is the purpose of the `setTimeout()` function?
// 8. 🔍 How can you check if an array includes a certain value?
// 9. 🔄 How can you remove duplicates in an array?
// 10. 🔄 What is the purpose of `async` and `await` in JavaScript?
// 11. ❓ What is the difference between `==` and `===`?
// 12. 🔄 What is the difference between `let`, `const`, and `var`?
// 13. 🔁 What is the difference between `for`, `while`, and `do-while` loops?
// 14. 📍 What is the difference between `this` in the global scope and `this` in a function?
// 15. ❓ What is the difference between `null` and `NaN`?
// 16. ❓ What is the difference between `undefined` and `undeclared`?
// 17. 🧱 What is the difference between `Object` and `Array`?
// 18. 🔄 What is the difference between `map`, `filter`, and `reduce`?
// 19. 🔍 What is the difference between `instanceof` and `typeof`?
// 20. 🔄 What is the difference between `throw` and `try-catch`?
// 21. 🔄 What is the difference between `JSON.stringify()` and `JSON.parse()`?
// 22. 🔄 What is the difference between `Array.from()` and `Array.of()`?
// 23. 🔄 What is the difference between `Object.assign()` and the spread operator?
// 24. 🏗️ What is the difference between `Array.push()` and `Array.unshift()`?
// 25. 📉 What is the difference between `Array.pop()` and `Array.shift()`?
// 26. ✂️ What is the difference between `Array.slice()` and `Array.splice()`?
// 27. 🔄 What is the difference between `Array.concat()` and the spread operator?
// 28. 🧩 What is the difference between `Array.every()` and `Array.some()`?
// 29. 🔎 What is the difference between `Array.find()` and `Array.findIndex()`?
// 30. 🔍 What is the difference between `Array.includes()` and `Array.indexOf()`?
// 31. 📊 What is the difference between `Array.sort()` and `Array.reverse()`?
// 32. 🔗 What is the difference between `Array.join()` and `Array.toString()`?
// 33. 📏 What is the difference between `Array.length` and `Object.keys().length`?
// 34. 🗝️ What is the difference between `Object.keys()` and `Object.values()`?
// 35. 🧊 What is the difference between `Object.freeze()` and `Object.seal()`?
// 36. 🛠️ What is the difference between `Object.create()` and `Object.assign()`?
// 37. 🔄 What is the difference between `Object.getPrototypeOf()` and `Object.setPrototypeOf()`?
// 38. 🗝️ What is the difference between `Object.keys()` and `Object.getOwnPropertyNames()`?
// 39. 🧩 What is the difference between `Object.entries()` and `Object.fromEntries()`?
// 40. 🗝️ What is the difference between `Object.values()` and `Object.entries()`?

// ---------------------------------------------------
// Commonly asked Frontend interview questions.

// ➤ 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 – 𝗦𝗽𝗲𝗲𝗱, 𝗲𝗳𝗳𝗶𝗰𝗶𝗲𝗻𝗰𝘆, 𝗮𝗻𝗱 𝘂𝘀𝗲𝗿 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲
// 1. How do you lazy-load images or components?
// 2. What are critical rendering path and render-blocking resources?
// 3. What is tree-shaking and why does it matter in bundlers like Webpack?
// 4. How do you reduce reflows and repaints in the browser?
// 5. How do you implement debouncing and throttling in JS?
// 6. What causes Cumulative Layout Shift (CLS), and how do you fix it?
// 7. How do you optimize font loading?
// 8. How do you analyze performance using Chrome DevTools?
// 9. What’s the impact of large DOM trees?
// 10. How do you use code-splitting in large React apps?

// ➤ 𝗔𝗰𝗰𝗲𝘀𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝘆 (𝗮𝟭𝟭𝘆)
// 1. What are ARIA roles and when should you use them?
// 2. How do you manage keyboard navigation for custom components?
// 3. What’s the role of tabindex in focus management?
// 4. How do you test accessibility in your applications?
// 5. What’s the difference between live regions and alerts?
// 6. How can headings impact screen reader navigation?
// 7. What is color contrast and why does it matter?
// 8. How do labels and placeholders affect screen reader users?
// 9. What are some tools used for accessibility testing (NVDA, axe, Lighthouse)?
// 10. How do you ensure a modal is accessible?

// ➤ 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁
// 1. What is the Document Object Model (DOM), and how does JavaScript interact with it?
// 2. What are closures in JavaScript, and how do they work?
// 3. What is the this keyword in JavaScript, and how does it behave in different contexts?
// 4. What is a JavaScript promise, and how does it handle asynchronous code?
// 5. What is the event loop, and how does JavaScript handle asynchronous operations?
// 6. What is hoisting in JavaScript, and how does it work?
// 7. What are JavaScript data types, and how do you check the type of a variable?
// 8. What is the difference between null and undefined in JavaScript?
// 9. What is a callback function, and how is it used?
// 10. What is bind(), call(), and apply() in JavaScript, and when do you use them?
// 11. What is the difference between setTimeout() and setInterval()?
// 12. How do JavaScript promises work, and what is the then() method?
// 13. What is async/await, and how does it simplify asynchronous code in JavaScript?
// 14. What are the advantages of using async functions over callbacks?
// 15. What are JavaScript modules, and how do you import/export them?
// 16. What are higher-order functions in JavaScript, and can you provide an example?
// 17. What is destructuring in JavaScript, and how is it useful?
// 18. What are template literals in JavaScript, and how do they work?
// 19. How does the spread operator work in JavaScript?
// 20. What is the rest parameter in JavaScript, and how does it differ from the arguments object?
// 21. How do you prevent default actions and stop event propagation in JavaScript?
// 22. What is the prototype chain in JavaScript, and how does inheritance work?
// 23. How do you clone an object or array in JavaScript?

// ------------------------------------------------------------------

// Node.js Interview Preparation hashtag#part7 !!

// What is Express.js?
// Express.js is a minimal and flexible Node.js web application framework that simplifies the creation of web servers and APIs.

// What are the main features of Express.js?
// Routing
// Middleware support
// Template engines integration
// HTTP utility methods
// Quick API creation

// How do you create a basic Express.js server?
// You create a basic Express server by requiring the express module, creating an app instance, and defining routes for handling HTTP requests.

// What is middleware in Express.js?
// Middleware in Express.js refers to functions that have access to the request, response, and the next function in the application’s request-response cycle. Middleware can modify the request/response or end the request-response cycle.

// How do you handle route parameters in Express.js?
// Route parameters are used to capture values in the URL path. You can access them via req.params.

// What is the role of next() in Express.js?
// The next() function is used to pass control to the next middleware function in the stack. If no middleware function is defined after, it passes control to the route handler.

// How do you serve static files in Express.js?
// You can serve static files using express.static() middleware, which specifies the folder containing static files like images, stylesheets, and JavaScript.

// How do you handle POST data in Express.js?
// Use express.json() or express.urlencoded() middleware to parse JSON or URL-encoded data sent in the body of a POST request.

// What is routing in Express.js?
// Routing refers to defining how the application should respond to client requests to specific endpoints (URLs) and HTTP methods (GET, POST, etc.).
