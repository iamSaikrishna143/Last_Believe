// Here are **Top 100 Frontend Developer Interview Questions** (covering HTML, CSS, JavaScript, React/Angular, Performance, System Design) — structured from **Fresher → Experienced → Advanced** 🔥

// ---

// # 🔰 **1. Basic Frontend Questions (Fresher Level)**

// ### HTML

// 1. What is HTML?
// 2. What are semantic tags?
// 3. Difference between `<div>` and `<span>`?
// 4. What is SEO-friendly HTML?
// 5. What is accessibility (a11y)?

// ### CSS

// 6. What is CSS?
// 7. Types of CSS?
// 8. What is box model?
// 9. Difference between margin and padding?
// 10. What is flexbox?
// 11. What is grid?
// 12. Difference between flexbox and grid?
// 13. What is responsive design?
// 14. What is media query?
// 15. What is z-index?

// ### JavaScript Basics

// 16. What is JavaScript?
// 17. Difference between `var`, `let`, `const`?
// 18. What is closure?
// 19. What is hoisting?
// 20. What is event handling?

// ---

// # ⚙️ **2. Intermediate Frontend Questions**

// 21. What is DOM?
// 22. What is Virtual DOM?
// 23. Difference between DOM and Virtual DOM?
// 24. What is event bubbling and capturing?
// 25. What is event delegation?
// 26. What is debouncing and throttling?
// 27. What is ES6?
// 28. What are arrow functions?
// 29. What is destructuring?
// 30. What is spread/rest operator?
// 31. What is async/await?
// 32. What is Promise?
// 33. What is API?
// 34. What is REST API?
// 35. What is JSON?
// 36. What is CORS?
// 37. What is localStorage vs sessionStorage?
// 38. What is cookies?
// 39. What is browser rendering process?
// 40. What is critical rendering path?

// ---

// # ⚛️ **3. Framework (React / Angular) Questions**

// 41. What is React?
// 42. What is Angular?
// 43. Difference between React and Angular?
// 44. What is component-based architecture?
// 45. What is state management?
// 46. What are React Hooks?
// 47. What is `useEffect`?
// 48. What is Context API?
// 49. What is Angular lifecycle hooks?
// 50. What is RxJS?
// 51. What is routing?
// 52. What is lazy loading?
// 53. What is SSR vs CSR?
// 54. What is Next.js?
// 55. What is NgRx?

// ---

// # 🚀 **4. Advanced Frontend Questions**

// 56. What is performance optimization?
// 57. What is code splitting?
// 58. What is tree shaking?
// 59. What is lazy loading?
// 60. What is memoization?
// 61. What is caching?
// 62. What is CDN?
// 63. What is PWA?
// 64. What is service worker?
// 65. What is web worker?
// 66. What is hydration?
// 67. What is shadow DOM?
// 68. What is micro frontend?
// 69. What is design system?
// 70. What is scalability in frontend?

// ---

// # 🧠 **5. Scenario-Based Questions (VERY IMPORTANT)**

// 71. How do you optimize page load speed?
// 72. How do you handle large API data?
// 73. How do you avoid unnecessary re-renders?
// 74. How do you structure a large project?
// 75. How do you handle authentication?
// 76. How do you implement role-based access?
// 77. How do you secure frontend apps?
// 78. How do you handle errors globally?
// 79. How do you manage global state?
// 80. How do you make reusable components?

// ---

// # 🔥 **6. Coding / Practical Questions**

// 81. Build a Todo App (CRUD)
// 82. Create a responsive layout
// 83. Implement debounce search
// 84. Build infinite scroll
// 85. Create a modal popup
// 86. Build a form with validation
// 87. Create a multi-select dropdown
// 88. Implement dark mode toggle
// 89. Fetch API and display data
// 90. Implement pagination

// ---

// # 💼 **7. Experienced-Level / Real Interview Questions**

// 91. Explain your frontend project architecture
// 92. Folder structure best practices?
// 93. How do you improve performance in your project?
// 94. What challenges did you face?
// 95. How do you handle cross-browser compatibility?
// 96. How do you test frontend apps?
// 97. What is unit testing?
// 98. What tools do you use?
// 99. How do you deploy frontend apps?
// 100. How do you stay updated with new technologies?

// ---

// # 🎯 **Pro Strategy for You (🔥 Important)**

// Since you're targeting **Frontend Developer (2–3 years experience)**, focus on:

// ### 🔑 Must Master

// ✔ JavaScript (Core + Async + Event Loop)
// ✔ React / Angular (Hooks / RxJS)
// ✔ API handling
// ✔ Performance optimization
// ✔ Responsive design

// ### 💼 Must Prepare

// ✔ 2–3 strong projects explanation
// ✔ Real problem-solving examples
// ✔ Clean code & reusable components

// ---

// # 🚀 Want Next Level Preparation?

// I can help you with:

// ✅ Top 30 MOST ASKED questions with answers
// ✅ Real interview coding questions + solutions
// ✅ Mock interview (HR + Technical)
// ✅ Resume + Project explanation for interview

// Just tell me 👍











// Real coding question (build virtual list)


import { useState } from "react";

const ITEM_HEIGHT = 40;
const TOTAL_ITEMS = 10000;
const CONTAINER_HEIGHT = 400;

export default function VirtualList() {
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = TOTAL_ITEMS * ITEM_HEIGHT;

  // Calculate visible range
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);
  const endIndex = startIndex + visibleCount;

  const items = [];
  for (let i = startIndex; i < endIndex; i++) {
    if (i >= TOTAL_ITEMS) break;
    items.push(
      <div
        key={i}
        style={{
          height: ITEM_HEIGHT,
          borderBottom: "1px solid #ccc",
        }}
      >
        Item {i}
      </div>
    );
  }

  return (
    <div
      style={{
        height: CONTAINER_HEIGHT,
        overflowY: "auto",
        border: "1px solid black",
      }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        <div
          style={{
            transform: `translateY(${startIndex * ITEM_HEIGHT}px)`,
            position: "absolute",
            width: "100%",
          }}
        >
          {items}
        </div>
      </div>
    </div>
  );
}



// Design a **search autocomplete system

// App.js
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cache = useRef({});
  const controllerRef = useRef(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchResults(query);
    }, 300); // debounce

    return () => clearTimeout(timer);
  }, [query]);

  const fetchResults = async (q) => {
    // Check cache
    if (cache.current[q]) {
      setResults(cache.current[q]);
      return;
    }

    // Cancel previous request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.datamuse.com/sug?s=${q}`,
        { signal: controllerRef.current.signal }
      );

      if (!res.ok) throw new Error("API Error");

      const data = await res.json();

      const formatted = data.map(item => item.word);

      cache.current[q] = formatted; // cache result
      setResults(formatted);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", fontFamily: "Arial" }}>
      <h3>Search Autocomplete</h3>

      <input
        type="text"
        placeholder="Type something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.length > 0 && (
        <ul
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "5px",
            padding: 0,
            listStyle: "none"
          }}
        >
          {results.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                borderBottom: "1px solid #eee",
                cursor: "pointer"
              }}
              onClick={() => setQuery(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



// Design a **dashboard with multiple APIs


const fetchDashboardData = async () => {
  try {
    setLoading(true);

    const [users, orders, stats] = await Promise.all([
      fetch("/api/users").then(res => res.json()),
      fetch("/api/orders").then(res => res.json()),
      fetch("/api/stats").then(res => res.json()),
    ]);

    setUsers(users);
    setOrders(orders);
    setStats(stats);
  } catch (err) {
    setError("Failed to load data");
  } finally {
    setLoading(false);
  }
};