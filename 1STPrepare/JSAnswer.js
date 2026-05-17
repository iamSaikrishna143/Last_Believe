Here are clear interview-ready answers:

---

### 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language mainly used to create interactive and dynamic web applications.

It runs in the browser (like Chrome, Firefox) and also on servers using environments like Node.js.
It is used for:

* Web development (frontend)
* Backend development
* Mobile apps (React Native)
* Game development

---

### 2. Difference between JavaScript and TypeScript

TypeScript is a superset of JavaScript.

| Feature        | JavaScript      | TypeScript                   |
| -------------- | --------------- | ---------------------------- |
| Typing         | Dynamic         | Static (optional)            |
| Compilation    | No compile step | Needs compilation to JS      |
| Error Checking | Runtime         | Compile-time                 |
| Scalability    | Medium          | High (better for large apps) |
| Learning Curve | Easy            | Slightly complex             |

👉 TypeScript helps catch errors early during development.

---

### 3. What are the data types in JavaScript?

JavaScript has two main categories:

#### Primitive types:

* String → `"hello"`
* Number → `10, 10.5`
* Boolean → `true/false`
* Undefined → variable declared but not assigned
* Null → intentional empty value
* BigInt → large integers
* Symbol → unique identifiers

#### Non-primitive types:

* Object → `{name: "Sai"}`
* Array → `[1, 2, 3]`
* Function → `function() {}`

---

### 4. Difference between null and undefined

| Feature | undefined                          | null                    |
| ------- | ---------------------------------- | ----------------------- |
| Meaning | Variable declared but not assigned | Explicitly empty value  |
| Type    | undefined                          | object (historical bug) |
| Usage   | Default state                      | Assigned intentionally  |
| Example | `let a;`                           | `let a = null;`         |

👉 In short:

* `undefined` = not set yet
* `null` = intentionally empty

---

### 5. Difference between let, const, and var

| Feature    | var                            | let                      | const                    |
| ---------- | ------------------------------ | ------------------------ | ------------------------ |
| Scope      | Function scoped                | Block scoped             | Block scoped             |
| Re-declare | Yes                            | No                       | No                       |
| Re-assign  | Yes                            | Yes                      | No                       |
| Hoisting   | Yes (initialized as undefined) | Yes (temporal dead zone) | Yes (temporal dead zone) |

#### Example:

```js
var a = 10;
let b = 20;
const c = 30;
```

👉 Best practice:

* Use `const` by default
* Use `let` when value changes
* Avoid `var`

---



Here are clear, interview-ready explanations for questions 6–10:

---

### 6. What is Hoisting in JavaScript?

JavaScript hoisting is a behavior where **variable and function declarations are moved to the top of their scope during the compilation phase** (before code execution).

#### Example:

```js
console.log(a); // undefined
var a = 10;
```

Internally interpreted like:

```js
var a;
console.log(a);
a = 10;
```

#### Key points:

* `var` is hoisted and initialized as `undefined`
* `let` and `const` are hoisted but **not initialized**
* Function declarations are fully hoisted

---

### 7. What is Temporal Dead Zone (TDZ)?

The Temporal Dead Zone is the time between:

* entering scope
* and variable initialization

During this period, variables declared with `let` and `const` **cannot be accessed**.

#### Example:

```js
console.log(a); // ReferenceError
let a = 10;
```

#### Key points:

* Applies to `let` and `const`
* Exists until the variable is declared and initialized
* Helps prevent accidental usage before declaration

---

### 8. Difference between `==` and `===`

| Feature       | `==` (loose equality)  | `===` (strict equality) |
| ------------- | ---------------------- | ----------------------- |
| Type checking | No                     | Yes                     |
| Conversion    | Performs type coercion | No conversion           |
| Safety        | Less safe              | More safe               |

#### Example:

```js
5 == "5"   // true
5 === "5"  // false
```

👉 Best practice: Always use `===`

---

### 9. What are Truthy and Falsy values?

In JavaScript, values are treated as **true or false in conditions**.

#### Falsy values (only 8):

* `false`
* `0`
* `-0`
* `""` (empty string)
* `null`
* `undefined`
* `NaN`
* `BigInt 0n`

#### Truthy values:

Everything else is truthy:

```js
"hello"
1
[]
{}
"0"
```

#### Example:

```js
if ("hello") {
  console.log("Runs because it's truthy");
}
```

---

### 10. What is Type Coercion?

Type coercion is when JavaScript **automatically converts one data type into another** during operations.

#### Example:

```js
"5" + 1   // "51" (string concatenation)
"5" - 1   // 4 (string converted to number)
```

#### Types:

1. **Implicit coercion** (automatic)

```js
"5" * 2 // 10
```

2. **Explicit coercion** (manual)

```js
Number("5") // 5
String(10)   // "10"
```

---





Here are clear interview-ready answers for questions 11–15:

---

### 11. What is NaN?

JavaScript `NaN` means **"Not a Number"**.

It represents an invalid number result.

#### Example:

```js
console.log(0 / 0); // NaN
console.log("abc" * 2); // NaN
```

#### Key points:

* Type of NaN is `number`

```js
typeof NaN; // "number"
```

* NaN is not equal to itself:

```js
NaN === NaN // false
```

👉 Use `isNaN()` or `Number.isNaN()` to check it.

---

### 12. Difference between Primitive and Reference Data Types

| Feature       | Primitive Types                          | Reference Types                      |
| ------------- | ---------------------------------------- | ------------------------------------ |
| Storage       | Stored directly                          | Stored as reference (memory address) |
| Mutability    | Immutable                                | Mutable                              |
| Copy behavior | Value copy                               | Reference copy                       |
| Examples      | string, number, boolean, null, undefined | object, array, function              |

#### Example:

```js
// Primitive
let a = 10;
let b = a;
b = 20;
console.log(a); // 10

// Reference
let obj1 = { name: "Sai" };
let obj2 = obj1;
obj2.name = "Krishna";
console.log(obj1.name); // "Krishna"
```

---

### 13. What is typeof operator?

`typeof` is used to **check the data type of a variable or value**.

#### Example:

```js
typeof 10;           // "number"
typeof "hello";      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof {};           // "object"
typeof function(){}; // "function"
```

#### Important:

```js
typeof null; // "object" (known JavaScript bug)
```

---

### 14. What is Spread Operator?

The spread operator `...` is used to **expand elements of an array or object**.

#### Array example:

```js
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); // [1,2,3,4,5]
```

#### Object example:

```js
let obj = { name: "Sai" };
let newObj = { ...obj, age: 25 };
```

👉 Used for:

* Copying arrays/objects
* Merging data
* Avoiding mutation

---

### 15. What is Rest Operator?

The rest operator `...` is used to **collect multiple values into a single array**.

#### Example in function:

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4)); // 10
```

#### Example in destructuring:

```js
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3,4,5]
```

👉 Key difference:

* Spread → expands values
* Rest → collects values

---




Here are clear, interview-ready explanations for questions 16–20:

---

### 16. Difference between Shallow Copy and Deep Copy

JavaScript objects can be copied in two ways:

#### 🔹 Shallow Copy

A shallow copy copies only the first level. Nested objects are still referenced.

```js
let obj1 = { name: "Sai", address: { city: "Hyd" } };
let obj2 = { ...obj1 };

obj2.address.city = "Delhi";

console.log(obj1.address.city); // "Delhi"
```

👉 Nested data is shared (reference copy).

---

#### 🔹 Deep Copy

A deep copy copies everything, including nested objects.

```js
let obj1 = { name: "Sai", address: { city: "Hyd" } };
let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Delhi";

console.log(obj1.address.city); // "Hyd"
```

👉 Completely independent copy.

---

### 17. What is Destructuring?

Destructuring is a way to **extract values from arrays or objects into variables** easily.

#### 🔹 Object destructuring:

```js
let user = { name: "Sai", age: 25 };

let { name, age } = user;
console.log(name, age);
```

#### 🔹 Array destructuring:

```js
let arr = [1, 2, 3];

let [a, b] = arr;
console.log(a, b);
```

👉 Makes code cleaner and readable.

---

### 18. What are Template Literals?

Template literals use backticks `` ` `` to create strings with:

* variables
* multi-line text
* expressions

#### Example:

```js
let name = "Sai";

let message = `Hello ${name}`;
console.log(message);
```

#### Multi-line:

```js
let text = `This is line 1
This is line 2`;
```

👉 Advantages:

* Easier string interpolation
* No need for `+` concatenation

---

### 19. What is Optional Chaining?

Optional chaining `?.` is used to safely access nested properties without causing errors.

#### Example:

```js
let user = { profile: { name: "Sai" } };

console.log(user.profile?.name); // "Sai"
console.log(user.address?.city); // undefined (no error)
```

👉 Prevents runtime errors like:
`Cannot read property of undefined`

---

### 20. What is Nullish Coalescing Operator?

The nullish coalescing operator `??` returns the right-hand value only when the left-hand side is `null` or `undefined`.

#### Example:

```js
let name = null;

console.log(name ?? "Default Name"); // "Default Name"
```

#### Difference from `||`:

```js
let value = 0;

console.log(value || 10); // 10 (wrong in some cases)
console.log(value ?? 10);  // 0 (correct)
```

👉 Use `??` when you want to allow `0`, `false`, or `""` as valid values.

---





Here are clear interview-ready answers for questions 21–25:

---

### 21. What is Function Declaration?

JavaScript function declaration is a way to define a function using the `function` keyword with a name.

#### Example:

```js
function greet() {
  return "Hello";
}

console.log(greet());
```

#### Key points:

* Hoisted (can be called before declaration)
* Has a function name
* Easy to reuse

---

### 22. What is Function Expression?

A function expression is when a function is assigned to a variable.

#### Example:

```js
const greet = function () {
  return "Hello";
};

console.log(greet());
```

#### Key points:

* Not fully hoisted (depends on `var`, `let`, `const`)
* Can be anonymous or named
* More flexible

---

### 23. Difference between Normal Function and Arrow Function

| Feature          | Normal Function | Arrow Function                 |
| ---------------- | --------------- | ------------------------------ |
| Syntax           | `function() {}` | `() => {}`                     |
| `this`           | Dynamic         | Lexical (inherits from parent) |
| Hoisting         | Yes             | No                             |
| Constructor      | Can be used     | Cannot be used                 |
| Arguments object | Available       | Not available                  |

#### Example:

```js
function normal() {
  console.log(this);
}

const arrow = () => {
  console.log(this);
};
```

👉 Key point: Arrow functions are best for callbacks, not object methods or constructors.

---

### 24. What is Callback Function?

A callback function is a function passed as an argument to another function and executed later.

#### Example:

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Sai", function () {
  console.log("Callback executed");
});
```

#### Key points:

* Used in async operations
* Helps in event handling, API calls
* Improves code flexibility

---

### 25. What is Higher-Order Function?

A higher-order function is a function that:

* Takes another function as an argument OR
* Returns a function

#### Example 1 (takes function as argument):

```js
function process(callback) {
  callback();
}
```

#### Example 2 (returns function):

```js
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

console.log(multiply(2)(3)); // 6
```

#### Common examples in JavaScript:

* `map()`
* `filter()`
* `reduce()`

---




    Here are clear interview-ready answers for questions 26–30:

---

### 26. What is a Pure Function?

JavaScript a pure function is a function that:

1. Always returns the same output for the same input
2. Does not cause side effects (does not modify external variables)

#### Example:

```js id="p1"
function add(a, b) {
  return a + b;
}
```

#### Impure example:

```js id="p2"
let total = 0;

function add(a) {
  total += a; // modifies external state
}
```

👉 Pure functions are predictable and easier to test.

---

### 27. What is an Anonymous Function?

An anonymous function is a function **without a name**.

#### Example:

```js id="a1"
const greet = function () {
  return "Hello";
};
```

#### Common usage:

* Callbacks
* Event handlers
* Higher-order functions

👉 Key point: No function name is defined.

---

### 28. What is IIFE?

IIFE = Immediately Invoked Function Expression
It is a function that runs immediately after it is defined.

#### Example:

```js id="i1"
(function () {
  console.log("IIFE executed");
})();
```

#### Arrow IIFE:

```js id="i2"
(() => {
  console.log("Arrow IIFE");
})();
```

#### Key points:

* Runs once immediately
* Creates private scope
* Avoids polluting global scope

---

### 29. What is Closure?

A closure is when a function **remembers variables from its outer scope even after the outer function has finished executing**.

#### Example:

```js id="c1"
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

#### Key points:

* Inner function retains access to outer variables
* Used for data privacy and state management

👉 Very important interview concept.

---

### 30. What is Currying?

Currying is a technique where a function takes arguments **one at a time instead of all at once**.

#### Example:

```js id="cr1"
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6
```

#### Arrow version:

```js id="cr2"
const add = a => b => c => a + b + c;
```

#### Key points:

* Breaks function into smaller functions
* Used in functional programming
* Improves code reusability

---



Here are clear interview-ready answers for questions 31–35:

---

### 31. What is Lexical Scope?

JavaScript lexical scope means that a function’s scope is determined by **where it is written in the code (not where it is called)**.

#### Example:

```js id="l1"
function outer() {
  let name = "Sai";

  function inner() {
    console.log(name); // accessible
  }

  inner();
}
outer();
```

#### Key points:

* Inner functions can access outer variables
* Scope is defined at **compile time**
* Used in closures

---

### 32. Difference between Parameters and Arguments

| Feature    | Parameters                       | Arguments                        |
| ---------- | -------------------------------- | -------------------------------- |
| Definition | Variables in function definition | Actual values passed to function |
| Location   | In function declaration          | In function call                 |
| Example    | `function add(a, b)`             | `add(2, 3)`                      |

#### Example:

```js id="p1"
function add(a, b) { // parameters
  return a + b;
}

add(2, 3); // arguments
```

---

### 33. What is Default Parameter?

Default parameters allow you to assign **default values** to function parameters.

#### Example:

```js id="d1"
function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet()); // Hello Guest
```

#### Key points:

* Used when argument is missing
* Helps avoid undefined values

---

### 34. What is Recursion?

Recursion is when a function **calls itself until a base condition is met**.

#### Example:

```js id="r1"
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

#### Key points:

* Must have a base condition
* Used in tree, graph, and mathematical problems
* Can cause stack overflow if not handled properly

---

### 35. What is Memoization?

Memoization is an optimization technique where we **store results of expensive function calls and reuse them when the same input occurs again**.

#### Example:

```js id="m1"
function memoize(fn) {
  let cache = {};

  return function (n) {
    if (cache[n]) {
      return cache[n];
    }
    let result = fn(n);
    cache[n] = result;
    return result;
  };
}

function slowSquare(n) {
  return n * n;
}

const optimizedSquare = memoize(slowSquare);

console.log(optimizedSquare(5)); // calculated
console.log(optimizedSquare(5)); // from cache
```

#### Key points:

* Improves performance
* Uses caching
* Common in dynamic programming

---





Here are clear interview-ready answers for questions 36–40:

---

### 36. What is Debounce?

JavaScript debounce is a technique used to **limit the number of function calls** by delaying execution until a certain time has passed after the last event.

#### Example use cases:

* Search bar API calls
* Window resize events

#### Example:

```js id="d1"
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

👉 Function runs only after user stops triggering events.

---

### 37. What is Throttle?

Throttle ensures a function is executed **at most once in a specified time interval**, no matter how many times it is triggered.

#### Example use cases:

* Scroll events
* Button clicks spam prevention

#### Example:

```js id="t1"
function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

👉 Function runs at regular intervals.

---

### 38. What is call()?

`call()` is used to **invoke a function with a specific `this` value** and arguments passed individually.

#### Example:

```js id="c1"
function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Sai" };

greet.call(user, "Hyderabad");
```

👉 Calls function immediately.

---

### 39. What is apply()?

`apply()` is similar to `call()`, but arguments are passed as an array.

#### Example:

```js id="a1"
function greet(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

const user = { name: "Sai" };

greet.apply(user, ["Hyderabad", "India"]);
```

👉 Difference from `call()`:

* call → comma-separated arguments
* apply → array of arguments

---

### 40. What is bind()?

`bind()` creates a **new function with a fixed `this` value**, but does NOT execute it immediately.

#### Example:

```js id="b1"
function greet() {
  console.log(this.name);
}

const user = { name: "Sai" };

const boundFunc = greet.bind(user);
boundFunc();
```

👉 Key points:

* Returns a new function
* Does not execute immediately
* Used in event handlers and callbacks

---

### Quick Summary:

| Method  | Executes immediately | Argument format                   |
| ------- | -------------------- | --------------------------------- |
| call()  | Yes                  | comma-separated                   |
| apply() | Yes                  | array                             |
| bind()  | No                   | comma-separated (later execution) |

---




Here are clear interview-ready answers for questions 41–45:

---

### 41. What is Scope in JavaScript?

JavaScript scope defines **where variables and functions are accessible in your code**.

In simple terms:
👉 Scope decides the visibility of variables.

#### Example:

```js
let name = "Sai";

function show() {
  console.log(name); // accessible
}
show();
```

---

### 42. Difference between Global Scope and Local Scope

| Feature          | Global Scope          | Local Scope                |
| ---------------- | --------------------- | -------------------------- |
| Access           | Accessible everywhere | Only inside function/block |
| Lifetime         | Until program ends    | Until function execution   |
| Declared outside | Yes                   | Inside function/block      |

#### Example:

```js
let globalVar = "I am global";

function test() {
  let localVar = "I am local";
  console.log(globalVar); // accessible
}

test();
console.log(localVar); // Error
```

---

### 43. What is Block Scope?

Block scope means variables are only accessible inside `{ }` (block).

It applies to:

* `let`
* `const`

#### Example:

```js
{
  let a = 10;
  const b = 20;
}

console.log(a); // Error
```

👉 `var` is NOT block scoped (it is function scoped)

---

### 44. What is Execution Context?

Execution context is the environment where JavaScript code is executed.

It contains:

* Variables
* Functions
* `this` keyword
* Scope chain

#### Types:

1. Global Execution Context
2. Function Execution Context

#### Phases:

* Creation phase (memory allocation)
* Execution phase (code runs)

👉 Every function call creates a new execution context.

---

### 45. What is Call Stack?

Call stack is a data structure that keeps track of function execution order (LIFO - Last In First Out).

#### Example:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("Hello");
}

a();
```

#### Flow:

```
Global → a → b → c → backtrack
```

👉 Key points:

* Manages execution order
* Stores execution contexts
* Overflow error occurs if too many recursive calls

---

### Quick Summary:

* Scope → where variables are accessible
* Execution Context → environment for running code
* Call Stack → tracks function execution order

---




Here are clear, interview-ready answers for questions 46–50:

---

### 46. What is Event Loop?

JavaScript the event loop is a mechanism that allows JavaScript to handle **asynchronous operations** even though it is single-threaded.

👉 It continuously checks:

* Call Stack
* Callback Queue
* Microtask Queue

#### Simple idea:

> Event loop moves tasks from queues to the call stack when it is empty.

---

### 47. What is Callback Queue?

The callback queue (also called task queue) stores **macrotasks** waiting to be executed.

#### Examples of macrotasks:

* `setTimeout`
* `setInterval`
* DOM events

#### Flow:

1. Task completes
2. Goes to callback queue
3. Event loop pushes it to call stack when free

---

### 48. What is Microtask Queue?

Microtask queue has **higher priority than callback queue**.

#### Examples:

* Promises (`.then`, `.catch`, `.finally`)
* MutationObserver

#### Key rule:

👉 Microtasks execute **before** callback queue tasks.

#### Example:

```js id="m1"
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

#### Output:

```
Start
End
Promise
Timeout
```

---

### 49. Difference between Synchronous and Asynchronous Code

| Feature   | Synchronous         | Asynchronous          |
| --------- | ------------------- | --------------------- |
| Execution | Line by line        | Non-blocking          |
| Blocking  | Yes                 | No                    |
| Speed     | Slower for tasks    | Faster for I/O tasks  |
| Example   | loops, calculations | API calls, setTimeout |

#### Example:

```js id="s1"
console.log("1");
console.log("2");
console.log("3");
```

```js id="a1"
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
```

---

### 50. What is Single-Threaded Behavior in JavaScript?

JavaScript is single-threaded, meaning it can execute **only one task at a time** using a single call stack.

#### But how does it handle async tasks?

👉 Using:

* Event Loop
* Callback Queue
* Microtask Queue

#### Key points:

* One call stack only
* No parallel execution in main thread
* Async operations handled via browser/Web APIs

---

### Quick Summary:

* Event Loop → manages async execution
* Callback Queue → macrotasks (setTimeout, events)
* Microtask Queue → Promises (higher priority)
* JS is single-threaded but behaves asynchronously using event loop

---




Here are clear interview-ready answers for questions 51–55:

---

### 51. How JavaScript Executes Code Internally?

JavaScript executes code using the **JavaScript Engine** (like V8 in Chrome).

#### Execution steps:

1. **Parsing phase**

   * Code is read and converted into Abstract Syntax Tree (AST)

2. **Compilation phase**

   * JS is converted into bytecode / machine code (JIT compilation)

3. **Execution phase**

   * Code runs using:

     * Call Stack
     * Memory Heap

#### Internal components:

* Call Stack → executes functions
* Heap → stores objects
* Event Loop → handles async tasks

---

### 52. What is Garbage Collection?

Garbage collection is the process of **automatically removing unused memory** in JavaScript.

👉 JavaScript engine frees memory of objects that are no longer referenced.

#### Example:

```js id="g1"
let obj = { name: "Sai" };
obj = null; // memory becomes eligible for garbage collection
```

#### Key point:

* JS uses **Mark and Sweep algorithm**
* Developer does NOT manually free memory

---

### 53. What is Memory Leak?

A memory leak occurs when memory is **not properly released even when it is no longer needed**.

#### Causes:

* Unused global variables
* Forgotten timers (`setInterval`)
* Detached DOM elements
* Unremoved event listeners

#### Example:

```js id="m1"
let data = [];

function leak() {
  data.push(new Array(1000000));
}
```

👉 Over time, memory keeps increasing.

---

### 54. What is Stack Memory and Heap Memory?

| Feature | Stack Memory                     | Heap Memory                |
| ------- | -------------------------------- | -------------------------- |
| Stores  | Primitive values, function calls | Objects, arrays, functions |
| Size    | Small & fixed                    | Large & dynamic            |
| Speed   | Fast                             | Slower                     |
| Access  | LIFO (Call Stack)                | Reference-based            |

#### Example:

```js id="h1"
let a = 10; // stack
let obj = { name: "Sai" }; // heap
```

👉 Stack → execution
👉 Heap → data storage

---

### 55. What is Strict Mode?

Strict mode is a feature that makes JavaScript run in a **more secure and error-checking way**.

#### Enable strict mode:

```js id="s1"
"use strict";
```

#### Benefits:

* Throws errors for unsafe actions
* Prevents accidental global variables
* Disallows duplicate parameter names
* Makes debugging easier

#### Example:

```js id="s2"
"use strict";

x = 10; // Error (x is not declared)
```

---

### Quick Summary:

* Execution → parsing → compilation → execution
* Garbage collection → automatic memory cleanup
* Memory leak → unused memory not released
* Stack vs Heap → execution vs storage
* Strict mode → safer JavaScript

---




Here are clear interview-ready answers for questions 56–60:

---

### 56. What is Object in JavaScript?

JavaScript an object is a **non-primitive data type** used to store data in **key–value pairs**.

#### Example:

```js id="o1"
let user = {
  name: "Sai",
  age: 25,
  isDeveloper: true
};
```

#### Key points:

* Stores multiple values
* Keys are strings (or symbols)
* Values can be any data type

👉 Used to represent real-world entities.

---

### 57. Difference between Object and Array

| Feature   | Object          | Array         |
| --------- | --------------- | ------------- |
| Structure | Key–value pairs | Indexed list  |
| Access    | `obj.key`       | `arr[index]`  |
| Order     | Not guaranteed  | Ordered       |
| Use case  | Structured data | List of items |

#### Example:

```js id="a1"
// Object
let user = { name: "Sai", age: 25 };

// Array
let numbers = [10, 20, 30];
```

👉 Object = named data
👉 Array = ordered data

---

### 58. How to Clone an Object?

Cloning means creating a **copy of an object without affecting original**.

#### 1. Shallow copy methods:

```js id="c1"
let obj2 = { ...obj };
let obj3 = Object.assign({}, obj);
```

#### 2. Deep copy:

```js id="c2"
let deepCopy = JSON.parse(JSON.stringify(obj));
```

#### Example:

```js id="c3"
let obj = { name: "Sai", age: 25 };
let copy = { ...obj };
```

👉 Important:

* Spread / assign → shallow copy
* JSON method → deep copy (limited cases)

---

### 59. What is Object.freeze()?

`Object.freeze()` makes an object **completely immutable**.

#### Example:

```js id="f1"
let user = { name: "Sai" };

Object.freeze(user);

user.name = "Krishna"; // ignored
console.log(user.name); // "Sai"
```

#### Key points:

* Cannot add new properties
* Cannot update existing properties
* Cannot delete properties

👉 Fully locked object

---

### 60. What is Object.seal()?

`Object.seal()` allows modification of existing properties but prevents adding or deleting properties.

#### Example:

```js id="s1"
let user = { name: "Sai" };

Object.seal(user);

user.name = "Krishna"; // allowed
user.age = 25; // not allowed
delete user.name; // not allowed

console.log(user);
```

#### Key points:

* Can update existing values
* Cannot add or delete properties
* Object structure is fixed

---

### Quick Summary:

| Method        | Add properties | Delete properties | Modify values |
| ------------- | -------------- | ----------------- | ------------- |
| freeze        | ❌              | ❌                 | ❌             |
| seal          | ❌              | ❌                 | ✅             |
| normal object | ✅              | ✅                 | ✅             |

---




Here are clear interview-ready answers for questions 61–65:

---

### 61. Difference between map, filter, and reduce

JavaScript array methods are commonly used for data transformation.

| Method   | Purpose                            | Return Type  | Key Use                   |
| -------- | ---------------------------------- | ------------ | ------------------------- |
| map()    | Transform each element             | New array    | Modify data               |
| filter() | Select elements based on condition | New array    | Remove unwanted items     |
| reduce() | Reduce array to single value       | Single value | Sum, product, aggregation |

#### Examples:

```js id="m1"
let nums = [1, 2, 3];

nums.map(n => n * 2);      // [2, 4, 6]
nums.filter(n => n > 1);   // [2, 3]
nums.reduce((a, b) => a + b); // 6
```

---

### 62. Difference between forEach and map

| Feature           | forEach   | map            |
| ----------------- | --------- | -------------- |
| Return value      | undefined | New array      |
| Purpose           | Looping   | Transformation |
| Chainable         | ❌         | ✅              |
| Modifies original | Possible  | No             |

#### Example:

```js id="f1"
let arr = [1, 2, 3];

arr.forEach(n => console.log(n)); // just prints

let result = arr.map(n => n * 2); // returns new array
```

👉 Use `map()` when you need a new array.

---

### 63. What is find() method?

`find()` returns the **first element that matches a condition**.

#### Example:

```js id="fd1"
let nums = [10, 20, 30, 40];

let result = nums.find(n => n > 15);
console.log(result); // 20
```

#### Key points:

* Returns single element
* Returns `undefined` if not found
* Stops after first match

---

### 64. What is some() and every()?

#### 🔹 some()

Returns `true` if **at least one element** satisfies condition.

```js id="s1"
let nums = [1, 2, 3];

nums.some(n => n > 2); // true
```

#### 🔹 every()

Returns `true` if **all elements** satisfy condition.

```js id="e1"
nums.every(n => n > 0); // true
```

#### Key difference:

| Method  | Condition         |
| ------- | ----------------- |
| some()  | At least one true |
| every() | All must be true  |

---

### 65. What is Array Destructuring?

Array destructuring is a way to **extract values from arrays into variables**.

#### Example:

```js id="d1"
let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
```

#### Skipping values:

```js id="d2"
let [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3
```

#### Using rest:

```js id="d3"
let [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2,3,4]
```

---

### Quick Summary:

* map → transform array
* filter → select items
* reduce → single output
* forEach → just loop
* find → first match
* some → any true
* every → all true
* destructuring → extract values easily

---





Here are clear interview-ready answers for questions 66–70:

---

### 66. What is Array Flattening?

JavaScript array flattening means converting a **nested array into a single-level array**.

#### Example:

```js id="f1"
let arr = [1, [2, [3, 4]], 5];

console.log(arr.flat(2));
// [1, 2, 3, 4, 5]
```

#### Key points:

* Uses `flat(depth)`
* `Infinity` can be used for deep nesting:

```js id="f2"
arr.flat(Infinity);
```

---

### 67. Difference between slice and splice

| Feature                | slice()            | splice()            |
| ---------------------- | ------------------ | ------------------- |
| Purpose                | Extract elements   | Add/remove elements |
| Mutates original array | ❌ No               | ✅ Yes               |
| Return value           | New array          | Removed elements    |
| Use case               | Copy part of array | Modify array        |

#### Example:

```js id="s1"
let arr = [1, 2, 3, 4];

arr.slice(1, 3); // [2, 3] (original unchanged)

arr.splice(1, 2); // removes [2, 3]
```

---

### 68. Difference between push and concat

| Feature                | push()       | concat()     |
| ---------------------- | ------------ | ------------ |
| Mutates original array | ✅ Yes        | ❌ No         |
| Return value           | new length   | new array    |
| Use case               | Add elements | Merge arrays |

#### Example:

```js id="p1"
let arr = [1, 2];

arr.push(3); // modifies original → [1,2,3]

let newArr = arr.concat([4, 5]); // returns new array
```

👉 Best practice: use `concat` for immutability.

---

### 69. What is sort() method?

`sort()` is used to **sort array elements**.

#### Example:

```js id="so1"
let arr = [3, 1, 4, 2];

arr.sort();
console.log(arr); // [1,2,3,4]
```

#### Important (string sorting issue):

```js id="so2"
let nums = [10, 2, 30];

nums.sort(); // wrong result: [10, 2, 30]
```

#### Correct numeric sort:

```js id="so3"
nums.sort((a, b) => a - b);
```

👉 Key points:

* Sorts in-place (mutates array)
* Converts elements to strings by default

---

### 70. What is Set?

A `Set` is a collection of **unique values** (no duplicates allowed).

#### Example:

```js id="se1"
let set = new Set([1, 2, 2, 3]);

console.log(set); // {1,2,3}
```

#### Key methods:

```js id="se2"
set.add(4);
set.delete(2);
set.has(3); // true
set.size;
```

#### Key points:

* Stores only unique values
* Maintains insertion order
* Works with primitives and objects

---

### Quick Summary:

* flatten → convert nested array to flat
* slice → copy, no change
* splice → modify array
* push → modifies original
* concat → creates new array
* sort → sorts array (mutates)
* Set → stores unique values

---





Here are clear interview-ready answers for questions 71–75:

---

### 71. What is Map?

JavaScript `Map` is a collection of **key-value pairs** where keys can be of **any data type** (object, function, primitive, etc.).

#### Example:

```js id="m1"
let map = new Map();

map.set("name", "Sai");
map.set(1, "One");
map.set(true, "Boolean");

console.log(map.get("name")); // Sai
```

#### Key points:

* Maintains insertion order
* Keys can be any type
* Has `.set()`, `.get()`, `.has()`, `.delete()`

---

### 72. Difference between Map and Object

| Feature     | Map                   | Object                          |
| ----------- | --------------------- | ------------------------------- |
| Key types   | Any type              | String or Symbol only           |
| Order       | Maintains order       | Not guaranteed                  |
| Size        | `map.size`            | Manual (`Object.keys().length`) |
| Performance | Better for large data | Slower in large data            |
| Iteration   | Directly iterable     | Needs methods                   |

#### Example:

```js id="o1"
let obj = { 1: "one" };
let map = new Map([[1, "one"]]);
```

👉 Map is more powerful for dynamic data handling.

---

### 73. What is WeakMap?

A WeakMap is similar to Map, but:

* Keys must be **objects only**
* Keys are **weakly referenced** (garbage collected if no reference exists)

#### Example:

```js id="w1"
let wm = new WeakMap();

let obj = { name: "Sai" };

wm.set(obj, "Developer");
```

#### Key points:

* No iteration (`forEach` not allowed)
* Used for memory-sensitive data
* Helps avoid memory leaks

---

### 74. What is WeakSet?

A WeakSet stores **only objects** and holds them weakly (garbage collectible).

#### Example:

```js id="ws1"
let ws = new WeakSet();

let obj = { id: 1 };

ws.add(obj);
console.log(ws.has(obj)); // true
```

#### Key points:

* Only objects allowed
* Not iterable
* Used for tracking object existence safely

---

### 75. How to Remove Duplicates from Array?

There are multiple ways:

---

#### 1. Using Set (Best way)

```js id="d1"
let arr = [1, 2, 2, 3, 4, 4];

let unique = [...new Set(arr)];

console.log(unique); // [1,2,3,4]
```

---

#### 2. Using filter()

```js id="d2"
let arr = [1, 2, 2, 3];

let unique = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
```

---

#### 3. Using reduce()

```js id="d3"
let arr = [1, 2, 2, 3];

let unique = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);
```

---

### Quick Summary:

* Map → key-value store with any key type
* Object → string/symbol keys only
* WeakMap/WeakSet → weak references (memory safe)
* Remove duplicates → `new Set(arr)` (best method)

---





Here are clear interview-ready answers for questions 76–80:

---

### 76. What is DOM?

JavaScript DOM (Document Object Model) is a **tree-like representation of a web page** created by the browser.

It allows JavaScript to:

* Access HTML elements
* Modify content/styles
* Handle events

#### Example:

```html
<h1 id="title">Hello</h1>
```

```js id="d1"
document.getElementById("title").innerText = "Hi";
```

👉 DOM = bridge between HTML and JavaScript

---

### 77. How to Select Elements in DOM?

Common methods:

#### 1. By ID:

```js id="s1"
document.getElementById("idName");
```

#### 2. By class:

```js id="s2"
document.getElementsByClassName("className");
```

#### 3. By tag:

```js id="s3"
document.getElementsByTagName("div");
```

#### 4. Query selectors (modern way):

```js id="s4"
document.querySelector(".class");
document.querySelector("#id");
document.querySelectorAll("div");
```

---

### 78. Difference between getElementById and querySelector

| Feature       | getElementById | querySelector          |
| ------------- | -------------- | ---------------------- |
| Selector type | Only ID        | CSS selectors          |
| Speed         | Faster         | Slightly slower        |
| Return type   | Single element | First matching element |
| Flexibility   | Low            | High                   |

#### Example:

```js id="q1"
document.getElementById("title");
document.querySelector("#title");
```

👉 `querySelector` is more powerful and flexible.

---

### 79. What is Event Bubbling?

Event bubbling is the process where an event **starts from the target element and moves upward to parent elements**.

#### Example:

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

```js id="b1"
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

#### Output when clicking button:

```
Child clicked
Parent clicked
```

👉 Event moves bottom → top

---

### 80. What is Event Capturing?

Event capturing is the opposite of bubbling. The event **starts from the top (window/document) and goes down to the target element**.

#### Example:

```js id="c1"
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  true // capturing phase
);
```

#### Flow:

```
Document → Parent → Child
```

👉 Capturing = top → bottom
👉 Bubbling = bottom → top

---

### Quick Summary:

* DOM → structure of webpage
* Selection → getElementById, querySelector, etc.
* Bubbling → child → parent
* Capturing → parent → child
* querySelector → most flexible method

---





Here are clear interview-ready answers for questions 81–85:

---

### 81. What is Event Delegation?

JavaScript event delegation is a technique where you attach an event listener to a **parent element instead of individual child elements**, and handle events using bubbling.

#### Example:

```html id="e1"
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

```js id="e2"
document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

👉 Benefits:

* Better performance
* Works for dynamically added elements
* Less memory usage

---

### 82. Difference between preventDefault and stopPropagation

| Feature     | preventDefault()                      | stopPropagation()              |
| ----------- | ------------------------------------- | ------------------------------ |
| Purpose     | Stops default browser action          | Stops event bubbling/capturing |
| Effect      | Prevents form submit, link navigation | Stops event flow               |
| Example use | Prevent page reload                   | Prevent parent click trigger   |

#### Example:

```js id="p1"
event.preventDefault(); // stops form submission
event.stopPropagation(); // stops bubbling
```

👉 Simple:

* preventDefault → stops browser action
* stopPropagation → stops event flow

---

### 83. What is localStorage?

Web Storage API localStorage is used to store data in the browser **with no expiration time**.

#### Example:

```js id="l1"
localStorage.setItem("name", "Sai");

console.log(localStorage.getItem("name"));
```

#### Key points:

* Data persists even after refresh
* Stores key-value pairs (strings only)
* Capacity ~5–10MB

---

### 84. Difference between localStorage and sessionStorage

| Feature      | localStorage            | sessionStorage         |
| ------------ | ----------------------- | ---------------------- |
| Lifetime     | Permanent               | Until tab is closed    |
| Scope        | All tabs                | Only current tab       |
| Storage size | ~5–10MB                 | ~5–10MB                |
| Use case     | Login info, preferences | Temporary session data |

#### Example:

```js id="s1"
sessionStorage.setItem("temp", "data");
```

👉 localStorage = long-term
👉 sessionStorage = temporary

---

### 85. What are Cookies?

Cookies are small pieces of data stored in the browser and sent with every HTTP request to the server.

#### Example:

```js id="c1"
document.cookie = "username=Sai";
```

#### Key points:

* Storage size ~4KB
* Can have expiry date
* Sent automatically with requests
* Used for authentication, tracking

#### Types:

* Session cookies (temporary)
* Persistent cookies (with expiry)

---

### Quick Summary:

* Event delegation → parent handles child events
* preventDefault → stops browser action
* stopPropagation → stops event bubbling
* localStorage → permanent browser storage
* sessionStorage → temporary (tab-based)
* cookies → small data sent to server

---




Here are clear interview-ready answers for questions 86–90:

---

### 86. What is BOM?

JavaScript BOM (Browser Object Model) is a collection of objects provided by the browser that allows interaction with the **browser window**.

👉 It is not part of standard JavaScript, but browser-specific.

#### Examples of BOM objects:

* `window`
* `navigator`
* `location`
* `history`
* `screen`

#### Example:

```js id="b1"
alert("Hello");
console.log(window.innerWidth);
```

---

### 87. What is window object?

The `window` object is the **global object in the browser**. It represents the browser window.

#### Key points:

* All global variables and functions belong to `window`
* Entry point of browser environment

#### Example:

```js id="w1"
var name = "Sai";

console.log(window.name); // Sai
```

#### Common methods:

* `alert()`
* `setTimeout()`
* `setInterval()`

---

### 88. What is document object?

The `document` object represents the **web page (DOM)** loaded in the browser.

It is part of the window object:

```js id="d1"
window.document
```

#### Example:

```js id="d2"
document.title = "My Page";
document.body.style.background = "lightblue";
```

#### Key points:

* Used to access and manipulate HTML elements
* Entry point for DOM manipulation

---

### 89. How to create elements dynamically?

We can create HTML elements using `document.createElement()`.

#### Example:

```js id="c1"
let div = document.createElement("div");
div.innerText = "Hello World";

document.body.appendChild(div);
```

#### Steps:

1. Create element
2. Add content/attributes
3. Append to DOM

#### Example with attributes:

```js id="c2"
let btn = document.createElement("button");
btn.innerText = "Click Me";
btn.id = "myBtn";

document.body.appendChild(btn);
```

---

### 90. What is Mutation Observer?

A MutationObserver is a Web API used to **watch changes in the DOM** (like addition, removal, or modification of elements).

#### Example:

```js id="m1"
let observer = new MutationObserver((mutations) => {
  console.log("DOM changed", mutations);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
```

#### Key points:

* Detects DOM changes in real-time
* Used in frameworks and dynamic apps
* Better alternative to deprecated mutation events

---

### Quick Summary:

* BOM → browser-level objects
* window → global browser object
* document → DOM representation
* createElement → dynamic DOM creation
* MutationObserver → watches DOM changes

---



Here are clear interview-ready answers for questions 91–95:

---

### 91. What is Asynchronous Programming?

JavaScript asynchronous programming means executing tasks **without blocking the main thread**, allowing other code to run while waiting for operations like API calls, timers, or file handling.

#### Example:

```js id="a1"
console.log("Start");

setTimeout(() => {
  console.log("Async task");
}, 2000);

console.log("End");
```

#### Output:

```
Start
End
Async task
```

👉 Key point: Non-blocking execution improves performance.

---

### 92. What is Callback Hell?

Callback hell happens when multiple nested callbacks are used, making code **hard to read and maintain**.

#### Example:

```js id="c1"
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      console.log(c);
    });
  });
});
```

#### Problems:

* Difficult to read
* Hard to debug
* Poor maintainability

👉 Also called “Pyramid of Doom”

---

### 93. What is Promise?

A Promise is an object that represents the **result of an asynchronous operation** that may complete in the future.

#### Example:

```js id="p1"
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data fetched");
  } else {
    reject("Error occurred");
  }
});

promise.then(res => console.log(res))
       .catch(err => console.log(err));
```

#### Key points:

* Avoids callback hell
* Handles async operations cleanly
* Has states (pending, fulfilled, rejected)

---

### 94. States of Promise

A Promise has **3 states**:

| State     | Meaning                                |
| --------- | -------------------------------------- |
| Pending   | Initial state, operation not completed |
| Fulfilled | Operation completed successfully       |
| Rejected  | Operation failed                       |

#### Example:

```js id="s1"
new Promise((resolve, reject) => {
  resolve("Success");
});
```

👉 Once settled, state cannot change again.

---

### 95. What is async/await?

JavaScript async/await is a modern way to handle promises in a **synchronous-looking style**.

#### Example:

```js id="as1"
async function fetchData() {
  let result = await fetch("https://api.example.com");
  let data = await result.json();
  console.log(data);
}

fetchData();
```

#### Key points:

* `async` function returns a Promise
* `await` pauses execution until Promise resolves
* Makes code cleaner and readable

---

### Quick Summary:

* Async programming → non-blocking execution
* Callback hell → nested callbacks problem
* Promise → object for async result
* Promise states → pending, fulfilled, rejected
* async/await → cleaner way to handle promises

--



Here are clear interview-ready answers for questions 101–105:

---

### 101. What is Fetch API?

JavaScript Fetch API is a modern browser API used to **make HTTP requests** (GET, POST, etc.) and handle responses asynchronously.

#### Example:

```js id="f1"
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

#### Key points:

* Built-in browser API
* Returns a Promise
* Replaces older `XMLHttpRequest`

---

### 102. Difference between Fetch and Axios

| Feature         | Fetch              | Axios                 |
| --------------- | ------------------ | --------------------- |
| Built-in        | Yes                | No (external library) |
| JSON parsing    | Manual (`.json()`) | Automatic             |
| Error handling  | Needs manual check | Built-in              |
| Request timeout | Not supported      | Supported             |
| Interceptors    | No                 | Yes                   |

#### Example:

```js id="a1"
// Fetch
fetch(url).then(res => res.json());

// Axios
axios.get(url).then(res => console.log(res.data));
```

👉 Axios is easier for large applications.

---

### 103. What is try/catch?

JavaScript try/catch is used for **error handling** in synchronous and asynchronous code.

#### Example:

```js id="t1"
try {
  let data = JSON.parse("invalid json");
} catch (error) {
  console.log("Error:", error.message);
}
```

#### Key points:

* `try` → code that may fail
* `catch` → handles error
* Prevents application crash

---

### 104. How to Handle API Errors?

API errors can be handled using:

* `try/catch` (async/await)
* `.catch()` (Promises)
* Checking HTTP response status

#### Example (async/await):

```js id="e1"
async function getData() {
  try {
    let res = await fetch("https://api.example.com");

    if (!res.ok) {
      throw new Error("HTTP Error: " + res.status);
    }

    let data = await res.json();
    console.log(data);

  } catch (error) {
    console.log("Error:", error.message);
  }
}
```

#### Key points:

* Check `res.ok`
* Handle network + server errors
* Use centralized error handling in real apps

---

### 105. What is AbortController?

AbortController is a Web API used to **cancel ongoing fetch requests**.

#### Example:

```js id="ab1"
let controller = new AbortController();
let signal = controller.signal;

fetch("https://api.example.com/data", { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Cancel request
controller.abort();
```

#### Key points:

* Cancels API requests
* Useful in search input (debounce + cancel previous request)
* Prevents unnecessary network usage

---

### Quick Summary:

* Fetch API → built-in HTTP request tool
* Fetch vs Axios → Axios is more powerful and easier
* try/catch → error handling mechanism
* API error handling → check status + catch errors
* AbortController → cancels fetch requests

---



Here are clear interview-ready answers for questions 106–110:

---

### 106. What are ES6 Features?

JavaScript ES6 (ECMAScript 2015) introduced modern JavaScript features that made code cleaner and more powerful.

#### Key ES6 features:

* `let` and `const`
* Arrow functions (`=>`)
* Template literals
* Destructuring
* Default parameters
* Spread and rest operators
* Classes
* Modules (`import/export`)
* Promises

👉 ES6 is the foundation of modern JavaScript development.

---

### 107. What are Modules in JavaScript?

Modules are a way to **split code into separate reusable files**.

#### Example:

```js id="m1"
// math.js
export function add(a, b) {
  return a + b;
}
```

```js id="m2"
// main.js
import { add } from "./math.js";

console.log(add(2, 3));
```

#### Key points:

* Helps in code reusability
* Improves maintainability
* Avoids global scope pollution

---

### 108. Difference between CommonJS and ES Modules

| Feature      | CommonJS         | ES Modules                  |
| ------------ | ---------------- | --------------------------- |
| Syntax       | `require()`      | `import/export`             |
| Loading      | Synchronous      | Asynchronous                |
| Environment  | Node.js (older)  | Browser + Node.js (modern)  |
| Export style | `module.exports` | `export` / `export default` |

#### Example:

```js id="c1"
// CommonJS
const fs = require("fs");
```

```js id="e1"
// ES Module
import fs from "fs";
```

👉 ES Modules are the modern standard.

---

### 109. What is import/export?

JavaScript import/export is used to **share code between files (modules)**.

#### Named export:

```js id="i1"
export const name = "Sai";
export function greet() {}
```

```js id="i2"
import { name, greet } from "./file.js";
```

#### Default export:

```js id="i3"
export default function add() {}
```

```js id="i4"
import add from "./file.js";
```

👉 Key point:

* Named export → multiple exports
* Default export → single export

---

### 110. What is Dynamic Import?

Dynamic import allows you to **load modules only when needed at runtime**.

#### Example:

```js id="d1"
async function loadModule() {
  const module = await import("./math.js");
  console.log(module.add(2, 3));
}

loadModule();
```

#### Key points:

* Loads modules on demand
* Improves performance (lazy loading)
* Returns a Promise

---

### Quick Summary:

* ES6 → modern JavaScript features
* Modules → split code into files
* CommonJS vs ES Modules → old vs modern system
* import/export → share code between files
* Dynamic import → load modules at runtime

---



Here are clear interview-ready answers for questions 111–115:

---

### 111. What are Generators?

JavaScript generators are special functions that can **pause and resume execution** using `yield`.

#### Example:

```js id="g1"
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
```

#### Key points:

* Defined using `function*`
* Uses `yield` to pause execution
* Controlled using `.next()`

👉 Useful for lazy evaluation and handling large data.

---

### 112. What is Iterator?

An iterator is an object that **provides sequential access to elements** one by one.

#### Example:

```js id="i1"
let arr = [10, 20, 30];
let iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
```

#### Key points:

* Has `next()` method
* Returns `{ value, done }`
* Used internally in loops like `for...of`

---

### 113. What is Symbol Data Type?

JavaScript `Symbol` is a **primitive data type used to create unique identifiers**.

#### Example:

```js id="s1"
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```

#### Key points:

* Always unique
* Used as object keys
* Prevents property conflicts

---

### 114. What is BigInt?

BigInt is a data type used to store **very large integers beyond Number limit**.

#### Example:

```js id="b1"
let big = 123456789012345678901234567890n;

console.log(big + 10n);
```

#### Key points:

* Ends with `n`
* Used for large calculations (crypto, scientific data)
* Cannot mix with regular numbers directly

---

### 115. What is Proxy Object?

A Proxy object allows you to **intercept and control operations on another object**.

#### Example:

```js id="p1"
let user = {
  name: "Sai"
};

let proxy = new Proxy(user, {
  get(target, prop) {
    return prop in target ? target[prop] : "Not Found";
  }
});

console.log(proxy.name); // Sai
console.log(proxy.age);  // Not Found
```

#### Key points:

* Intercepts get, set, delete operations
* Used for validation, logging, security
* Powerful meta-programming feature

---

### Quick Summary:

* Generator → pause/resume function (`yield`)
* Iterator → sequential data access (`next()`)
* Symbol → unique identifier
* BigInt → very large integers
* Proxy → controls object behavior

---




Here are clear interview-ready answers for questions 116–120:

---

### 116. What is Reflect API?

JavaScript The Reflect API is a built-in object that provides **methods for interceptable JavaScript operations on objects**, similar to Proxy handlers but in a functional way.

#### Example:

```js id="r1"
let obj = { name: "Sai" };

Reflect.get(obj, "name"); // "Sai"
Reflect.set(obj, "age", 25); // true
```

#### Key points:

* Provides utility methods for object manipulation
* Works well with Proxy
* Makes object operations more predictable

---

### 117. What is Optional Chaining?

Optional chaining (`?.`) is used to safely access **nested object properties without causing errors** if a value is `null` or `undefined`.

#### Example:

```js id="o1"
let user = {};

console.log(user.profile?.name); // undefined (no error)
```

#### Key points:

* Prevents runtime errors
* Stops evaluation if value is null/undefined
* Used for deep object access

---

### 118. What is Nullish Coalescing?

Nullish coalescing (`??`) returns the **right-hand value only if the left side is `null` or `undefined`**.

#### Example:

```js id="n1"
let value = null;

console.log(value ?? "Default Value"); // Default Value
```

#### Difference from `||`:

```js id="n2"
0 || 10   // 10
0 ?? 10    // 0
```

👉 Key point:

* `??` only checks null/undefined
* `||` checks all falsy values

---

### 119. What is Spread vs Rest Operator?

Both use `...` but behave differently:

| Feature   | Spread              | Rest               |
| --------- | ------------------- | ------------------ |
| Purpose   | Expands values      | Collects values    |
| Use case  | Arrays/objects copy | Function arguments |
| Direction | Outward             | Inward             |

#### Spread example:

```js id="s1"
let arr = [1, 2];
let newArr = [...arr, 3, 4];
```

#### Rest example:

```js id="s2"
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

👉 Spread = expand
👉 Rest = collect

---

### 120. What is Tagged Template Literal?

A tagged template literal is a **special function that processes template literals before output**.

#### Example:

```js id="t1"
function tag(strings, value) {
  return strings[0] + value.toUpperCase();
}

let name = "sai";

console.log(tag`Hello ${name}`); // Hello SAI
```

#### Key points:

* Uses template literals with a function
* Allows custom string processing
* Used in styling libraries (like styled-components)

---

### Quick Summary:

* Reflect API → object operation methods
* Optional chaining → safe access (`?.`)
* Nullish coalescing → default only for null/undefined (`??`)
* Spread → expand values
* Rest → collect values
* Tagged template → custom template processing

---



Here are clear interview-ready answers for questions 121–125:

---

### 121. What is Object-Oriented Programming (OOP)?

JavaScript Object-Oriented Programming (OOP) is a programming paradigm based on **objects that contain data (properties) and behavior (methods)**.

#### Key principles of OOP:

* Encapsulation
* Inheritance
* Polymorphism
* Abstraction

#### Example idea:

```js id="o1"
let user = {
  name: "Sai",
  greet() {
    console.log("Hello");
  }
};
```

👉 OOP helps organize code in a reusable and structured way.

---

### 122. What is Class in JavaScript?

A class is a **blueprint for creating objects**.

#### Example:

```js id="c1"
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

let p1 = new Person("Sai");
p1.greet();
```

#### Key points:

* Introduced in ES6
* Used to create multiple objects
* Supports OOP concepts

---

### 123. What is Constructor?

A constructor is a **special method inside a class that automatically runs when an object is created**.

#### Example:

```js id="co1"
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let u1 = new User("Sai", 25);
```

#### Key points:

* Automatically called on object creation
* Used for initialization
* Only one constructor per class

---

### 124. What is Inheritance?

Inheritance allows one class to **acquire properties and methods of another class**.

#### Example:

```js id="i1"
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

let d = new Dog();
d.speak();
d.bark();
```

#### Key points:

* Uses `extends` keyword
* Promotes code reusability
* Parent → Child relationship

---

### 125. What is Polymorphism?

Polymorphism means **same method behaves differently in different contexts**.

#### Example:

```js id="p1"
class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}
```

#### Key points:

* Method overriding
* Same function name, different behavior
* Improves flexibility

---

### Quick Summary:

* OOP → object-based programming model
* Class → blueprint for objects
* Constructor → initializes object
* Inheritance → reuse parent class features
* Polymorphism → same method, different behavior

---





Here are clear interview-ready answers for questions 126–130:

---

### 126. What is Encapsulation?

JavaScript Encapsulation means **hiding internal details of an object and restricting direct access to its data**.

👉 In simple terms: *data + methods wrapped together + controlled access*

#### Example:

```js id="e1"
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance());
```

#### Key points:

* Protects data from direct modification
* Uses private fields (`#`)
* Improves security and maintainability

---

### 127. What is Abstraction?

Abstraction means **hiding implementation details and showing only essential features**.

#### Example:

```js id="a1"
class Car {
  start() {
    this._igniteEngine();
  }

  _igniteEngine() {
    console.log("Engine started");
  }
}

let car = new Car();
car.start();
```

#### Key points:

* Hides internal logic
* Shows only necessary functionality
* Reduces complexity

👉 User only sees “what it does”, not “how it does”

---

### 128. What is Prototype?

JavaScript prototype is an object that allows JavaScript objects to **inherit properties and methods from other objects**.

#### Example:

```js id="p1"
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello " + this.name);
};

let p1 = new Person("Sai");
p1.greet();
```

#### Key points:

* Every function has a prototype
* Used for inheritance
* Saves memory (shared methods)

---

### 129. What is Prototype Chain?

Prototype chain is the mechanism by which JavaScript **looks up properties/methods through linked prototypes**.

#### Example:

```js id="pc1"
let obj = {};

console.log(obj.toString());
```

#### How it works:

```
obj → Object.prototype → null
```

#### Key points:

* JS searches property step-by-step up the chain
* If not found → goes to parent prototype
* Ends at `null`

---

### 130. Difference between `__proto__` and prototype

| Feature     | prototype                              | **proto**                  |
| ----------- | -------------------------------------- | -------------------------- |
| Belongs to  | Function                               | Object instance            |
| Purpose     | Used to define methods for inheritance | Points to parent prototype |
| Usage       | `Person.prototype`                     | `obj.__proto__`            |
| Recommended | Yes                                    | No (legacy usage)          |

#### Example:

```js id="d1"
function Person() {}

console.log(Person.prototype); // prototype object

let p = new Person();
console.log(p.__proto__); // reference to prototype
```

#### Simple explanation:

* `prototype` → blueprint for objects
* `__proto__` → link to that blueprint

---

### Quick Summary:

* Encapsulation → protect data
* Abstraction → hide complexity
* Prototype → inheritance system in JS
* Prototype chain → lookup path for properties
* prototype vs **proto** → blueprint vs reference link

---




Here are clear interview-ready answers for questions 131–135:

---

### 131. What is `this` keyword?

JavaScript `this` refers to the **object that is currently executing the code**.

#### Example:

```js id="t1"
const user = {
  name: "Sai",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Sai
```

#### Key points:

* Value of `this` depends on **how function is called**
* In global scope → `window` (browser)
* In object → refers to that object

---

### 132. Difference between Regular Function and Arrow Function with `this`

| Feature               | Regular Function | Arrow Function                       |
| --------------------- | ---------------- | ------------------------------------ |
| `this` behavior       | Dynamic          | Lexical (inherits from parent scope) |
| Binding               | Can change       | Cannot change                        |
| Use in object methods | Works well       | Not recommended                      |
| Constructor           | Yes              | No                                   |

#### Example:

```js id="r1"
const user = {
  name: "Sai",
  regular: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

user.regular(); // Sai
user.arrow();   // undefined
```

👉 Arrow functions do NOT have their own `this`.

---

### 133. What is `new` keyword?

The `new` keyword is used to **create an instance of an object from a constructor function or class**.

#### Steps performed by `new`:

1. Creates empty object
2. Sets prototype
3. Binds `this`
4. Returns object

#### Example:

```js id="n1"
function Person(name) {
  this.name = name;
}

let p1 = new Person("Sai");
console.log(p1.name);
```

#### Key points:

* Used with constructors/classes
* Creates object instances
* Sets up prototype linkage

---

### 134. What are Static Methods?

Static methods belong to the **class itself, not to instances**.

#### Example:

```js id="s1"
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3)); // 5
```

#### Key points:

* Called using class name
* Cannot access instance properties
* Useful for utility functions

---

### 135. What is Method Overriding?

Method overriding occurs when a **child class provides its own implementation of a method defined in the parent class**.

#### Example:

```js id="o1"
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

let d = new Dog();
d.sound(); // Bark
```

#### Key points:

* Same method name in parent and child
* Child method replaces parent method
* Used in inheritance (polymorphism)

---

### Quick Summary:

* `this` → current execution context object
* Arrow vs regular → lexical vs dynamic `this`
* `new` → creates object instance
* static → belongs to class, not object
* overriding → child replaces parent method

---




Here are clear interview-ready answers for questions 136–140:

---

### 136. What is Currying?

JavaScript currying is a technique where a function is **broken into multiple functions that take one argument at a time**.

#### Example:

```js id="c1"
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6
```

#### Key points:

* Converts multi-argument function into chain of functions
* Improves reusability
* Used in functional programming

---

### 137. What is Composition?

Composition is combining multiple small functions to create a **more complex function**.

#### Example:

```js id="co1"
const add = x => x + 2;
const multiply = x => x * 3;

const compose = (f, g) => x => f(g(x));

const result = compose(add, multiply);

console.log(result(5)); // (5*3)+2 = 17
```

#### Key points:

* Functions are combined from right to left
* Improves code modularity
* Used in functional programming

---

### 138. What is Functional Programming?

Functional programming is a programming paradigm where code is written using **pure functions and immutable data**.

#### Key principles:

* Pure functions
* No side effects
* Higher-order functions
* Immutability

#### Example:

```js id="fp1"
const add = (a, b) => a + b;
```

#### Key points:

* Focus on functions, not objects
* Easier to test and debug
* Used heavily in modern JavaScript

---

### 139. What is Immutable Data?

Immutable data means **data that cannot be changed after creation**.

#### Example:

```js id="im1"
let arr = [1, 2, 3];

let newArr = [...arr, 4];

console.log(arr);     // [1,2,3]
console.log(newArr);  // [1,2,3,4]
```

#### Key points:

* Original data is never modified
* Helps avoid bugs
* Common in React and Redux

---

### 140. What is Deep Cloning?

Deep cloning means creating a **complete copy of an object including nested objects**, so changes do not affect the original.

#### Example:

```js id="dc1"
let obj = {
  name: "Sai",
  address: {
    city: "Hyderabad"
  }
};

let clone = JSON.parse(JSON.stringify(obj));

clone.address.city = "Delhi";

console.log(obj.address.city); // Hyderabad
```

#### Key points:

* Copies nested objects too
* Independent of original object
* Used for safe state management

---

### Quick Summary:

* Currying → function broken into steps
* Composition → combining functions
* Functional programming → pure + immutable approach
* Immutable data → cannot be changed
* Deep cloning → full independent copy

---




Here are clear interview-ready answers for questions 141–145:

---

### 141. What is a Module Bundler?

JavaScript a module bundler is a tool that **combines multiple JavaScript files and their dependencies into a single or optimized bundle** for the browser.

#### Why it is used:

* Browser cannot efficiently handle many small files
* Improves performance
* Manages dependencies

#### Example tools:

* Webpack
* Vite
* Parcel

---

### 142. What is Webpack?

Webpack Webpack is a popular module bundler that processes JavaScript, CSS, images, and other assets and bundles them into optimized files.

#### Key features:

* Bundling modules
* Code splitting
* Loaders (handle CSS, images)
* Plugins (extend functionality)

#### Example flow:

```
src files → Webpack → bundled output.js
```

---

### 143. What is Babel?

Babel Babel is a JavaScript compiler that converts **modern JavaScript (ES6+) into backward-compatible versions** for older browsers.

#### Example:

```js id="b1"
// ES6 code
const add = (a, b) => a + b;
```

Converted to:

```js id="b2"
function add(a, b) {
  return a + b;
}
```

#### Key points:

* Transpiles modern JS
* Ensures browser compatibility
* Works with Webpack

---

### 144. What is Tree Shaking?

Tree shaking is a process of **removing unused (dead) code** from the final bundle.

#### Example:

```js id="t1"
export function used() {}
export function unused() {}
```

If only `used()` is imported:
👉 `unused()` is removed from final bundle

#### Key points:

* Reduces bundle size
* Improves performance
* Works with ES modules

---

### 145. What is Code Splitting?

Code splitting is a technique where the application code is **split into smaller chunks and loaded on demand** instead of loading everything at once.

#### Example (dynamic import):

```js id="c1"
import("./math.js").then(module => {
  module.add(2, 3);
});
```

#### Key points:

* Improves initial load time
* Loads only required code
* Used in large applications

#### Common in:

* React (lazy loading)
* Webpack/Vite

---

### Quick Summary:

* Module bundler → combines files
* Webpack → popular bundler tool
* Babel → converts modern JS to old JS
* Tree shaking → removes unused code
* Code splitting → loads code in chunks

---




Here are clear interview-ready answers for questions 146–150:

---

### 146. What is Lazy Loading?

JavaScript lazy loading is a technique where **resources (code, images, components) are loaded only when needed instead of loading everything at once**.

#### Example (dynamic import):

```js id="l1"
import("./module.js").then(module => {
  module.run();
});
```

#### Key points:

* Improves performance
* Reduces initial load time
* Common in React (React.lazy)

---

### 147. What is Transpiling?

Transpiling is the process of converting **one version of JavaScript code into another version of JavaScript** (usually modern → older).

#### Example:

```js id="t1"
// ES6
const sum = (a, b) => a + b;
```

Converted to:

```js id="t2"
// ES5
function sum(a, b) {
  return a + b;
}
```

#### Key points:

* Done by tools like Babel
* Ensures browser compatibility
* Converts syntax, not execution logic

---

### 148. What is Polyfill?

A polyfill is a **piece of code that adds missing features to older browsers**.

#### Example:

If `Array.includes()` is not supported:

```js id="p1"
if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) !== -1;
  };
}
```

#### Key points:

* Adds missing functionality
* Ensures backward compatibility
* Used for older browser support

---

### 149. What is Event-Driven Programming?

JavaScript event-driven programming is a style where **program flow is determined by events like clicks, inputs, or messages**.

#### Example:

```js id="e1"
document.getElementById("btn").addEventListener("click", () => {
  console.log("Button clicked");
});
```

#### Key points:

* Based on events (click, load, keypress)
* Common in frontend development
* Non-blocking architecture

---

### 150. What is SSR vs CSR?

| Feature       | SSR (Server-Side Rendering) | CSR (Client-Side Rendering) |
| ------------- | --------------------------- | --------------------------- |
| Rendering     | On server                   | On browser                  |
| Initial load  | Faster                      | Slower                      |
| SEO           | Better                      | Poorer                      |
| Interactivity | After load                  | Immediate after JS loads    |

#### SSR example:

* Next.js pages rendered on server

#### CSR example:

* React SPA rendered in browser

#### Key points:

* SSR → better SEO, faster first load
* CSR → better user interaction after load

---

### Quick Summary:

* Lazy loading → load only when needed
* Transpiling → convert modern JS to older JS
* Polyfill → add missing browser features
* Event-driven → code runs on events
* SSR → server renders page
* CSR → browser renders page

---



Here are clear interview-ready answers for questions 151–155:

---

### 151. How to Optimize JavaScript Performance?

JavaScript performance optimization means making your code **faster, efficient, and less resource-consuming**.

#### Key techniques:

* Minimize DOM access
* Use debouncing/throttling
* Avoid unnecessary loops
* Use `map/filter/reduce` efficiently
* Use lazy loading & code splitting
* Remove unused code (tree shaking)
* Optimize API calls (caching, batching)

#### Example:

```js id="p1"
// Bad
for (let i = 0; i < arr.length; i++) {
  document.getElementById("box").innerHTML += arr[i];
}

// Good
let box = document.getElementById("box");
```

---

### 152. What causes Memory Leaks?

Memory leaks occur when **unused memory is not released**, leading to performance degradation.

#### Common causes:

* Unremoved event listeners
* Global variables
* SetInterval not cleared
* Detached DOM references
* Closures holding unused data

#### Example:

```js id="m1"
let data = [];

function leak() {
  data.push(new Array(1000000));
}
```

#### Key point:

👉 Memory keeps increasing over time

---

### 153. How to Reduce DOM Manipulation?

DOM manipulation is expensive, so reducing it improves performance.

#### Techniques:

* Batch updates
* Use DocumentFragment
* Avoid repeated DOM queries
* Use virtual DOM (React)
* Use caching for selectors

#### Example:

```js id="d1"
let fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  let div = document.createElement("div");
  fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

👉 One DOM update instead of many

---

### 154. What is Lazy Loading?

JavaScript lazy loading is a technique where **resources are loaded only when required instead of loading everything at once**.

#### Example:

```js id="l1"
import("./module.js").then(module => {
  module.run();
});
```

#### Key points:

* Improves performance
* Reduces initial load time
* Used in images, components, routes

---

### 155. What is Caching?

Caching is the process of **storing frequently used data so it can be reused quickly without re-fetching or recalculating**.

#### Types:

* Browser cache
* Memory cache
* API response cache

#### Example:

```js id="c1"
let cache = {};

function getData(id) {
  if (cache[id]) {
    return cache[id];
  }

  let data = fetchData(id);
  cache[id] = data;
  return data;
}
```

#### Key points:

* Improves speed
* Reduces API calls
* Enhances user experience

---

### Quick Summary:

* Performance optimization → faster JS execution
* Memory leaks → unused memory not freed
* DOM optimization → reduce DOM updates
* Lazy loading → load on demand
* Caching → reuse stored data

---




Here are clear interview-ready answers for questions 156–160:

---

### 156. What is Memoization?

JavaScript memoization is an optimization technique where **results of expensive function calls are stored and reused when the same inputs occur again**.

#### Example:

```js id="m1"
function memoize(fn) {
  let cache = {};

  return function (n) {
    if (cache[n]) return cache[n];

    let result = fn(n);
    cache[n] = result;
    return result;
  };
}

const square = memoize(n => n * n);

console.log(square(5)); // computed
console.log(square(5)); // from cache
```

#### Key points:

* Improves performance
* Avoids repeated calculations
* Uses caching

---

### 157. What is Throttling and Debouncing?

#### 🔹 Debouncing:

Delays function execution until **after a pause in events**.

```js id="d1"
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

👉 Use case: search bar input

---

#### 🔹 Throttling:

Ensures a function runs **only once in a fixed time interval**.

```js id="t1"
function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

👉 Use case: scroll events

---

### 158. What is Reflow and Repaint?

#### 🔹 Reflow (Layout calculation)

Occurs when browser recalculates **element positions and layout**.

#### 🔹 Repaint (Visual update)

Occurs when browser updates **visual styles (color, background, etc.)**

| Feature | Reflow                   | Repaint                  |
| ------- | ------------------------ | ------------------------ |
| Impact  | High cost                | Low cost                 |
| Affects | Layout                   | Visual style             |
| Trigger | DOM size/position change | Color, visibility change |

#### Example:

```js id="r1"
element.style.width = "200px"; // reflow
element.style.background = "red"; // repaint
```

---

### 159. What is Web Worker?

JavaScript Web Worker is a background thread that allows **heavy tasks to run without blocking the main thread**.

#### Example:

```js id="w1"
let worker = new Worker("worker.js");

worker.postMessage("start");

worker.onmessage = function (event) {
  console.log(event.data);
};
```

#### Key points:

* Runs in background thread
* No DOM access
* Improves performance for heavy tasks

---

### 160. What is Service Worker?

A service worker is a script that runs in the background and acts as a **proxy between browser and network**.

#### Key features:

* Offline support
* Caching API responses
* Push notifications
* Background sync

#### Example:

```js id="s1"
navigator.serviceWorker.register("/sw.js");
```

#### Key points:

* Works even when app is closed
* Enables Progressive Web Apps (PWA)
* Controls network requests

---

### Quick Summary:

* Memoization → cache function results
* Debounce → wait until user stops action
* Throttle → limit function execution rate
* Reflow → layout recalculation (expensive)
* Repaint → visual update
* Web worker → background thread
* Service worker → offline + caching layer

---





Here are clear interview-ready answers for questions 161–165:

---

### 161. What is Critical Rendering Path?

JavaScript Critical Rendering Path is the sequence of steps the browser follows to **convert HTML, CSS, and JavaScript into a visible webpage**.

#### Steps:

1. HTML → DOM creation
2. CSS → CSSOM creation
3. DOM + CSSOM → Render Tree
4. Layout (reflow)
5. Paint (pixels rendered)
6. Composite (final display)

#### Key point:

👉 Faster CRP = faster page load

---

### 162. What is Hydration?

Hydration is the process where **JavaScript takes over a server-rendered HTML page and makes it interactive**.

#### Example (SSR + React):

* Server sends HTML (fast load)
* Browser loads JS
* React “hydrates” the page (adds event listeners)

#### Key points:

* Used in SSR frameworks (Next.js)
* Converts static HTML into dynamic UI
* Improves SEO + performance

---

### 163. What is Bundle Optimization?

Bundle optimization means **reducing the size and improving the structure of JavaScript bundles** to improve performance.

#### Techniques:

* Code splitting
* Tree shaking
* Lazy loading
* Removing unused dependencies
* Using production builds

#### Example:

* Before: 5MB bundle
* After: 500KB optimized bundle

---

### 164. What is Code Minification?

Code minification is the process of **removing unnecessary characters from code without changing functionality**.

#### Removes:

* Spaces
* Comments
* Line breaks
* Shortens variable names

#### Example:

```js id="m1"
// Before
function add(a, b) {
  return a + b;
}
```

```js id="m2"
// After
function a(b,c){return b+c}
```

#### Key points:

* Reduces file size
* Improves load speed
* Used in production builds

---

### 165. How to Improve Page Load Speed?

JavaScript page load speed can be improved using multiple optimization techniques.

#### Key methods:

* Lazy loading images/components
* Code splitting
* Minifying CSS/JS
* Using CDN (Content Delivery Network)
* Caching (browser + server)
* Compressing assets (Gzip/Brotli)
* Reducing DOM size
* Optimizing API calls
* Preloading critical resources

#### Example:

```html id="l1"
<img src="image.jpg" loading="lazy" />
```

---

### Quick Summary:

* Critical rendering path → steps to render page
* Hydration → making SSR page interactive
* Bundle optimization → reduce bundle size
* Minification → remove unnecessary code
* Page speed → caching, lazy load, CDN, compression

---




Here are clear interview-ready answers for questions 166–170:

---

### 166. What is XSS Attack?

JavaScript XSS (Cross-Site Scripting) is a security vulnerability where an attacker **injects malicious scripts into a web page**, which then executes in the user’s browser.

#### Example:

```html id="x1"
<script>alert("Hacked!")</script>
```

#### Types:

* Stored XSS (saved in database)
* Reflected XSS (from URL)
* DOM-based XSS (client-side)

#### Prevention:

* Sanitize user input
* Escape output
* Use CSP (Content Security Policy)

---

### 167. What is CSRF?

CSRF (Cross-Site Request Forgery) is an attack where a **user is tricked into performing unwanted actions on a trusted website**.

#### Example:

If a user is logged into banking site, attacker triggers:

```html id="c1"
<img src="https://bank.com/transfer?amount=1000&to=attacker">
```

#### Prevention:

* CSRF tokens
* SameSite cookies
* Re-authentication for sensitive actions

---

### 168. What is CORS?

JavaScript CORS (Cross-Origin Resource Sharing) is a **browser security mechanism that controls how resources are shared between different domains**.

#### Example:

Frontend:

```
http://frontend.com
```

API:

```
http://api.com
```

Browser blocks request unless server allows it.

#### Fix:

Server sends headers:

```http
Access-Control-Allow-Origin: *
```

#### Key points:

* Prevents unauthorized cross-origin requests
* Controlled by server
* Essential for APIs

---

### 169. What is CSP?

CSP (Content Security Policy) is a security feature that **prevents XSS and other code injection attacks by controlling allowed sources of content**.

#### Example:

```http
Content-Security-Policy: default-src 'self'
```

#### Key points:

* Restricts scripts, images, styles sources
* Blocks inline scripts
* Helps prevent XSS attacks

---

### 170. How to Secure JavaScript Applications?

JavaScript securing JavaScript applications involves multiple best practices:

#### Key techniques:

* Prevent XSS (sanitize inputs, escape output)
* Prevent CSRF (use tokens, SameSite cookies)
* Use HTTPS (encrypt data)
* Implement CSP headers
* Validate all user inputs (frontend + backend)
* Avoid exposing sensitive data in frontend
* Use authentication & authorization (JWT, OAuth)
* Keep dependencies updated
* Avoid `eval()` and unsafe APIs

#### Example:

```js id="s1"
// Bad practice
eval("alert('hack')");

// Good practice
console.log("safe code");
```

---

### Quick Summary:

* XSS → inject malicious scripts
* CSRF → trick user into unwanted action
* CORS → cross-domain access control
* CSP → restrict allowed content sources
* Security → sanitize, validate, secure headers, HTTPS

---





Here are clear interview-ready answers for questions 171–175:

---

### 171. What is Sanitization?

JavaScript sanitization is the process of **cleaning user input to remove or neutralize malicious code** before using it in an application.

#### Example:

If user inputs:

```html id="s1"
<script>alert("hack")</script>
```

After sanitization:

```text id="s2"
alert("hack")
```

#### Key points:

* Prevents XSS attacks
* Removes harmful scripts/tags
* Done on both frontend and backend

---

### 172. What are JWT Tokens?

JWT (JSON Web Token) is a **secure token format used for authentication and information exchange**.

#### Structure:

```
Header.Payload.Signature
```

#### Example payload:

```json id="j1"
{
  "userId": 1,
  "role": "admin"
}
```

#### Key points:

* Stateless authentication
* Stored in localStorage or cookies
* Signed to prevent tampering
* Used in APIs and SPAs

---

### 173. What is OAuth?

OAuth is an **authorization framework that allows users to log in using third-party services without sharing passwords**.

#### Example:

* “Login with Google”
* “Login with GitHub”

#### Flow:

1. User clicks login
2. Redirect to provider (Google)
3. User authorizes
4. App receives access token

#### Key points:

* Secure delegated access
* No password sharing
* Uses access tokens

---

### 174. Authentication vs Authorization

| Feature  | Authentication      | Authorization      |
| -------- | ------------------- | ------------------ |
| Meaning  | Verifies identity   | Checks permissions |
| Question | “Who are you?”      | “What can you do?” |
| Happens  | First step          | After login        |
| Example  | Login with password | Access admin panel |

#### Example:

* Authentication → login successful
* Authorization → access denied for admin page

---

### 175. What are Common Frontend Security Issues?

JavaScript frontend applications face several security risks:

#### Common issues:

1. **XSS (Cross-Site Scripting)**

   * Injecting malicious scripts

2. **CSRF (Cross-Site Request Forgery)**

   * Unauthorized actions on behalf of user

3. **Sensitive data exposure**

   * Storing secrets in localStorage

4. **Insecure APIs**

   * Weak authentication/authorization

5. **Clickjacking**

   * UI tricking users into hidden actions

6. **Man-in-the-middle attacks**

   * Without HTTPS

7. **Improper input validation**

   * Accepting unsafe user data

#### Prevention:

* Use HTTPS
* Sanitize inputs
* Use JWT securely
* Implement CSP
* Use secure cookies (HttpOnly, SameSite)

---

### Quick Summary:

* Sanitization → clean user input
* JWT → secure token for auth
* OAuth → third-party login system
* Authentication → who you are
* Authorization → what you can do
* Security issues → XSS, CSRF, insecure data, weak APIs

---




Here are clear interview-ready answers for questions 176–180:

---

### 176. What happens when you enter a URL in the browser?

JavaScript when you enter a URL, multiple steps happen before the page is shown:

#### Steps:

1. **DNS lookup** → converts domain to IP address
2. **TCP connection** → browser connects to server
3. **TLS handshake (HTTPS only)** → secure connection
4. **HTTP request sent** → browser requests page
5. **Server response** → HTML/CSS/JS returned
6. **Browser rendering** → DOM + CSSOM + JavaScript execution
7. **Page displayed**

👉 Final result: fully rendered webpage

---

### 177. What is HTTP?

HTTP (HyperText Transfer Protocol) is a **protocol used for communication between client (browser) and server**.

#### Key points:

* Stateless protocol
* Works on request-response model
* Used to transfer web data (HTML, JSON, etc.)

#### Example:

```http id="h1"
GET /home HTTP/1.1
```

---

### 178. Difference between HTTP and HTTPS

| Feature         | HTTP       | HTTPS              |
| --------------- | ---------- | ------------------ |
| Security        | Not secure | Secure (encrypted) |
| Encryption      | No         | Yes (SSL/TLS)      |
| Port            | 80         | 443                |
| Data protection | No         | Yes                |
| Trust           | Low        | High               |

#### Key point:

👉 HTTPS = HTTP + SSL/TLS encryption

---

### 179. What are HTTP Methods?

HTTP methods define **what action should be performed on a resource**.

#### Common methods:

* **GET** → retrieve data
* **POST** → send/create data
* **PUT** → update full resource
* **PATCH** → partial update
* **DELETE** → remove data

#### Example:

```http id="m1"
GET /users
POST /users
DELETE /users/1
```

---

### 180. What is REST API?

JavaScript REST API (Representational State Transfer) is a **architecture style for building web services using HTTP methods**.

#### Key principles:

* Stateless communication
* Uses HTTP methods (GET, POST, etc.)
* Resources identified by URLs
* Data usually in JSON format

#### Example:

```http id="r1"
GET /api/users
POST /api/users
```

#### Key points:

* Lightweight and scalable
* Widely used in web applications
* Easy integration with frontend

---

### Quick Summary:

* URL enter flow → DNS → request → response → render
* HTTP → communication protocol
* HTTPS → secure HTTP
* HTTP methods → actions (GET, POST, etc.)
* REST API → structured web service using HTTP

---





Here are clear interview-ready answers for questions 181–185:

---

### 181. What is GraphQL?

GraphQL GraphQL is a **query language for APIs** that allows clients to request exactly the data they need.

#### Example:

```graphql id="g1"
query {
  user {
    name
    email
  }
}
```

#### Key points:

* Developed by Facebook
* Single endpoint (`/graphql`)
* Avoids over-fetching and under-fetching
* Flexible compared to REST APIs

---

### 182. What is WebSocket?

JavaScript WebSocket is a **protocol that provides full-duplex (two-way) communication between client and server over a single connection**.

#### Example use cases:

* Chat applications
* Live notifications
* Stock market updates

#### Example:

```js id="w1"
const socket = new WebSocket("wss://example.com");

socket.onmessage = (event) => {
  console.log(event.data);
};
```

#### Key points:

* Persistent connection
* Real-time communication
* Faster than HTTP polling

---

### 183. What is DNS?

DNS (Domain Name System) is like the **phonebook of the internet** that converts domain names into IP addresses.

#### Example:

```
google.com → 142.250.190.14
```

#### Key points:

* Helps browsers find servers
* Hierarchical system
* Eliminates need to remember IP addresses

---

### 184. What is CDN?

CDN (Content Delivery Network) is a **network of distributed servers that deliver content from the nearest location to the user**.

#### Example:

* Cloudflare
* Akamai
* AWS CloudFront

#### Key points:

* Faster content delivery
* Reduces server load
* Improves performance globally
* Caches static assets (images, JS, CSS)

---

### 185. What is Browser Caching?

Browser caching is a mechanism where **web browser stores website resources locally to reduce loading time on future visits**.

#### Example:

* First visit → download images, JS, CSS
* Next visit → load from cache

#### Types:

* Memory cache
* Disk cache

#### Key points:

* Improves performance
* Reduces network requests
* Controlled by HTTP headers

#### Example headers:

```http id="c1"
Cache-Control: max-age=3600
```

---

### Quick Summary:

* GraphQL → flexible API query language
* WebSocket → real-time two-way communication
* DNS → domain to IP converter
* CDN → global content delivery system
* Browser caching → store resources locally for speed

---




Here are clear interview-ready answers for questions 186–190:

---

### 186. What are status codes 200, 404, 500?

JavaScript HTTP status codes indicate the result of a server request.

#### Common codes:

* **200 OK** → Request successful
  👉 Data returned successfully

* **404 Not Found** → Resource not found
  👉 Wrong URL or missing page

* **500 Internal Server Error** → Server failed
  👉 Something broke on backend

#### Example:

```http id="s1"
200 → Success
404 → Page missing
500 → Server crash
```

---

### 187. What is CORS Policy?

CORS (Cross-Origin Resource Sharing) is a **browser security policy that controls requests between different origins (domains)**.

#### Example:

```id="f0xt3d"
Frontend: https://app.com  
API: https://api.com
```

Browser blocks request unless server allows it.

#### Server fix:

```http id="c1"
Access-Control-Allow-Origin: *
```

#### Key points:

* Prevents unauthorized cross-domain access
* Controlled by server
* Important for APIs

---

### 188. What is TCP/IP?

TCP/IP is a **communication protocol suite used for transmitting data over the internet**.

#### Layers:

* **TCP (Transmission Control Protocol)**
  → Ensures reliable delivery (ordered, error-free)

* **IP (Internet Protocol)**
  → Handles addressing and routing

#### Key points:

* Backbone of internet communication
* TCP = reliability
* IP = addressing

---

### 189. What is SSL/TLS?

SSL/TLS are **security protocols used to encrypt communication between browser and server**.

#### Key points:

* SSL = older version
* TLS = modern, secure version
* Used in HTTPS

#### Example:

```id="z2s3s3"
https:// → secure connection
```

#### Benefits:

* Encrypts data
* Prevents interception
* Ensures secure authentication

---

### 190. What is MIME Type?

MIME (Multipurpose Internet Mail Extensions) type tells the browser **what type of data is being sent**.

#### Examples:

```http id="m1"
text/html → HTML page
application/json → JSON data
image/png → image file
text/css → stylesheet
```

#### Key points:

* Helps browser interpret content
* Sent in HTTP headers
* Ensures correct rendering

---

### Quick Summary:

* 200 → success
* 404 → not found
* 500 → server error
* CORS → cross-domain security policy
* TCP/IP → internet communication protocol
* SSL/TLS → encryption for secure communication
* MIME type → tells browser file type

---






Here are clear interview-ready answers for questions 191–195:

---

### 191. What is TypeScript?

TypeScript TypeScript is a **superset of JavaScript** that adds **static typing** and compiles down to JavaScript.

#### Example:

```ts id="t1"
let name: string = "Sai";
let age: number = 25;
```

#### Key points:

* Developed by Microsoft
* Adds type safety to JavaScript
* Compiles to plain JavaScript
* Helps catch errors at compile time

---

### 192. Why use TypeScript?

TypeScript is used to make JavaScript applications **more reliable, maintainable, and scalable**.

#### Benefits:

* Detects errors before runtime
* Better code readability
* Improved IDE support (auto-completion)
* Easier large-scale application development
* Supports OOP features

#### Example benefit:

```ts id="ts1"
// Error caught during development
let age: number = "twenty"; // ❌ error
```

---

### 193. Difference between Interface and Type

| Feature             | Interface               | Type                                  |
| ------------------- | ----------------------- | ------------------------------------- |
| Purpose             | Define object structure | Define any type (object, union, etc.) |
| Extending           | Supports inheritance    | Uses intersections                    |
| Declaration merging | Yes                     | No                                    |
| Flexibility         | More structured         | More flexible                         |

#### Example:

```ts id="i1"
interface User {
  name: string;
  age: number;
}
```

```ts id="t2"
type User = {
  name: string;
  age: number;
};
```

#### Key point:

👉 Use `interface` for objects, `type` for flexibility.

---

### 194. What is Generic?

Generics allow you to create **reusable components that work with multiple data types**.

#### Example:

```ts id="g1"
function identity<T>(value: T): T {
  return value;
}

identity<string>("Sai");
identity<number>(25);
```

#### Key points:

* Provides type flexibility
* Ensures type safety
* Used in functions, classes, interfaces

---

### 195. What is Enum?

Enum (enumeration) is used to define a **set of named constants**.

#### Example:

```ts id="e1"
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
```

#### Key points:

* Improves readability
* Represents fixed set of values
* Can be numeric or string-based

#### String enum example:

```ts id="e2"
enum Role {
  Admin = "ADMIN",
  User = "USER"
}
```

---

### Quick Summary:

* TypeScript → typed version of JavaScript
* Why TS → safety, scalability, fewer bugs
* Interface vs Type → object structure vs flexible types
* Generics → reusable type-safe code
* Enum → named constant values

---





Here are clear interview-ready answers for questions 196–200:

---

### 196. What is Union Type?

TypeScript A union type allows a variable to hold **multiple possible types**.

#### Example:

```ts id="u1"
let value: string | number;

value = "Sai";
value = 25;
```

#### Key points:

* Uses `|` operator
* Allows flexibility with type safety
* Common in APIs and dynamic data

---

### 197. What is Intersection Type?

Intersection type combines multiple types into one using `&`, meaning the object must satisfy **all types together**.

#### Example:

```ts id="i1"
type A = { name: string };
type B = { age: number };

type User = A & B;

let user: User = {
  name: "Sai",
  age: 25
};
```

#### Key points:

* Uses `&` operator
* Combines multiple types
* Must satisfy all properties

---

### 198. What is `keyof`?

`keyof` is a TypeScript operator that **creates a union of all keys of an object type**.

#### Example:

```ts id="k1"
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;
// "name" | "age"
```

#### Key points:

* Extracts object keys as types
* Used in generic programming
* Improves type safety

---

### 199. What is Utility Type?

Utility types are **built-in TypeScript types used to transform existing types**.

#### Common utility types:

* `Partial<T>` → makes all properties optional
* `Required<T>` → makes all properties required
* `Readonly<T>` → makes properties immutable
* `Pick<T, K>` → selects specific properties
* `Omit<T, K>` → removes properties

#### Example:

```ts id="ut1"
type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;
```

#### Key points:

* Helps reuse and modify types
* Reduces code duplication
* Very useful in real projects

---

### 200. Difference between `any` and `unknown`

| Feature        | any             | unknown               |
| -------------- | --------------- | --------------------- |
| Type safety    | ❌ No safety     | ✅ Safe                |
| Usage          | Can do anything | Must check type first |
| Risk           | High            | Low                   |
| Recommendation | Avoid           | Preferred             |

#### Example:

```ts id="a1"
let a: any = 10;
a.toUpperCase(); // no error (unsafe)
```

```ts id="u2"
let b: unknown = 10;

// b.toUpperCase(); ❌ error

if (typeof b === "string") {
  b.toUpperCase(); // safe
}
```

---

### Quick Summary:

* Union → multiple possible types
* Intersection → combine multiple types
* keyof → extract object keys as types
* Utility types → built-in type transformations
* any → unsafe (no checks)
* unknown → safe (requires checking)

---






Here are strong, interview-ready answers for questions 201–205 (you can directly speak these in interviews and also adapt them to your real project):

---

### 201. Explain your recent JavaScript project

JavaScript

In my recent project, I worked on building a **frontend web application (e.g., dashboard / ecommerce / banking UI)** using JavaScript (and frameworks like React/Angular depending on your stack).

#### My responsibilities included:

* Building reusable UI components
* Integrating REST APIs for dynamic data
* Handling authentication (JWT-based login flow)
* Managing state for user interactions
* Optimizing performance and responsiveness

#### Example:

* Fetching data from API and rendering tables with pagination
* Implementing search and filter functionality
* Handling loading and error states properly

👉 Focus in interview:

> “I mainly worked on API integration, reusable components, and performance optimization in the frontend.”

---

### 202. How do you optimize performance in large applications?

I use multiple strategies to improve performance:

#### Key techniques:

* Lazy loading components and routes
* Code splitting (load only required modules)
* Debouncing and throttling user events
* Memoization (avoid repeated calculations)
* Reducing unnecessary re-renders (React optimization)
* Virtual DOM optimization
* Caching API responses
* Minimizing DOM manipulation

#### Example:

```js id="p1"
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

👉 Goal:

> Reduce load time and improve user experience.

---

### 203. How do you handle API failures?

I handle API failures using proper error handling and fallback mechanisms.

#### Techniques:

* `try/catch` with async/await
* Checking HTTP response status
* Using `.catch()` for promises
* Showing user-friendly error messages
* Retry mechanism for failed requests
* Logging errors for debugging

#### Example:

```js id="a1"
async function fetchData() {
  try {
    let res = await fetch("/api/data");

    if (!res.ok) throw new Error("API Error");

    let data = await res.json();
    return data;

  } catch (error) {
    console.log("Error:", error.message);
  }
}
```

👉 Also:

* Show loader while fetching
* Show fallback UI on failure

---

### 204. How do you manage reusable code?

I manage reusable code using modular and component-based architecture.

#### Techniques:

* Creating reusable components (buttons, tables, modals)
* Using utility/helper functions
* Using custom hooks (React)
* Following DRY (Don’t Repeat Yourself) principle
* Centralizing API services
* Using shared libraries/modules

#### Example:

```js id="r1"
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
```

👉 Benefit:

> Improves maintainability and reduces duplication.

---

### 205. How do you debug JavaScript applications?

JavaScript I use multiple debugging techniques depending on the issue:

#### Methods:

* Browser DevTools (Console, Network, Sources)
* `console.log()` for quick debugging
* Breakpoints in Chrome DevTools
* Error stack traces
* React/Angular DevTools
* Network tab for API debugging
* Checking async flow (Promises/async-await)

#### Example:

```js id="d1"
console.log("Value:", data);
debugger; // pauses execution
```

#### Advanced approach:

* Reproduce issue
* Isolate component/function
* Inspect network/API calls
* Fix and validate

---

### Quick Summary:

* Project → UI + API + components + optimization
* Performance → lazy load, debounce, memoization
* API failure → try/catch + error handling + UI fallback
* Reusable code → components + utilities + DRY
* Debugging → DevTools + logs + breakpoints + network

---





Here are strong, interview-ready answers for questions **206–210**:

---

### 206. How do you handle asynchronous operations?

JavaScript

I handle asynchronous operations using modern JavaScript approaches:

#### Methods:

* **Promises**
* **async/await (preferred)**
* **fetch API / Axios**
* Callback functions (legacy)

#### Example:

```js
async function getData() {
  try {
    let res = await fetch("/api/data");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
```

#### Key points:

* Use `async/await` for readability
* Handle errors using `try/catch`
* Show loading + fallback UI in frontend

---

### 207. How do you improve page load speed?

I improve page performance using multiple optimization techniques:

#### Key strategies:

* Lazy loading images/components
* Code splitting (load only required code)
* Minification of JS/CSS
* Using CDN for static assets
* Caching (browser + API)
* Reducing DOM manipulation
* Compressing assets (Gzip/Brotli)
* Optimizing API calls

#### Example:

```html
<img src="image.jpg" loading="lazy" />
```

#### Goal:

> Reduce initial load time and improve user experience.

---

### 208. How do you prevent memory leaks?

Memory leaks happen when unused memory is not released.

#### I prevent them by:

* Removing event listeners
* Clearing intervals/timeouts
* Avoiding unnecessary global variables
* Cleaning up subscriptions (React useEffect cleanup)
* Avoiding retained DOM references

#### Example:

```js
let timer = setInterval(() => {
  console.log("Running");
}, 1000);

clearInterval(timer); // important cleanup
```

#### Key point:

> Always clean resources when component/page unmounts.

---

### 209. How do you structure frontend applications?

I follow a **modular, scalable architecture**.

#### Structure approach:

* Feature-based folder structure
* Reusable components folder
* Services/API layer separation
* State management (Redux/Context)
* Utility/helper functions
* Routing module separation

#### Example structure:

```
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── hooks/
 ├── utils/
 ├── assets/
 └── routes/
```

#### Key principles:

* Separation of concerns
* Reusability
* Scalability
* Maintainability

---

### 210. What challenges did you face in projects?

In real projects, I faced several challenges and solved them using structured approaches:

#### Common challenges:

1. **Performance issues**

   * Solved using lazy loading, memoization, and optimization

2. **API failures / inconsistent data**

   * Handled using error handling + retry logic

3. **State management complexity**

   * Solved using centralized state (Redux/Context)

4. **UI responsiveness issues**

   * Fixed using CSS optimization and responsive design

5. **Memory leaks**

   * Fixed using proper cleanup in lifecycle methods/hooks

#### Key takeaway:

> I focus on debugging, optimization, and scalable solutions to handle real-world issues.

---

### 🔥 Quick Summary:

* Async → async/await + Promises
* Performance → lazy load + cache + optimize assets
* Memory leaks → cleanup listeners/timers
* Structure → modular + feature-based architecture
* Challenges → solved via debugging + optimization + best practices

---




Here are strong, interview-ready answers for **211–215**:

---

### 211. How do you implement authentication?

JavaScript

I implement authentication using **secure token-based or session-based approaches**, depending on the application.

#### Common approaches:

* **JWT (JSON Web Token) authentication**
* Session-based authentication (cookies)
* OAuth (Google login, GitHub login)

#### Flow (JWT example):

1. User logs in with credentials
2. Server validates and sends JWT token
3. Token stored in **HttpOnly cookies / secure storage**
4. Token sent with every API request

#### Example:

```js id="auth1"
localStorage.setItem("token", response.token);
```

#### Key points:

* Use HttpOnly cookies for security
* Protect routes using guards/middleware
* Always validate token on backend

---

### 212. How do you manage state in applications?

State management depends on application size:

#### Approaches:

* Local state (useState / component state)
* Context API for medium apps
* Redux / NgRx for large-scale apps
* Zustand/Recoil for modern lightweight state
* Server state using React Query / SWR

#### Example:

```js id="state1"
const [count, setCount] = useState(0);
```

#### Key points:

* Keep state minimal and organized
* Separate UI state and server state
* Use centralized store for large apps

---

### 213. How do you improve scalability?

To improve scalability, I design applications to handle growth in users, data, and features.

#### Techniques:

* Modular architecture (feature-based structure)
* Lazy loading and code splitting
* API optimization and pagination
* Microfrontend architecture (for large apps)
* Caching (browser + server-side)
* Stateless backend design
* Reusable components

#### Key idea:

> System should handle increased traffic without major code changes.

---

### 214. How do you secure frontend applications?

JavaScript I follow multiple security practices to protect frontend apps:

#### Key techniques:

* Prevent XSS (sanitize inputs, escape output)
* Prevent CSRF (tokens, SameSite cookies)
* Use HTTPS (SSL/TLS encryption)
* Avoid storing sensitive data in localStorage
* Use Content Security Policy (CSP)
* Validate all inputs (frontend + backend)
* Secure authentication (JWT, OAuth)
* Avoid exposing secrets in frontend code

#### Example:

```js id="sec1"
if (typeof input === "string") {
  // sanitize input
}
```

---

### 215. How do you reduce bundle size?

Reducing bundle size improves performance and loading speed.

#### Techniques:

* Code splitting (dynamic imports)
* Tree shaking (remove unused code)
* Lazy loading components/routes
* Minification (remove whitespace/comments)
* Remove unused dependencies
* Use production builds
* Replace heavy libraries with lighter alternatives
* Compress assets (Gzip/Brotli)

#### Example:

```js id="bundle1"
import("./module.js"); // lazy loading
```

---

### 🔥 Quick Summary:

* Authentication → JWT / session / OAuth
* State management → local + global + server state tools
* Scalability → modular + caching + lazy loading
* Security → XSS/CSRF prevention + HTTPS + CSP
* Bundle size → tree shaking + code splitting + minification

---








