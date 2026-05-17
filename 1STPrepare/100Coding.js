
216. Reverse a string.
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log(reverseString("sai")); // "ias"



217. Check palindrome string.

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam")); // true





218. Find factorial of number.

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5)); // 120



219. Find Fibonacci series.

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5)); // 120



220. Remove duplicates from array.

function removeDuplicates(arr) {
  let result = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result[k] = arr[i];
      k++;
    }
  }

  return result;
}

console.log(removeDuplicates([1,2,2,3,4,4])); // [1,2,3,4]




221. Find largest number in array.

function findLargest(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findLargest([10, 5, 20, 8])); // 20





222. Sort array without sort() method.

function sortArray(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(sortArray([5, 2, 8, 1])); // [1,2,5,8]



223. Find second largest number.

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }

  return second;
}

console.log(secondLargest([10, 5, 20, 8])); // 10



224. Check prime number.

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // true



225. Count vowels in string.

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (
      ch === "a" || ch === "e" || ch === "i" ||
      ch === "o" || ch === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript")); // 3



226. Swap two variables.

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log("a:", a, "b:", b);
}

swap(5, 10); // a:10 b:5




227. Flatten nested array.

function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let inner = flatten(arr[i]);

      for (let j = 0; j < inner.length; j++) {
        result.push(inner[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flatten([1, [2, [3, 4]], 5]));
// [1,2,3,4,5]



228. Find missing number in array.

function findMissing(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return total - sum;
}

console.log(findMissing([1,2,4,5], 5)); // 3



229. Group array objects by property.

function groupBy(arr, key) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i][key];

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(arr[i]);
  }

  return result;
}

const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" }
];

console.log(groupBy(users, "role"));



230. Implement debounce function.

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}



231. Implement throttle function.

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



232. Polyfill for map().

Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

let arr = [1,2,3];

console.log(arr.myMap(x => x * 2));



233. Polyfill for filter().

Array.prototype.myFilter = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

let arr = [1,2,3,4];

console.log(arr.myFilter(x => x % 2 === 0));



234. Polyfill for reduce().

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let start = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    start = 1;
  }

  for (let i = start; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

let arr = [1,2,3,4];

console.log(arr.myReduce((a,b) => a + b, 0));



235. Polyfill for bind().

Function.prototype.myBind = function (context, ...args1) {
  let fn = this;

  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};

const person = {
  name: "Sai"
};

function greet(city) {
  console.log(this.name + " from " + city);
}

const bound = greet.myBind(person);

bound("Hyderabad");



236. Deep clone an object.

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

const obj = { a: 1, b: { c: 2 } };
console.log(deepClone(obj));



237. Implement custom Promise.

function MyPromise(executor) {
  let onResolve;
  let onReject;
  let isCalled = false;

  this.then = function (callback) {
    onResolve = callback;
    if (isCalled) onResolve(value);
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  let resolve = (value) => {
    isCalled = true;
    if (onResolve) onResolve(value);
  };

  let reject = (error) => {
    if (onReject) onReject(error);
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// Example usage
new MyPromise((res) => res("Done")).then(console.log);




238. Find frequency of characters.

function charFrequency(str) {
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (freq[ch]) {
      freq[ch]++;
    } else {
      freq[ch] = 1;
    }
  }

  return freq;
}

console.log(charFrequency("hello"));




239. Merge two arrays without duplicates.

function mergeArrays(arr1, arr2) {
  let result = [];

  function add(arr) {
    for (let i = 0; i < arr.length; i++) {
      let exists = false;

      for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          exists = true;
          break;
        }
      }

      if (!exists) {
        result.push(arr[i]);
      }
    }
  }

  add(arr1);
  add(arr2);

  return result;
}

console.log(mergeArrays([1,2,3], [2,3,4]));




240. Find intersection of arrays.

function intersection(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        break;
      }
    }
  }

  return result;
}

console.log(intersection([1,2,3], [2,3,4]));



241. Rotate array by K positions.

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;

  let result = [];

  for (let i = n - k; i < n; i++) {
    result.push(arr[i]);
  }

  for (let i = 0; i < n - k; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(rotateArray([1,2,3,4,5], 2));



242. Move zeros to end.


function moveZeros(arr) {
  let result = [];
  let countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    } else {
      countZero++;
    }
  }

  for (let i = 0; i < countZero; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveZeros([0,1,0,3,12]));




243. Find longest word in string.

function longestWord(str) {
  let word = "";
  let maxWord = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== " " && i !== str.length) {
      word = word + str[i];
    } else {
      if (word.length > maxWord.length) {
        maxWord = word;
      }
      word = "";
    }
  }

  return maxWord;
}

console.log(longestWord("I love JavaScript coding"));




244. Check anagram strings.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {};

  for (let i = 0; i < str1.length; i++) {
    count[str1[i]] = (count[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!count[str2[i]]) return false;
    count[str2[i]]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true



245. Find duplicate elements in array.

function findDuplicates(arr) {
  let seen = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      result.push(arr[i]);
    } else {
      seen[arr[i]] = 1;
    }
  }

  return result;
}

console.log(findDuplicates([1,2,3,2,4,5,1]));



246. Convert array to object.

function arrayToObject(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  return obj;
}

console.log(arrayToObject(["a", "b", "c"]));


247. Convert object to array.

function objectToArray(obj) {
  let result = [];

  for (let key in obj) {
    result.push([key, obj[key]]);
  }

  return result;
}

console.log(objectToArray({ a: 1, b: 2 }));



248. Implement memoization function.

function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    let result = fn(...args);
    cache[key] = result;

    return result;
  };
}

const add = (a, b) => a + b;

const memoAdd = memoize(add);

console.log(memoAdd(2, 3)); // computed
console.log(memoAdd(2, 3)); // cached




249. Implement currying function.

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...next) {
        return curried.apply(this, [...args, ...next]);
      };
    }
  };
}

// Example
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6




250. Implement event emitter.
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      for (let cb of this.events[event]) {
        cb(data);
      }
    }
  }

  off(event, callback) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }
}

// Example
const ee = new EventEmitter();



251. Create custom setInterval.

function customSetInterval(callback, delay) {
  let timerId;

  function repeat() {
    timerId = setTimeout(() => {
      callback();
      repeat();
    }, delay);
  }

  repeat();

  return {
    clear: () => clearTimeout(timerId)
  };
}

// Example
const interval = customSetInterval(() => {
  console.log("Hello");
}, 1000);

// interval.clear();




252. Create custom setTimeout.

function customSetTimeout(callback, delay) {
  let start = Date.now();

  function check() {
    if (Date.now() - start >= delay) {
      callback();
    } else {
      requestAnimationFrame(check);
    }
  }

  check();
}

// Example
customSetTimeout(() => {
  console.log("Done");
}, 2000);





253. Implement infinite currying.

function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

// Example
console.log(sum(1)(2)(3)(4)()); // 10


254. Find longest substring without repeating characters.

function longestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3



255. Find first non-repeating character.

function firstNonRepeating(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    count[str[i]] = (count[str[i]] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeating("aabbcde")); // c



256. Implement LRU cache.

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // move to recent
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      let firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}




257. Implement pagination logic.

function paginate(arr, page, limit) {
  let start = (page - 1) * limit;
  let end = start + limit;

  let result = [];

  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(paginate([1,2,3,4,5,6], 2, 2)); // [3,4]



258. Implement retry mechanism for API calls.


function retry(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    function attempt() {
      fn()
        .then(resolve)
        .catch((err) => {
          if (retries === 0) {
            reject(err);
          } else {
            retries--;
            setTimeout(attempt, delay);
          }
        });
    }

    attempt();
  });
}





259. Build custom Promise.all().

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// Example
promiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(console.log);



260. Implement async queue.

class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  enqueue(task) {
    this.queue.push(task);
    this.run();
  }

  async run() {
    if (this.running) return;

    this.running = true;

    while (this.queue.length) {
      let task = this.queue.shift();
      await task();
    }

    this.running = false;
  }
}

// Example
const q = new AsyncQueue();

q.enqueue(async () => {
  console.log("Task 1");
});

q.enqueue(async () => {
  console.log("Task 2");
});







// 1. Find maximum & minimum in array


function findMinMax(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { min, max };
}

// Example
console.log(findMinMax([3, 5, 1, 8, 2]));
// Output: { min: 1, max: 8 }


// 2. Reverse an array
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

// Example
console.log(reverseArray([1, 2, 3, 4]));
// Output: [4, 3, 2, 1]


// 3. Find second largest element

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Example
console.log(secondLargest([10, 5, 8, 20, 20]));
// Output: 10



// 4. Check if array is sorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Example
console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2]));    // false


// 5. Move all zeros to end
function moveZeros(arr) {
  let j = 0; // position for non-zero

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}

// Example
console.log(moveZeros([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]


// 6. Remove duplicates from sorted array
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let j = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }

  return j + 1; // new length
}

// Example
let arr = [1, 1, 2, 2, 3];
let len = removeDuplicates(arr);
console.log(len, arr.slice(0, len));
// Output: 3 [1, 2, 3]


// 7. Rotate array by K steps

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;

  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  return arr;
}

// Example
console.log(rotateArray([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]



// 8. Find missing number (1 to N)
function findMissing(arr, n) {
  let total = (n * (n + 1)) / 2;

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return total - sum;
}

// Example
console.log(findMissing([1, 2, 4, 5], 5));
// Output: 3


// 9. Find duplicate number
function findDuplicate(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }

  return null;
}

// Example
console.log(findDuplicate([1, 3, 4, 2, 2])); // 2


// 10. Merge two sorted arrays

// Approached 1: Using extra space
function mergeSorted(arr1, arr2) {
  let i = 0, j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}

// Example
console.log(mergeSorted([1,3,5], [2,4,6]));
// [1,2,3,4,5,6]


// ✅ Approach 2: Two Pointer (if sorted)
function intersectionSorted(arr1, arr2) {
  let i = 0, j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++; j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

// 11. Intersection of two arrays

Approach 1: Using Set (easy)
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// Example
console.log(union([1,2,3], [2,3,4]));
// [1,2,3,4]

// ✅ Approach 2: Two Pointer (sorted arrays)
function unionSorted(arr1, arr2) {
  let i = 0, j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++; j++;
    } else if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return [...new Set(result)]; // remove duplicates
}


// 12. Union of two arrays

// ✅ Using Set (Best & Simple)
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// Example
console.log(union([1,2,3], [2,3,4]));
// [1,2,3,4]

// 👉 Time: O(n + m)


// 13. Count frequency of elements

function frequencyCount(arr) {
  const map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  return map;
}

// Example
console.log(frequencyCount([1,2,2,3,1,1]));
// {1: 3, 2: 2, 3: 1}


// 14. Kadane’s Algorithm (max subarray sum)

function maxSubArray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Output: 6  -> [4,-1,2,1]


// 15. Best time to buy and sell stock

function maxProfit(prices) {
  let minPrice = Infinity;
  let profit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      profit = Math.max(profit, price - minPrice);
    }
  }

  return profit;
}

// Example
console.log(maxProfit([7,1,5,3,6,4]));
// Output: 5


// 16. Find majority element (> n/2)

function majorityElement(arr) {
  let candidate = null;
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
}

// Example
console.log(majorityElement([2,2,1,1,2,2]));
// Output: 2


// 17. Two Sum problem

function twoSum(arr, target) {
  const map = new Map(); // value → index

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(arr[i], i);
  }

  return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]



// 18. Check if pair with given sum exists

function hasPairWithSum(arr, target) {
  const set = new Set();

  for (let num of arr) {
    if (set.has(target - num)) {
      return true;
    }
    set.add(num);
  }

  return false;
}

// Example
console.log(hasPairWithSum([1, 4, 45, 6, 10, 8], 16));
// Output: true


// 19. Find equilibrium index

function equilibriumIndex(arr) {
  let totalSum = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i]; // right sum

    if (leftSum === totalSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

// Example
console.log(equilibriumIndex([1, 3, 5, 2, 2]));
// Output: 2


// 20. Find leaders in array

function findLeaders(arr) {
  let n = arr.length;
  let leaders = [];
  let maxRight = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > maxRight) {
      leaders.push(arr[i]);
      maxRight = arr[i];
    }
  }

  return leaders.reverse();
}

// Example
console.log(findLeaders([16, 17, 4, 3, 5, 2]));
// Output: [17, 5, 2]

// ---

// ### Strings (21–40)

// 21. Reverse a string

// Approach 1 (Built-in)
const reverseString = (str) => str.split('').reverse().join('');


// ✅ Approach 2 (Two Pointer – Interview Preferred)
function reverseString(str) {
  let arr = str.split('');
  let left = 0, right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
}

// Example
console.log(reverseString("hello")); // "olleh"



// 22. Check palindrome string

function isPalindrome(str) {
  let left = 0, right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// 23. Count vowels & consonants

function countVowelsConsonants(str) {
  let vowels = 0, consonants = 0;
  const vowelSet = new Set(['a','e','i','o','u']);

  str = str.toLowerCase();

  for (let char of str) {
    if (/[a-z]/.test(char)) {
      if (vowelSet.has(char)) vowels++;
      else consonants++;
    }
  }

  return { vowels, consonants };
}

// Example
console.log(countVowelsConsonants("Hello World"));
// { vowels: 3, consonants: 7 }


// 24. Remove duplicates from string

// Approach 1 (Set)
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

// Example
console.log(removeDuplicates("programming"));
// "progamin"


// ✅ Approach 2 (Preserve Order – Manual)
function removeDuplicates(str) {
  let seen = new Set();
  let result = '';

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }
  return result;
}


// 25. Check anagram

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;
  }

  return true;
}

// Example
console.log(isAnagram("listen", "silent")); // true 👉 Time: O(n)


// 26. First non-repeating character

function firstNonRepeating(str) {
  const map = {};

  // count frequency
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  // find first unique
  for (let char of str) {
    if (map[char] === 1) return char;
  }

  return null;
}

// Example
console.log(firstNonRepeating("aabbcde")); // "c"


// 27. Find all substrings
function getAllSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = i; j < str.length; j++) {
      temp += str[j];
      result.push(temp);
    }
  }

  return result;
}

// Example
console.log(getAllSubstrings("abc"));
// ["a","ab","abc","b","bc","c"]   👉 Time: O(n²)


// 28. Longest common prefix

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

// Example
console.log(longestCommonPrefix(["flower","flow","flight"]));
// "fl"




// 29. String rotation check

// 👉 Check if s2 is rotation of s1

// ✅ Trick: s2 must be substring of s1 + s1
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}

// Example
console.log(isRotation("abcd", "cdab")); // true
console.log(isRotation("abcd", "acbd")); // false

// 👉 Time: O(n)


// 30. Count words in string
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Example
console.log(countWords("Hello world from JS")); // 4


// 31. Convert string to integer (atoi)

function myAtoi(str) {
  str = str.trim();
  if (str.length === 0) return 0;

  let sign = 1, i = 0, result = 0;

  if (str[i] === '-' || str[i] === '+') {
    sign = str[i] === '-' ? -1 : 1;
    i++;
  }

  while (i < str.length && str[i] >= '0' && str[i] <= '9') {
    result = result * 10 + (str[i] - '0');
    i++;
  }

  return result * sign;
}

// Example
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193


// 32. Remove spaces


// ✅ Remove all spaces from string
function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}

// Example
console.log(removeSpaces("a b c d")); // "abcd"

// Remove extra spaces (keep single space)
function normalizeSpaces(str) {
  return str.trim().replace(/\s+/g, ' ');
}

// Example
console.log(normalizeSpaces("  hello   world  "));
// "hello world"



// 33. Toggle case

Convert lowercase → uppercase and vice versa

function toggleCase(str) {
  let result = "";

  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      result += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

// Example
console.log(toggleCase("HeLLo123")); // "hEllO123"



// 34. Check valid palindrome (ignore special chars)

function isValidPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let left = 0, right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }

  return true;
}

// Example
console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // true



// 35. Check if string contains only digits

function isDigitsOnly(str) {
  return /^\d+$/.test(str);
}

// Example
console.log(isDigitsOnly("12345")); // true
console.log(isDigitsOnly("123a"));  // false


// 36. Find frequency of characters

function charFrequency(str) {
  const map = {};

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  return map;
}

// Example
console.log(charFrequency("hello"));
// { h:1, e:1, l:2, o:1 }


// 37. Replace spaces with %20

function replaceSpaces(str) {
  return str.trim().replace(/\s/g, '%20');
}

// Example
console.log(replaceSpaces("Hello World JS"));
// "Hello%20World%20JS"



// 38. Reverse words in sentence

// ✅ Manual Approach (Interview-friendly)
function reverseWords(str) {
  let words = [];
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word += str[i];
    } else if (word.length) {
      words.push(word);
      word = "";
    }
  }

  if (word.length) words.push(word);

  return words.reverse().join(' ');
}

// 👉 Reverse word order, not characters

function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(' ');
}

// Example
console.log(reverseWords("Hello world from JS"));
// "JS from world Hello"



// 39. Check substring existence

// ✅ Manual (Without Built-in)
function isSubstring(str, sub) {
  for (let i = 0; i <= str.length - sub.length; i++) {
    let match = true;

    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }

  return false;
}
// 👉 Mention KMP Algorithm if interviewer pushes (advanced)


// -------------------------------------------
function isSubstring(str, sub) {
  return str.includes(sub);
}

// Example
console.log(isSubstring("hello world", "world")); // true
console.log(isSubstring("hello", "abc")); // false



// 40. Find duplicate characters

function findDuplicates(str) {
  const map = {};
  const duplicates = [];

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
}

// Example
console.log(findDuplicates("programming"));
// ["r","g","m"]

// ---

// ## 🟡 MEDIUM (Interview Core 🔥)

// ### Arrays (41–70)

// 41. 3Sum problem
a + b + c === 0
Input: [-1,0,1,2,-1,-4]

Output:
[[-1,-1,2],[-1,0,1]]

Optimized Approach (Two Pointer)
Time Complexity
O(n²)
JavaScript Code
function threeSum(nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate values
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Example
console.log(threeSum([-1,0,1,2,-1,-4]))


// 42. 4Sum problem
Input:
nums = [1,0,-1,0,-2,2]
target = 0

Output:
[
  [-2,-1,1,2],
  [-2,0,0,2],
  [-1,0,0,1]
]

Optimized Approach
Time Complexity
O(n³)
JavaScript Code
function fourSum(nums, target) {

    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 3; i++) {

        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {

            // Skip duplicates
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {

                const sum =
                    nums[i] +
                    nums[j] +
                    nums[left] +
                    nums[right];

                if (sum === target) {

                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ]);

                    // Skip duplicates
                    while (
                        left < right &&
                        nums[left] === nums[left + 1]
                    ) {
                        left++;
                    }

                    while (
                        left < right &&
                        nums[right] === nums[right - 1]
                    ) {
                        right--;
                    }

                    left++;
                    right--;

                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

// Example
console.log(fourSum([1,0,-1,0,-2,2], 0));



// 43. Product of array except self
Problem

Given an array nums, return an array where:

result[i] = product of all elements except nums[i]
Constraint
Do NOT use division operator.
Example
Input: [1,2,3,4]

Output: [24,12,8,6]
Optimized Prefix & Suffix Approach
Time Complexity
O(n)
Space Complexity
O(1) extra space (excluding output array)
JavaScript Code
function productExceptSelf(nums) {

    const result = new Array(nums.length).fill(1);

    // Prefix product
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // Suffix product
    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}

// Example
console.log(productExceptSelf([1,2,3,4]));

// 44. Subarray with given sum

Problem

Given an array and a target sum, find whether a subarray exists with the given sum.

Example
Input:
arr = [1, 4, 20, 3, 10, 5]
sum = 33

Output:
Subarray found from index 2 to 4
Sliding Window Approach (Positive Numbers)
Time Complexity
O(n)
JavaScript Code
function subarrayWithGivenSum(arr, target) {

    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {

        currentSum += arr[end];

        // Shrink window
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Found target
        if (currentSum === target) {
            return [start, end];
        }
    }

    return -1;
}

// Example
console.log(subarrayWithGivenSum([1,4,20,3,10,5], 33));


// 45. Longest subarray with sum K
Problem

Find the length of the longest subarray whose sum equals K.

Example
Input:
arr = [1, 2, 3, 1, 1, 1, 1]
k = 6

Output:
4

Explanation:

[3,1,1,1]
Prefix Sum + HashMap Approach
Time Complexity
O(n)
JavaScript Code
function longestSubarraySumK(arr, k) {

    const map = new Map();

    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

        // If sum itself equals k
        if (sum === k) {
            maxLen = i + 1;
        }

        // Check previous prefix sum
        if (map.has(sum - k)) {
            maxLen = Math.max(maxLen, i - map.get(sum - k));
        }

        // Store first occurrence only
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return maxLen;
}

// Example
console.log(longestSubarraySumK([1,2,3,1,1,1,1], 6));


// 46. Count subarrays with sum K

Problem

Count total subarrays whose sum equals K.

Example
Input:
nums = [1,1,1]
k = 2

Output:
2
Prefix Sum + HashMap
Time Complexity
O(n)
JavaScript Code
function countSubarrays(nums, k) {

    const map = new Map();

    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let num of nums) {

        sum += num;

        // Check if (sum-k) exists
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // Store frequency
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

// Example
console.log(countSubarrays([1,1,1], 2));



// 47. Maximum product subarray

Product Subarray
Problem

Find the contiguous subarray with the largest product.

Example
Input:
[2,3,-2,4]

Output:
6

Explanation:

[2,3] => 6
Optimized Dynamic Approach
Important

Because negative numbers can become positive after multiplication:

Track both:
maxProduct
minProduct
Time Complexity
O(n)
JavaScript Code
function maxProductSubarray(nums) {

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {

        let current = nums[i];

        // Swap when negative
        if (current < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(current, maxProd * current);
        minProd = Math.min(current, minProd * current);

        result = Math.max(result, maxProd);
    }

    return result;
}

// Example
console.log(maxProductSubarray([2,3,-2,4]));



// 48. Find peak element

Problem

A peak element is an element that is greater than its neighbors.

Return the index of any peak element.

Example
Input: [1,2,3,1]

Output: 2

Explanation:

3 is a peak element
Binary Search Approach
Time Complexity
O(log n)
JavaScript Code
function findPeakElement(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        // Peak on right side
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            // Peak on left side
            right = mid;
        }
    }

    return left;
}

// Example
console.log(findPeakElement([1,2,3,1]));



// 49. Sort colors (Dutch National Flag)
Problem

Sort an array containing only:

0, 1, 2

Without using built-in sort.

Example
Input: [2,0,2,1,1,0]

Output: [0,0,1,1,2,2]
Dutch National Flag Algorithm
Time Complexity
O(n)
Space Complexity
O(1)
JavaScript Code
function sortColors(nums) {

    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {

        if (nums[mid] === 0) {

            [nums[low], nums[mid]] =
            [nums[mid], nums[low]];

            low++;
            mid++;

        } else if (nums[mid] === 1) {

            mid++;

        } else {

            [nums[mid], nums[high]] =
            [nums[high], nums[mid]];

            high--;
        }
    }

    return nums;
}

// Example
console.log(sortColors([2,0,2,1,1,0]));

// 50. Merge intervals

Problem

Merge all overlapping intervals.

Example
Input:
[[1,3],[2,6],[8,10],[15,18]]

Output:
[[1,6],[8,10],[15,18]]
Sorting + Merge Approach
Time Complexity
O(n log n)
JavaScript Code
function mergeIntervals(intervals) {

    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {

        let last = result[result.length - 1];
        let current = intervals[i];

        // Overlapping intervals
        if (current[0] <= last[1]) {

            last[1] = Math.max(last[1], current[1]);

        } else {

            result.push(current);
        }
    }

    return result;
}

// Example
console.log(
    mergeIntervals([[1,3],[2,6],[8,10],[15,18]])
);


// 51. Insert interval

Problem

Insert a new interval into existing intervals and merge if needed.

Example
Input:
intervals = [[1,3],[6,9]]
newInterval = [2,5]

Output:
[[1,5],[6,9]]
Optimized Approach
Time Complexity
O(n)
JavaScript Code
function insertInterval(intervals, newInterval) {

    const result = [];
    let i = 0;

    // Add non-overlapping intervals before newInterval
    while (
        i < intervals.length &&
        intervals[i][1] < newInterval[0]
    ) {
        result.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals
    while (
        i < intervals.length &&
        intervals[i][0] <= newInterval[1]
    ) {

        newInterval[0] = Math.min(
            newInterval[0],
            intervals[i][0]
        );

        newInterval[1] = Math.max(
            newInterval[1],
            intervals[i][1]
        );

        i++;
    }

    result.push(newInterval);

    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// Example
console.log(
    insertInterval([[1,3],[6,9]], [2,5])
);



// 52. Next permutation

Problem

Rearrange numbers into the next greater permutation.

If not possible:

return lowest possible order (ascending).
Example
Input: [1,2,3]

Output: [1,3,2]
Optimized Approach
Steps
Find first decreasing element from right.
Find next greater element.
Swap them.
Reverse remaining part.
Time Complexity
O(n)
JavaScript Code
function nextPermutation(nums) {

    let i = nums.length - 2;

    // Find decreasing element
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // If found
    if (i >= 0) {

        let j = nums.length - 1;

        // Find next greater element
        while (nums[j] <= nums[i]) {
            j--;
        }

        // Swap
        [nums[i], nums[j]] =
        [nums[j], nums[i]];
    }

    // Reverse remaining part
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {

        [nums[left], nums[right]] =
        [nums[right], nums[left]];

        left++;
        right--;
    }

    return nums;
}

// Example
console.log(nextPermutation([1,2,3]));



// 53. Rearrange array alternately

Problem

Rearrange array in alternating:

maximum
minimum
second maximum
second minimum
Example
Input:
[1,2,3,4,5,6]

Output:
[6,1,5,2,4,3]
Two Pointer Approach
Time Complexity
O(n)
JavaScript Code
function rearrangeAlternately(arr) {

    let result = [];

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        if (left !== right) {
            result.push(arr[right]);
            result.push(arr[left]);
        } else {
            result.push(arr[left]);
        }

        left++;
        right--;
    }

    return result;
}

// Example
console.log(rearrangeAlternately([1,2,3,4,5,6]));


// 54. Set matrix zeroes

Problem

If any cell contains 0,
set its entire row and column to 0.

Example
Input:
[
 [1,1,1],
 [1,0,1],
 [1,1,1]
]

Output:
[
 [1,0,1],
 [0,0,0],
 [1,0,1]
]
Optimized Approach
Time Complexity
O(m × n)
JavaScript Code
function setZeroes(matrix) {

    const rows = new Set();
    const cols = new Set();

    // Find zeroes
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[0].length; j++) {

            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    // Set rows to zero
    for (let row of rows) {

        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }

    // Set cols to zero
    for (let col of cols) {

        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }

    return matrix;
}

// Example
console.log(
    setZeroes([
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ])
);


// 55. Spiral matrix traversal

Problem

Print matrix elements in spiral order.

Example
Input:
[
 [1,2,3],
 [4,5,6],
 [7,8,9]
]

Output:
[1,2,3,6,9,8,7,4,5]
Boundary Traversal Approach
Time Complexity
O(m × n)
JavaScript Code
function spiralOrder(matrix) {

    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;

    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {

        // Left → Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Top → Bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Right → Left
        if (top <= bottom) {

            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }

            bottom--;
        }

        // Bottom → Top
        if (left <= right) {

            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }

            left++;
        }
    }

    return result;
}

// Example
console.log(
    spiralOrder([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ])
);



// 56. Rotate matrix (90°)

Problem

Rotate matrix by 90 degrees clockwise.

Example
Input:
[
 [1,2,3],
 [4,5,6],
 [7,8,9]
]

Output:
[
 [7,4,1],
 [8,5,2],
 [9,6,3]
]
Transpose + Reverse Approach
Time Complexity
O(n²)
JavaScript Code
function rotateMatrix(matrix) {

    let n = matrix.length;

    // Transpose
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            [matrix[i][j], matrix[j][i]] =
            [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row
    for (let row of matrix) {
        row.reverse();
    }

    return matrix;
}

// Example
console.log(
    rotateMatrix([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ])
);



// 57. Search in rotated sorted array

Problem

Search target in rotated sorted array.

Return index if found else -1.

Example
Input:
nums = [4,5,6,7,0,1,2]
target = 0

Output:
4
Modified Binary Search
Time Complexity
O(log n)
JavaScript Code
function searchRotatedArray(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Left half sorted
        if (nums[left] <= nums[mid]) {

            if (
                target >= nums[left] &&
                target < nums[mid]
            ) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        } else {

            // Right half sorted
            if (
                target > nums[mid] &&
                target <= nums[right]
            ) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

// Example
console.log(
    searchRotatedArray([4,5,6,7,0,1,2], 0)
);



// 58. Find minimum in rotated array

Problem

Find the minimum element in a rotated sorted array.

Example
Input:
[4,5,6,7,0,1,2]

Output:
0
Binary Search Approach
Time Complexity
O(log n)
JavaScript Code
function findMin(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        // Minimum in right half
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Minimum in left half including mid
            right = mid;
        }
    }

    return nums[left];
}

// Example
console.log(findMin([4,5,6,7,0,1,2]));



// 59. Majority element II (> n/3)

Problem

Find all elements appearing more than:

n / 3

times.

At most 2 elements can exist.

Example
Input:
[3,2,3]

Output:
[3]
Boyer-Moore Voting Algorithm
Time Complexity
O(n)
Space Complexity
O(1)
JavaScript Code
function majorityElement(nums) {

    let candidate1 = null;
    let candidate2 = null;

    let count1 = 0;
    let count2 = 0;

    // Find candidates
    for (let num of nums) {

        if (num === candidate1) {
            count1++;

        } else if (num === candidate2) {
            count2++;

        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;

        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;

        } else {
            count1--;
            count2--;
        }
    }

    // Verify candidates
    count1 = 0;
    count2 = 0;

    for (let num of nums) {

        if (num === candidate1) count1++;
        if (num === candidate2) count2++;
    }

    let result = [];

    if (count1 > nums.length / 3) {
        result.push(candidate1);
    }

    if (
        candidate2 !== candidate1 &&
        count2 > nums.length / 3
    ) {
        result.push(candidate2);
    }

    return result;
}

// Example
console.log(majorityElement([3,2,3]));



// 60. Find repeating and missing number

Problem

Given array from:

1 to n

One number is missing and one number repeats.

Find both.

Example
Input:
[4,3,6,2,1,1]

Output:
Repeating = 1
Missing = 5
Hashing Approach
Time Complexity
O(n)
JavaScript Code
function findMissingAndRepeating(arr) {

    const set = new Set();

    let repeating = -1;
    let missing = -1;

    // Find repeating
    for (let num of arr) {

        if (set.has(num)) {
            repeating = num;
        }

        set.add(num);
    }

    // Find missing
    for (let i = 1; i <= arr.length; i++) {

        if (!set.has(i)) {
            missing = i;
            break;
        }
    }

    return {
        repeating,
        missing
    };
}

// Example
console.log(
    findMissingAndRepeating([4,3,6,2,1,1])
);



// 61. Longest consecutive sequence

Problem

Find the length of the longest consecutive elements sequence.

Example
Input:
[100,4,200,1,3,2]

Output:
4

Explanation:

[1,2,3,4]
HashSet Approach
Time Complexity
O(n)
JavaScript Code
function longestConsecutive(nums) {

    const set = new Set(nums);

    let longest = 0;

    for (let num of set) {

        // Start of sequence
        if (!set.has(num - 1)) {

            let current = num;
            let streak = 1;

            while (set.has(current + 1)) {
                current++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    return longest;
}

// Example
console.log(
    longestConsecutive([100,4,200,1,3,2])
);


// 62. Subarray with XOR K

Problem

Count subarrays having XOR equal to K.

Example
Input:
arr = [4,2,2,6,4]
k = 6

Output:
4
Prefix XOR + HashMap
Time Complexity
O(n)
JavaScript Code
function subarrayXor(arr, k) {

    const map = new Map();

    let xr = 0;
    let count = 0;

    map.set(0, 1);

    for (let num of arr) {

        xr = xr ^ num;

        // Required XOR
        let x = xr ^ k;

        if (map.has(x)) {
            count += map.get(x);
        }

        map.set(
            xr,
            (map.get(xr) || 0) + 1
        );
    }

    return count;
}

// Example
console.log(
    subarrayXor([4,2,2,6,4], 6)
);



// 63. Count inversions

roblem

Count pairs (i, j) such that:

i < j && arr[i] > arr[j]
Example
Input:
[8,4,2,1]

Output:
6

Explanation:

(8,4), (8,2), (8,1),
(4,2), (4,1),
(2,1)
Merge Sort Approach
Time Complexity
O(n log n)
JavaScript Code
function countInversions(arr) {

    let count = 0;

    function mergeSort(left, right) {

        if (left >= right) return;

        let mid = Math.floor((left + right) / 2);

        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        merge(left, mid, right);
    }

    function merge(left, mid, right) {

        let temp = [];

        let i = left;
        let j = mid + 1;

        while (i <= mid && j <= right) {

            if (arr[i] <= arr[j]) {

                temp.push(arr[i]);
                i++;

            } else {

                temp.push(arr[j]);

                // Count inversions
                count += (mid - i + 1);

                j++;
            }
        }

        while (i <= mid) {
            temp.push(arr[i++]);
        }

        while (j <= right) {
            temp.push(arr[j++]);
        }

        for (let k = left; k <= right; k++) {
            arr[k] = temp[k - left];
        }
    }

    mergeSort(0, arr.length - 1);

    return count;
}

// Example
console.log(countInversions([8,4,2,1]));



// 64. Minimum platforms (interval problem)

Problem

Find minimum number of railway platforms required so that no train waits.

Example
Input:
arr = [900, 940, 950, 1100, 1500, 1800]
dep = [910, 1200, 1120, 1130, 1900, 2000]

Output:
3
Sorting + Two Pointer Approach
Time Complexity
O(n log n)
JavaScript Code
function findPlatforms(arr, dep) {

    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let platforms = 1;
    let maxPlatforms = 1;

    let i = 1;
    let j = 0;

    while (i < arr.length && j < dep.length) {

        // Train arrives
        if (arr[i] <= dep[j]) {

            platforms++;
            i++;

        } else {

            // Train departs
            platforms--;
            j++;
        }

        maxPlatforms = Math.max(
            maxPlatforms,
            platforms
        );
    }

    return maxPlatforms;
}

// Example
console.log(
    findPlatforms(
        [900,940,950,1100,1500,1800],
        [910,1200,1120,1130,1900,2000]
    )
);



// 65. Gas station problem

Problem

There are gas stations in a circle.

Find starting index from where you can complete the circuit.

Return:

-1

if impossible.

Example
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output:
3
Greedy Approach
Time Complexity
O(n)
JavaScript Code
function canCompleteCircuit(gas, cost) {

    let total = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {

        let balance = gas[i] - cost[i];

        total += balance;
        tank += balance;

        // Cannot continue
        if (tank < 0) {

            start = i + 1;
            tank = 0;
        }
    }

    return total >= 0 ? start : -1;
}

// Example
console.log(
    canCompleteCircuit(
        [1,2,3,4,5],
        [3,4,5,1,2]
    )
);



// 66. Jump game

roblem

Determine if you can reach the last index.

Each element represents maximum jump length.

Example
Input:
[2,3,1,1,4]

Output:
true
Greedy Approach
Time Complexity
O(n)
JavaScript Code
function canJump(nums) {

    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {

        // Cannot reach this index
        if (i > maxReach) {
            return false;
        }

        maxReach = Math.max(
            maxReach,
            i + nums[i]
        );
    }

    return true;
}

// Example
console.log(canJump([2,3,1,1,4]));



// 67. Jump game II

Problem

Find minimum jumps needed to reach last index.

Example
Input:
[2,3,1,1,4]

Output:
2

Explanation:

2 → 3 → 4
Greedy BFS-Like Approach
Time Complexity
O(n)
JavaScript Code
function jump(nums) {

    let jumps = 0;

    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        farthest = Math.max(
            farthest,
            i + nums[i]
        );

        // End of current jump range
        if (i === currentEnd) {

            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
}

// Example
console.log(jump([2,3,1,1,4]));



// 68. Container with most water

Problem

Find two lines that together with the x-axis form a container containing the maximum water.

Example
Input:
[1,8,6,2,5,4,8,3,7]

Output:
49
Two Pointer Approach
Time Complexity
O(n)
JavaScript Code
function maxArea(height) {

    let left = 0;
    let right = height.length - 1;

    let maxWater = 0;

    while (left < right) {

        let width = right - left;

        let currentWater =
            Math.min(height[left], height[right]) * width;

        maxWater = Math.max(maxWater, currentWater);

        // Move smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Example
console.log(
    maxArea([1,8,6,2,5,4,8,3,7])
);


// 69. Trapping rain water



Problem

Given elevation map, calculate trapped rain water.

Example
Input:
[0,1,0,2,1,0,1,3,2,1,2,1]

Output:
6
Two Pointer Optimized Approach
Time Complexity
O(n)
Space Complexity
O(1)
JavaScript Code
function trap(height) {

    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let water = 0;

    while (left < right) {

        if (height[left] < height[right]) {

            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }

            left++;

        } else {

            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }

            right--;
        }
    }

    return water;
}

// Example
console.log(
    trap([0,1,0,2,1,0,1,3,2,1,2,1])
);




// 70. Maximum sum circular subarray

Problem

Find maximum subarray sum in a circular array.

Example
Input:
[5,-3,5]

Output:
10

Explanation:

Circular subarray:
[5] + [5]
Kadane’s Algorithm + Circular Logic
Time Complexity
O(n)
JavaScript Code
function maxSubarraySumCircular(nums) {

    let total = 0;

    let maxSum = nums[0];
    let currentMax = 0;

    let minSum = nums[0];
    let currentMin = 0;

    for (let num of nums) {

        currentMax = Math.max(num, currentMax + num);
        maxSum = Math.max(maxSum, currentMax);

        currentMin = Math.min(num, currentMin + num);
        minSum = Math.min(minSum, currentMin);

        total += num;
    }

    // All numbers negative
    if (maxSum < 0) {
        return maxSum;
    }

    return Math.max(maxSum, total - minSum);
}

// Example
console.log(
    maxSubarraySumCircular([5,-3,5])
);




// ---

// ### Strings (71–90)

// 71. Longest substring without repeating characters

Problem

Find length of longest substring without repeating characters.

Example
Input:
"abcabcbb"

Output:
3

Explanation:

"abc"
Sliding Window + Set
Time Complexity
O(n)
JavaScript Code
function lengthOfLongestSubstring(s) {

    let set = new Set();

    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {

        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        maxLen = Math.max(
            maxLen,
            right - left + 1
        );
    }

    return maxLen;
}

// Example
console.log(
    lengthOfLongestSubstring("abcabcbb")
);



// 72. Longest palindromic substring


Problem

Find the longest palindromic substring.

Example
Input:
"babad"

Output:
"bab"
Expand Around Center Approach
Time Complexity
O(n²)
JavaScript Code
function longestPalindrome(s) {

    if (s.length < 1) return "";

    let start = 0;
    let end = 0;

    function expand(left, right) {

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {

        let len1 = expand(i, i);
        let len2 = expand(i, i + 1);

        let len = Math.max(len1, len2);

        if (len > end - start) {

            start = i - Math.floor((len - 1) / 2);

            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

// Example
console.log(longestPalindrome("babad"));




// 73. Count palindromic substrings

Problem

Count all palindromic substrings.

Example
Input:
"aaa"

Output:
6

Explanation:

"a", "a", "a", "aa", "aa", "aaa"
Expand Around Center
Time Complexity
O(n²)
JavaScript Code
function countSubstrings(s) {

    let count = 0;

    function expand(left, right) {

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {

        // Odd length
        expand(i, i);

        // Even length
        expand(i, i + 1);
    }

    return count;
}

// Example
console.log(countSubstrings("aaa"));



// 74. Group anagrams

Problem

Group strings that are anagrams of each other.

Example
Input:
["eat","tea","tan","ate","nat","bat"]

Output:
[
 ["eat","tea","ate"],
 ["tan","nat"],
 ["bat"]
]
HashMap + Sorted Key
Time Complexity
O(n * k log k)
k = word length
JavaScript Code
function groupAnagrams(strs) {

    const map = new Map();

    for (let word of strs) {

        let key =
            word.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
}

// Example
console.log(
    groupAnagrams(
        ["eat","tea","tan","ate","nat","bat"]
    )
);



// 75. Minimum window substring

Problem

Find the minimum window in s
which contains all characters of t.

Example
Input:
s = "ADOBECODEBANC"
t = "ABC"

Output:
"BANC"
Sliding Window + HashMap
Time Complexity
O(n)
JavaScript Code
function minWindow(s, t) {

    if (!s || !t) return "";

    const map = {};

    for (let char of t) {
        map[char] = (map[char] || 0) + 1;
    }

    let left = 0;
    let count = t.length;

    let minLen = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {

        if (map[s[right]] > 0) {
            count--;
        }

        map[s[right]]--;

        while (count === 0) {

            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            map[s[left]]++;

            if (map[s[left]] > 0) {
                count++;
            }

            left++;
        }
    }

    return minLen === Infinity
        ? ""
        : s.substring(start, start + minLen);
}

// Example
console.log(
    minWindow("ADOBECODEBANC", "ABC")
);



// 76. Valid parentheses

Problem

Check if parentheses are valid.

Valid pairs:

(), {}, []
Example
Input:
"()[]{}"

Output:
true
Stack Approach
Time Complexity
O(n)
JavaScript Code
function isValid(s) {

    const stack = [];

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {

        if (
            char === '(' ||
            char === '{' ||
            char === '['
        ) {

            stack.push(char);

        } else {

            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example
console.log(isValid("()[]{}"));



// 77. Generate parentheses

Problem

Generate all combinations of well-formed parentheses.

Example
Input:
n = 3

Output:
[
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
]
Backtracking Approach
Time Complexity
Catalan Number Complexity
JavaScript Code
function generateParenthesis(n) {

    const result = [];

    function backtrack(current, open, close) {

        // Valid combination
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        // Add opening bracket
        if (open < n) {
            backtrack(
                current + '(',
                open + 1,
                close
            );
        }

        // Add closing bracket
        if (close < open) {
            backtrack(
                current + ')',
                open,
                close + 1
            );
        }
    }

    backtrack('', 0, 0);

    return result;
}

// Example
console.log(generateParenthesis(3));


// 78. String compression

Problem

Compress repeated characters.

Example
Input:
["a","a","b","b","c","c","c"]

Output:
["a","2","b","2","c","3"]
Two Pointer Approach
Time Complexity
O(n)
JavaScript Code
function compress(chars) {

    let index = 0;
    let i = 0;

    while (i < chars.length) {

        let char = chars[i];
        let count = 0;

        while (
            i < chars.length &&
            chars[i] === char
        ) {
            i++;
            count++;
        }

        chars[index++] = char;

        if (count > 1) {

            for (let c of count.toString()) {
                chars[index++] = c;
            }
        }
    }

    return index;
}

// Example
let chars = ["a","a","b","b","c","c","c"];

console.log(compress(chars));
console.log(chars);



// 79. Decode string (e.g. 3[a2[c]])

Problem

Decode encoded strings like:

3[a2[c]]
Example
Input:
"3[a2[c]]"

Output:
"accaccacc"
Stack Approach
Time Complexity
O(n)
JavaScript Code
function decodeString(s) {

    let stack = [];

    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {

        if (!isNaN(char)) {

            currentNum =
                currentNum * 10 + Number(char);

        } else if (char === '[') {

            stack.push(currentStr);
            stack.push(currentNum);

            currentStr = '';
            currentNum = 0;

        } else if (char === ']') {

            let num = stack.pop();
            let prevStr = stack.pop();

            currentStr =
                prevStr + currentStr.repeat(num);

        } else {

            currentStr += char;
        }
    }

    return currentStr;
}

// Example
console.log(decodeString("3[a2[c]]"));



// 80. Zigzag conversion

Problem

Convert string into zigzag pattern.

Example
Input:
s = "PAYPALISHIRING"
numRows = 3

Output:
"PAHNAPLSIIGYIR"
Simulation Approach
Time Complexity
O(n)
JavaScript Code
function convert(s, numRows) {

    if (numRows === 1) return s;

    let rows = new Array(numRows)
        .fill('')
        .map(() => '');

    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {

        rows[currentRow] += char;

        if (
            currentRow === 0 ||
            currentRow === numRows - 1
        ) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
}

// Example
console.log(
    convert("PAYPALISHIRING", 3)
);



// 81. Implement strStr()

roblem

Find the first occurrence of needle in haystack.

Return:

starting index if found
-1 otherwise
Example
Input:
haystack = "hello"
needle = "ll"

Output:
2
Brute Force Approach
Time Complexity
O((n-m+1) * m)
JavaScript Code
function strStr(haystack, needle) {

    if (needle === "") return 0;

    for (
        let i = 0;
        i <= haystack.length - needle.length;
        i++
    ) {

        let j = 0;

        while (
            j < needle.length &&
            haystack[i + j] === needle[j]
        ) {
            j++;
        }

        if (j === needle.length) {
            return i;
        }
    }

    return -1;
}

// Example
console.log(strStr("hello", "ll"));



// 82. Rabin-Karp string matching

Problem

Efficient string searching using hashing.

Example
Input:
text = "ABCCDDAEFG"
pattern = "CDD"

Output:
Pattern found at index 3
Rolling Hash Technique
Time Complexity
Average: O(n + m)
JavaScript Code
function rabinKarp(text, pattern) {

    const prime = 101;

    let patternHash = 0;
    let windowHash = 0;

    let h = 1;

    let m = pattern.length;
    let n = text.length;

    // Calculate h = pow(prime, m-1)
    for (let i = 0; i < m - 1; i++) {
        h *= prime;
    }

    // Initial hash
    for (let i = 0; i < m; i++) {

        patternHash =
            patternHash * prime +
            pattern.charCodeAt(i);

        windowHash =
            windowHash * prime +
            text.charCodeAt(i);
    }

    // Sliding window
    for (let i = 0; i <= n - m; i++) {

        // Hash match
        if (patternHash === windowHash) {

            let match = true;

            for (let j = 0; j < m; j++) {

                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                console.log(
                    "Pattern found at index",
                    i
                );
            }
        }

        // Recalculate hash
        if (i < n - m) {

            windowHash =
                (windowHash -
                    text.charCodeAt(i) * h) *
                    prime +
                text.charCodeAt(i + m);
        }
    }
}

// Example
rabinKarp("ABCCDDAEFG", "CDD");



// 83. KMP algorithm

Problem

Efficient substring search using:

LPS array

(LPS = Longest Prefix Suffix)

Example
Input:
text = "ababcabcabababd"
pattern = "ababd"

Output:
Pattern found at index 10
KMP Algorithm
Time Complexity
O(n + m)
JavaScript Code
function computeLPS(pattern) {

    let lps = new Array(pattern.length).fill(0);

    let length = 0;
    let i = 1;

    while (i < pattern.length) {

        if (pattern[i] === pattern[length]) {

            length++;
            lps[i] = length;
            i++;

        } else {

            if (length !== 0) {

                length = lps[length - 1];

            } else {

                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function KMP(text, pattern) {

    let lps = computeLPS(pattern);

    let i = 0;
    let j = 0;

    while (i < text.length) {

        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        // Pattern found
        if (j === pattern.length) {

            console.log(
                "Pattern found at index",
                i - j
            );

            j = lps[j - 1];

        } else if (
            i < text.length &&
            text[i] !== pattern[j]
        ) {

            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
}

// Example
KMP("ababcabcabababd", "ababd");



// 84. Check isomorphic strings

Problem

Two strings are isomorphic if characters can map one-to-one.

Example
Input:
s = "egg"
t = "add"

Output:
true
HashMap Mapping Approach
Time Complexity
O(n)
JavaScript Code
function isIsomorphic(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {

        let charS = s[i];
        let charT = t[i];

        if (
            mapST.has(charS) &&
            mapST.get(charS) !== charT
        ) {
            return false;
        }

        if (
            mapTS.has(charT) &&
            mapTS.get(charT) !== charS
        ) {
            return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
}

// Example
console.log(isIsomorphic("egg", "add"));


// 85. Word pattern

Problem

Check if string follows same pattern.

Example
Input:
pattern = "abba"
s = "dog cat cat dog"

Output:
true
HashMap Bi-Directional Mapping
Time Complexity
O(n)
JavaScript Code
function wordPattern(pattern, s) {

    let words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < pattern.length; i++) {

        let char = pattern[i];
        let word = words[i];

        if (
            map1.has(char) &&
            map1.get(char) !== word
        ) {
            return false;
        }

        if (
            map2.has(word) &&
            map2.get(word) !== char
        ) {
            return false;
        }

        map1.set(char, word);
        map2.set(word, char);
    }

    return true;
}

// Example
console.log(
    wordPattern("abba", "dog cat cat dog")
);



// 86. Longest repeating character replacement

Problem

Find the length of the longest substring containing the same character after replacing at most k characters.

Example
Input:
s = "AABABBA"
k = 1

Output:
4

Explanation:

"AABA" or "ABBA"
Sliding Window Approach
Time Complexity
O(n)
JavaScript Code
function characterReplacement(s, k) {

    const count = {};

    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {

        count[s[right]] =
            (count[s[right]] || 0) + 1;

        maxFreq = Math.max(
            maxFreq,
            count[s[right]]
        );

        // Invalid window
        while (
            (right - left + 1) - maxFreq > k
        ) {

            count[s[left]]--;
            left++;
        }

        maxLen = Math.max(
            maxLen,
            right - left + 1
        );
    }

    return maxLen;
}

// Example
console.log(
    characterReplacement("AABABBA", 1)
);



// 87. Partition labels

Problem

Partition string into as many parts as possible such that each character appears in only one part.

Example
Input:
"ababcbacadefegdehijhklij"

Output:
[9,7,8]
Greedy Approach
Time Complexity
O(n)
JavaScript Code
function partitionLabels(s) {

    const lastIndex = {};

    // Store last occurrence
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    let result = [];

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {

        end = Math.max(
            end,
            lastIndex[s[i]]
        );

        // Partition complete
        if (i === end) {

            result.push(end - start + 1);

            start = i + 1;
        }
    }

    return result;
}

// Example
console.log(
    partitionLabels(
        "ababcbacadefegdehijhklij"
    )
);



// 88. Remove adjacent duplicates

Problem

Remove all adjacent duplicate characters repeatedly.

Example
Input:
"abbaca"

Output:
"ca"
Stack Approach
Time Complexity
O(n)
JavaScript Code
function removeDuplicates(s) {

    const stack = [];

    for (let char of s) {

        if (
            stack.length &&
            stack[stack.length - 1] === char
        ) {

            stack.pop();

        } else {

            stack.push(char);
        }
    }

    return stack.join('');
}

// Example
console.log(removeDuplicates("abbaca"));



// 89. Basic calculator (string parsing)

Problem

Evaluate a mathematical expression string.

Supports:

+, -, (, )
Example
Input:
"(1+(4+5+2)-3)+(6+8)"

Output:
23
Stack + Sign Handling
Time Complexity
O(n)
JavaScript Code
function calculate(s) {

    let stack = [];

    let result = 0;
    let number = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {

        let char = s[i];

        if (!isNaN(char) && char !== ' ') {

            number =
                number * 10 + Number(char);

        } else if (char === '+') {

            result += sign * number;

            number = 0;
            sign = 1;

        } else if (char === '-') {

            result += sign * number;

            number = 0;
            sign = -1;

        } else if (char === '(') {

            stack.push(result);
            stack.push(sign);

            result = 0;
            sign = 1;

        } else if (char === ')') {

            result += sign * number;

            number = 0;

            result *= stack.pop();
            result += stack.pop();
        }
    }

    result += sign * number;

    return result;
}

// Example
console.log(
    calculate("(1+(4+5+2)-3)+(6+8)")
);


// 90. Multiply strings (large numbers)

Problem

Multiply two very large numbers represented as strings.

Do NOT use:

BigInt

or direct integer conversion.

Example
Input:
num1 = "123"
num2 = "456"

Output:
"56088"
Manual Multiplication Approach
Time Complexity
O(n × m)
JavaScript Code
function multiply(num1, num2) {

    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let result = new Array(
        num1.length + num2.length
    ).fill(0);

    for (
        let i = num1.length - 1;
        i >= 0;
        i--
    ) {

        for (
            let j = num2.length - 1;
            j >= 0;
            j--
        ) {

            let mul =
                (num1[i] - '0') *
                (num2[j] - '0');

            let sum =
                mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;

            result[i + j] += Math.floor(sum / 10);
        }
    }

    // Remove leading zeros
    while (result[0] === 0) {
        result.shift();
    }

    return result.join('');
}

// Example
console.log(multiply("123", "456"));




// ---

// ## 🔴 HARD (Top Company Level 💀)

// ### Arrays (91–100)

// 91. Median of two sorted arrays

roblem

Find median of two sorted arrays.

Required Time Complexity:

O(log(min(n,m)))
Example
Input:
nums1 = [1,3]
nums2 = [2]

Output:
2
Binary Search Partition Approach
Time Complexity
O(log(min(n,m)))
JavaScript Code
function findMedianSortedArrays(nums1, nums2) {

    // Ensure nums1 is smaller
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(
            nums2,
            nums1
        );
    }

    let x = nums1.length;
    let y = nums2.length;

    let low = 0;
    let high = x;

    while (low <= high) {

        let partitionX =
            Math.floor((low + high) / 2);

        let partitionY =
            Math.floor((x + y + 1) / 2) -
            partitionX;

        let maxLeftX =
            partitionX === 0
                ? -Infinity
                : nums1[partitionX - 1];

        let minRightX =
            partitionX === x
                ? Infinity
                : nums1[partitionX];

        let maxLeftY =
            partitionY === 0
                ? -Infinity
                : nums2[partitionY - 1];

        let minRightY =
            partitionY === y
                ? Infinity
                : nums2[partitionY];

        // Correct partition
        if (
            maxLeftX <= minRightY &&
            maxLeftY <= minRightX
        ) {

            if ((x + y) % 2 === 0) {

                return (
                    Math.max(maxLeftX, maxLeftY) +
                    Math.min(minRightX, minRightY)
                ) / 2;
            }

            return Math.max(maxLeftX, maxLeftY);
        }

        // Move left
        else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        }

        // Move right
        else {
            low = partitionX + 1;
        }
    }
}

// Example
console.log(
    findMedianSortedArrays([1,3], [2])
);



// 92. Sliding window maximum

Problem

Find maximum in every window of size k.

Example
Input:
nums = [1,3,-1,-3,5,3,6,7]
k = 3

Output:
[3,3,5,5,6,7]
Monotonic Deque Approach
Time Complexity
O(n)
JavaScript Code
function maxSlidingWindow(nums, k) {

    const deque = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove out of window
        while (
            deque.length &&
            deque[0] <= i - k
        ) {
            deque.shift();
        }

        // Remove smaller elements
        while (
            deque.length &&
            nums[deque[deque.length - 1]] <
                nums[i]
        ) {
            deque.pop();
        }

        deque.push(i);

        // Window complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example
console.log(
    maxSlidingWindow(
        [1,3,-1,-3,5,3,6,7],
        3
    )
);



// 93. Largest rectangle in histogram

Problem

Find largest rectangle area in histogram.

Example
Input:
[2,1,5,6,2,3]

Output:
10
Monotonic Stack Approach
Time Complexity
O(n)
JavaScript Code
function largestRectangleArea(heights) {

    const stack = [];
    let maxArea = 0;

    heights.push(0);

    for (let i = 0; i < heights.length; i++) {

        while (
            stack.length &&
            heights[i] <
                heights[stack[stack.length - 1]]
        ) {

            let height =
                heights[stack.pop()];

            let width =
                stack.length === 0
                    ? i
                    : i -
                      stack[stack.length - 1] -
                      1;

            maxArea = Math.max(
                maxArea,
                height * width
            );
        }

        stack.push(i);
    }

    heights.pop();

    return maxArea;
}

// Example
console.log(
    largestRectangleArea([2,1,5,6,2,3])
);



// 94. Maximal rectangle (matrix)

Problem

Find largest rectangle containing only:

1's

in binary matrix.

Example
Input:
[
 ["1","0","1","0","0"],
 ["1","0","1","1","1"],
 ["1","1","1","1","1"],
 ["1","0","0","1","0"]
]

Output:
6
Histogram Conversion Approach
Time Complexity
O(rows × cols)
JavaScript Code
function maximalRectangle(matrix) {

    if (!matrix.length) return 0;

    let cols = matrix[0].length;

    let heights = new Array(cols).fill(0);

    let maxArea = 0;

    for (let row of matrix) {

        // Build histogram
        for (let i = 0; i < cols; i++) {

            heights[i] =
                row[i] === "1"
                    ? heights[i] + 1
                    : 0;
        }

        maxArea = Math.max(
            maxArea,
            largestRectangleArea(heights)
        );
    }

    return maxArea;
}

// Histogram helper
function largestRectangleArea(heights) {

    const stack = [];
    let maxArea = 0;

    heights.push(0);

    for (let i = 0; i < heights.length; i++) {

        while (
            stack.length &&
            heights[i] <
                heights[stack[stack.length - 1]]
        ) {

            let height =
                heights[stack.pop()];

            let width =
                stack.length === 0
                    ? i
                    : i -
                      stack[stack.length - 1] -
                      1;

            maxArea = Math.max(
                maxArea,
                height * width
            );
        }

        stack.push(i);
    }

    heights.pop();

    return maxArea;
}

// Example
console.log(
    maximalRectangle([
        ["1","0","1","0","0"],
        ["1","0","1","1","1"],
        ["1","1","1","1","1"],
        ["1","0","0","1","0"]
    ])
);




// 95. Split array largest sum


Problem

Split array into:

k subarrays

such that largest subarray sum is minimized.

Example
Input:
nums = [7,2,5,10,8]
k = 2

Output:
18

Explanation:

[7,2,5] and [10,8]

Largest sum = 18

Binary Search on Answer
Time Complexity
O(n log(sum))
JavaScript Code
function splitArray(nums, k) {

    let left = Math.max(...nums);
    let right = nums.reduce(
        (a, b) => a + b,
        0
    );

    function canSplit(maxSum) {

        let pieces = 1;
        let current = 0;

        for (let num of nums) {

            if (current + num > maxSum) {

                pieces++;
                current = num;

            } else {

                current += num;
            }
        }

        return pieces <= k;
    }

    while (left < right) {

        let mid =
            Math.floor((left + right) / 2);

        if (canSplit(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

// Example
console.log(
    splitArray([7,2,5,10,8], 2)
);




// 96. Count smaller elements after self

roblem

For each element, count how many smaller elements exist to its right.

Example
Input:
[5,2,6,1]

Output:
[2,1,1,0]
Merge Sort + Index Tracking
Time Complexity
O(n log n)
JavaScript Code
function countSmaller(nums) {

    let counts = new Array(nums.length).fill(0);

    let indexedNums = nums.map(
        (num, index) => [num, index]
    );

    function mergeSort(arr) {

        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);

        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }

    function merge(left, right) {

        let merged = [];

        let i = 0;
        let j = 0;

        while (
            i < left.length &&
            j < right.length
        ) {

            if (left[i][0] <= right[j][0]) {

                counts[left[i][1]] += j;

                merged.push(left[i]);
                i++;

            } else {

                merged.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {

            counts[left[i][1]] += j;

            merged.push(left[i]);
            i++;
        }

        while (j < right.length) {
            merged.push(right[j++]);
        }

        return merged;
    }

    mergeSort(indexedNums);

    return counts;
}

// Example
console.log(countSmaller([5,2,6,1]));



// 97. Maximum XOR of two numbers

roblem

Find maximum XOR of any two numbers in array.

Example
Input:
[3,10,5,25,2,8]

Output:
28

Explanation:

5 XOR 25 = 28
Trie / Bit Manipulation Approach
Time Complexity
O(32 × n)
JavaScript Code
function findMaximumXOR(nums) {

    let maxXor = 0;
    let mask = 0;

    for (let i = 31; i >= 0; i--) {

        mask |= (1 << i);

        let set = new Set();

        for (let num of nums) {
            set.add(num & mask);
        }

        let candidate =
            maxXor | (1 << i);

        for (let prefix of set) {

            if (
                set.has(prefix ^ candidate)
            ) {

                maxXor = candidate;
                break;
            }
        }
    }

    return maxXor;
}

// Example
console.log(
    findMaximumXOR([3,10,5,25,2,8])
);



// 98. Subarrays with K distinct integers

Problem

Count subarrays containing exactly K distinct integers.

Example
Input:
nums = [1,2,1,2,3]
k = 2

Output:
7
Sliding Window Trick
Formula
exactly(K) =
atMost(K) - atMost(K - 1)
JavaScript Code
function subarraysWithKDistinct(nums, k) {

    return atMost(nums, k) -
           atMost(nums, k - 1);
}

function atMost(nums, k) {

    let map = new Map();

    let left = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {

        map.set(
            nums[right],
            (map.get(nums[right]) || 0) + 1
        );

        while (map.size > k) {

            map.set(
                nums[left],
                map.get(nums[left]) - 1
            );

            if (map.get(nums[left]) === 0) {
                map.delete(nums[left]);
            }

            left++;
        }

        count += right - left + 1;
    }

    return count;
}

// Example
console.log(
    subarraysWithKDistinct(
        [1,2,1,2,3],
        2
    )
);



// 99. Shortest subarray with sum ≥ K

Problem

Find shortest non-empty subarray with sum at least K.

Example
Input:
nums = [2,-1,2]
k = 3

Output:
3
Prefix Sum + Monotonic Deque
Time Complexity
O(n)
JavaScript Code
function shortestSubarray(nums, k) {

    let n = nums.length;

    let prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] =
            prefix[i] + nums[i];
    }

    let deque = [];

    let minLen = Infinity;

    for (let i = 0; i < prefix.length; i++) {

        // Valid subarray
        while (
            deque.length &&
            prefix[i] -
            prefix[deque[0]] >= k
        ) {

            minLen = Math.min(
                minLen,
                i - deque.shift()
            );
        }

        // Maintain increasing deque
        while (
            deque.length &&
            prefix[i] <=
            prefix[deque[deque.length - 1]]
        ) {

            deque.pop();
        }

        deque.push(i);
    }

    return minLen === Infinity
        ? -1
        : minLen;
}

// Example
console.log(
    shortestSubarray([2,-1,2], 3)
);



// 100. First missing positive

Problem

Find the smallest missing positive integer.

Must use:

O(n) time
O(1) space
Example
Input:
[3,4,-1,1]

Output:
2
Cyclic Sort / Index Placement
Time Complexity
O(n)
JavaScript Code
function firstMissingPositive(nums) {

    let n = nums.length;

    // Place numbers correctly
    for (let i = 0; i < n; i++) {

        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {

            let correctIndex =
                nums[i] - 1;

            [nums[i], nums[correctIndex]] =
            [nums[correctIndex], nums[i]];
        }
    }

    // Find missing positive
    for (let i = 0; i < n; i++) {

        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
}

// Example
console.log(
    firstMissingPositive([3,4,-1,1])
);

// ---




