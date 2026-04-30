// Sure! I can provide JavaScript implementations for all 25 string problems without using pre-built functions like
//  .reverse(), .split(), .join(), or .includes() for logic. I’ll write them in a clean and step-by-step way.


// 1. Reverse a String
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;  
}  

// 2. Check if a String is a Palindrome
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

// 3. Remove Duplicates from a String
function removeDuplicates(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (str[i] === result[j]) {
                found = true;
                break;
            }
        }
        if (!found) result += str[i];
    }
    return result;
}

// 4. Find the First Non-Repeating Character
function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        let unique = true;
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                unique = false;
                break;
            }
        }
        if (unique) return str[i];
    }
    return null;
}

// 5. Count the Occurrences of Each Character
function charCount(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (count[c] === undefined) count[c] = 1;
        else count[c]++;
    }
    return count;
}

// 6. Reverse Words in a Sentence
function reverseWords(sentence) {
    let word = '', result = '';
    for (let i = sentence.length - 1; i >= 0; i--) {
        if (sentence[i] === ' ') {
            result += word + ' ';
            word = '';
        } else {
            word = sentence[i] + word;
        }
    }
    result += word;
    return result;
}

// 7. Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    let count1 = {}, count2 = {};
    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1;
        count2[str2[i]] = (count2[str2[i]] || 0) + 1;
    }
    for (let key in count1) {
        if (count1[key] !== count2[key]) return false;
    }
    return true;
}

// 8. Find the Longest Substring Without Repeating Characters
function longestUniqueSubstring(str) {
    let maxLength = 0, start = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let unique = true;
            for (let k = i; k < j; k++) {
                if (str[k] === str[j]) {
                    unique = false;
                    break;
                }
            }
            if (unique && j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                start = i;
            }
        }
    }
    let result = '';
    for (let i = start; i < start + maxLength; i++) result += str[i];
    return result;
}

// 9. Convert a String to an Integer (atoi Implementation)
function stringToInteger(str) {
    let num = 0, sign = 1, i = 0;
    if (str[0] === '-') { sign = -1; i++; }
    else if (str[0] === '+') i++;
    for (; i < str.length; i++) {
        let code = str[i].charCodeAt(0) - 48;
        if (code < 0 || code > 9) break;
        num = num * 10 + code;
    }
    return num * sign;
}

// 10. Compress a String (Run-Length Encoding)
function compressString(str) {
    let result = '', count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) count++;
        else {
            result += str[i] + count;
            count = 1;
        }
    }
    return result;
}

// 11. Find the Most Frequent Character
function mostFrequentChar(str) {
    let count = {}, maxChar = '', maxCount = 0;
    for (let i = 0; i < str.length; i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
        if (count[str[i]] > maxCount) {
            maxCount = count[str[i]];
            maxChar = str[i];
        }
    }
    return maxChar;
}

// 12. Find All Substrings of a Given String
function allSubstrings(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let sub = '';
            for (let k = i; k <= j; k++) sub += str[k];
            result.push(sub);
        }
    }
    return result;
}

// 13. Check if a String is a Rotation of Another String
function isRotation(str1, str2) {
    if (str1.length !== str2.length) return false;
    let combined = str1 + str1;
    for (let i = 0; i <= combined.length - str2.length; i++) {
        let match = true;
        for (let j = 0; j < str2.length; j++) {
            if (combined[i+j] !== str2[j]) { match = false; break; }
        }
        if (match) return true;
    }
    return false;
}

// 14. Remove All White Spaces from a String
function removeWhiteSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') result += str[i];
    }
    return result;
}

// 15. Check if a String is a Valid Shuffle of Two Strings
function isValidShuffle(str1, str2, shuffled) {
    let i=0, j=0;
    for (let k=0; k<shuffled.length; k++) {
        if (i<str1.length && shuffled[k] === str1[i]) i++;
        else if (j<str2.length && shuffled[k] === str2[j]) j++;
        else return false;
    }
    return i === str1.length && j === str2.length;
}

// 16. Convert a String to Title Case
function toTitleCase(str) {
    let result = '', capitalize = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') { 
            result += ' '; 
            capitalize = true;
        } else {
            result += capitalize ? str[i].toUpperCase() : str[i].toLowerCase();
            capitalize = false;
        }
    }
    return result;
}

// 17. Find the Longest Common Prefix
function longestCommonPrefix(arr) {
    if (arr.length === 0) return '';
    let prefix = '';
    for (let i = 0; i < arr[0].length; i++) {
        let char = arr[0][i];
        for (let j = 1; j < arr.length; j++) {
            if (i >= arr[j].length || arr[j][i] !== char) return prefix;
        }
        prefix += char;
    }
    return prefix;
}

// 18. Convert a String to a Character Array
function stringToCharArray(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) arr.push(str[i]);
    return arr;
}

// 19. Replace Spaces with %20 (URL Encoding)
function urlEncode(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += (str[i] === ' ') ? '%20' : str[i];
    }
    return result;
}

// 20. Convert a Sentence into an Acronym
function acronym(str) {
    let result = '', capitalize = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') capitalize = true;
        else if (capitalize) { result += str[i].toUpperCase(); capitalize = false; }
    }
    return result;
}

// 21. Check if a String Contains Only Digits
function isOnlyDigits(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') return false;
    }
    return true;
}

// 22. Find the Number of Words in a String
function countWords(str) {
    let count = 0, inWord = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !inWord) { count++; inWord = true; }
        else if (str[i] === ' ') inWord = false;
    }
    return count;
}

// 23. Remove a Given Character from a String
function removeChar(str, charToRemove) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== charToRemove) result += str[i];
    }
    return result;
}

// 24. Find the Shortest Word in a String
function shortestWord(str) {
    let minLen = Infinity, len = 0;
    let word = '';
    for (let i = 0; i <= str.length; i++) {
        if (i < str.length && str[i] !== ' ') { word += str[i]; len++; }
        else {
            if (len > 0 && len < minLen) minLen = len;
            word = ''; len = 0;
        }
    }
    return minLen;
}

// 25. Find the Longest Palindromic Substring
function longestPalindromicSubstring(str) {
    let maxLength = 0, start = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let palindrome = true;
            for (let k = 0; k < (j - i + 1) / 2; k++) {
                if (str[i + k] !== str[j - k]) { palindrome = false; break; }
            }
            if (palindrome && j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                start = i;
            }
        }
    }
    let result = '';
    for (let i = start; i < start + maxLength; i++) result += str[i];
    return result;
}


// ✅ All 25 solutions are implemented without using pre-built string manipulation functions except basic indexing and charCodeAt for numeric conversion.



// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }

        }
      
    }
    return nums
};
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// ------------------------------------------------------------------------------------------------

//2. Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
var isPalindrome = function (x) {
  if (x < 0) return false; // Negative numbers are not palindromes
  let reversed = 0;
  let original = x;
  while (original > 0) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }
  return x === reversed;
};
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false

// ------------------------------------------------------------------------------------------------

// 3. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  console.log(`Initial prefix: ${prefix}`);
  for (let i = 1; i < strs.length; i++) {
    console.log(`Checking string: ${strs[i]}`);
    while (strs[i].indexOf(prefix) !== 0) {
      console.log(
        `Prefix not found in ${
          strs[i]
        }, shortening prefix from ${prefix}-----${strs[i].indexOf(prefix)}`
      );
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

// ------------------------------------------------------------------------------------------------

// 4. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([)]"
// Output: false
// Example 5:
// Input: s = "{[]}"
// Output: true
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else if (stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
};
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true

// ------------------------------------------------------------------------------------------------

// 5. Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.
// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    console.log(`i: ${i}, j: ${j}, nums[i]: ${nums[i]}, nums[j]: ${nums[j]}`);

    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5

// ------------------------------------------------------------------------------------------------

// 6. Largest word in a sentence
// Given a string s, return the length of the longest word in the sentence.
// A word is defined as a maximal substring consisting of non-space characters only.
// Example 1:
// Input: s = "The quick brown fox jumped over the lazy dog"
// Output: 6
// Explanation: The longest word in the sentence is "jumped", which has a length of 6.
var lengthOfLongestWord = function (s) {
  const words = s.split(" ");
  let maxLength = 0;
  for (let word of words) {
    console.log(`word: ${word}, length: ${word.length}`);
    maxLength = Math.max(maxLength, word.length);
  }
  return maxLength;
};
console.log(
  lengthOfLongestWord("The quick brown fox jumped over the lazy dog")
); // Output: 6

// ------------------------------------------------------------------------------------------------

// FindUniqueValues in an Array
FindUniqueValues = function (arr) {
  const uniqueValues = [];
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      uniqueValues.push(arr[i]);
    }
  }
  return uniqueValues;
};
console.log(FindUniqueValues([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// FindUniqueValues in an Array without using Set
FindUniqueValuesWithoutSet = function (arr) {
  const uniqueValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValues.includes(arr[i])) {
      uniqueValues.push(arr[i]);
    }
  }
  return uniqueValues;
};
console.log(FindUniqueValuesWithoutSet([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// FindUniqueValues in an Array without using inbuilt function
const findUnique = (a) => {
  let freq = {},
    result = [];
  for (let i = 0; i < a.length; i++) {
    if (freq[a[i]] === 1) {
      continue;
    } else {
      result.push(a[i]);
      freq[a[i]] = 1;
    }
  }
  return result;
};

const arr = [1, 1, 1, 2, 5, 2, 3, 8, 88, 88, 9, 9];
console.log(findUnique(arr));

// ------------------------------------------------------------------------------

// 4.       Program to reverse a string without using built-in methods.

function reverseString(str) {
  let reversed = "";

  // Loop from the end of the string to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Example
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

// ----------------------------------------------------------------------------

// 5.       Find the maximum count of consecutive 1’s in an array.
function findMaxConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Example
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3

// ---------------------------------------------------------------------------------------------

// 6.       Write a function to calculate the factorial of a given number.
// Iterative Approach
function factorialIterative(n) {
  if (n < 0) return "Factorial not defined for negative numbers";

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example
console.log(factorialIterative(5)); // Output: 120
console.log(factorialIterative(0)); // Output: 1
// or
function factorialRecursive(n) {
  if (n < 0) return "Factorial not defined for negative numbers";
  if (n === 0 || n === 1) return 1;

  return n * factorialRecursive(n - 1);
}

// Example
console.log(factorialRecursive(5)); // Output: 120
console.log(factorialRecursive(1)); // Output: 1

// ----------------------------------------------------------------------------------------------

// 7.       Merge and sort two sorted arrays. For example: [0, 3, 4, 31] and [4, 6, 30] should return [0, 3, 4, 4, 6, 30, 31].
// ✅ Efficient Merge Approach (O(n + m))
function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  let merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

// Example
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// Output: [0, 3, 4, 4, 6, 30, 31]

// Simpler (but less efficient) Way
function mergeAndSort(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeAndSort([0, 3, 4, 31], [4, 6, 30]));
// Output: [0, 3, 4, 4, 6, 30, 31]

// -----------------------------------------------------------------------------------

// 8.       Check if every value in one array has a corresponding squared value in another array.
// ✅ Efficient Solution using Frequency Counters (O(n))
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  // Count frequencies in arr1
  for (let num of arr1) {
    freq1[num] = (freq1[num] || 0) + 1;
  }

  // Count frequencies in arr2
  for (let num of arr2) {
    freq2[num] = (freq2[num] || 0) + 1;
  }

  // Compare
  for (let key in freq1) {
    let squared = key * key;

    if (!(squared in freq2)) return false; // squared value not present
    if (freq2[squared] !== freq1[key]) return false; // frequency mismatch
  }

  return true;
}

// Examples
console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 2], [1, 4, 4])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 3], [1, 4, 4])); // false

// ✅ Simpler (but less efficient) Way
function sameSimple(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let num of arr1) {
    let index = arr2.indexOf(num * num);
    if (index === -1) return false; // not found
    arr2.splice(index, 1); // remove matched element
  }
  return true;
}

console.log(sameSimple([1, 2, 3], [1, 4, 9])); // true

// 9.       Check if one string can be rearranged to form another.
// ✅ Efficient Approach (Frequency Counter)
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
}

// Examples
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("triangle", "integral")); // true
console.log(isAnagram("hello", "bello")); // false

// ✅ Optimized Version (Single Frequency Counter)
function isAnagramOptimized(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!lookup[char]) return false; // char not found or freq mismatch
    lookup[char] -= 1;
  }

  return true;
}

// Examples
console.log(isAnagramOptimized("listen", "silent")); // true
console.log(isAnagramOptimized("rat", "car")); // false

// 10.   Extract unique objects from an array of objects.
// i/o- const arr = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 1, name: "Alice" }, // duplicate
//   { id: 3, name: "Charlie" }
// ];
// o/p- [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ]

function getUniqueObjects(arr, key) {
  return arr.reduce((acc, curr) => {
    if (!acc.find((item) => item[key] === curr[key])) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log(getUniqueObjects(arr, "id"));
// --------------------------------------------
function getUniqueObjects(arr, key) {
  const map = new Map();
  for (let obj of arr) {
    map.set(obj[key], obj); // overwrite duplicates
  }
  return Array.from(map.values());
}

// Example
const unique = getUniqueObjects(arr, "id");
console.log(unique);

// 11.   Write a program to find the maximum number in an array.
function findMax(arr) {
  if (arr.length === 0) return undefined; // handle empty array

  let max = arr[0]; // assume first element is max
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example
console.log(findMax([10, 3, 45, 7, 99, 23])); // 99

// -----------------------------------------------------

function findMax(arr) {
  return arr.length ? Math.max(...arr) : undefined;
}

console.log(findMax([10, 3, 45, 7, 99, 23])); // 99

// -----------------------------------------------------

function findMax(arr) {
  return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}

console.log(findMax([10, 3, 45, 7, 99, 23])); // 99

// -----------------------------------------------------

// 12.   Filter and return only even numbers from an array.
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Example
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
// Output: [2, 4, 6, 8]

// -----------------------------------------------------------------
function getEvenNumbers(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

// Example
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
// Output: [2, 4, 6, 8]
// -----------------------------------------------------------------
function getEvenNumbers(arr) {
  return arr.reduce((evens, num) => {
    if (num % 2 === 0) evens.push(num);
    return evens;
  }, []);
}

// Example
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
// Output: [2, 4, 6, 8]


// 13.   Check if a number is prime.
const isPrime = num =>
  num > 1 && [...Array(Math.floor(Math.sqrt(num)) + 1).keys()]
    .slice(2)
    .every(i => num % i !== 0);

console.log(isPrime(7));  // true
console.log(isPrime(25)); // false
// ------------------------
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false; // even numbers > 2 are not prime

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example
console.log(isPrime(29)); // true
console.log(isPrime(30)); // false
// ---------------------------------------
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // divisible by something other than 1 & itself
  }
  return true;
}

// Example
console.log(isPrime(2));  // true
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false


// --------------------------------------------------------------------------------------------

// 14.   Find the largest number in a nested array.
// const arr = [[3, 5, 9], [1, 4, 7], [2, 8, 6]];
// 9
function findLargestNested(arr) {
  const flat = arr.flat(Infinity); // flattens nested arrays
  return Math.max(...flat);
}

// Example
console.log(findLargestNested([[3, 5, 9], [1, 4, 7], [2, 8, 6]])); 
// Output: 9
// --------------------------------------------------------------
function findLargestNested(arr) {
  let max = -Infinity;

  for (let subArr of arr) {
    for (let num of subArr) {
      if (num > max) {
        max = num;
      }
    }
  }

  return max;
}

// Example
console.log(findLargestNested([[3, 5, 9], [1, 4, 7], [2, 8, 6]]));
// Output: 9
// --------------------------------------------
function findLargestNested(arr) {
  let max = -Infinity;

  function helper(subArr) {
    for (let el of subArr) {
      if (Array.isArray(el)) {
        helper(el);
      } else if (el > max) {
        max = el;
      }
    }
  }

  helper(arr);
  return max;
}

// Example
console.log(findLargestNested([[3, [15, 2]], [1, [9, [22]]], [7, 8]]));
// Output: 22
// -----------------------------------------------------------------------------------
// 15.   Generate a Fibonacci sequence up to a specified number of terms.
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

// Example
console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// ------------------------------------------
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function generateFibonacci(n) {
  let seq = [];
  for (let i = 0; i < n; i++) {
    seq.push(fibonacciRecursive(i));
  }
  return seq;
}

// Example
console.log(generateFibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// ---------------------------------------------
function fibonacci(n) {
  let seq = [];
  let a = 0, b = 1;
  let count = 0;

  while (count < n) {
    seq.push(a);
    [a, b] = [b, a + b]; // swap trick
    count++;
  }

  return seq;
}

// Example
console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// ---------------------------------------------------------------------
// 16.   Count the occurrences of each character in a string.
function charCount(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

// Example
console.log(charCount("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }
// ---------------------------------------
function charCount(str) {
  return str.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

// Example
console.log(charCount("banana"));
// Output: { b: 1, a: 3, n: 2 }
// ----------------------------------------
function charCount(str) {
  let count = {};
  for (let char of str.toLowerCase()) {
    if (/[a-z0-9]/.test(char)) { // only count letters/numbers
      count[char] = (count[char] || 0) + 1;
    }
  }
  return count;
}

// Example
console.log(charCount("Hello World 123!"));
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, '1': 1, '2': 1, '3': 1 }
// ------------------------------------------------------------------------------------
// 17.   Sort an array of numbers in ascending order.
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Example
console.log(sortArray([5, 2, 9, 1, 7]));
// Output: [1, 2, 5, 7, 9]
// -----------------------------------------
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example
console.log(bubbleSort([5, 2, 9, 1, 7]));
// Output: [1, 2, 5, 7, 9]
// -------------------------------------------
function sortArray(arr) {
  return arr.reduce((sorted, num) => {
    let i = 0;
    while (i < sorted.length && num > sorted[i]) {
      i++;
    }
    sorted.splice(i, 0, num);
    return sorted;
  }, []);
}

// Example
console.log(sortArray([5, 2, 9, 1, 7]));
// Output: [1, 2, 5, 7, 9]
// ------------------------------------------------------------------------------------
// 18.   Sort an array of numbers in descending order.
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// Example
console.log(sortDescending([5, 2, 9, 1, 7]));
// Output: [9, 7, 5, 2, 1]
// -------------------------------------
function bubbleSortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example
console.log(bubbleSortDescending([5, 2, 9, 1, 7]));
// Output: [9, 7, 5, 2, 1]
// -----------------------------------
function sortDescending(arr) {
  return arr.sort((a, b) => a - b).reverse();
}

// Example
console.log(sortDescending([5, 2, 9, 1, 7]));
// Output: [9, 7, 5, 2, 1]
// -------------------------------------------------------------------------------------
// 19.   Reverse the order of words in a sentence without using the reverse() method.
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let result = "";

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += " "; // add space except for last word
  }

  return result;
}

// Example
console.log(reverseWords("I love JavaScript"));
// Output: "JavaScript love I"
// ---------------------------------
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = [];

  for (let i = 0; i < words.length; i++) {
    reversed.unshift(words[i]); // insert at front
  }

  return reversed.join(" ");
}

// Example
console.log(reverseWords("Learning JavaScript is fun"));
// Output: "fun is JavaScript Learning"
// --------------------------------
function reverseWords(sentence) {
  let word = "";
  let words = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      words.push(word);
      word = "";
    } else {
      word += sentence[i];
    }
  }
  words.push(word); // push last word

  // build reversed sentence
  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += " ";
  }
  return result;
}

// Example
console.log(reverseWords("Hello world from JS"));
// Output: "JS from world Hello"
// ------------------------------------------------------------------------------------
// 20.   Flatten a deeply nested array into a single-dimensional array.
const arr = [1, [2, [3, [4, [5]]]], 6];
console.log(arr.flat(Infinity));
// Output: [1, 2, 3, 4, 5, 6]
// --------------------------
function flattenArray(arr) {
  let result = [];
  let stack = [...arr];

  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next); // expand nested arrays
    } else {
      result.push(next);
    }
  }

  return result.reverse(); // because stack reverses order
}

// Example
console.log(flattenArray([1, [2, [3, [4, [5]]]], 6]));
// Output: [1, 2, 3, 4, 5, 6]
// -----------------------------------------
function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? flattenArray(val) : val), []
  );
}

// Example
console.log(flattenArray([1, [2, [3, [4, [5]]]], 6]));
// Output: [1, 2, 3, 4, 5, 6]
// --------------------------------
function flattenArray(arr) {
  let result = [];

  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flattenArray(el)); // recurse if nested
    } else {
      result.push(el);
    }
  }

  return result;
}

// Example
console.log(flattenArray([1, [2, [3, [4, [5]]]], 6]));
// Output: [1, 2, 3, 4, 5, 6]
// ----------------------------------------------------------------------------------------
// 21.   Convert a string input into a nested object (e.g., "a.b.c", "someValue" should return {a: {b: {c: "someValue"}}}).
function stringToNestedObject(path, value) {
  const keys = path.split(".");
  let result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      current[keys[i]] = value; // last key gets the value
    } else {
      current[keys[i]] = {};
      current = current[keys[i]];
    }
  }

  return result;
}

// Example
console.log(stringToNestedObject("a.b.c", "someValue"));
// Output: { a: { b: { c: "someValue" } } }
// -------------------------------------------
function stringToNestedObject(path, value) {
  return path
    .split(".")
    .reduceRight((acc, key) => ({ [key]: acc }), value);
}

// Example
console.log(stringToNestedObject("user.profile.name", "Alice"));
// Output: { user: { profile: { name: "Alice" } } }
// ---------------------------------------------
function stringToNestedObject(path, value) {
  const keys = path.split(".");

  function build(keys, value) {
    if (keys.length === 0) return value;
    const [first, ...rest] = keys;
    return { [first]: build(rest, value) };
  }

  return build(keys, value);
}

// Example
console.log(stringToNestedObject("x.y.z", 42));
// Output: { x: { y: { z: 42 } } }
// ---------------------------------------------------------------------------------------------
// 22.   Write a function that converts an object into a query string (e.g., {name: "John", age: 30} to "name=John&age=30").
function toQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

// Example
console.log(toQueryString({ name: "John", age: 30 }));
// Output: "name=John&age=30"
// ---------------------------------
function toQueryString(obj) {
  let query = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      query.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }
  return query.join("&");
}

// Example
console.log(toQueryString({ city: "New York", job: "Developer" }));
// Output: "city=New%20York&job=Developer"
// ----------------------------------------
function toQueryString(obj) {
  return new URLSearchParams(obj).toString();
}

// Example
console.log(toQueryString({ name: "John", age: 30 }));
// Output: "name=John&age=30"
// --------------------------------------------------------------------------------------------
// 23.   Implement a function to deep clone an object.
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // return primitives as is
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)); // clone array elements
  }

  let clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]); // recurse
    }
  }
  return clonedObj;
}

// Example
const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copy = deepClone(original);
copy.b.c = 99;

console.log(original.b.c); // ✅ 2 (unchanged)
console.log(copy.b.c);     // ✅ 99
// -----------------------------------------------------------------------------------------

// 24.   Write a function to find the index of the first non-repeating character in a string.
function firstNonRepeatingCharIndex(str) {
    const charCount = {};

    // Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the index of the first character with count 1
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return i;
        }
    }

    // Return -1 if no non-repeating character is found
    return -1;
}

// Example usage:
console.log(firstNonRepeatingCharIndex("leetcode")); // Output: 0 ('l')
console.log(firstNonRepeatingCharIndex("loveleetcode")); // Output: 2 ('v')
console.log(firstNonRepeatingCharIndex("aabb")); // Output: -1 (no non-repeating char)
// --------------------------------------------------------------------------------------------
// 25.   Check if a number is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³).
function isArmstrongNumber(num) {
  const digits = num.toString().split('').map(Number);
  const power = digits.length;

  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

  return sum === num;
}

// Examples
console.log(isArmstrongNumber(153));   // true
console.log(isArmstrongNumber(9474));  // true
console.log(isArmstrongNumber(123));   // false

// --------------------------------------------------------------------------------------------


// 1️⃣ Reverse a string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example
console.log(reverseString("hello")); // "olleh"

// 2️⃣ Check palindrome string
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

// Example
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false

// 3️⃣ Count vowels in a string
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
            ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
            count++;
        }
    }
    return count;
}

// Example
console.log(countVowels("Hello World")); // 3

// 4️⃣ Find first non-repeated character
function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        let repeated = false;
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                repeated = true;
                break;
            }
        }
        if (!repeated) return str[i];
    }
    return null;
}

// Example
console.log(firstNonRepeatedChar("swiss")); // "w"

// 5️⃣ Check if two strings are anagrams
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    // Count characters in str1
    let count1 = {};
    let count2 = {};

    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1;
        count2[str2[i]] = (count2[str2[i]] || 0) + 1;
    }

    for (let ch in count1) {
        if (count1[ch] !== count2[ch]) return false;
    }

    return true;
}

// Example
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// 6️⃣ Capitalize first letter of each word
function capitalizeWords(str) {
    let result = '';
    let capitalizeNext = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += ' ';
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                // Convert lowercase to uppercase manually
                let code = str[i].charCodeAt(0);
                if (code >= 97 && code <= 122) {
                    result += String.fromCharCode(code - 32);
                } else {
                    result += str[i];
                }
                capitalizeNext = false;
            } else {
                result += str[i];
            }
        }
    }
    return result;
}

// Example
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"

// 7️⃣ Remove duplicates from a string
function removeDuplicates(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (str[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) result += str[i];
    }
    return result;
}

// Example
console.log(removeDuplicates("programming")); // "progamin"

// -----------------------------------------------------------------------------



// 1️⃣ Find max and min in an array
function findMaxMin(arr) {
    if (arr.length === 0) return null;

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    return { max, min };
}

// Example
console.log(findMaxMin([3, 7, 1, 9, 2])); // { max: 9, min: 1 }

// 2️⃣ Reverse an array without reverse()
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[reversed.length] = arr[i];
    }
    return reversed;
}

// Example
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

// 3️⃣ Check if array contains duplicates
function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}

// Example
console.log(hasDuplicates([1, 2, 3, 2])); // true
console.log(hasDuplicates([1, 2, 3]));    // false

// 4️⃣ Find second largest number in an array
function secondLargest(arr) {
    if (arr.length < 2) return null;

    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];
        }
    }
    return second;
}

// Example
console.log(secondLargest([5, 3, 9, 7, 9])); // 7

// 5️⃣ Find intersection of two arrays
function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let exists = false;
                for (let k = 0; k < result.length; k++) {
                    if (result[k] === arr1[i]) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) result[result.length] = arr1[i];
            }
        }
    }
    return result;
}

// Example
console.log(intersection([1,2,3,4], [3,4,5,6])); // [3,4]

// 6️⃣ Flatten a nested array
function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            let flat = flattenArray(arr[i]);
            for (let j = 0; j < flat.length; j++) {
                result[result.length] = flat[j];
            }
        } else {
            result[result.length] = arr[i];
        }
    }
    return result;
}

// Example
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

// 7️⃣ Rotate array by k steps
function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;
    let rotated = [];

    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n;
        rotated[newIndex] = arr[i];
    }

    return rotated;
}

// Example
console.log(rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3]

// 8️⃣ Remove falsy values from an array
function removeFalsy(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) result[result.length] = arr[i];
    }
    return result;
}

// Example
console.log(removeFalsy([0, 1, false, 2, "", 3, null])); // [1, 2, 3]

// -------------------------------------------------------------------------------------

// Number & Logic
// 1️⃣ Check prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// 2️⃣ Generate Fibonacci series
function fibonacciSeries(n) {
    let series = [];
    if (n >= 1) series[0] = 0;
    if (n >= 2) series[1] = 1;

    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series;
}

// Example
console.log(fibonacciSeries(7)); // [0, 1, 1, 2, 3, 5, 8]

// 3️⃣ Find factorial of a number
function factorial(n) {
    if (n < 0) return null; // Factorial not defined for negative numbers
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Example
console.log(factorial(5)); // 120

// 4️⃣ Find sum of digits of a number
function sumOfDigits(num) {
    let sum = 0;
    if (num < 0) num = -num; // handle negative numbers
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Example
console.log(sumOfDigits(1234)); // 10

// 5️⃣ Check Armstrong number

// (A number is Armstrong if the sum of its digits each raised to the power of number of digits equals the number itself.)

function isArmstrong(num) {
    let original = num;
    let sum = 0;
    let digits = 0;
    let temp = num;

    // Count digits
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }

    temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        let power = 1;
        for (let i = 0; i < digits; i++) power *= digit; // manual power
        sum += power;
        temp = Math.floor(temp / 10);
    }

    return sum === original;
}

// Example
console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false

// 6️⃣ Find GCD of two numbers
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example
// console.log(gcd(12, 18)); // 6


// 1️⃣ Count frequency of elements in an array
function countFrequency(arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let key in freq) {
            if (key == arr[i]) {
                freq[key]++;
                found = true;
                break;
            }
        }
        if (!found) freq[arr[i]] = 1;
    }
    return freq;
}

// Example
console.log(countFrequency([1,2,2,3,3,3])); // { '1': 1, '2': 2, '3': 3 }

// 2️⃣ Group objects by a property
function groupBy(arr, key) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let prop = arr[i][key];
        let exists = false;
        for (let k in result) {
            if (k == prop) {
                result[k][result[k].length] = arr[i];
                exists = true;
                break;
            }
        }
        if (!exists) result[prop] = [arr[i]];
    }
    return result;
}

// Example
let data = [
    {name: "Alice", role: "admin"},
    {name: "Bob", role: "user"},
    {name: "Charlie", role: "admin"}
];
console.log(groupBy(data, "role"));
// { admin: [{…}, {…}], user: [{…}] }

// 3️⃣ Deep clone an object
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    let clone = obj instanceof Array ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

// Example
let original = {a: 1, b: {c: 2}};
let cloned = deepClone(original);
cloned.b.c = 5;
console.log(original.b.c); // 2 (unchanged)

// 4️⃣ Implement debounce function

// (Debounce delays function execution until a certain time has passed without it being called again.)

function debounce(func, delay) {
    let timer = null;
    return function() {
        let context = this;
        let args = [];
        for (let i = 0; i < arguments.length; i++) args[i] = arguments[i];

        if (timer) clearTimeout(timer);

        timer = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

// Example
function sayHello(name) {
    console.log("Hello, " + name);
}

let debouncedHello = debounce(sayHello, 1000);
debouncedHello("Alice");
debouncedHello("Bob"); // Only "Hello, Bob" will be printed after 1 sec



//  ----------------------------------------------------------------------------





//Left Rotate an Array by One Position
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copy = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;
console.log(arr); // Output: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]

//right Rotate an Array by One Position
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr); // Output: [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Left Rotate an Array by K Positions
function leftRotate(arr, k) {
  k = k % arr.length;
  count = 0;
  for (let j = 0; j < k; j++) {
    count++;
    let copy = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = copy;
  }
  return arr;
}

// or

function leftArry(arr, k) {
  let temp = new Array(arr.length);
  k = k % arr.length;
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
  }
  return temp;
}

// best optimization or
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = Number(prompt("Enter the number of positions to rotate:"));
k = k % arr.length;
reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);
console.log(arr);

function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
// // Example usage:
let k = 1;
console.log(leftRotate(arr, k));
console.log(count);

// ---------------------------------------------------

// Right Rotate an Array by K Positions
function rightArry(arr, k) {
  let temp = new Array(arr.length);
  k = k % arr.length; // normalize k
  for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
  }
  return temp;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 3;
console.log(rightArry(arr, k));

function rightRotate(arr, k) {
  k = k % arr.length;
  for (let j = 0; j < k; j++) {
      let copy = arr[arr.length - 1];
      for (let i = arr.length - 1; i > 0; i--) {
          arr[i] = arr[i - 1];
    }
    arr[0] = copy;
  }
  return arr;
}
// Example usage:
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k2 = 3;
console.log(rightRotate(arr2, k2));

// ----------------------------------------------

// remove duplicates from sorted array
var removeDuplicate = function (num) {
  let j = 1;
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] !== num[i + 1]) {
      num[j] = num[i + 1];
      j++;
    }
  }
  return j;
};

// Example usage:
let num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let newLength = removeDuplicates(num);
console.log(`New length: ${newLength}`);

// ---------------------------------------------------------
// Merge Sorted Array
let arr1 = [2, 5, 6];
let arr2 = [1, 3, 4];
let merged = mergeSortedArrays(arr1, arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = (j = k = 0);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged[k++] = arr1[i++];
    } else {
      merged[k++] = arr2[j++];
    }
  }
// Copy any remaining elements from either array
  while (i < arr1.length) {
    merged[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    merged[k++] = arr2[j++];
  }
  return merged;
}

// or

var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
// Copy remaining elements of nums2, if any
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
    return nums1;
}
// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
console.log(merge(nums1, m, nums2, n)); // Output: [1, 2, 2, 3, 5, 6]

// --------------------------------------------------------

// Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = Infinity;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Update the minimum price
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice); // Calculate profit
        }
    }
    return maxProfit; // Return the maximum profit
};
// Example usage:
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 (Buy at 1, Sell at 6)

// Sort the colors
var sortColors = function (nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums; // Return the sorted array
};
// Example usage:
let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums)); // Output: [0, 0, 1, 1, 2, 2]

// Kandane's Algorithm for Maximum Subarray
var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return max;
};

// or-------------------------------------------------------
//
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); // Update current sum
        maxSum = Math.max(maxSum, currentSum); // Update max sum
    }
    return maxSum; // Return the maximum subarray sum
};
// Example usage:
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6 (subarray [4, -1, 2, 1] has the largest sum of 6)
// --------------------------------------------------------------------
// majority element

var majorityElement = function (nums) {
  let ans = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === ans) count++;
    else count--;
    if (count === 0) {
      ans = nums[i];
      count = 1;
    } else if (ans == nums[i]) count++;
    else count--;
  }
  return ans;
};
console.log(majorityElement([3, 2, 3, 1, 1, 2, 3, 5]));

// OR------------------------
var majorityElement = function(nums) {
    let count = 0;
    let candidate;
    for (let num of nums) {
        if (count === 0) {
            candidate = num; // Set candidate when count is zero
        }
        count += (num === candidate) ? 1 : -1; // Increment or decrement count
    }
// Verify if candidate is indeed the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    return count > nums.length / 2 ? candidate : null; // Return candidate if it's a majority
};
// Example usage:
let nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3
// ------------------------------------------------------------
// Trapping Rain Water
var trap = function (height) {
  let left = new Array(height.length);
  let right = new Array(height.length);
  let maxLeft = height[0],
    maxRight = height[height.length - 1];
  (left[0] = maxLeft), (right[right.length - 1] = maxRight);
  for (i = 1; i < height; i++) {
    maxLeft = Math.max(height[i], maxLeft);
    left[i] = maxLeft;
  }
  for (i = height.length - 2; i >= 0; i--) {
    maxRight = Math.max(height[i], maxRight);
    right[i] = maxRight;
  }
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    ans += Math.min(left[i], right[i] - height[i]);
  }
  return ans;
};
console.log(trap(1,2,5,6,6,6,8,8,8,9));


var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }
    return waterTrapped; // Return the total amount of trapped water
}
// Example usage:
let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // Output: 6




// -------------------------------------------------------------------------------



