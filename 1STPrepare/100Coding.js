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
// 42. 4Sum problem
// 43. Product of array except self
// 44. Subarray with given sum
// 45. Longest subarray with sum K
// 46. Count subarrays with sum K
// 47. Maximum product subarray
// 48. Find peak element
// 49. Sort colors (Dutch National Flag)
// 50. Merge intervals
// 51. Insert interval
// 52. Next permutation
// 53. Rearrange array alternately
// 54. Set matrix zeroes
// 55. Spiral matrix traversal
// 56. Rotate matrix (90°)
// 57. Search in rotated sorted array
// 58. Find minimum in rotated array
// 59. Majority element II (> n/3)
// 60. Find repeating and missing number
// 61. Longest consecutive sequence
// 62. Subarray with XOR K
// 63. Count inversions
// 64. Minimum platforms (interval problem)
// 65. Gas station problem
// 66. Jump game
// 67. Jump game II
// 68. Container with most water
// 69. Trapping rain water
// 70. Maximum sum circular subarray

// ---

// ### Strings (71–90)

// 71. Longest substring without repeating characters
// 72. Longest palindromic substring
// 73. Count palindromic substrings
// 74. Group anagrams
// 75. Minimum window substring
// 76. Valid parentheses
// 77. Generate parentheses
// 78. String compression
// 79. Decode string (e.g. 3[a2[c]])
// 80. Zigzag conversion
// 81. Implement strStr()
// 82. Rabin-Karp string matching
// 83. KMP algorithm
// 84. Check isomorphic strings
// 85. Word pattern
// 86. Longest repeating character replacement
// 87. Partition labels
// 88. Remove adjacent duplicates
// 89. Basic calculator (string parsing)
// 90. Multiply strings (large numbers)

// ---

// ## 🔴 HARD (Top Company Level 💀)

// ### Arrays (91–100)

// 91. Median of two sorted arrays
// 92. Sliding window maximum
// 93. Largest rectangle in histogram
// 94. Maximal rectangle (matrix)
// 95. Split array largest sum
// 96. Count smaller elements after self
// 97. Maximum XOR of two numbers
// 98. Subarrays with K distinct integers
// 99. Shortest subarray with sum ≥ K
// 100. First missing positive

// ---

// # 💡 How to Prepare (Smart Strategy)

// Since you're targeting **React / Frontend interviews**, focus like this:

// * 🔥 MUST MASTER:

//   * Two Sum, 3Sum
//   * Kadane’s Algorithm
//   * Sliding Window (VERY IMPORTANT)
//   * Longest Substring Without Repeating
//   * Valid Parentheses
//   * Merge Intervals
//   * Subarray Sum problems

// * ⚡ PATTERNS TO LEARN:

//   * Two pointers
//   * Sliding window
//   * Prefix sum
//   * Hashing (Map/Set)
//   * Kadane
//   * Binary search on arrays
    


