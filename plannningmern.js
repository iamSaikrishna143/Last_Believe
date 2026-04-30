// 🟦 JavaScript (Core + Advanced)
// ✔ 5 internal methods: String, Array, Object
//  ✔ IIFE – when & why
//  ✔ Hoisting – real advantages & pitfalls
//  ✔ Closures – where they truly help
//  ✔ Arrow vs Normal Functions
//  ✔ Swap two variables (no temp, works for all types)
//  ✔ JS Execution Model (Call Stack + Heap + Event Loop)
//  ✔ Why JS > other languages
//  ✔ call vs apply vs bind – real scenarios
//  ✔ Promise creation & execution

// 🟩 Node.js (Backend + Scaling + Performance)
// ✔ Worker Threads – how they work internally
//  ✔ Redis – use case, throughput, when not to use it
//  ✔ Indexing – how it works internally + performance issues
//  ✔ Horizontal vs Vertical Scaling
//  ✔ Multi-instance load balancing
//  ✔ Query Optimization Techniques
//  ✔ Sharding – when to apply
//  ✔ Deadlocks – how they happen
//  ✔ Memory Leaks in Node.js – preventions
//  ✔ Promise.all vs Promise.allSettled
//  ✔ RabbitMQ – why and when
//  ✔ Streaming best practices
//  ✔ JWT deep dive
//  ✔ Why process.nextTick() runs first
//  ✔ Different phases of the Event Loop
//  ✔ Async functions – when NOT to use
//  ✔ File update, email sending best practices
//  ✔ Optimizing slow apps caused by 3rd-party dependencies

// 🟥 React.js (Real-World + React 19)
// ✔ Lifecycle in Functional Components
//  ✔ useRef in dependency array – does it re-render?
//  ✔ Controlled vs Uncontrolled Components
//  ✔ Context vs useReducer vs Redux
//  ✔ Redux-Saga explained simply
//  ✔ Server Components
//  ✔ useCallback vs useMemo – actual difference
//  ✔ react.memo – real use case
//  ✔ Initial Paint vs Largest Contentful Paint (LCP)
//  ✔ Tools to find performance bottlenecks
//  ✔ SEO limitations of SPA
//  ✔ Client-side vs Server-side Routing
//  ✔ Memory leak prevention in React
//  ✔ Role-based routing best practices
//  ✔ HOCs – where they still make sense
//  ✔ Hydration explained

// 🟧 DevOps (For MERN Developers)
// ✔ Horizontal Scaling – practical approach
//  ✔ Reverse Proxy explained (Nginx)
//  ✔ Load Balancing in AWS
//  ✔ CI/CD pipeline basics
//  ✔ What to check before deploying
//  ✔ Secrets management

// 🟪 System Design (Frontend + Backend + DB + Services)

// Must prepare real business systems:
//  ✔ E-Commerce Platform
//  ✔ Ride Booking App (Ola / Rapido)
//  ✔ HR Management System
//  ✔ Gaming Platform + Leaderboard
//  ✔ Social Media Platform

// Every system must cover:
//  ➡ Database design
//  ➡ Caching
//  ➡ Authentication
//  ➡ Message queues
//  ➡ File storage
//  ➡ Scaling strategy
//  ➡ Deployment architecture



//  --------------------------
//  What is useRef Hook?
// - What are the use cases of useRef other than accessing DOM elements?
// - Explain the useEffect Hook.
// - What is the cleanup function inside useEffect?
// - Difference between localStorage and sessionStorage (with practical examples).

//  JavaScript Concepts ➡️
// - Explain Closures in JavaScript.
// - What is the difference between Event Bubbling and Event Capturing?

// JavaScript Coding Questions ➡️
// 1️⃣ Given the sentence "India is my country."
//  Return the same sentence but with the first letter of each word capitalized.
//  👉 Output: India Is My Country.

// 2️⃣ Print numbers from 1 to 10, with a 1-second delay between each print (e.g., 1… 2… 3…).

// 🧠React Coding Question ➡️
// Create a small app with:
// - Three buttons — Start, Stop, and Pause.
// - A counter that starts from 0 and increases every second after clicking Start.
// - Stop should reset the timer.
// - Pause should pause and Resume should continue the count.

// --------------------------------------------

// 1️⃣ How React manages reconciliation under the hood (Fiber Architecture)
//  2️⃣ Difference between Virtual DOM vs Real DOM — and when re-rendering actually happens
//  3️⃣ How React optimizes rendering with batching & concurrency features
//  4️⃣ Working of useEffect deeply → dependency array pitfalls, stale closures & cleanup timing
//  5️⃣ React.memo vs useMemo vs useCallback — when NOT to use them
//  6️⃣ React 18’s concurrent features (startTransition, useDeferredValue) & real-world use cases
//  7️⃣ How Suspense works internally beyond lazy loading
//  8️⃣ Patterns for global state: Redux Toolkit 
//  9️⃣ Building scalable component architecture (Container-Presenter pattern, compound components, render props)
//  🔟 Avoiding prop drilling: Context API vs event emitters vs composition patterns
//  1️⃣1️⃣ Authentication & protected routes in React (token handling, refresh flow, interceptors)
//  1️⃣2️⃣ Error boundaries + error handling strategies for async React apps
//  1️⃣3️⃣ Performance profiling: React DevTools, flame charts, avoiding wasted renders
//  1️⃣4️⃣ Optimizing large lists — windowing using react-window / react-virtualized


//  ------------------------------------]



//  𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗙𝘂𝗻𝗱𝗮𝗺𝗲𝗻𝘁𝗮𝗹𝘀:
// 1. Why do closures exist in JavaScript?
// 2. How does the event loop actually work?
// 3. What's the difference between null and undefined?
// 4. Why does this behave differently in arrow functions?
// 5. What happens when you compare objects with == vs ===?
// 6. Why can you call a function before it's declared?
// 7. What's the difference between call, apply, and bind?

// 𝗥𝗲𝗮𝗰𝘁 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝗹𝘀:
// 8. Why does React need a virtual DOM?
// 9. When does React batch state updates?
// 10. Why do we need keys in lists?
// 11. What's the difference between useEffect and useLayoutEffect?
// 12. How does React decide when to re-render?
// 13. Why might useState not update immediately?
// 14. What happens during React's reconciliation process?

// 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗮𝗹 𝗗𝗲𝗰𝗶𝘀𝗶𝗼𝗻𝘀:
// 15. Why did you choose Redux over Context API?
// 16. When would you use a CDN vs hosting assets locally?
// 17. Why implement lazy loading for images?
// 18. What's the difference between SSR and CSR?
// 19. Why choose TypeScript over vanilla JavaScript?
// 20. How do you decide between REST and GraphQL?


// --------------------------------------------------------



// 1. What are React Server Components and how do they work?
// 2. What is the React Compiler in React 19?
// 3. What are Actions in React 19?
// 4. What is the useActionState Hook?
// 5. What is useFormStatus Hook?
// 6. What is useOptimistic Hook?
// 7. What is Concurrent Rendering in React?
// 8. What are the 'use client' and 'use server' directives?
// 9. How does the new use API work?
// 10. What is Document Metadata in React 19?
// 11. What improvements were made to refs in React 19?
// 12. What is the Activity component in React 19.2?
// 13. What is useEffectEvent Hook?
// 14. How does Automatic Batching work in React 19?
// 15. What is Partial Pre-rendering in React?
// 16. How has SSR improved in React 19?
// 17. What are Performance Tracks in React?
// 18. How do keys work in React lists and why use unique IDs?
// 19. What's the difference between controlled and uncontrolled components?
// 20. What are best practices for state management in 2025?


// ----------------------------------------------------------
// Mostly asked React Interview


// What is React and why is it used?

// Difference between Virtual DOM vs Real DOM?

// What are components? Functional vs Class components

// What are props and state? Differences?

// What is JSX and why do we use it?

// What is the key prop and why is it important?

// Explain component lifecycle methods



// What are Hooks? Why were they introduced?

// useState vs useReducer – when to use which?

// useEffect use cases & dependency array rules

// How to clean up useEffect?

// useMemo vs useCallback

// What is useRef and real use cases?

// Custom Hooks – why & how to create one?

// Context API vs Redux vs Zustand vs Recoil

// Redux flow and core concepts (actions, reducer, store, middleware)

// What is Redux Toolkit and why use it?

// What is React Query (TanStack Query)? When is it better than Redux?

// How to call API in React? Axios vs Fetch

// How to handle loading and error states in API calls?

// What is debounce/throttle and usage in search box?

// What is code splitting & lazy loading?

// What is Suspense and Error Boundary?

// What are controlled vs uncontrolled components?

// What is a Pure Component?

// What is memo() and when to use it?

// What is reconciliation algorithm in React?

// What is hydration in React?

// What is useTransition and useDeferredValue (Concurrent features)?


// How to optimize React app performance?

// Why keys are important in lists?

// What causes re-render & how to prevent unnecessary re-renders?

// Bundle optimization tools (Webpack, Vite, tree-shaking)

// Folder structure best practices

// Atomic design in React

// Unit testing using Jest & React Testing Library

// React Router features & difference between v5 vs v6

// Protected routes / dynamic routing



// ---------------------------------------------------
// 1. Autocomplete Component
// 2. Theme Implementation (Light/Dark) (useContext)(LS)
// 3. Debouncing & Throttling (Hooks)
// 4. Fetch (One-to-Many Relations)
// 5. Pagination Component
// 6. React-Select Clone
// 7. Todo App (Practice useMemo and useCallback)
// 8. Fetch + Basic CRUD App (Add mark as fav)(LS)(zustand/redux)
// 9. Higher Order Components (HOC)(Impression tracking)
// 10. Star Rating Component
// 11.Simple form CRUD -> Display data in table 
// 12.Progress Bar
// 13.Accordian 
// 14. Fetch Hook (Auto-Retry + Exponential Backoff)



// --------------------------------
// I am 𝗵𝗶𝗿𝗶𝗻𝗴 you as a 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿 if you can answer these 35 questions:

// 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗮𝗻𝗱 𝗥𝗲𝗮𝗰𝘁𝗝𝗦 (𝗙𝗿𝗼𝗻𝘁-𝗘𝗻𝗱)
//  - What is the difference between var, let, and const in JavaScript?
//  - How does the JavaScript event loop work?
//  - Explain closures in JavaScript with an example.
//  - What are promises, and how do they differ from async/await?
//  - What is the difference between shallow and deep copying in JavaScript?
//  - Explain the difference between == and === in JavaScript.
//  - What is the virtual DOM, and how does React use it?
//  - Explain the purpose of React hooks. How does useEffect work?
//  - What is the difference between controlled and uncontrolled components in React?
//  - What is the significance of key props in React lists?

// 𝗡𝗼𝗱𝗲𝗝𝗦 𝗮𝗻𝗱 𝗕𝗮𝗰𝗸𝗲𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁
//  - What is event-driven architecture in NodeJS?
//  - How does NodeJS handle asynchronous operations?
//  - What are middleware functions in ExpressJS?
//  - How does authentication work in NodeJS? Explain JWT vs. OAuth.
//  - What are WebSockets, and when would you use them?
//  - What is the difference between monolithic and microservices architectures?
//  - How does NodeJS handle memory management?

// 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲𝘀 𝗮𝗻𝗱 𝗦𝘆𝘀𝘁𝗲𝗺 𝗗𝗲𝘀𝗶𝗴𝗻
//  - What is the difference between SQL and NoSQL databases?
//  - How does indexing work in databases?
//  - What are ACID properties in a database?
//  - How would you scale an API to handle millions of requests per second?
//  - Design elevator system
//  - Design a parking lot
//  - What is caching, and how does it improve performance?
//  - Design a rate limiter
//  - Design a logging system
//  - Design a pastebin/ code sharing app

// 𝗗𝗦𝗔
//  - Given an array, find the maximum sum of any contiguous subarray.
//  - Find the first non-repeating character in a string.
//  - Detect if a linked list contains a cycle.
//  - Merge k sorted linked lists into one sorted list.
//  - Given an arr and a number k, return the max in every sliding window of size k.
//  - Return the longest palindromic substring in a given string.
//  - Place k cows in n stalls to maximize the minimum distance between any two cows.
//  - Given course prerequisites, determine if all courses can be finished.

// 𝗡𝗼𝘁𝗲: These are important theoretical questions, but just knowing theory won’t get you hired.
//  - Write code, build real projects
//  - Work on problem-solving & DSA




// -------------------------------------------------

// ✅ Easy
// 1. Two Sum
// 2. Valid Parentheses
// 3. Merge Two Sorted Arrays
// 4. Move Zeroes to End
// 5. Find Missing Number in Array
// 6. Count Unique Values
// 7. Reverse a Linked List
// 8. Palindrome Checker
// 9. Max/Min in Array
// 10. Climbing Stairs (DP)
// 11. Intersection of Two Arrays
// 12. FizzBuzz
// 13. Merge Strings Alternately
// 14. Maximum Subarray (Kadane's Algo)
// 15. Remove Duplicates from Sorted Array
// 🧠 Practice sites: LeetCode, NeetCode 150, FrontendExpert

// ⚙️ Medium (Pattern + Precision)
// 1. Longest Substring Without Repeating Characters
// 2. Group Anagrams
// 3. Sliding Window Maximum
// 4. Flatten Nested Arrays
// 5. Rotate Array
// 6. Top K Frequent Elements
// 7. Merge Intervals
// 8. LRU Cache
// 9. Deep Clone Object
// 10. Search in Rotated Sorted Array
// 11. Decode String
// 12. Longest Palindromic Substring
// 13. Word Break Problem
// 14. Subsets (Power Set)
// 15. Binary Search on Answer (e.g., Koko Eating Bananas)
// 🧠 Patterns tested: Sliding window, freq map, recursion, prefix sum

// 🔥 Hard (Systems thinking + Clean Code)
// 1. Median of Two Sorted Arrays
// 2. Detect and Remove Cycle in Linked List
// 3. Merge K Sorted Lists
// 4. Serialize/Deserialize Tree
// 5. Trapping Rain Water
// 6. Maximum Product Subarray
// 7. Implement Priority Queue
// 8. Autocomplete System (Trie)
// 9. Least Recently Used Cache (LRU) - Class-based
// 10. N-Queens
// 11. Word Ladder
// 12. Longest Consecutive Sequence
// 13. Redundant Connection in Graph
// 14. Scheduler with Priorities
// 15. Build a Virtual DOM diff logic
// 🧠 What matters here: Clarity + complexity management

// 🧪 Miscellaneous (JS-specific Real-World Skills)
// These are the questions frontend rounds are infamous for.
//  They feel simple — but crush candidates who aren't prepared.
// 1. Debounce function
// 2. Throttle function
// 3. Custom bind / call / apply
// 4. Memoization in JS
// 5. useState / useReducer from scratch
// 6. Deep vs Shallow Copy
// 7. Curry function
// 8 .Flatten deeply nested object
// 9 .Event Emitter implementation
// 10. Implement Promise.all
// 11. Compose / Pipe utility functions
// 12. Infinite scroll logic
// 13. Implement a Retry mechanism with delay
// 14. Simple JSON diff tool
// 15. setTimeout behavior in Event Loop



// ---------------
// # 𝙅𝘼𝙑𝘼𝙎𝘾𝙍𝙄𝙋𝙏 — 𝙏𝙚𝙘𝙝𝙣𝙞𝙘𝙖𝙡 𝙍𝙤𝙪𝙣𝙙
// • How would you implement your own Promise.allSettled() and handle edge cases?
// • What’s your approach to optimizing expensive computations using memoization?
// • How does the event loop prioritize microtasks vs macrotasks in complex async flows?
// • How would you build a custom localStorage wrapper with expiry & fallback logic?
// • Explain how prototype inheritance works with a real example (not theory).
// • How do you detect & fix memory leaks in a large JavaScript codebase?

// # 𝙍𝙀𝘼𝘾𝙏.𝙅𝙎 — 𝘼𝙘𝙩𝙪𝙖𝙡 𝙏𝙚𝙘𝙝𝙣𝙞𝙘𝙖𝙡 𝙍𝙤𝙪𝙣𝙙 𝙌𝙨

// • How do you split React components for both performance & maintainability?
// • What happens internally when React reconciles a component tree?
// • How would you implement a global error boundary system for API & UI failures?
// • How do you handle race conditions in React when multiple API calls fire simultaneously?
// • How would you build a custom hook for data fetching with caching + refetch logic?
// • What would be your approach to rendering 10k+ DOM nodes efficiently (beyond just virtualization)?



// ---------------
// What’s the difference between Microtasks & Macrotasks in JavaScript?
// ✅ Most people answer:
//  - Promise is microtask, setTimeout is macrotask.
//  - But the interviewer usually wants the bigger picture — and I only understood it clearly after watching Namaste JavaScript (Akshay Saini 🚀 explains this brilliantly).

// Here’s the Difference :- Microtasks vs Macrotasks 
// 🧩 Microtasks - 
// Examples: Promises, MutationObserver, queueMicrotask
// - Run immediately after the current code finishes
// - They run before the browser gets a chance to render the UI
// - They have priority, which means…
// 👉 Microtasks can cause “starvation”
//  - If you keep adding microtasks inside microtasks,
//  the browser never gets time to handle macrotasks → UI freezes.
// (This was my biggest learning!)

// 🔄 Macrotasks
// Examples: setTimeout, setInterval, DOM events, fetch callbacks
// - Added to the Macrotask Queue
// - Run after microtasks are cleared
// - Browser uses this phase to update the UI
// 👉 Macrotasks have lower priority and run after microtasks are done.