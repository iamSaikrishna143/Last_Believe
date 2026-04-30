// Bubble Sort
function BubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];   
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(BubbleSort([10, 5, 6, 8, 4, 0]));

// -------------------------------------------------------

// Selection Sort - Asc order
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current index has the smallest element
    let minIndex = i;

    // Find the index of the smallest element in the remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap if a smaller element is found
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([10, 5, 6, 8, 4, 0]));

// ----------------------------
// Desc-order
function selectionSortDescending(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current index has the largest element
    let maxIndex = i;

    // Find the index of the largest element in the remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    // Swap if a larger element is found
    if (maxIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSortDescending([10, 5, 6, 8, 4, 0]));

// Insertion Sort- ASC order
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // element to be inserted
    let j = i - 1;
    // Move elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([10, 5, 6, 8, 4, 0]));

// -------------------------------------------------------------
function insertionSortDescending(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements smaller than key one position ahead
    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSortDescending([10, 5, 6, 8, 4, 0]));

// GCD Check using recursion
function gcd(a, b) {
  if (a == b) return a;
  if (a > b) return gcd(a - b, b);
  return gcd(b, b - a);
}
console.log(gcd(32, 16));

// /-----------------------------------------------------------------

// Binary Search
let arr = [2, 5, 8, 9, 12, 25, 68, 100, 150, 200, 250];
let index = binarySearch(arr, 0, arr.length - 1, 68);
if (index == -1) console.log("not found");
else console.log("target found" + index + "index");

function binarySearch(arr, first, last, target) {
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) last = mid - 1;
    else first = mid + 1;
  }
  return -1;
}

// -----------------------------------------------------

// Merge Sort

function conquor(arr, first, mid, last) {
  let temp = new Array(last - first + 1);
  let i = first,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= last) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else temp[k++] = arr[j++];
  }
  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= last) {
    temp[k++] = arr[j++];
  }
  let p = 0,
    t = first;
  while (p < temp.length) {
    arr[t++] = temp[p++];
  }
}

function divide(arr, first, last) {
  if (first >= last) return;
  let mid = Math.floor((first + last) / 2);
  divide(arr, first, mid);
  divide(arr, mid + 1, last);
  conquor(arr, first, mid, last);
}

arr = [1, 2, 8, 5, 15, 8, 5, 22, 3, 55, 6];
divide(arr, 0, arr.length - 1);
console.log(arr);


-----------------------------------------------------
