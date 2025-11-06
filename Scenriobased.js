// Your React app is getting slower when rendering a large list. How will you optimize it?
// 1. List Virtualization (Windowing)
// 	Don’t render all items at once—only render those visible in the viewport.
// 	Use libraries:
// o	react-window (lightweight, modern)
// 	react-virtualized (feature-rich)
// •	Example with react-window:
// •	import { FixedSizeList as List } from "react-window";
// •	
// •	const MyList = ({ items }) => (
// •	  <List
// •	    height={400}
// •	    itemCount={items.length}
// •	    itemSize={35}
// •	    width={300}
// •	  >
// •	    {({ index, style }) => (
// •	      <div style={style}>{items[index]}</div>
// •	    )}
// •	  </List>
// •	);
// ________________________________________
// 🔑 2. Memoization
// •	Prevent unnecessary re-renders of list items.
// •	Use React.memo for item components:
// •	const ListItem = React.memo(({ item }) => {
// •	  console.log("Rendering:", item.id);
// •	  return <div>{item.name}</div>;
// •	});
// •	For callbacks, use useCallback:
// •	const handleClick = useCallback(() => { ... }, []);
// ________________________________________
// 🔑 3. Efficient Keys
// •	Always use stable, unique keys (id, not index).
// •	Prevents React from re-rendering items unnecessarily.
// ________________________________________
// 🔑 4. Pagination / Infinite Scroll
// •	If virtualization isn’t enough, load data in chunks (lazy loading).
// •	Example: Fetch 20–50 items at a time and append on scroll.
// ________________________________________
// 🔑 5. Avoid Inline Functions & Objects in Render
// •	Inline objects/functions cause prop changes → re-renders.
// •	Instead:
// •	const style = { padding: 10 };
// •	return <div style={style}></div>;
// ________________________________________
// 🔑 6. Selective Re-rendering with shouldComponentUpdate / React.memo
// •	Skip re-renders if props haven’t changed.
// •	Example with React.memo and custom comparison:
// •	const ListItem = React.memo(
// •	  ({ item }) => <div>{item.name}</div>,
// •	  (prev, next) => prev.item.id === next.item.id
// •	);
// ________________________________________
// 🔑 7. Optimize State Management
// •	Avoid keeping the entire list in a parent state if only parts update.
// •	Push local state into items or use context selectively.
// ________________________________________
// 🔑 8. Code Splitting / Lazy Loading
// •	If list items have heavy components (e.g., charts, images), lazy-load or use React.lazy.


// How would you handle API call retries with exponential backoff in React?
// ✅ Implementation Approaches
// 1. Custom Utility Function
// Create a generic fetchWithRetry that can be reused in React apps.
// const fetchWithRetry = async (url, options = {}, retries = 3, delay = 1000) => {
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//     return response.json();
//   } catch (error) {
//     if (retries > 0) {
//       // exponential backoff with jitter
//       const backoff = delay * 2;
//       const jitter = Math.random() * 300;
//       await new Promise(res => setTimeout(res, backoff + jitter));
//       return fetchWithRetry(url, options, retries - 1, backoff);
//     }
//     throw error;
//   }
// };
// Usage inside a React component with useEffect:
// import { useEffect, useState } from "react";

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchWithRetry("https://api.example.com/users")
//       .then(setUsers)
//       .catch(setError);
//   }, []);

//   if (error) return <div>Error: {error.message}</div>;
//   return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
// }
// ________________________________________
// 2. Axios + Interceptors
// If you’re using Axios, you can create a retry mechanism with interceptors.
// import axios from "axios";

// const api = axios.create({ baseURL: "https://api.example.com" });

// api.interceptors.response.use(null, async (error) => {
//   const { config } = error;
//   if (!config.__retryCount) config.__retryCount = 0;

//   if (config.__retryCount < 3) {
//     config.__retryCount += 1;
//     const backoff = Math.pow(2, config.__retryCount) * 1000;
//     await new Promise(res => setTimeout(res, backoff));
//     return api(config);
//   }

//   return Promise.reject(error);
// });
// Now just use api.get("/users") inside your React components.
// ________________________________________
// 3. React Query (TanStack Query) Built-in Retries
// If you’re already using React Query, it has retries + exponential backoff built-in.
// Example:
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// function UserList() {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ["users"],
//     queryFn: () => axios.get("/users").then(res => res.data),
//     retry: 3, // default is 3
//     retryDelay: attempt => Math.min(1000 * 2 ** attempt, 30000), // exponential backoff
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
// }
// ________________________________________
// ⚖️ Which Approach Should You Use?
// •	Custom function → lightweight apps, no external libs.
// •	Axios interceptors → if you already use Axios everywhere.
// •	React Query → best option for production apps (handles caching, retries, deduplication).


// You have a component with heavy computations. How do you prevent unnecessary recalculations?
// 🔑 Strategies
// 1. useMemo for Expensive Calculations
// •	Cache the result of a computation until dependencies change.
// •	Prevents recalculating on every render.
// import { useMemo, useState } from "react";

// function ExpensiveComponent({ numbers }) {
//   const [filter, setFilter] = useState("");

//   // expensive computation
//   const sortedNumbers = useMemo(() => {
//     console.log("Computing...");
//     return numbers.sort((a, b) => a - b);
//   }, [numbers]); // only re-runs when numbers change

//   const filtered = useMemo(() => {
//     return sortedNumbers.filter(n => n.toString().includes(filter));
//   }, [sortedNumbers, filter]);

//   return (
//     <>
//       <input value={filter} onChange={e => setFilter(e.target.value)} />
//       <ul>{filtered.map((n, i) => <li key={i}>{n}</li>)}</ul>
//     </>
//   );
// }
// ✅ Without useMemo, both sorting & filtering would run on every keystroke.
// ________________________________________
// 2. useCallback for Stable Functions
// •	Heavy computations inside callbacks should also be memoized.
// •	Prevents creating new function references that cause re-renders in children.
// const handleCalculate = useCallback(() => {
//   return expensiveFunction();
// }, [dependencies]);
// ________________________________________
// 3. Move Computations Outside Rendering
// •	If calculation does not depend on React state/props, move it outside the component.
// const precomputedData = heavyCalculation(); // runs once at module load

// function Component() {
//   return <div>{precomputedData}</div>;
// }
// ________________________________________
// 4. Web Workers for Really Heavy Work
// •	For CPU-intensive tasks (e.g., image processing, large dataset crunching), move computation to a Web Worker.
// •	Keeps the UI thread responsive.
// You can use libraries like comlink or workerize.
// ________________________________________
// 5. Memoize Components (React.memo)
// •	If child components re-render unnecessarily because of props, wrap them with React.memo.
// •	Combined with useMemo for computations = big win.
// ________________________________________
// ✅ Rule of thumb:
// •	Use useMemo for expensive derived values.
// •	Use useCallback for stable functions.
// •	Use Web Workers if computation is so heavy it blocks UI.

// A child component re-renders even when props don’t change — what’s your debugging approach?

// 🔎 Step-by-step Debugging Approach
// 1. Confirm re-renders
// Add a render log:
// const Child = React.memo(({ value }) => {
//   console.log("Child re-render", value);
//   return <div>{value}</div>;
// });
// 👉 This tells you when and why React thinks it needs to render.
// ________________________________________
// 2. Check props identity
// Even if props look the same, objects, arrays, and functions create new references every render.
// // ❌ Causes re-renders (new object every time)
// <Child data={{ id: 1 }} />

// // ✅ Fix with useMemo
// const memoizedData = useMemo(() => ({ id: 1 }), []);
// <Child data={memoizedData} />
// Same with callbacks:
// // ❌ New function each render
// <Child onClick={() => doSomething()} />

// // ✅ Stable reference
// const handleClick = useCallback(() => doSomething(), []);
// <Child onClick={handleClick} />
// ________________________________________
// 3. Wrap child in React.memo
// Ensure the child skips re-rendering when shallow props comparison shows no change.
// const Child = React.memo(function Child({ value }) {
//   return <div>{value}</div>;
// });
// If it still re-renders, props or context are changing.
// ________________________________________
// 4. Inspect parent re-renders
// If the parent re-renders (due to state/context), React will re-run the child too — unless the child is wrapped in React.memo with stable props.
// ________________________________________
// 5. Look for context usage
// •	If the child consumes useContext, any context update re-renders all consumers.
// •	Fix: split contexts, or use selector-based contexts (e.g., use-context-selector).
// ________________________________________
// 6. Use tools
// •	React DevTools Profiler → see what re-renders and why.
// •	why-did-you-render → a library that tells you which props triggered a re-render.
// import React from "react";
// if (process.env.NODE_ENV === "development") {
//   const whyDidYouRender = require("@welldone-software/why-did-you-render");
//   whyDidYouRender(React, { trackAllPureComponents: true });
// }
// ________________________________________
// ✅ Quick checklist I run through:
// 1.	Add console logs → confirm re-render.
// 2.	Check for object/array/function props → memoize if needed.
// 3.	Wrap child with React.memo.
// 4.	Check parent/state/context triggers.
// 5.	Use Profiler or WDYR if still unclear.

//  How do you implement role-based authentication in a React app?
// Steps to Implement RBAC in React
// 1. Authentication & Roles Source
// •	Typically you get user info (with role(s)) after login via:
// o	JWT token with role claims.
// o	API response (e.g., { id: 1, name: "Sai", role: "admin" }).
// o	Auth provider (Firebase, Auth0, Keycloak, etc.).
// Store this info in:
// •	React Context
// •	Redux / Zustand
// •	Or directly in a global state hook.
// ________________________________________
// 2. Protect Routes with Role Checks
// Use React Router to guard routes.
// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// function ProtectedRoute({ children, allowedRoles }) {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return children;
// }
// Usage:
// <Route
//   path="/admin"
//   element={
//     <ProtectedRoute allowedRoles={['admin']}>
//       <AdminDashboard />
//     </ProtectedRoute>
//   }
// />
// ________________________________________
// 3. Role-based Component Rendering
// Sometimes you just need to hide/show parts of UI based on roles.
// function DeleteButton() {
//   const { user } = useAuth();
//   if (user.role !== "admin") return null;
//   return <button>Delete</button>;
// }
// Or with a helper HOC:
// const WithRole = ({ role, children }) => {
//   const { user } = useAuth();
//   return user?.role === role ? children : null;
// };
// ________________________________________
// 4. Store Tokens Securely
// •	Store JWT in httpOnly cookies (preferred) or localStorage (less secure).
// •	On each API request, send token → backend validates role before processing.
// ________________________________________
// 5. Backend Enforcement (Important!)
// ⚠️ React RBAC is only UI-level.
// Real security must be enforced server-side:
// •	API should check user’s role before returning protected data.
// •	Example (Express.js middleware):
// •	function authorizeRoles(...allowedRoles) {
// •	  return (req, res, next) => {
// •	    if (!allowedRoles.includes(req.user.role)) {
// •	      return res.status(403).json({ message: "Forbidden" });
// •	    }
// •	    next();
// •	  };
// •	}
// ________________________________________
// 6. Optional: Role Hierarchies & Permissions
// •	Instead of hardcoding if role === 'admin', define a permission map:
// const rolePermissions = {
//   admin: ["create", "edit", "delete"],
//   editor: ["create", "edit"],
//   user: ["view"]
// };
// Then check:
// function Can({ action, children }) {
//   const { user } = useAuth();
//   const permissions = rolePermissions[user.role] || [];
//   return permissions.includes(action) ? children : null;
// }
// Usage:
// <Can action="delete">
//   <DeleteButton />
// </Can>
// ________________________________________
// ✅ Summary
// 1.	Authenticate user → get roles (JWT, API, provider).
// 2.	Store roles in context/global state.
// 3.	Protect routes with ProtectedRoute.
// 4.	Show/hide UI with role checks.
// 5.	Enforce roles on backend for real security.

// You need to share state across deeply nested components. What options do you have?
// 🔑 Options for Sharing State Across Deeply Nested Components
// 1. Props Drilling (Basic but Not Scalable)
// •	Pass state from parent → child → grandchild → etc.
// •	Works for small apps, but quickly becomes painful.
// function Parent() {
//   const [theme, setTheme] = useState("light");
//   return <Child theme={theme} setTheme={setTheme} />;
// }
// ________________________________________
// 2. React Context API (Most Common)
// •	Create a Context and wrap your tree.
// •	Any nested component can consume without prop drilling.
// const ThemeContext = createContext();

// function App() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <DeepChild />
//     </ThemeContext.Provider>
//   );
// }

// function DeepChild() {
//   const { theme, setTheme } = useContext(ThemeContext);
//   return <button onClick={() => setTheme("dark")}>{theme}</button>;
// }
// ✅ Best for global app state like theme, auth, language.
// ________________________________________
// 3. State Management Libraries
// If state gets complex or large, use a dedicated store:
// •	Redux Toolkit (most popular, structured, good for large apps).
// •	Zustand (lightweight, minimal boilerplate).
// •	Recoil / Jotai (atomic state management).
// •	MobX (reactive state).
// Example with Zustand:
// import create from "zustand";

// const useStore = create(set => ({
//   theme: "light",
//   setTheme: theme => set({ theme })
// }));

// function DeepChild() {
//   const { theme, setTheme } = useStore();
//   return <button onClick={() => setTheme("dark")}>{theme}</button>;
// }
// ________________________________________
// 4. URL / Router State
// •	Share state via query params or route params.
// •	Useful for filter/search state, so it persists on refresh or shareable links.
// <Route path="/dashboard/:tab" element={<Dashboard />} />
// ________________________________________
// 5. React Query (Server State)
// •	For data fetched from APIs, don’t lift state manually — use React Query (TanStack Query).
// •	It handles caching, refetching, and sharing across components.
// const { data } = useQuery(["user"], fetchUser);
// ________________________________________
// 6. Event Emitters / Pub-Sub
// •	Useful for decoupled components that don’t share a parent.
// •	Libraries like mitt or even window.dispatchEvent can help.
// ________________________________________
// 7. Local Storage / Session Storage (Persistence)
// •	Store state in browser storage so it can be accessed across refreshes or tabs.
// •	Usually combined with context or store.
// ________________________________________
// ✅ Rule of Thumb
// •	Simple state, small app → props drilling.
// •	Medium app → Context API.
// •	Large/complex state → Redux, Zustand, Recoil, etc.
// •	Server state → React Query.
// •	Cross-tab or persistent state → LocalStorage / IndexedDB.

//  
// How do you handle memory leaks in React apps (like setInterval, subscriptions)?
// 🔎 Common Sources of Memory Leaks in React
// 1.	setInterval / setTimeout → not cleared on unmount.
// 2.	Event listeners (window.addEventListener, DOM listeners).
// 3.	WebSocket / API subscriptions.
// 4.	Promises or async calls → updating state after unmount.
// 5.	Uncleaned refs or caches.
// ________________________________________
// ✅ Best Practices to Prevent Memory Leaks
// 1. Clean up side effects in useEffect
// Every useEffect can return a cleanup function:
// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("Running...");
//   }, 1000);

//   return () => clearInterval(interval); // ✅ cleanup
// }, []);
// For event listeners:
// useEffect(() => {
//   const handler = () => console.log("scrolling");
//   window.addEventListener("scroll", handler);

//   return () => window.removeEventListener("scroll", handler); // ✅ cleanup
// }, []);
// ________________________________________
// 2. Abort API Calls (fetch / Axios)
// If the component unmounts while a fetch is pending, calling setState afterward triggers a warning.
// useEffect(() => {
//   const controller = new AbortController();

//   fetch("/api/data", { signal: controller.signal })
//     .then(res => res.json())
//     .then(setData)
//     .catch(err => {
//       if (err.name !== "AbortError") console.error(err);
//     });

//   return () => controller.abort(); // ✅ cancel on unmount
// }, []);
// Axios has CancelToken or AbortController as well.
// ________________________________________
// 3. Guard State Updates After Unmount
// Sometimes you can track with a flag:
// useEffect(() => {
//   let isMounted = true;

//   asyncFunction().then(result => {
//     if (isMounted) setData(result);
//   });

//   return () => { isMounted = false; };
// }, []);
// ________________________________________
// 4. Cleanup WebSockets / Subscriptions
// useEffect(() => {
//   const socket = new WebSocket("ws://example.com");

//   socket.onmessage = (msg) => console.log(msg);

//   return () => socket.close(); // ✅ close on unmount
// }, []);
// ________________________________________
// 5. Use Libraries That Manage Cleanup
// •	React Query → automatically cancels queries if the component unmounts.
// •	RxJS + takeUntil → unsubscribes observables.
// •	zustand, jotai → handle state globally, avoiding dangling listeners.
// ________________________________________
// 6. React Dev Tools & Profiling
// •	Use Chrome DevTools Performance > Memory tab.
// •	Look for detached DOM nodes or growing memory usage after navigation.
// ________________________________________
// ⚖️ Rule of Thumb
// •	Always return a cleanup function from useEffect.
// •	Cancel intervals, timeouts, subscriptions, and fetch requests.
// •	Don’t update state if a component is unmounted.
// •	Use modern libraries (React Query, SWR) to handle async safely.

// How would you design a theme switcher (dark/light mode) in React?
// 🔑 Steps to Implement Theme Switcher
// 1. Decide Where to Store Theme State
// Options:
// •	React Context → so all components can access theme easily.
// •	CSS variables → for instant style changes.
// •	Local Storage → to remember user preference.
// •	System Preference (prefers-color-scheme) → use as a default.
// ________________________________________
// 2. Create a Theme Context
// import { createContext, useContext, useState, useEffect } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // Load from localStorage or system preference
//   const getInitialTheme = () => {
//     if (localStorage.getItem("theme")) {
//       return localStorage.getItem("theme");
//     }
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   };

//   const [theme, setTheme] = useState(getInitialTheme);

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     document.documentElement.setAttribute("data-theme", theme); // hook for CSS variables
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
// ________________________________________
// 3. Hook CSS Variables into Theme
// In index.css (or Tailwind config):
// :root[data-theme="light"] {
//   --bg-color: #ffffff;
//   --text-color: #000000;
// }

// :root[data-theme="dark"] {
//   --bg-color: #121212;
//   --text-color: #ffffff;
// }

// body {
//   background: var(--bg-color);
//   color: var(--text-color);
// }
// ________________________________________
// 4. Create a Toggle Button
// import { useTheme } from "./ThemeProvider";

// function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
//     </button>
//   );
// }
// ________________________________________
// 5. Wrap App with Provider
// import { ThemeProvider } from "./ThemeProvider";
// import ThemeToggle from "./ThemeToggle";

// function App() {
//   return (
//     <ThemeProvider>
//       <div>
//         <h1>Hello Theme Switcher</h1>
//         <ThemeToggle />
//       </div>
//     </ThemeProvider>
//   );
// }
// ________________________________________
// ✨ Extras / Best Practices
// •	Animations → smooth transition with transition: background 0.3s;.
// •	Accessibility → keep good contrast for both modes.
// •	TailwindCSS users → enable darkMode: "class" in config and toggle a class (dark) on <html> instead of data-theme.
// •	Multiple themes → scale easily by adding more :root[data-theme="xyz"] sets.

// Your app needs offline support — how would you implement it?
// 🔑 Ways to Implement Offline Support
// 1. Service Workers (Caching)
// •	A service worker sits between your app and the network.
// •	It intercepts requests and serves cached responses when offline.
// •	Can pre-cache static assets (HTML, JS, CSS, icons) and runtime cache API calls.
// In React:
// •	If using CRA (Create React App) → it has built-in service worker setup (serviceWorkerRegistration.js).
// •	If using Vite / Next.js → use Workbox or plugins.
// Example with Workbox (runtime caching):
// // service-worker.js
// import { registerRoute } from "workbox-routing";
// import { StaleWhileRevalidate } from "workbox-strategies";

// registerRoute(
//   ({ request }) => request.destination === "script" || request.destination === "style",
//   new StaleWhileRevalidate()
// );
// ________________________________________
// 2. Local Storage / IndexedDB
// For dynamic data (e.g., API responses, form inputs):
// •	Use localStorage for small key-value data.
// •	Use IndexedDB (via libraries like idb) for structured/offline-first storage.
// Example with IndexedDB:
// import { openDB } from 'idb';

// const db = await openDB('my-db', 1, {
//   upgrade(db) {
//     db.createObjectStore('users');
//   },
// });

// await db.put('users', { id: 1, name: "Sai" }, 1);
// const user = await db.get('users', 1);
// ________________________________________
// 3. Background Sync (Optional but Powerful)
// •	Queue API requests when offline.
// •	Send them once the connection is back.
// •	Supported by service workers (workbox-background-sync).
// Example: saving a form submission while offline → sync when online.
// ________________________________________
// 4. React Query / Apollo (Cache First Strategies)
// If you’re already using a data-fetching library:
// •	React Query → persists cache in localStorage/IndexedDB (persistQueryClient).
// •	Apollo Client → supports cache persistence for GraphQL.
// Example with React Query:
// import { persistQueryClient } from '@tanstack/react-query-persist-client';
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

// const persister = createSyncStoragePersister({ storage: window.localStorage });
// persistQueryClient({ queryClient, persister });
// ________________________________________
// 5. Detect Offline Mode in React
// Show an offline banner or fallback UI:
// function useOnlineStatus() {
//   const [online, setOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     const update = () => setOnline(navigator.onLine);
//     window.addEventListener("online", update);
//     window.addEventListener("offline", update);
//     return () => {
//       window.removeEventListener("online", update);
//       window.removeEventListener("offline", update);
//     };
//   }, []);

//   return online;
// }
// Usage:
// const isOnline = useOnlineStatus();
// return !isOnline && <div>You are offline 🚫</div>;
// ________________________________________
// ✅ Full Offline Strategy
// 1.	Cache static assets → via service workers.
// 2.	Cache dynamic data → IndexedDB + React Query/Apollo persistence.
// 3.	Background sync → queue requests until online.
// 4.	Offline-aware UI → show status banners & graceful fallbacks.

// What security features should be taken while designing API's?
// 🔑 1. Authentication
// •	Ensure that only authorized users can access your API.
// •	Common methods:
// o	JWT (JSON Web Tokens) → stateless, widely used for REST APIs.
// o	OAuth 2.0 / OpenID Connect → standard for third-party access.
// o	API Keys → simple but limited security; usually for service-to-service communication.
// •	Always validate tokens and their expiration on the server side.
// ________________________________________
// 🔑 2. Authorization / Role-Based Access Control (RBAC)
// •	Once a user is authenticated, check what they’re allowed to do.
// •	Example:
// o	admin → can create/update/delete resources.
// o	user → can only read or update own data.
// •	Implement server-side checks for every request.
// ________________________________________
// 🔑 3. Input Validation & Sanitization
// •	Prevent injection attacks (SQL, NoSQL, command injection, XSS).
// •	Techniques:
// o	Validate all incoming data types and formats.
// o	Sanitize input strings (remove HTML or special characters if necessary).
// o	Use ORM/parameterized queries for databases (e.g., Prisma, Sequelize).
// ________________________________________
// 🔑 4. Rate Limiting & Throttling
// •	Protect your API from DDoS attacks or brute-force attempts.
// •	Limit number of requests per IP or per user:
// •	100 requests per minute per user/IP
// •	Use libraries like express-rate-limit or API gateway rate limits.
// ________________________________________
// 🔑 5. HTTPS / TLS
// •	Always serve API over HTTPS to encrypt data in transit.
// •	Never send sensitive info (tokens, passwords) over HTTP.
// ________________________________________
// 🔑 6. CORS (Cross-Origin Resource Sharing)
// •	Restrict which domains can access your API.
// •	Avoid Access-Control-Allow-Origin: * in production.
// •	Only allow trusted domains.
// ________________________________________
// 🔑 7. Data Encryption & Hashing
// •	Passwords → hash using strong algorithms (bcrypt, Argon2).
// •	Sensitive data → encrypt at rest (AES, etc.) if necessary.
// •	Never log sensitive info (passwords, tokens, credit card data).
// ________________________________________
// 🔑 8. Logging & Monitoring
// •	Track suspicious activities (failed logins, unusual requests).
// •	Monitor rate-limiting events and errors.
// •	Tools: ELK stack, Datadog, Prometheus, Sentry.
// ________________________________________
// 🔑 9. Versioning & Deprecation
// •	Keep multiple API versions and deprecate old ones gradually.
// •	This helps avoid breaking clients and potential security flaws in legacy endpoints.
// ________________________________________
// 🔑 10. Prevent Common Attacks
// •	SQL/NoSQL Injection → use parameterized queries.
// •	XSS / CSRF → sanitize inputs, validate tokens.
// •	Mass Assignment → explicitly whitelist fields for updates.
// •	File Upload Vulnerabilities → validate file types, scan for malware.
// ________________________________________
// 🔑 11. Use Security Headers
// •	Content-Security-Policy → restrict scripts, images, styles.
// •	X-Frame-Options → prevent clickjacking.
// •	X-Content-Type-Options: nosniff → prevent MIME type sniffing.
// •	Strict-Transport-Security → enforce HTTPS.
// ________________________________________
// 🔑 12. API Gateway & Throttling (Optional)
// •	For larger apps, place API behind a gateway (e.g., AWS API Gateway, Kong, Nginx).
// •	Handles authentication, rate limiting, IP whitelisting, and logging centrally.
// ________________________________________
// ✅ Summary
// A secure API design includes:
// 1.	Authentication & role-based authorization.
// 2.	Input validation & sanitization.
// 3.	HTTPS / encrypted communication.
// 4.	Rate limiting & throttling.
// 5.	Logging, monitoring, and security headers.
// 6.	Safe handling of sensitive data.
// 7.	Protection against injection, XSS, CSRF, and file upload vulnerabilities.

// What is API throttling?
// 🔑 Key Points About API Throttling
// 1. Purpose
// •	Prevent overload: Stop a client from sending too many requests and crashing the server.
// •	Fair usage: Ensure all clients get a reasonable share of resources.
// •	Security: Mitigate DDoS or brute-force attacks.
// ________________________________________
// 2. How It Works
// •	The server sets a limit like:
// •	100 requests per minute per user/IP
// •	If a client exceeds the limit, the server rejects additional requests with a status code like:
// o	429 Too Many Requests
// •	Some APIs include headers like:
// •	X-RateLimit-Limit: 100
// •	X-RateLimit-Remaining: 20
// •	X-RateLimit-Reset: 60
// → Tells the client how many requests are left and when the limit resets.
// ________________________________________
// 3. Implementation Methods
// 1.	Fixed Window
// o	Count requests per fixed interval (e.g., per minute).
// o	Simple, but bursts at window edges can happen.
// 2.	Sliding Window
// o	Counts requests in a rolling time window.
// o	Smoother control than fixed window.
// 3.	Token Bucket
// o	Tokens are added to a bucket at a fixed rate.
// o	Each request consumes a token.
// o	Allows short bursts while controlling average rate.
// 4.	Leaky Bucket
// o	Requests flow into a “bucket” that leaks at a fixed rate.
// o	Controls burstiness by smoothing requests over time.
// ________________________________________
// 4. Common Use Cases
// •	Public APIs (Twitter, GitHub, Google Maps) to prevent abuse.
// •	Internal microservices to protect downstream services.
// •	Login endpoints to prevent brute-force attacks.
// ________________________________________
// 5. Difference Between Throttling & Rate Limiting
// Feature	Throttling	Rate Limiting
// Purpose	Smooth out bursts	Limit overall requests
// Behavior	Delay or reject excess requests	Reject requests exceeding limit
// Example	Allow 10 req/sec per user	Allow 100 req/min per API key
// ________________________________________
// 6. In React / Frontend Apps
// •	Frontend can implement client-side throttling to reduce unnecessary API calls:
// o	debounce for search input.
// o	throttle for scrolling or auto-save.
// ________________________________________
// In short: API throttling protects servers and ensures fair usage by limiting the rate of requests from a client, often returning 429 when limits are exceeded.

// How to improve the performance in React Application?
// 🔑 1. Optimize Rendering
// a. Use React.memo
// •	Prevent unnecessary re-renders of functional components when props haven’t changed.
// const Child = React.memo(({ data }) => {
//   return <div>{data.name}</div>;
// });
// b. useMemo for Expensive Computations
// •	Memoize heavy calculations to avoid recomputation on every render.
// const sortedData = useMemo(() => data.sort((a, b) => a.value - b.value), [data]);
// c. useCallback for Stable Function References
// •	Prevent child components from re-rendering due to new function references.
// const handleClick = useCallback(() => console.log("Clicked"), []);
// ________________________________________
// 🔑 2. Optimize Lists and Large Components
// a. Virtualization
// •	Render only visible items in large lists using libraries like:
// o	react-window
// o	react-virtualized
// import { FixedSizeList as List } from 'react-window';
// b. Pagination / Infinite Scroll
// •	Load data in chunks instead of rendering all items at once.
// ________________________________________
// 🔑 3. Code Splitting & Lazy Loading
// •	Split bundles so users load only what’s needed.
// const LazyComponent = React.lazy(() => import('./LazyComponent'));
// <Suspense fallback={<div>Loading...</div>}>
//   <LazyComponent />
// </Suspense>
// •	Use route-based splitting with React Router.
// ________________________________________
// 🔑 4. Avoid Anonymous Objects/Functions in JSX
// •	Inline objects or functions create new references → re-renders.
// // ❌
// <MyComponent style={{ color: "red" }} />

// // ✅
// const style = { color: "red" };
// <MyComponent style={style} />
// ________________________________________
// 🔑 5. Optimize Images & Assets
// •	Use optimized images (WebP, AVIF).
// •	Lazy load images:
// <img loading="lazy" src="image.jpg" alt="..." />
// •	Minify CSS/JS and use compression (gzip/brotli).
// ________________________________________
// 🔑 6. Minimize State Updates
// •	Keep state local when possible.
// •	Avoid updating state in loops or unnecessarily.
// •	Use batching (React 18+ does automatic batching).
// ________________________________________
// 🔑 7. Use Efficient State Management
// •	Heavy global state (Redux, Context) can trigger unnecessary re-renders.
// •	Split state into smaller slices or use Zustand/Recoil for more granular control.
// ________________________________________
// 🔑 8. Web Performance Tools
// •	React DevTools Profiler → identify slow components.
// •	Chrome DevTools Lighthouse → audits app performance.
// •	Bundle Analyzer → find large dependencies (webpack-bundle-analyzer).
// ________________________________________
// 🔑 9. Memoize Context Values
// •	Prevent all consumers from re-rendering by memoizing the value:
// const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
// <ThemeContext.Provider value={value}>
// ________________________________________
// 🔑 10. Optimize Network Requests
// •	Debounce or throttle API calls (search input, scrolling).
// •	Cache responses using React Query / SWR.
// •	Prefetch data when possible.
// ________________________________________
// ✅ Summary
// •	Component-level optimizations: React.memo, useMemo, useCallback.
// •	List & rendering optimizations: virtualization, pagination.
// •	Lazy loading & code splitting: React.lazy + Suspense.
// •	State & context management: granular state, memoized context.
// •	Assets & network: image optimization, caching, throttling.
// •	Monitoring: Profiler, Lighthouse, Bundle Analyzer.

// What is debouncing in React?
// Debouncing in React (or in JavaScript in general) is a technique used to limit how often a function is executed, especially in response to events that can fire very frequently, like onChange, onScroll, onResize, or onKeyUp.
// It’s commonly used to improve performance and prevent unnecessary work, like API calls, during rapid user input.
// ________________________________________
// How it works:
// •	You wrap your function (e.g., an API call) in a debounce function.
// •	The function only executes after a certain period of inactivity.
// •	If the event keeps firing before the timeout ends, the timer resets.
// ________________________________________
// Example in React:
// Suppose you want to fetch suggestions as the user types in a search box:
// import { useState, useEffect } from "react";

// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// export default function Search() {
//   const [query, setQuery] = useState("");

//   const handleSearch = debounce((value) => {
//     console.log("Fetching API with:", value);
//     // Call your API here
//   }, 500); // wait 500ms after last keystroke

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//     handleSearch(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       value={query}
//       onChange={handleChange}
//       placeholder="Search..."
//     />
//   );
// }
// ________________________________________
// Key Points:
// 1.	Prevents unnecessary executions – reduces API calls or heavy computations.
// 2.	Delay-based – executes only after the user stops triggering the event for a certain time.
// 3.	Often used with search inputs, window resizing, scroll events, or form validations.

// What if in a react app we need to develop a feature of auto save the inputs of a form?
// For an auto-save form feature in a React app, debouncing is actually a perfect fit. The idea is to save the form after the user stops typing for a short period, instead of saving on every keystroke. This reduces unnecessary API calls while keeping data safe.
// Here’s a step-by-step approach:
// ________________________________________
// 1. Setup the form state
// import { useState } from "react";

// function AutoSaveForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//     </form>
//   );
// }

// export default AutoSaveForm;
// ________________________________________
// 2. Create a debounced save function
// You can use a custom debounce function or use a library like lodash.debounce.
// import { useEffect, useRef } from "react";

// function useDebounce(callback, delay) {
//   const timer = useRef();

//   const debouncedFunction = (...args) => {
//     if (timer.current) clearTimeout(timer.current);
//     timer.current = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };

//   return debouncedFunction;
// }
// ________________________________________
// 3. Integrate debounced auto-save
// function AutoSaveForm() {
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   const saveData = (data) => {
//     console.log("Auto-saving data:", data);
//     // Make API call to save formData
//   };

//   const debouncedSave = useDebounce(saveData, 1000); // 1 second debounce

//   const handleChange = (e) => {
//     const newData = { ...formData, [e.target.name]: e.target.value };
//     setFormData(newData);
//     debouncedSave(newData); // auto-save after 1 second of inactivity
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//     </form>
//   );
// }
// ________________________________________
// ✅ Advantages of this approach:
// 1.	Auto-saves without interrupting user input.
// 2.	Reduces unnecessary API calls.
// 3.	Flexible – you can adjust the debounce delay.
// 4.	Works even if the user types slowly or pauses.

// Which react library is used to represent JSON data into charts, graphs, etc for better visualization and performance?
// 1. Recharts
// •	Website: https://recharts.org
// •	Pros:
// o	Simple, declarative, built on React components.
// o	Good for common charts: line, bar, area, pie, radar.
// o	Easy to use with JSON data.
// •	Cons:
// o	Less customizable for very complex charts.
// •	Example:
// import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// const data = [
//   { name: 'Jan', value: 30 },
//   { name: 'Feb', value: 45 },
//   { name: 'Mar', value: 60 },
// ];

// <LineChart width={400} height={300} data={data}>
//   <Line type="monotone" dataKey="value" stroke="#8884d8" />
//   <XAxis dataKey="name" />
//   <YAxis />
//   <Tooltip />
//   <CartesianGrid stroke="#ccc" />
// </LineChart>
// ________________________________________
// 2. Chart.js (with react-chartjs-2)
// •	Website: https://www.chartjs.org
// •	Pros:
// o	Extremely popular, mature, highly customizable.
// o	Supports many chart types and animations.
// •	Cons:
// o	Slightly heavier bundle size than Recharts.
// •	Example:
// import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['Jan', 'Feb', 'Mar'],
//   datasets: [
//     {
//       label: 'Sales',
//       data: [30, 45, 60],
//       borderColor: 'blue',
//       backgroundColor: 'lightblue',
//     },
//   ],
// };

// <Line data={data} />;
// ________________________________________
// 3. Victory
// •	Website: https://formidable.com/open-source/victory
// •	Pros:
// o	Declarative, React-focused.
// o	Very flexible and supports complex data visualization.
// •	Cons:
// o	Learning curve is slightly higher than Recharts.
// ________________________________________
// 4. Nivo
// •	Website: https://nivo.rocks
// •	Pros:
// o	Beautiful, responsive, interactive charts.
// o	Great for dashboards.
// o	Works directly with JSON data.
// •	Cons:
// o	Bundle size is bigger; might need tree-shaking for optimization.
// ________________________________________
// Recommendation for React
// •	If you need simple and fast charts: Recharts ✅
// •	For advanced dashboards and interactive visuals: Nivo or Victory
// •	For highly customizable, production-ready charts: Chart.js with react-chartjs-2

// If you have to inform the backend developers about some API's are failing how will you do that?
// 1. Gather all relevant information
// Before notifying the backend team, make sure you have:
// •	API endpoint (e.g., POST /api/users/login)
// •	Request payload (if applicable)
// •	Response/error message from the API
// •	HTTP status code (e.g., 500, 404, 403)
// •	Steps to reproduce the issue
// •	Environment details (development, staging, or production)
// •	Time of occurrence (if it’s intermittent)
// ________________________________________
// 2. Choose the communication channel
// Depending on your team’s workflow:
// •	Slack/Teams message – for quick notifications
// •	Email – if it requires detailed explanation
// •	Issue tracking system (Jira, Trello, GitHub Issues) – best for tracking and assigning fixes
// ________________________________________
// 3. Structure your message
// Here’s a sample professional format for a Slack or Jira ticket:
// Title: API /api/users/login returning 500 Internal Server Error
// Description:
// Hi Team,

// The following API is failing:

// - Endpoint: POST /api/users/login
// - Environment: Staging
// - Request Payload:
//   {
//     "email": "test@example.com",
//     "password": "password123"
//   }
// - Response:
//   Status: 500
//   Message: "Internal Server Error"
// - Steps to reproduce:
//   1. Open the login form
//   2. Enter valid credentials
//   3. Click "Login"
// - Time observed: 27-Sep-2025 10:30 AM IST

// Please investigate and advise if any changes are required on the frontend while the fix is being worked on.

// Thanks,
// [Your Name]
// ________________________________________
// 4. Optional: Add logs/screenshots
// •	Include browser console errors or network tab screenshots.
// •	Attach curl/Postman request screenshots to make it easier to debug.
// ________________________________________
// ✅ Key points:
// •	Be specific (endpoint, payload, status code)
// •	Be concise but include all necessary context
// •	Be polite and collaborative — the goal is problem-solving, not blaming

// Which tool is used to improve code standards in react application to show warnings for developers?
// 1. ESLint
// •	What it is: A static code analysis tool for identifying problematic patterns or code that doesn’t follow defined style rules in JavaScript/React.
// •	Purpose:
// o	Catch errors early (like undefined variables, incorrect hooks usage)
// o	Enforce consistent coding style
// o	Show warnings and errors directly in the IDE or console
// •	Integration with React:
// o	Use eslint-plugin-react for React-specific rules
// o	Use eslint-plugin-jsx-a11y for accessibility checks
// Example setup:
// npm install eslint eslint-plugin-react eslint-plugin-jsx-a11y --save-dev
// .eslintrc.json
// {
//   "env": {
//     "browser": true,
//     "es2021": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:react/recommended"
//   ],
//   "plugins": ["react", "jsx-a11y"],
//   "rules": {
//     "react/prop-types": "off",
//     "no-unused-vars": "warn"
//   },
//   "settings": {
//     "react": {
//       "version": "detect"
//     }
//   }
// }
// ________________________________________
// 2. Optional complementary tools
// •	Prettier – Automatically formats code to a consistent style. Often used together with ESLint.
// •	Husky + lint-staged – Run ESLint on staged files before commits to enforce code quality.
// ________________________________________
// ✅ How it helps in React
// •	Warns about improper use of hooks (like missing dependencies in useEffect)
// •	Highlights syntax errors or potential runtime errors
// •	Enforces best practices across the team
// •	Can be configured to show warnings or block builds for severe issues

// What are the unit testing tools used in React Application?
// 1. Jest
// •	Official site: https://jestjs.io/
// •	Type: Test runner + assertion library
// •	Pros:
// o	Developed by Facebook; works out-of-the-box with React.
// o	Supports mocking, snapshots, and coverage reports.
// o	Fast and easy to integrate.
// •	Usage Example:
// import { sum } from './utils';

// test('adds 2 + 3 to equal 5', () => {
//   expect(sum(2, 3)).toBe(5);
// });
// ________________________________________
// 2. React Testing Library (RTL)
// •	Official site: https://testing-library.com/docs/react-testing-library/intro
// •	Type: UI testing library
// •	Pros:
// o	Focuses on testing components from the user’s perspective.
// o	Encourages testing behavior rather than implementation details.
// •	Usage Example:
// import { render, screen, fireEvent } from '@testing-library/react';
// import Button from './Button';

// test('button click calls handler', () => {
//   const handleClick = jest.fn();
//   render(<Button onClick={handleClick}>Click Me</Button>);
//   fireEvent.click(screen.getByText(/click me/i));
//   expect(handleClick).toHaveBeenCalledTimes(1);
// });
// ________________________________________
// 3. Enzyme (Legacy)
// •	Official site: https://enzymejs.github.io/enzyme/
// •	Type: Component testing utility
// •	Pros:
// o	Allows shallow rendering, full DOM rendering, and static rendering.
// o	Good for testing component internals.
// •	Cons:
// o	React Testing Library is preferred now for behavior-focused tests.
// ________________________________________
// 4. Other Supporting Tools
// •	MSW (Mock Service Worker): Mock API calls in tests
// •	Jest DOM: Adds DOM-specific assertions for React components
// •	Cypress (for E2E, not unit tests): Useful when unit + integration testing needs to run in the browser
// ________________________________________
// ✅ Recommended Stack for React Unit Testing
// •	Jest → test runner + assertions
// •	React Testing Library → component testing from user perspective
// •	Optional: Jest DOM + MSW → for DOM assertions and mocking APIs

// How do you handle API test case scenarios in React Application?
// 1. Identify API interactions
// •	Components using fetch or axios.
// •	Custom hooks for data fetching (useFetch, useQuery, etc.).
// •	Actions that trigger API calls (form submissions, button clicks).
// ________________________________________
// 2. Use a test runner and testing library
// •	Jest: for running tests and assertions.
// •	React Testing Library (RTL): for testing component behavior.
// ________________________________________
// 3. Mock API calls
// There are a few ways to mock APIs:
// a) Using Jest mocks
// For axios:
// // MyComponent.js
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function MyComponent() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get("/api/users")
//       .then((res) => setData(res.data))
//       .catch((err) => setError("Failed to fetch"));
//   }, []);

//   if (error) return <div>{error}</div>;
//   if (!data) return <div>Loading...</div>;
//   return <div>{data.length} Users Loaded</div>;
// }
// Test with mocked axios:
// import { render, screen, waitFor } from "@testing-library/react";
// import MyComponent from "./MyComponent";
// import axios from "axios";

// jest.mock("axios");

// test("loads and displays users", async () => {
//   axios.get.mockResolvedValue({ data: [{ id: 1 }, { id: 2 }] });
//   render(<MyComponent />);
//   await waitFor(() => expect(screen.getByText("2 Users Loaded")).toBeInTheDocument());
// });

// test("handles API error", async () => {
//   axios.get.mockRejectedValue(new Error("Network Error"));
//   render(<MyComponent />);
//   await waitFor(() => expect(screen.getByText("Failed to fetch")).toBeInTheDocument());
// });
// ________________________________________
// b) Using Mock Service Worker (MSW)
// •	MSW intercepts network requests in tests (or even dev) for realistic API mocking.
// •	More scalable for complex API scenarios.
// Example:
// // handlers.js
// import { rest } from 'msw';

// export const handlers = [
//   rest.get('/api/users', (req, res, ctx) => {
//     return res(ctx.json([{ id: 1, name: "John" }]));
//   }),
// ];
// // test setup
// import { setupServer } from 'msw/node';
// import { handlers } from './handlers';
// const server = setupServer(...handlers);
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
// ________________________________________
// 4. Handle different test scenarios
// 1.	Success scenario: API returns expected data → component renders correctly.
// 2.	Error scenario: API fails (network error, 500) → component shows error message.
// 3.	Empty data scenario: API returns empty array → check if component handles no-data gracefully.
// 4.	Loading state: Component shows “Loading…” while waiting for API.
// 5.	Edge cases: Unexpected data formats, partial data, or slow responses.
// ________________________________________
// 5. Best Practices
// •	Do not call real APIs in unit tests → always mock.
// •	Test behavior, not implementation details → e.g., check what user sees, not internal state.
// •	Use waitFor or findBy in RTL for async API results.
// •	Combine unit and integration tests for full coverage.

// Give me a estimation of completing a auto save functionality with unit testing including?
// Here’s a practical estimation for implementing an auto-save form feature with unit testing in a React application. I’ll break it down into phases with approximate timeframes, assuming a single developer and medium complexity form (3–5 fields):
// ________________________________________
// 1. Requirement Analysis & Planning – 1–2 hours
// •	Understand which fields need auto-save.
// •	Decide on debounce timing (e.g., 1–2 seconds after user stops typing).
// •	Decide whether API should be called per field change or the whole form.
// •	Plan for loading / saving / error states for UX feedback.
// ________________________________________
// 2. Implement Auto-Save Functionality – 4–6 hours
// •	Create form state using useState or useReducer.
// •	Implement debounce logic (custom hook or lodash debounce).
// •	Integrate API call for saving data (using fetch or axios).
// •	Add UI feedback: "Saving..." indicator and error messages.
// Deliverables:
// •	Functional form auto-saving after user stops typing.
// •	Visual feedback for users.
// ________________________________________
// 3. Unit Testing – 3–5 hours
// •	Tools: Jest + React Testing Library.
// •	Test cases to cover:
// 1.	Auto-save triggers after debounce timeout.
// 2.	API is called with correct payload.
// 3.	Error handling works correctly.
// 4.	Loading / saving states are rendered properly.
// 5.	Edge cases: empty fields, rapid input, network errors.
// •	Mock API calls using jest.mock() or MSW.
// Deliverables:
// •	All unit tests passing.
// •	Coverage for debounce, API calls, and UI states.
// ________________________________________
// 4. Integration & Manual Testing – 1–2 hours
// •	Test in development/staging environment.
// •	Validate auto-save behavior in different scenarios.
// •	Fix minor bugs or debounce timing adjustments.
// ________________________________________
// Estimated Total Time: 9–15 hours
// •	Low complexity form: ~9–10 hours.
// •	Medium complexity form (multiple fields + validations): ~12–15 hours.
// •	High complexity (dynamic fields, multi-step forms): 15–20+ hours.
// ________________________________________
// Tips to Speed Up
// 1.	Reuse a custom useDebounce or useAutoSave hook.
// 2.	Use mocked API calls in unit tests to avoid delays.
// 3.	Focus on behavior-driven tests rather than implementation details.
// 4.	Consider using Formik or React Hook Form to manage state efficiently.

//  Which cloud is used in your app development?
// In modern React (or full-stack) app development, several cloud providers are commonly used depending on the app’s requirements. Here’s a breakdown of the most popular options and what they are typically used for:
// ________________________________________
// 1. AWS (Amazon Web Services)
// •	Use Cases: Hosting, serverless backend (Lambda), databases (RDS, DynamoDB), storage (S3), authentication (Cognito), CI/CD.
// •	Why it’s popular: Scalable, reliable, extensive ecosystem.
// •	Example:
// o	Hosting React frontend on S3 + CloudFront
// o	Backend APIs with API Gateway + Lambda
// o	Database: DynamoDB or RDS
// ________________________________________
// 2. Firebase (by Google)
// •	Use Cases: Real-time database, hosting, authentication, serverless functions, analytics.
// •	Why it’s popular: Easy setup, great for rapid development, especially for small-medium apps.
// •	Example:
// o	Hosting React app on Firebase Hosting
// o	Auto-save or real-time data with Firestore
// o	Authentication with Firebase Auth
// ________________________________________
// 3. Microsoft Azure
// •	Use Cases: Hosting, serverless functions, databases, DevOps pipelines.
// •	Example: React frontend on Azure Static Web Apps, backend APIs with Azure Functions.
// ________________________________________
// 4. Vercel / Netlify
// •	Use Cases: Hosting React/Next.js apps, serverless functions, continuous deployment.
// •	Why it’s popular: Super simple deployment with Git integration, automatic previews.
// •	Example:
// o	Host a React SPA with CI/CD directly from GitHub.
// o	Use serverless functions for lightweight APIs.
// ________________________________________
// 5. Heroku (less popular now)
// •	Easy deployment of full-stack apps.
// •	Good for prototyping and small projects.
// ________________________________________
// Typical Stack for React Apps
// •	Frontend (React): Hosted on AWS S3 + CloudFront, Firebase Hosting, Vercel, or Netlify.
// •	Backend APIs: AWS Lambda, Node.js on EC2, or Firebase Functions.
// •	Database: DynamoDB, Firebase Firestore, PostgreSQL, MongoDB Atlas.
// •	CI/CD & Monitoring: GitHub Actions, AWS CodePipeline, or Vercel auto-deploy.

//  
// How would you implement infinite scrolling in React?
// //  - Discuss how to manage state for pagination and loading indicators.
// //  - What are the different strategies (intersection observer vs scroll events)?

// . State Management for Infinite Scroll
// You typically need state to handle:
// 1.	Data items – the list of items fetched so far.
// 2.	Pagination info – current page number or cursor.
// 3.	Loading state – whether a fetch is in progress.
// 4.	Has more items – whether there’s more data to fetch.
// Example with useState:
// import { useState, useEffect } from "react";

// const [items, setItems] = useState([]);
// const [page, setPage] = useState(1);
// const [loading, setLoading] = useState(false);
// const [hasMore, setHasMore] = useState(true);
// ________________________________________
// 2. Fetching Data with Pagination
// Suppose the backend API supports page and limit parameters:
// const fetchItems = async () => {
//   if (loading || !hasMore) return;

//   setLoading(true);
//   try {
//     const res = await fetch(`/api/items?page=${page}&limit=20`);
//     const data = await res.json();
    
//     setItems(prev => [...prev, ...data.items]);
//     setHasMore(data.items.length > 0);
//     setPage(prev => prev + 1);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     setLoading(false);
//   }
// };
// ________________________________________
// 3. Displaying Loading Indicators
// You can show a loader at the bottom when fetching more items:
// {loading && <div>Loading more items...</div>}
// ________________________________________
// 4. Strategies for Detecting Scroll Position
// There are two main strategies:
// A. Scroll Event Listener
// •	Attach onScroll to the container or window.
// •	Calculate if the user is near the bottom, then fetch more.
// useEffect(() => {
//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop + 100 >=
//       document.documentElement.offsetHeight
//     ) {
//       fetchItems();
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [loading, hasMore]);
// Pros: Works everywhere, easy to understand.
// Cons: Can be less efficient because scroll events fire frequently. May require throttling/debouncing.
// ________________________________________
// B. Intersection Observer (Recommended)
// •	Attach a ref to a sentinel element at the bottom.
// •	When the sentinel is visible, load more items.
// import { useRef, useEffect } from "react";

// const loaderRef = useRef(null);

// useEffect(() => {
//   const observer = new IntersectionObserver(
//     entries => {
//       if (entries[0].isIntersecting && hasMore) {
//         fetchItems();
//       }
//     },
//     { root: null, rootMargin: "100px", threshold: 0 }
//   );

//   if (loaderRef.current) observer.observe(loaderRef.current);

//   return () => {
//     if (loaderRef.current) observer.unobserve(loaderRef.current);
//   };
// }, [hasMore, loading]);
// Then, render:
// <div ref={loaderRef}></div>
// Pros: Efficient, doesn’t require manual scroll calculations, works well with variable item heights.
// Cons: Slightly more complex than scroll events.
// ________________________________________
// 5. Putting It Together
// function InfiniteScrollList() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const loaderRef = useRef(null);

//   const fetchItems = async () => {
//     if (loading || !hasMore) return;
//     setLoading(true);
//     try {
//       const res = await fetch(`/api/items?page=${page}&limit=20`);
//       const data = await res.json();
//       setItems(prev => [...prev, ...data.items]);
//       setHasMore(data.items.length > 0);
//       setPage(prev => prev + 1);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         if (entries[0].isIntersecting) fetchItems();
//       },
//       { root: null, rootMargin: "100px" }
//     );

//     if (loaderRef.current) observer.observe(loaderRef.current);
//     return () => loaderRef.current && observer.unobserve(loaderRef.current);
//   }, [loaderRef.current]);

//   return (
//     <div>
//       {items.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//       {loading && <p>Loading...</p>}
//       <div ref={loaderRef} />
//     </div>
//   );
// }
// ________________________________________
// ✅ Summary of Key Points
// •	State: Track items, page, loading, and hasMore.
// •	Scroll Detection: Either scroll events or intersection observer.
// •	Loading UI: Show loader when fetching.
// •	Efficiency: Intersection Observer is preferred for better performance.

// Design and implement a debounced search input component.
// //  - How would you handle race conditions in API responses?
// //  - What about caching previous search results?

// 1. Debounced Search Input Component
// Debouncing ensures that API calls are not triggered on every keystroke but only after the user stops typing for a specified delay.
// import { useState, useEffect, useRef } from "react";

// function DebouncedSearch({ searchApi, delay = 500 }) {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Cache to store previous search results
//   const cache = useRef({});

//   // Ref to handle race conditions
//   const latestRequest = useRef(0);

//   useEffect(() => {
//     if (!query) {
//       setResults([]);
//       return;
//     }

//     // Check cache first
//     if (cache.current[query]) {
//       setResults(cache.current[query]);
//       return;
//     }

//     const currentRequestId = ++latestRequest.current;
//     setLoading(true);

//     const handler = setTimeout(async () => {
//       try {
//         const data = await searchApi(query);

//         // Only set results if this is the latest request
//         if (currentRequestId === latestRequest.current) {
//           setResults(data);
//           cache.current[query] = data; // cache results
//         }
//       } catch (err) {
//         console.error(err);
//       } finally {
//         if (currentRequestId === latestRequest.current) {
//           setLoading(false);
//         }
//       }
//     }, delay);

//     return () => clearTimeout(handler);
//   }, [query, searchApi, delay]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search..."
//       />
//       {loading && <p>Loading...</p>}
//       <ul>
//         {results.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DebouncedSearch;
// ________________________________________
// 2. Handling Race Conditions
// Race conditions occur when multiple API calls are in flight, and an earlier request returns after a later request. To prevent outdated results from overriding newer ones:
// •	Use a latestRequest counter (useRef) that increments with every new API call.
// •	Only update results if the response matches the latest request ID.
// const currentRequestId = ++latestRequest.current;
// if (currentRequestId === latestRequest.current) {
//   setResults(data);
// }
// This ensures stale responses are ignored.
// ________________________________________
// 3. Caching Previous Search Results
// •	Use a useRef object (cache) to store results keyed by the search query.
// •	On a repeated query, return the cached data instead of calling the API.
// if (cache.current[query]) {
//   setResults(cache.current[query]);
//   return;
// }
// This improves performance and reduces unnecessary API calls.
// ________________________________________
// ✅ Key Points
// 1.	Debounce API calls to reduce network requests.
// 2.	Handle race conditions with a request counter or AbortController.
// 3.	Cache previous results to improve UX and reduce load on the server.
// 4.	The component is reusable and works for any API you pass as searchApi.

// How would you implement a virtualized list component?
// //  - Discuss handling dynamic item heights vs fixed heights.
// //  - What about scroll position maintenance during updates?
// 1. Why Virtualization?
// Rendering thousands of items in the DOM can be slow and memory-intensive. Virtualization renders only the visible portion of the list plus some buffer, improving performance drastically.
// ________________________________________
// 2. State & Core Concepts
// We need to track:
// •	scrollTop – current scroll position.
// •	containerHeight – visible viewport height.
// •	startIndex & endIndex – the range of items to render.
// •	itemHeights (optional) – for dynamic heights.
// const [scrollTop, setScrollTop] = useState(0);
// const containerRef = useRef(null);
// ________________________________________
// 3. Fixed Height Items (Simplest Case)
// If each item has a fixed height, calculations are simple:
// const ITEM_HEIGHT = 50; // px
// const buffer = 5;

// const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
// const endIndex = Math.min(
//   items.length - 1,
//   Math.ceil((scrollTop + containerHeight) / ITEM_HEIGHT) + buffer
// );

// const visibleItems = items.slice(startIndex, endIndex + 1);

// const offsetY = startIndex * ITEM_HEIGHT;
// Render the visible items with a spacer to maintain scroll height:
// <div
//   ref={containerRef}
//   style={{ overflowY: "auto", height: containerHeight }}
//   onScroll={(e) => setScrollTop(e.target.scrollTop)}
// >
//   <div style={{ height: items.length * ITEM_HEIGHT, position: "relative" }}>
//     {visibleItems.map((item, index) => (
//       <div
//         key={item.id}
//         style={{
//           position: "absolute",
//           top: offsetY + index * ITEM_HEIGHT,
//           height: ITEM_HEIGHT,
//           width: "100%",
//         }}
//       >
//         {item.content}
//       </div>
//     ))}
//   </div>
// </div>
// ✅ Pros: Simple and very fast.
// ❌ Cons: Only works if item heights are consistent.
// ________________________________________
// 4. Dynamic Item Heights
// For dynamic heights:
// 1.	Track heights for each item in a map:
// const itemHeights = useRef({}); // id -> height
// 2.	Measure rendered items with ref or ResizeObserver:
// <div
//   ref={(el) => {
//     if (el) itemHeights.current[item.id] = el.getBoundingClientRect().height;
//   }}
// >
//   {item.content}
// </div>
// 3.	Compute cumulative offsets:
// const offsets = items.map((item, i) =>
//   i === 0 ? 0 : offsets[i - 1] + (itemHeights.current[items[i - 1].id] || defaultHeight)
// );
// 4.	Render visible items based on scroll position and offsets:
// const startIndex = offsets.findIndex(offset => offset >= scrollTop) - 1;
// const endIndex = offsets.findIndex(offset => offset >= scrollTop + containerHeight);
// ✅ Pros: Works with variable height items.
// ❌ Cons: More complex and slower than fixed height; measuring heights dynamically adds overhead.
// ________________________________________
// 5. Maintaining Scroll Position During Updates
// When items are added, removed, or resized:
// •	Use scrollTop + cumulative height calculations to prevent “jumping”.
// •	If prepending items, adjust scrollTop so the viewport stays consistent:
// containerRef.current.scrollTop += addedItemsHeight;
// •	Libraries like react-virtualized or react-window handle this automatically for most use cases.
// ________________________________________
// 6. Example Using react-window (Recommended)
// For fixed height items:
// import { FixedSizeList as List } from "react-window";

// <List
//   height={500}
//   itemCount={items.length}
//   itemSize={50}
//   width="100%"
// >
//   {({ index, style }) => <div style={style}>{items[index].content}</div>}
// </List>
// For variable height items, use VariableSizeList with itemSize(index) returning height.
// ________________________________________
// ✅ Key Takeaways
// 1.	Fixed height items: simplest and fastest, calculate start/end indices via scrollTop.
// 2.	Dynamic height items: track individual heights, compute offsets, measure elements.
// 3.	Scroll maintenance: adjust scrollTop when list changes to prevent jumps.
// 4.	Use libraries (react-window, react-virtualized) for production-ready virtualization.

// Create a custom hook for data fetching with caching.
// //  - How would you handle request deduplication?
// //  - What about background refetching and optimistic updates?

// 1. Hook Requirements
// The hook should handle:
// 1.	Caching – reuse previous results for the same key.
// 2.	Request deduplication – avoid multiple identical requests simultaneously.
// 3.	Background refetching – fetch fresh data in the background without blocking UI.
// 4.	Optimistic updates – temporarily update data before a server confirms success.
// 5.	Loading & error states – standard UX handling.
// ________________________________________
// 2. Implementation: useFetch
// import { useState, useEffect, useRef } from "react";

// const cache = new Map();
// const ongoingRequests = new Map();

// function useFetch(key, fetcher, options = {}) {
//   const { initialData = null, refetchInterval = 0 } = options;

//   const [data, setData] = useState(cache.get(key) || initialData);
//   const [loading, setLoading] = useState(!cache.has(key));
//   const [error, setError] = useState(null);

//   const isMounted = useRef(true);

//   useEffect(() => {
//     return () => { isMounted.current = false; };
//   }, []);

//   const fetchData = async () => {
//     // Deduplication: return existing promise if request is ongoing
//     if (ongoingRequests.has(key)) return ongoingRequests.get(key);

//     setLoading(true);
//     const promise = fetcher()
//       .then((res) => {
//         cache.set(key, res);
//         if (isMounted.current) setData(res);
//         return res;
//       })
//       .catch((err) => {
//         if (isMounted.current) setError(err);
//         throw err;
//       })
//       .finally(() => {
//         ongoingRequests.delete(key);
//         if (isMounted.current) setLoading(false);
//       });

//     ongoingRequests.set(key, promise);
//     return promise;
//   };

//   useEffect(() => {
//     fetchData();

//     // Background refetching
//     let interval;
//     if (refetchInterval > 0) {
//       interval = setInterval(() => {
//         fetchData();
//       }, refetchInterval);
//     }

//     return () => interval && clearInterval(interval);
//   }, [key]);

//   // Optimistic update helper
//   const mutate = (updater) => {
//     setData((prev) => {
//       const newData = typeof updater === "function" ? updater(prev) : updater;
//       cache.set(key, newData);
//       return newData;
//     });
//   };

//   return { data, loading, error, refetch: fetchData, mutate };
// }

// export default useFetch;
// ________________________________________
// 3. Usage Example
// function App() {
//   const { data, loading, error, refetch, mutate } = useFetch(
//     "todos",
//     () => fetch("/api/todos").then(res => res.json()),
//     { refetchInterval: 10000 } // refetch every 10s
//   );

//   const addTodo = async (todo) => {
//     // Optimistic update
//     mutate(prev => [...prev, todo]);

//     try {
//       await fetch("/api/todos", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(todo)
//       });
//       // background refetch ensures data is synced
//     } catch (err) {
//       // rollback if API fails
//       mutate(prev => prev.filter(t => t !== todo));
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <ul>
//         {data.map(todo => <li key={todo.id}>{todo.title}</li>)}
//       </ul>
//       <button onClick={() => addTodo({ id: Date.now(), title: "New Todo" })}>
//         Add Todo
//       </button>
//       <button onClick={refetch}>Refetch</button>
//     </div>
//   );
// }
// ________________________________________
// 4. Key Concepts Explained
// Feature	Implementation
// Caching	Map stores results keyed by key to avoid refetching.
// Request deduplication	ongoingRequests map prevents multiple identical fetches simultaneously.
// Background refetching	Optional refetchInterval triggers periodic updates without blocking UI.
// Optimistic updates	mutate allows temporary UI updates before server confirms. Can rollback on error.
// Loading/Error handling	Standard loading and error states exposed to component.
// ________________________________________
// ✅ Advantages:
// •	Fully reusable and composable.
// •	Reduces network calls with caching and deduplication.
// •	Supports reactive UI with optimistic updates.
// •	Can easily integrate with APIs, GraphQL, or REST.

// Implement a modal component with proper accessibility.
// //  - Discuss backdrop click handling and escape key functionality.
// //  - How would you prevent body scroll when modal is open?

// 1. Accessibility Considerations
// For an accessible modal:
// •	Use role="dialog" and aria-modal="true".
// •	Focus should move to the modal when opened.
// •	Focus should be trapped inside the modal while open.
// •	Return focus to the previously focused element when closed.
// ________________________________________
// 2. Modal Component Implementation
// import { useEffect, useRef } from "react";

// function Modal({ isOpen, onClose, children }) {
//   const modalRef = useRef(null);
//   const previousActiveElement = useRef(null);

//   useEffect(() => {
//     if (!isOpen) return;

//     // Save previously focused element
//     previousActiveElement.current = document.activeElement;

//     // Move focus to modal
//     modalRef.current?.focus();

//     // Prevent body scroll
//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     // Escape key handling
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.body.style.overflow = originalOverflow;
//       document.removeEventListener("keydown", handleKeyDown);
//       // Restore focus to previously active element
//       previousActiveElement.current?.focus();
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       onClick={handleBackdropClick}
//       style={{
//         position: "fixed",
//         inset: 0,
//         background: "rgba(0,0,0,0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 1000,
//       }}
//     >
//       <div
//         ref={modalRef}
//         tabIndex={-1}
//         role="dialog"
//         aria-modal="true"
//         style={{
//           background: "#fff",
//           padding: "1.5rem",
//           borderRadius: "8px",
//           maxWidth: "500px",
//           width: "90%",
//           outline: "none",
//         }}
//       >
//         {children}
//         <button onClick={onClose} style={{ marginTop: "1rem" }}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Modal;
// ________________________________________
// 3. Key Features Explained
// Feature	Implementation
// Backdrop click	onClick on the backdrop div, check e.target === e.currentTarget to avoid closing when clicking inside modal.
// Escape key	Add keydown listener for Escape and call onClose.
// Body scroll lock	Set document.body.style.overflow = "hidden" when modal opens, restore on close.
// Focus management	Save previous focus, focus modal on open, restore focus on close.
// ARIA attributes	role="dialog" and aria-modal="true" for screen readers.
// ________________________________________
// 4. Usage Example
// import { useState } from "react";
// import Modal from "./Modal";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>
//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <h2>Accessible Modal</h2>
//         <p>This modal traps focus and handles escape/backdrop click.</p>
//       </Modal>
//     </div>
//   );
// }
// ________________________________________
// 5. Additional Enhancements (Optional)
// 1.	Focus Trap: Use a library like focus-trap-react for robust focus management.
// 2.	Animations: Use framer-motion or CSS transitions for smooth open/close.
// 3.	Multiple Modals: Keep a stack of open modals and restore body scroll only when all modals are closed.
// 4.	Keyboard Navigation: Ensure tabbing cycles within modal content.
// ________________________________________
// This implementation ensures accessibility, proper scroll management, and intuitive backdrop & escape handling.

//  6. Design a global state management solution without external libraries.
// //  - How would you implement a Context + useReducer pattern?
// //  - How would you handle middleware for logging or async actions?

// 1. Core Idea: Context + useReducer
// •	Context provides a global provider for the state.
// •	useReducer manages state updates with a centralized reducer.
// •	Dispatch function can be extended with middleware.
// ________________________________________
// 2. Step 1: Create the Reducer
// const initialState = {
//   user: null,
//   todos: [],
//   loading: false,
//   error: null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_USER":
//       return { ...state, user: action.payload };
//     case "ADD_TODO":
//       return { ...state, todos: [...state.todos, action.payload] };
//     case "SET_LOADING":
//       return { ...state, loading: action.payload };
//     case "SET_ERROR":
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// }
// ________________________________________
// 3. Step 2: Create Context
// import { createContext, useReducer, useContext } from "react";

// const GlobalStateContext = createContext();
// const GlobalDispatchContext = createContext();

// export function useGlobalState() {
//   return useContext(GlobalStateContext);
// }

// export function useGlobalDispatch() {
//   return useContext(GlobalDispatchContext);
// }
// ________________________________________
// 4. Step 3: Provider with Middleware Support
// We can enhance the dispatch function to handle logging and async actions.
// export function GlobalProvider({ children }) {
//   const [state, baseDispatch] = useReducer(reducer, initialState);

//   // Middleware-enhanced dispatch
//   const dispatch = (action) => {
//     if (typeof action === "function") {
//       // Async action
//       return action(dispatch, () => state);
//     }

//     // Logging middleware
//     console.log("[Dispatching]", action);
//     baseDispatch(action);
//   };

//   return (
//     <GlobalStateContext.Provider value={state}>
//       <GlobalDispatchContext.Provider value={dispatch}>
//         {children}
//       </GlobalDispatchContext.Provider>
//     </GlobalStateContext.Provider>
//   );
// }
// ________________________________________
// 5. Step 4: Using the Global State
// import { useGlobalState, useGlobalDispatch } from "./GlobalProvider";

// function TodoList() {
//   const { todos, loading } = useGlobalState();
//   const dispatch = useGlobalDispatch();

//   const addTodo = async (title) => {
//     dispatch({ type: "SET_LOADING", payload: true });

//     // Async action example
//     await new Promise((r) => setTimeout(r, 500)); // simulate API

//     dispatch({ type: "ADD_TODO", payload: { id: Date.now(), title } });
//     dispatch({ type: "SET_LOADING", payload: false });
//   };

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//       <button onClick={() => addTodo("New Todo")}>Add Todo</button>
//     </div>
//   );
// }
// ________________________________________
// 6. Step 5: Async Actions & Middleware
// •	Async actions: Dispatch a function instead of a plain object:
// const fetchUser = (userId) => async (dispatch) => {
//   dispatch({ type: "SET_LOADING", payload: true });
//   try {
//     const res = await fetch(`/api/user/${userId}`);
//     const data = await res.json();
//     dispatch({ type: "SET_USER", payload: data });
//   } catch (err) {
//     dispatch({ type: "SET_ERROR", payload: err });
//   } finally {
//     dispatch({ type: "SET_LOADING", payload: false });
//   }
// };
// •	Logging middleware: Already implemented via console.log in enhanced dispatch.
// •	You can chain additional middleware easily (like analytics, error tracking, etc.).
// ________________________________________
// 7. Key Features
// Feature	Implementation
// Global state	useReducer inside a Context.Provider
// Dispatch middleware	Enhanced dispatch function to intercept actions
// Async actions	Dispatch function can accept a function (dispatch, getState) => {}
// Logging	Simple console.log middleware inside dispatch
// Scalability	Works for multiple reducers if combined via combineReducers pattern
// ________________________________________
// ✅ Advantages
// •	No external dependencies.
// •	Fully typed if using TypeScript.
// •	Supports async actions, logging, and caching.
// •	Easy to extend with additional middleware (e.g., analytics, performance metrics).

//  Implement a form validation system with real-time feedback.
// // - How would you structure validation rules and error messages?
// // - What about conditional fields and dynamic form schemas?

// 1. Core Concepts
// 1.	State Management
// o	values: current input values.
// o	errors: error messages for each field.
// o	touched: track which fields have been interacted with.
// 2.	Validation Rules
// o	Define a schema where each field has rules (required, min/max length, pattern, custom).
// o	Rules return error messages or null if valid.
// 3.	Dynamic / Conditional Fields
// o	Form schema can be dynamic (fields added/removed based on other field values).
// ________________________________________
// 2. Validation Schema Example
// const formSchema = {
//   username: {
//     label: "Username",
//     validators: [
//       { rule: (val) => !!val, message: "Username is required" },
//       { rule: (val) => val.length >= 3, message: "Minimum 3 characters" },
//     ],
//   },
//   email: {
//     label: "Email",
//     validators: [
//       { rule: (val) => !!val, message: "Email is required" },
//       { rule: (val) => /^\S+@\S+\.\S+$/.test(val), message: "Invalid email" },
//     ],
//   },
//   password: {
//     label: "Password",
//     validators: [
//       { rule: (val) => !!val, message: "Password is required" },
//       { rule: (val) => val.length >= 6, message: "Minimum 6 characters" },
//     ],
//   },
//   confirmPassword: {
//     label: "Confirm Password",
//     validators: [
//       { rule: (val, values) => val === values.password, message: "Passwords do not match" },
//     ],
//     // Conditional: only show if password has value
//     showIf: (values) => !!values.password,
//   },
// };
// ________________________________________
// 3. Custom Hook: useForm
// import { useState, useEffect } from "react";

// function useForm(schema, initialValues = {}) {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const validateField = (name, value) => {
//     const field = schema[name];
//     if (!field) return null;
//     for (let { rule, message } of field.validators) {
//       if (!rule(value, values)) return message;
//     }
//     return null;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues((prev) => ({ ...prev, [name]: value }));
//     setTouched((prev) => ({ ...prev, [name]: true }));

//     // Real-time validation
//     setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     Object.keys(schema).forEach((key) => {
//       // Only validate fields that are currently visible
//       if (!schema[key].showIf || schema[key].showIf(values)) {
//         const error = validateField(key, values[key]);
//         if (error) newErrors[key] = error;
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   return {
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     validateForm,
//     setValues,
//   };
// }

// export default useForm;
// ________________________________________
// 4. Form Component Usage
// import useForm from "./useForm";

// function SignupForm() {
//   const { values, errors, touched, handleChange, handleBlur, validateForm } = useForm(formSchema);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted:", values);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {Object.keys(formSchema).map((key) => {
//         const field = formSchema[key];
//         // Handle conditional fields
//         if (field.showIf && !field.showIf(values)) return null;

//         return (
//           <div key={key} style={{ marginBottom: "1rem" }}>
//             <label>{field.label}</label>
//             <input
//               name={key}
//               value={values[key] || ""}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {touched[key] && errors[key] && <p style={{ color: "red" }}>{errors[key]}</p>}
//           </div>
//         );
//       })}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// ________________________________________
// 5. Key Features
// Feature	Implementation
// Real-time feedback	Validate field on onChange and onBlur.
// Validation rules	Array of { rule: fn, message: string } for flexibility.
// Error messages	Stored in errors state and displayed under fields.
// Conditional fields	showIf function in schema controls visibility.
// Dynamic form schema	Add/remove fields in formSchema dynamically based on state or props.
// Full form validation	validateForm validates all visible fields before submission.
// ________________________________________
// ✅ Advantages
// •	Fully reusable for multiple forms.
// •	Supports dynamic fields and conditional logic.
// •	Real-time feedback improves UX.
// •	Easy to extend for custom validations, async checks, or integration with APIs.

// Create a drag and drop interface for reordering lists.
// // - Discuss visual feedback during dragging operations
// // - What about touch device support and accessibility?

// 1. Core Concepts
// •	State Management: Track the list items and their order.
// •	Drag Events: Use onDragStart, onDragOver, onDrop for desktop; touchstart, touchmove, touchend for touch devices.
// •	Visual Feedback: Highlight the dragged item and show a placeholder where it will be dropped.
// •	Accessibility: Support keyboard navigation and ARIA attributes.
// ________________________________________
// 2. Basic Implementation (Desktop)
// import { useState } from "react";

// function DragDropList({ initialItems }) {
//   const [items, setItems] = useState(initialItems);
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   const handleDragStart = (index) => {
//     setDraggedIndex(index);
//   };

//   const handleDragOver = (e, index) => {
//     e.preventDefault();
//     if (index === draggedIndex) return;
//     const newItems = [...items];
//     const [draggedItem] = newItems.splice(draggedIndex, 1);
//     newItems.splice(index, 0, draggedItem);
//     setDraggedIndex(index);
//     setItems(newItems);
//   };

//   const handleDragEnd = () => {
//     setDraggedIndex(null);
//   };

//   return (
//     <ul style={{ listStyle: "none", padding: 0 }}>
//       {items.map((item, index) => (
//         <li
//           key={item.id}
//           draggable
//           onDragStart={() => handleDragStart(index)}
//           onDragOver={(e) => handleDragOver(e, index)}
//           onDragEnd={handleDragEnd}
//           style={{
//             padding: "8px 16px",
//             marginBottom: "4px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             backgroundColor: index === draggedIndex ? "#e0f7fa" : "#fff",
//             cursor: "move",
//           }}
//         >
//           {item.content}
//         </li>
//       ))}
//     </ul>
//   );
// }
// ________________________________________
// 3. Visual Feedback
// •	Highlight the dragged item with a different background (#e0f7fa).
// •	Optionally, insert a placeholder to indicate where the item will be dropped.
// •	Use CSS transitions for smooth movement:
// li {
//   transition: transform 0.2s ease;
// }
// ________________________________________
// 4. Touch Device Support
// •	Desktop drag events don’t work on mobile. Use pointer events or touch events:
// const handleTouchStart = (index) => setDraggedIndex(index);

// const handleTouchMove = (e) => {
//   const touch = e.touches[0];
//   const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
//   const index = Number(targetElement?.dataset?.index);
//   if (index !== undefined && index !== draggedIndex) {
//     const newItems = [...items];
//     const [draggedItem] = newItems.splice(draggedIndex, 1);
//     newItems.splice(index, 0, draggedItem);
//     setDraggedIndex(index);
//     setItems(newItems);
//   }
// };

// const handleTouchEnd = () => setDraggedIndex(null);
// Attach these handlers to each <li> element.
// ________________________________________
// 5. Accessibility Considerations
// 1.	Keyboard Reordering
// o	Use tabIndex="0" on list items.
// o	Arrow keys move focus and optionally swap items:
// <li
//   tabIndex={0}
//   onKeyDown={(e) => {
//     if (e.key === "ArrowUp" && index > 0) {
//       const newItems = [...items];
//       [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
//       setItems(newItems);
//     }
//     if (e.key === "ArrowDown" && index < items.length - 1) {
//       const newItems = [...items];
//       [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
//       setItems(newItems);
//     }
//   }}
// >
// 2.	ARIA Attributes
// o	role="list" on <ul> and role="listitem" on <li>.
// o	Add aria-grabbed={index === draggedIndex} to indicate which item is being dragged.
// ________________________________________
// 6. Key Features
// Feature	Implementation
// Drag & Drop	draggable + onDragStart, onDragOver, onDrop
// Visual Feedback	Highlight dragged item, placeholder, CSS transitions
// Touch Support	touchstart, touchmove, touchend or pointer events
// Keyboard Accessibility	Arrow key reordering, tabIndex, onKeyDown
// ARIA Compliance	role="list", role="listitem", aria-grabbed
// ________________________________________
// 7. Advanced Enhancements
// •	Smooth animations using react-spring or framer-motion.
// •	Snap-to-grid or sortable grids.
// •	Multi-item selection and drag.
// •	Combine with state management for saving order in backend.

// Design a notification/toast system.
// // - How would you manage multiple notifications and their lifecycle?
// // - How would you implement different notification types and priorities?

// . Core Concepts
// 1.	State Management:
// o	Maintain a list of notifications in global state or a context.
// o	Each notification has an id, message, type, priority, and duration.
// 2.	Notification Lifecycle:
// o	Auto-dismiss after duration.
// o	Allow manual dismissal.
// 3.	Notification Types & Priorities:
// o	Types: success, error, info, warning.
// o	Priorities can determine stack order or visual prominence.
// 4.	Display & Animation:
// o	Stack notifications vertically, optionally with slide/fade animations.
// ________________________________________
// 2. Notification Context & Provider
// import { createContext, useContext, useState, useCallback } from "react";
// import { v4 as uuidv4 } from "uuid";

// const NotificationContext = createContext();

// export const useNotifications = () => useContext(NotificationContext);

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]);

//   const addNotification = useCallback(({ message, type = "info", duration = 3000, priority = 0 }) => {
//     const id = uuidv4();
//     const newNotification = { id, message, type, duration, priority };
//     setNotifications((prev) => [...prev, newNotification]);

//     // Auto-remove after duration
//     setTimeout(() => removeNotification(id), duration);
//   }, []);

//   const removeNotification = useCallback((id) => {
//     setNotifications((prev) => prev.filter((n) => n.id !== id));
//   }, []);

//   return (
//     <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
//       {children}
//     </NotificationContext.Provider>
//   );
// };
// ________________________________________
// 3. Notification Component
// function Toast({ notification, onClose }) {
//   const { message, type } = notification;

//   const bgColors = {
//     success: "#4caf50",
//     error: "#f44336",
//     info: "#2196f3",
//     warning: "#ff9800",
//   };

//   return (
//     <div
//       style={{
//         background: bgColors[type] || "#333",
//         color: "#fff",
//         padding: "12px 20px",
//         marginBottom: "8px",
//         borderRadius: "4px",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         cursor: "pointer",
//         minWidth: "250px",
//       }}
//       onClick={onClose}
//     >
//       <span>{message}</span>
//       <button style={{ marginLeft: "12px", background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}>
//         &times;
//       </button>
//     </div>
//   );
// }
// ________________________________________
// 4. Notification Container
// import { useNotifications } from "./NotificationProvider";

// export default function NotificationContainer() {
//   const { notifications, removeNotification } = useNotifications();

//   // Optional: sort by priority (higher first)
//   const sortedNotifications = [...notifications].sort((a, b) => b.priority - a.priority);

//   return (
//     <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
//       {sortedNotifications.map((n) => (
//         <Toast key={n.id} notification={n} onClose={() => removeNotification(n.id)} />
//       ))}
//     </div>
//   );
// }
// ________________________________________
// 5. Usage Example
// import { NotificationProvider, useNotifications } from "./NotificationProvider";
// import NotificationContainer from "./NotificationContainer";

// function App() {
//   const { addNotification } = useNotifications();

//   return (
//     <div>
//       <button onClick={() => addNotification({ message: "Success!", type: "success" })}>
//         Show Success
//       </button>
//       <button onClick={() => addNotification({ message: "Error occurred!", type: "error", priority: 10 })}>
//         Show High Priority Error
//       </button>
//       <NotificationContainer />
//     </div>
//   );
// }

// export default function Root() {
//   return (
//     <NotificationProvider>
//       <App />
//     </NotificationProvider>
//   );
// }
// ________________________________________
// 6. Key Features
// Feature	Implementation
// Multiple notifications	Stored in an array in context and rendered in container.
// Lifecycle management	Auto-dismiss via setTimeout and manual dismissal.
// Types & Styles	success, error, info, warning mapped to different colors/styles.
// Priorities	Sort notifications by priority before rendering.
// Click to dismiss	Each toast has an onClose handler.
// Positioning & stacking	Fixed container with vertical stacking (top-right).
// ________________________________________
// 7. Advanced Enhancements
// 1.	Animations: Fade/slide with framer-motion or CSS transitions.
// 2.	Queue system: Limit max visible notifications and queue the rest.
// 3.	Custom durations per type: e.g., errors stay longer than info.
// 4.	Accessibility:
// o	role="status" for screen readers.
// o	Announce new notifications via aria-live="polite".
// ________________________________________
// This system is scalable, type-aware, priority-aware, and can handle multiple notifications simultaneously.
// I can also build a version with animation and a max-stack queue so older notifications automatically slide out when too many are active.

// Implement a multi-step form wizard with navigation.
// // - How would you manage form state across multiple steps?
// // - What about saving draft progress and resuming later?

// 1. Core Concepts
// 1.	State Management
// o	Use a single form state object for all steps.
// o	Track the current step index.
// 2.	Navigation
// o	Next / Previous buttons to move between steps.
// o	Optional validation before moving forward.
// 3.	Draft Saving
// o	Store state in localStorage or backend.
// o	Load draft when the user returns.
// 4.	Dynamic Step Rendering
// o	Render only the active step component.
// o	Each step accesses/modifies the shared form state.
// ________________________________________
// 2. Form State Hook
// import { useState, useEffect } from "react";

// function useMultiStepForm(initialValues = {}, draftKey = "formWizardDraft") {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formValues, setFormValues] = useState(() => {
//     // Load draft if exists
//     const draft = localStorage.getItem(draftKey);
//     return draft ? JSON.parse(draft) : initialValues;
//   });

//   useEffect(() => {
//     // Save draft on changes
//     localStorage.setItem(draftKey, JSON.stringify(formValues));
//   }, [formValues, draftKey]);

//   const nextStep = () => setCurrentStep((prev) => prev + 1);
//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

//   const updateField = (name, value) => {
//     setFormValues((prev) => ({ ...prev, [name]: value }));
//   };

//   const resetForm = () => {
//     setFormValues(initialValues);
//     setCurrentStep(0);
//     localStorage.removeItem(draftKey);
//   };

//   return { currentStep, formValues, updateField, nextStep, prevStep, resetForm, setCurrentStep };
// }
// ________________________________________
// 3. Step Components
// Each step receives formValues and updateField:
// function Step1({ formValues, updateField }) {
//   return (
//     <div>
//       <label>
//         First Name:
//         <input
//           type="text"
//           value={formValues.firstName || ""}
//           onChange={(e) => updateField("firstName", e.target.value)}
//         />
//       </label>
//       <label>
//         Last Name:
//         <input
//           type="text"
//           value={formValues.lastName || ""}
//           onChange={(e) => updateField("lastName", e.target.value)}
//         />
//       </label>
//     </div>
//   );
// }

// function Step2({ formValues, updateField }) {
//   return (
//     <div>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={formValues.email || ""}
//           onChange={(e) => updateField("email", e.target.value)}
//         />
//       </label>
//       <label>
//         Phone:
//         <input
//           type="tel"
//           value={formValues.phone || ""}
//           onChange={(e) => updateField("phone", e.target.value)}
//         />
//       </label>
//     </div>
//   );
// }
// ________________________________________
// 4. Wizard Component
// function FormWizard() {
//   const { currentStep, formValues, updateField, nextStep, prevStep, resetForm } = useMultiStepForm({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   });

//   const steps = [
//     <Step1 formValues={formValues} updateField={updateField} />,
//     <Step2 formValues={formValues} updateField={updateField} />,
//   ];

//   const handleSubmit = () => {
//     console.log("Form submitted:", formValues);
//     resetForm();
//   };

//   return (
//     <div>
//       <h2>Step {currentStep + 1}</h2>
//       {steps[currentStep]}
//       <div style={{ marginTop: "1rem" }}>
//         {currentStep > 0 && <button onClick={prevStep}>Previous</button>}
//         {currentStep < steps.length - 1 && <button onClick={nextStep}>Next</button>}
//         {currentStep === steps.length - 1 && <button onClick={handleSubmit}>Submit</button>}
//       </div>
//     </div>
//   );
// }
// ________________________________________
// 5. Saving Draft Progress
// •	State is saved in localStorage inside the useEffect of useMultiStepForm.
// •	Users can leave and return, and the wizard restores their progress automatically.
// •	To reset, resetForm clears both state and localStorage.
// ________________________________________
// 6. Key Features
// Feature	Implementation
// Multi-step navigation	currentStep with nextStep / prevStep
// Shared form state	formValues object passed to all steps
// Draft saving	localStorage sync in useEffect
// Conditional steps	Render steps dynamically using steps array
// Validation (optional)	Validate fields before calling nextStep()
// Submit handling	Submit final data from the last step
// ________________________________________
// 7. Enhancements
// 1.	Dynamic steps – Skip steps based on previous answers.
// 2.	Progress bar – Show percentage completion.
// 3.	Async validation – Validate data with API before proceeding.
// 4.	Server-side draft save – For multi-device resuming.
// 5.	Keyboard navigation & accessibility – Tab and Enter to move between steps.
// ________________________________________
// This system provides a fully functional multi-step form, persists drafts, and is easy to extend with more steps or validation.
// I can also create a version with progress bar, conditional steps, and async validation if you want a more complete wizard experience.

// How would you optimize a component that renders thousands of items?
// // - How would you implement component-level code splitting?
// // - How would you profile and identify performance bottlenecks?

// 1. Challenges with Thousands of Items
// •	Rendering all items at once causes slow initial render and high memory usage.
// •	Re-rendering every item on state changes can be costly.
// •	Event listeners or heavy child components amplify the problem.
// ________________________________________
// 2. Optimization Strategies
// a) Virtualization (Windowing)
// Render only the items visible in the viewport plus a buffer.
// •	Libraries: react-window, react-virtualized
// •	Example using react-window:
// import { FixedSizeList as List } from "react-window";

// function Item({ index, style, data }) {
//   const item = data[index];
//   return (
//     <div style={style}>
//       {item.name}
//     </div>
//   );
// }

// export default function VirtualizedList({ items }) {
//   return (
//     <List
//       height={600}           // viewport height
//       itemCount={items.length}
//       itemSize={50}          // fixed item height
//       width="100%"
//       itemData={items}
//     >
//       {Item}
//     </List>
//   );
// }
// ✅ Benefit: Renders only ~20–50 items at a time instead of thousands.
// ________________________________________
// b) Memoization
// •	Use React.memo for child components that don’t need to re-render unless props change.
// const Item = React.memo(({ item }) => {
//   return <div>{item.name}</div>;
// });
// •	Use useCallback and useMemo to prevent unnecessary re-renders of functions and derived data.
// ________________________________________
// c) Component-Level Code Splitting
// •	Split large or rarely-used components into lazy-loaded chunks:
// import { Suspense, lazy } from "react";

// const HeavyComponent = lazy(() => import("./HeavyComponent"));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <HeavyComponent />
//     </Suspense>
//   );
// }
// •	In a large list, you can lazy-load complex item renderers if each item is heavy.
// ________________________________________
// d) Avoid Inline Functions & Objects
// •	Inline functions/objects cause child components to re-render:
// // BAD
// <Item onClick={() => handleClick(item.id)} />

// // BETTER
// const handleClickMemo = useCallback((id) => { ... }, []);
// <Item onClick={handleClickMemo} />
// ________________________________________
// e) Pagination / Infinite Scroll
// •	Instead of loading all items at once, load chunks from API using infinite scroll.
// •	Combine with virtualization for maximum efficiency.
// ________________________________________
// 3. Performance Profiling
// 1.	React DevTools Profiler
// o	Open Profiler tab.
// o	Record interactions and check which components take the most render time.
// o	Identify unnecessary re-renders.
// 2.	Chrome Performance Tab
// o	Record page while scrolling a large list.
// o	Inspect painting, layout, and script execution times.
// 3.	React useMemo / useCallback Checks
// o	Identify functions or computations that are recalculated every render unnecessarily.
// 4.	Network Profiling
// o	Large datasets can cause delays even before render. Consider server-side pagination or chunked fetching.
// ________________________________________
// 4. Advanced Optimizations
// •	Dynamic Height Virtualization: Use VariableSizeList from react-window for items with varying heights.
// •	Web Workers: Offload heavy computation (like filtering or sorting thousands of items) to a worker.
// •	Immutable Data Structures: Helps with shallow comparison and memoization.
// •	Batching Updates: Minimize state updates inside loops.
// ________________________________________
// ✅ Summary Table
// Optimization	When to Use	Benefit
// Virtualization	Large lists	Render only visible items
// React.memo / useMemo	Re-rendering issues	Prevent unnecessary renders
// Code Splitting (React.lazy + Suspense)	Heavy components	Reduce initial bundle size
// Infinite Scroll / Pagination	Very large datasets	Reduce memory usage and network load
// Profiling	Always	Identify bottlenecks
// ________________________________________
// This combination ensures your component scales efficiently, reduces memory and render overhead, and improves UX on large datasets.

// Implement a image lazy loading component with placeholder.
// // - How would you detect when images enter the viewport?
// // - Discuss different placeholder strategies (blur, skeleton, etc.)
// // - How would you handle loading errors and retry mechanisms?

// 1. Detecting when images enter the viewport
// The modern, efficient way is to use the Intersection Observer API, which allows you to know when an element enters or leaves the viewport without continuously checking scroll events.
// ________________________________________
// 2. Placeholder strategies
// •	Blurred placeholder: Low-quality, blurred version of the image.
// •	Skeleton placeholder: Grey box or shimmer effect.
// •	Solid color or icon: Minimal approach for very fast loading.
// ________________________________________
// 3. Handling errors and retry
// •	Fallback image if the original fails.
// •	Retry mechanism (with limited attempts) using state.
// ________________________________________
// 4. React LazyImage Component
// import React, { useState, useRef, useEffect } from "react";

// // Props: src, alt, placeholder, retryCount, className
// const LazyImage = ({
//   src,
//   alt,
//   placeholder = "https://via.placeholder.com/300x200?text=Loading...",
//   retryCount = 2,
//   className = "",
// }) => {
//   const [isInView, setIsInView] = useState(false);
//   const [imageSrc, setImageSrc] = useState(placeholder);
//   const [errorCount, setErrorCount] = useState(0);

//   const imgRef = useRef();

//   // Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.disconnect(); // Stop observing once loaded
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% visible
//     );

//     if (imgRef.current) observer.observe(imgRef.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   // Load actual image
//   useEffect(() => {
//     if (!isInView) return;

//     const img = new Image();
//     img.src = src;

//     img.onload = () => setImageSrc(src);

//     img.onerror = () => {
//       if (errorCount < retryCount) {
//         setErrorCount(prev => prev + 1);
//       } else {
//         setImageSrc("https://via.placeholder.com/300x200?text=Error+Loading");
//       }
//     };
//   }, [isInView, src, errorCount, retryCount]);

//   return (
//     <img
//       ref={imgRef}
//       src={imageSrc}
//       alt={alt}
//       className={`transition-all duration-500 ${imageSrc !== placeholder ? "blur-0" : "blur-sm"} ${className}`}
//       style={{ width: "100%", height: "auto", objectFit: "cover" }}
//     />
//   );
// };

// export default LazyImage;
// ________________________________________
// 🔹 How it works
// 1.	Viewport detection: Uses IntersectionObserver.
// 2.	Placeholders: Shows placeholder until the image loads.
// 3.	Blur effect: Adds a subtle blur until the real image is loaded.
// 4.	Error handling & retry:
// o	Retries retryCount times on failure.
// o	Falls back to an error image if all attempts fail.
// ________________________________________
// 🔹 Example usage
// <LazyImage
//   src="https://example.com/high-res-image.jpg"
//   alt="Beautiful scenery"
//   placeholder="https://example.com/low-res-image.jpg"
//   retryCount={3}
//   className="rounded-lg shadow-md"
// />
// ________________________________________
// ✅ Optional improvements
// •	Add a skeleton loader instead of a blurred placeholder.
// •	Support fade-in animation when the real image loads.
// •	Add progressive loading with multiple quality levels.
// •	Integrate with React Suspense for server-side rendering scenarios.

// Create a data table with sorting, filtering, and pagination.
// // - Discuss client-side vs server-side operations trade-offs.
// // - How would you optimize re-renders when data changes?
// // - What about column configuration and customizable layouts?

// 1. Client-side vs Server-side Operations
// Feature	Client-side	Server-side
// Sorting & Filtering	Done in the browser; fast for small datasets	Done via API; efficient for large datasets
// Pagination	Slice data in JS; easy to implement	Server provides only requested page
// Pros	Simple, instant, no extra API calls	Scales to millions of rows
// Cons	Memory-heavy for large datasets	More complex; requires API support
// Rule of thumb: Use client-side for <5000 rows; server-side for larger datasets.
// ________________________________________
// 2. Optimizing Re-renders
// •	Use React.memo for rows or cells.
// •	Use useCallback and useMemo to memoize handlers and computed data.
// •	Avoid passing new object references on every render.
// •	Key tables properly with stable row IDs.
// ________________________________________
// 3. Column Configuration & Customizable Layouts
// •	Define columns as an array of objects { header, accessor, sortable, filterable, width, customCell }.
// •	Supports hiding/showing columns dynamically.
// •	Allows custom cell renderers (e.g., badges, buttons, images).
// ________________________________________
// 4. React DataTable Component Example
// import React, { useState, useMemo } from "react";

// const DataTable = ({ columns, data, pageSize = 5 }) => {
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [filterText, setFilterText] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   // Filtering
//   const filteredData = useMemo(() => {
//     if (!filterText) return data;
//     return data.filter(row =>
//       columns.some(col => {
//         const value = row[col.accessor];
//         return value?.toString().toLowerCase().includes(filterText.toLowerCase());
//       })
//     );
//   }, [filterText, data, columns]);

//   // Sorting
//   const sortedData = useMemo(() => {
//     if (!sortConfig.key) return filteredData;
//     return [...filteredData].sort((a, b) => {
//       const aValue = a[sortConfig.key];
//       const bValue = b[sortConfig.key];
//       if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }, [filteredData, sortConfig]);

//   // Pagination
//   const paginatedData = useMemo(() => {
//     const start = (currentPage - 1) * pageSize;
//     return sortedData.slice(start, start + pageSize);
//   }, [sortedData, currentPage, pageSize]);

//   const requestSort = key => {
//     setSortConfig(prev => ({
//       key,
//       direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
//     }));
//   };

//   const totalPages = Math.ceil(sortedData.length / pageSize);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={filterText}
//         onChange={e => setFilterText(e.target.value)}
//         className="mb-2 p-1 border rounded"
//       />

//       <table className="table-auto border-collapse w-full">
//         <thead>
//           <tr>
//             {columns.map(col => (
//               <th
//                 key={col.accessor}
//                 onClick={() => col.sortable && requestSort(col.accessor)}
//                 className="border px-4 py-2 cursor-pointer"
//               >
//                 {col.header} {sortConfig.key === col.accessor ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedData.map((row, idx) => (
//             <tr key={idx} className="hover:bg-gray-100">
//               {columns.map(col => (
//                 <td key={col.accessor} className="border px-4 py-2">
//                   {col.customCell ? col.customCell(row[col.accessor], row) : row[col.accessor]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="mt-2 flex justify-between items-center">
//         <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DataTable;
// ________________________________________
// 5. Example Usage
// const columns = [
//   { header: "ID", accessor: "id", sortable: true },
//   { header: "Name", accessor: "name", sortable: true, filterable: true },
//   { header: "Email", accessor: "email", sortable: true },
//   {
//     header: "Status",
//     accessor: "status",
//     sortable: true,
//     customCell: value => <span className={value === "Active" ? "text-green-500" : "text-red-500"}>{value}</span>,
//   },
// ];

// const data = [
//   { id: 1, name: "Alice", email: "alice@example.com", status: "Active" },
//   { id: 2, name: "Bob", email: "bob@example.com", status: "Inactive" },
//   { id: 3, name: "Charlie", email: "charlie@example.com", status: "Active" },
//   // ...more rows
// ];

// <DataTable columns={columns} data={data} pageSize={5} />;
// ________________________________________
// ✅ Optional Enhancements
// 1.	Server-side support: Add API integration for sorting, filtering, and pagination.
// 2.	Column hiding/reordering: Store preferences in local storage.
// 3.	Virtualization: Use react-window or react-virtualized for large datasets to reduce DOM nodes.
// 4.	Advanced filtering: Add date ranges, numeric ranges, or multi-select filters.
// ---------------------------------------------


// How to cancel the api call when the timeout occurs using abort controller
// Example: Cancel API call on timeout
// // Create an AbortController instance
// const controller = new AbortController();
// const signal = controller.signal;

// // Set a timeout (e.g., 5 seconds)
// const timeout = setTimeout(() => {
//   controller.abort(); // Cancel the API request
// }, 5000);

// fetch('https://api.example.com/data', { signal })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data received:', data);
//   })
//   .catch(error => {
//     if (error.name === 'AbortError') {
//       console.log('Fetch aborted due to timeout');
//     } else {
//       console.error('Fetch error:', error);
//     }
//   })
//   .finally(() => {
//     clearTimeout(timeout); // Clean up the timeout
//   });
// ________________________________________
// How it works:
// 1.	AbortController creates a signal to communicate abort requests to the fetch API.
// 2.	setTimeout triggers controller.abort() after the given time.
// 3.	The fetch call listens to the signal.
// 4.	If the request is aborted, the promise is rejected with an AbortError.
// 5.	Always clear the timeout in .finally() to prevent memory leaks.
// ________________________________________
// ✅ This approach works with fetch API and other APIs that support AbortSignal.

// Create a component to upload the file in reactjs ?
// Example: File Upload Component in React
// import React, { useState } from 'react';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);

//     // Show image preview (optional)
//     if (selectedFile && selectedFile.type.startsWith('image/')) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     } else {
//       setPreview(null);
//     }
//   };

//   // Handle file upload
//   const handleUpload = async () => {
//     if (!file) return;

//     setUploading(true);
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await fetch('https://your-api-endpoint.com/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       console.log('Upload successful:', data);
//       alert('File uploaded successfully!');
//     } catch (error) {
//       console.error('Upload error:', error);
//       alert('Upload failed!');
//     } finally {
//       setUploading(false);
//       setFile(null);
//       setPreview(null);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '20px auto' }}>
//       <input type="file" onChange={handleFileChange} />
      
//       {preview && (
//         <div style={{ marginTop: '10px' }}>
//           <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
//         </div>
//       )}

//       <button
//         onClick={handleUpload}
//         disabled={!file || uploading}
//         style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
//       >
//         {uploading ? 'Uploading...' : 'Upload'}
//       </button>
//     </div>
//   );
// };

// export default FileUpload;
// ________________________________________
// Features:
// 1.	File selection using <input type="file" />.
// 2.	Preview for images before uploading.
// 3.	Upload progress indicator (simple button text change).
// 4.	Handles API call with fetch and FormData.
// 5.	Resets state after upload.
// ________________________________________
// If you want, I can also create a more advanced version with drag-and-drop support, multiple file uploads, and progress bar.

// How to create a Custom Hook for Data Fetching with Loading and Error States ?
// Example: useFetch Custom Hook
// import { useState, useEffect } from 'react';

// const useFetch = (url, options = {}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!url) return;

//     const controller = new AbortController();
//     const signal = controller.signal;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(url, { ...options, signal });
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         if (err.name !== 'AbortError') {
//           setError(err.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     // Cleanup on unmount or URL change
//     return () => controller.abort();
//   }, [url, JSON.stringify(options)]); // Re-run when url or options change

//   return { data, loading, error };
// };

// export default useFetch;
// ________________________________________
// Usage Example in a Component
// import React from 'react';
// import useFetch from './useFetch';

// const UsersList = () => {
//   const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {data.map(user => (
//         <li key={user.id}>{user.name} ({user.email})</li>
//       ))}
//     </ul>
//   );
// };

// export default UsersList;
// ________________________________________
// ✅ Features of This Hook:
// 1.	Reusability – Can fetch any URL with optional fetch options.
// 2.	AbortController – Cancels fetch when the component unmounts or URL changes.
// 3.	Loading & Error states – Makes UI handling simple.
// 4.	Clean and minimal – Keeps components focused on UI.

// How will you Manage Environment-Specific Configurations in Reactjs in your project ?
// 1. Using .env Files
// React (Create React App or Vite) supports environment variables via .env files.
// Example:
// •	.env.development
// REACT_APP_API_URL=https://dev.api.example.com
// REACT_APP_ANALYTICS_KEY=dev-key
// •	.env.production
// REACT_APP_API_URL=https://api.example.com
// REACT_APP_ANALYTICS_KEY=prod-key
// Important: Environment variable names must start with REACT_APP_ in Create React App.
// ________________________________________
// 2. Accessing Variables in Code
// const apiUrl = process.env.REACT_APP_API_URL;

// fetch(`${apiUrl}/users`)
//   .then(res => res.json())
//   .then(data => console.log(data));
// •	React will automatically replace these variables at build time based on the environment (npm start → development, npm run build → production).
// ________________________________________
// 3. Specifying Environment in Scripts
// In package.json, you can define scripts for different environments:
// "scripts": {
//   "start": "react-scripts start", // development
//   "build:prod": "env-cmd -f .env.production react-scripts build", 
//   "build:dev": "env-cmd -f .env.development react-scripts build"
// }
// Using packages like env-cmd or cross-env helps manage environments across OSes.
// ________________________________________
// 4. Dynamic Configuration (Optional)
// Sometimes you need runtime config without rebuilding:
// •	Place a config.json file in public/:
// {
//   "API_URL": "https://dev.api.example.com"
// }
// •	Fetch it at runtime:
// const [config, setConfig] = useState(null);

// useEffect(() => {
//   fetch('/config.json')
//     .then(res => res.json())
//     .then(setConfig);
// }, []);
// This allows changing endpoints without rebuilding the app.
// ________________________________________
// 5. Best Practices
// •	Never commit secrets (API keys, passwords) directly; use environment variables.
// •	Use separate .env files for each environment.
// •	Validate environment variables to avoid undefined values.
// •	Keep .env files out of src/ to prevent accidental bundling.

// Create a Higher-Order Component (HOC) to Log Props in reactjs ?
// Example: withLogger HOC
// import React from 'react';

// // HOC that logs props
// const withLogger = (WrappedComponent) => {
//   return (props) => {
//     console.log('Props passed to component:', props);
//     return <WrappedComponent {...props} />;
//   };
// };

// export default withLogger;
// ________________________________________
// Usage Example
// Suppose you have a simple component:
// const User = ({ name, age }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Age: {age}</p>
//     </div>
//   );
// };
// You can wrap it with the HOC:
// import withLogger from './withLogger';

// const UserWithLogger = withLogger(User);

// export default function App() {
//   return (
//     <div>
//       <UserWithLogger name="Alice" age={25} />
//       <UserWithLogger name="Bob" age={30} />
//     </div>
//   );
// }
// ________________________________________
// ✅ How it works:
// 1.	withLogger receives a component (WrappedComponent) as input.
// 2.	Returns a new component that:
// o	Logs props to the console.
// o	Passes props to the original component using {...props}.
// 3.	Can be reused to log props for any component.

//  How to update Document Title on Mount in a React Component ?
// Example: Update Document Title on Mount
// import React, { useEffect } from 'react';

// const Page = () => {
//   useEffect(() => {
//     // Runs when component mounts
//     document.title = "Welcome to My Page";

//     // Optional: cleanup on unmount
//     return () => {
//       document.title = "React App"; // Reset title when unmounted
//     };
//   }, []); // Empty dependency array ensures it runs only once on mount

//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };

// export default Page;
// ________________________________________
// How it works:
// 1.	useEffect runs after the component mounts.
// 2.	By passing an empty dependency array [], the effect runs only once.
// 3.	You can optionally return a cleanup function to reset the title when the component unmounts.
// ________________________________________
// Alternative: Using a Custom Hook
// You can make a reusable hook to update the document title:
// import { useEffect } from 'react';

// const useDocumentTitle = (title) => {
//   useEffect(() => {
//     const originalTitle = document.title;
//     document.title = title;

//     return () => {
//       document.title = originalTitle;
//     };
//   }, [title]);
// };

// export default useDocumentTitle;
// Usage:
// import React from 'react';
// import useDocumentTitle from './useDocumentTitle';

// const Dashboard = () => {
//   useDocumentTitle("Dashboard - My App");

//   return <h1>Dashboard</h1>;
// };
// ✅ This approach is cleaner and reusable across components.

//  How to Implement a Theme Switcher Using Context API ?
// 1. Create a Theme Context
// import React, { createContext, useState, useContext } from 'react';

// // Create the context
// const ThemeContext = createContext();

// // Custom hook for easier access
// export const useTheme = () => useContext(ThemeContext);

// // Provider component
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // 'light' or 'dark'

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//   };

//   const value = { theme, toggleTheme };

//   return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
// };
// ________________________________________
// 2. Wrap your App with ThemeProvider
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ThemeProvider } from './ThemeContext';

// ReactDOM.render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById('root')
// );
// ________________________________________
// 3. Create a Theme Switcher Component
// import React from 'react';
// import { useTheme } from './ThemeContext';

// const ThemeSwitcher = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       style={{
//         padding: '10px 20px',
//         background: theme === 'light' ? '#333' : '#eee',
//         color: theme === 'light' ? '#fff' : '#000',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         margin: '10px',
//       }}
//     >
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//     </button>
//   );
// };

// export default ThemeSwitcher;
// ________________________________________
// 4. Consume Theme in Components
// import React from 'react';
// import { useTheme } from './ThemeContext';

// const Content = () => {
//   const { theme } = useTheme();

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: theme === 'light' ? '#fff' : '#222',
//         color: theme === 'light' ? '#000' : '#fff',
//         transition: 'all 0.3s ease',
//       }}
//     >
//       <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
//     </div>
//   );
// };

// export default Content;
// ________________________________________
// ✅ Features:
// 1.	Global state using Context API (theme and toggleTheme).
// 2.	Reusable hook useTheme() for easier access.
// 3.	Smooth theme transitions using inline styles or CSS classes.
// 4.	Works across all components without prop drilling.

// How do you access the dom element in reactjs ?
// 1. Using useRef in Functional Components
// import React, { useRef } from 'react';

// const TextInput = () => {
//   const inputRef = useRef(null); // Create a ref

//   const handleFocus = () => {
//     // Access the DOM element and call focus
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder="Type here..." />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// };

// export default TextInput;
// Explanation:
// •	useRef(null) creates a ref object.
// •	ref={inputRef} attaches it to the DOM element.
// •	inputRef.current points to the actual DOM node.
// ________________________________________
// 2. Using createRef in Class Components
// import React, { Component } from 'react';

// class TextInputClass extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef(); // Create a ref
//   }

//   handleFocus = () => {
//     this.inputRef.current.focus(); // Access the DOM element
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputRef} placeholder="Type here..." />
//         <button onClick={this.handleFocus}>Focus Input</button>
//       </div>
//     );
//   }
// }

// export default TextInputClass;
// ________________________________________
// 3. Key Points:
// 1.	Refs give direct access to DOM nodes or React elements.
// 2.	Don’t overuse refs; prefer state and props for UI updates.
// 3.	Can be used for:
// o	Focusing inputs
// o	Scrolling
// o	Measuring element dimensions
// o	Integrating third-party libraries that require a DOM node
// ________________________________________
// If you want, I can create an example showing scrolling a list to the bottom using refs, which is a common real-world use case.

// How to change styles based on condition in react ?
// 1. Using Inline Styles
// You can set the style prop with a JavaScript object and use conditions:
// import React, { useState } from 'react';

// const ConditionalStyle = () => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsActive(!isActive)}>Toggle State</button>

//       <p
//         style={{
//           color: isActive ? 'white' : 'black',
//           backgroundColor: isActive ? 'green' : 'gray',
//           padding: '10px',
//           borderRadius: '5px',
//         }}
//       >
//         {isActive ? 'Active' : 'Inactive'}
//       </p>
//     </div>
//   );
// };

// export default ConditionalStyle;
// ________________________________________
// 2. Using CSS Classes
// You can dynamically assign classes using template literals or the classnames library:
// Using Template Literals
// <p className={isActive ? 'active' : 'inactive'}>
//   {isActive ? 'Active' : 'Inactive'}
// </p>
// CSS
// .active {
//   color: white;
//   background-color: green;
// }

// .inactive {
//   color: black;
//   background-color: gray;
// }
// Using classnames (Optional)
// npm install classnames
// import classNames from 'classnames';

// <p className={classNames({ active: isActive, inactive: !isActive })}>
//   {isActive ? 'Active' : 'Inactive'}
// </p>
// ________________________________________
// 3. Using Styled-Components (CSS-in-JS)
// import styled from 'styled-components';

// const Box = styled.div`
//   padding: 10px;
//   border-radius: 5px;
//   color: ${({ isActive }) => (isActive ? 'white' : 'black')};
//   background-color: ${({ isActive }) => (isActive ? 'green' : 'gray')};
// `;

// const App = () => {
//   const [isActive, setIsActive] = React.useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsActive(!isActive)}>Toggle</button>
//       <Box isActive={isActive}>{isActive ? 'Active' : 'Inactive'}</Box>
//     </div>
//   );
// };
// ________________________________________
// ✅ Summary
// Approach	When to Use
// Inline styles	Quick dynamic styles, small components
// CSS classes	Reusable, cleaner, maintainable styles
// Styled-components	Dynamic styling with component encapsulation

// How to call a method when component is rendered for the first time in react
// 1. Using useEffect in Functional Components
// import React, { useEffect } from 'react';

// const MyComponent = () => {

//   const fetchData = () => {
//     console.log("Component mounted! Fetching data...");
//     // You can call API or other methods here
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array ensures it runs only once on mount

//   return <div>Hello, World!</div>;
// };

// export default MyComponent;
// Explanation:
// •	useEffect runs after the component mounts.
// •	Passing an empty dependency array [] ensures it only runs once (on initial render).
// ________________________________________
// 2. Using componentDidMount in Class Components
// import React, { Component } from 'react';

// class MyComponentClass extends Component {
//   componentDidMount() {
//     console.log("Component mounted! Fetching data...");
//     // Call your method here
//   }

//   render() {
//     return <div>Hello, World!</div>;
//   }
// }

// export default MyComponentClass;
// Explanation:
// •	componentDidMount runs once after the component is first added to the DOM.
// •	Ideal for API calls, subscriptions, or other initialization logic.
// ________________________________________
// ✅ Notes:
// 1.	Do not call the method directly in render, as it will run on every render.
// 2.	For functional components, always use useEffect with the empty array for first-render logic.
// 3.	For cleanup, you can return a function from useEffect if needed (like unsubscribing or clearing timers)

// Give an example of optimization using usecallbacks in react ?
// Absolutely! useCallback is used in React to memoize functions, so they don’t get recreated on every render. This is especially useful when passing functions to child components wrapped in React.memo or when a function is a dependency of useEffect.
// Here’s a practical example:
// ________________________________________
// Scenario:
// We have a counter and a child button component that only re-renders when necessary.
// ________________________________________
// 1. Child Component with React.memo
// import React from 'react';

// const Button = React.memo(({ handleClick, children }) => {
//   console.log(`Rendering button: ${children}`);
//   return <button onClick={handleClick}>{children}</button>;
// });

// export default Button;
// •	React.memo prevents re-rendering if props don’t change.
// ________________________________________
// 2. Parent Component Using useCallback
// import React, { useState, useCallback } from 'react';
// import Button from './Button';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   // Without useCallback, this function would be recreated on every render
//   const increment = useCallback(() => {
//     setCount(prev => prev + 1);
//   }, []); // dependencies: only if needed

//   const decrement = useCallback(() => {
//     setCount(prev => prev - 1);
//   }, []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <input
//         type="text"
//         placeholder="Type something"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <Button handleClick={increment}>Increment</Button>
//       <Button handleClick={decrement}>Decrement</Button>
//     </div>
//   );
// };

// export default Counter;
// ________________________________________
// ✅ How Optimization Works:
// 1.	Without useCallback, every render recreates functions, causing child components to re-render even if their props haven’t changed.
// 2.	With useCallback, increment and decrement are memoized, so React.memo can prevent unnecessary re-renders.
// 3.	Useful when you have expensive child components or large lists.
// ________________________________________
// 🔹 Key Points:
// •	useCallback(fn, deps) returns a memoized version of fn that only changes if deps change.
// •	Often used with React.memo children or useEffect dependencies.
// •	Helps improve performance in large apps by reducing unnecessary renders.

// How to rerender a component on value change in react ?
// In React, components automatically re-render when their state or props change. So to re-render a component on a value change, you typically use useState (in functional components) or this.setState (in class components).
// Here’s a detailed explanation:
// ________________________________________
// 1. Using useState in Functional Components
// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prev => prev + 1); // Updates state → triggers re-render
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default Counter;
// Explanation:
// •	useState creates a state variable count.
// •	Calling setCount updates the state.
// •	Updating state automatically rerenders the component with the new value.
// ________________________________________
// 2. Using this.setState in Class Components
// import React, { Component } from 'react';

// class CounterClass extends Component {
//   state = { count: 0 };

//   increment = () => {
//     this.setState(prevState => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default CounterClass;
// Explanation:
// •	this.setState updates the state and triggers a re-render.
// •	The component displays the updated count.
// ________________________________________
// 3. Rerender on Prop Change
// If a component receives props from its parent, it will also re-render whenever the prop changes:
// const Child = ({ value }) => {
//   console.log('Child rendered');
//   return <p>Value: {value}</p>;
// };

// const Parent = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Child value={count} />
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };
// •	Child re-renders automatically when value prop changes.
// ________________________________________
// ✅ Key Points:
// 1.	State changes (useState / this.setState) trigger re-renders.
// 2.	Prop changes from parent also trigger re-renders.
// 3.	Avoid directly mutating state; always use setters (setCount) to trigger re-render.

// How to Force a component to rerender with out using useState in react ?
// Yes! In React, you can force a component to re-render even without changing state. Here are the common approaches:
// ________________________________________
// 1. Using useReducer with a dummy state
// import React, { useReducer } from 'react';

// const ForceRender = () => {
//   const [, forceUpdate] = useReducer(x => x + 1, 0);

//   return (
//     <div>
//       <button onClick={forceUpdate}>Force Rerender</button>
//       <p>Rendered at: {new Date().toLocaleTimeString()}</p>
//     </div>
//   );
// };

// export default ForceRender;
// Explanation:
// •	useReducer updates a dummy state by incrementing a number.
// •	Every time forceUpdate() is called, the component re-renders.
// •	This avoids using useState directly.
// ________________________________________
// 2. Using useRef and useEffect hack (less common)
// import React, { useRef, useEffect } from 'react';

// const ForceRender = () => {
//   const renderCount = useRef(0);

//   const forceRender = () => {
//     renderCount.current += 1;
//     // Trigger re-render by updating a state indirectly (use reducer preferred)
//   };

//   return (
//     <div>
//       <button onClick={forceRender}>Force Rerender</button>
//       <p>Render count: {renderCount.current}</p>
//     </div>
//   );
// };

// export default ForceRender;
// Note: This doesn’t automatically trigger a re-render. You’d need a state update somewhere. That’s why useReducer is the preferred method for forcing re-renders.
// ________________________________________
// 3. Class Component: Using forceUpdate()
// import React, { Component } from 'react';

// class ForceRenderClass extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.forceUpdate()}>Force Rerender</button>
//         <p>Rendered at: {new Date().toLocaleTimeString()}</p>
//       </div>
//     );
//   }
// }

// export default ForceRenderClass;
// Explanation:
// •	this.forceUpdate() triggers a re-render without changing state or props.
// •	Useful in some legacy class components.
// ________________________________________
// ✅ Best Practice:
// •	In functional components, prefer useReducer to force rerenders.
// •	Avoid overusing forced rerenders; usually state/props updates should drive UI updates.

// How to call a method immediately after state is updated or after component is rerendered in reactjs ?
// In React, if you want to call a method immediately after state is updated or after a component re-renders, you need to use different approaches depending on whether you are using functional components or class components.
// ________________________________________
// 1. Functional Components: Using useEffect
// useEffect can be used to run code after a state changes or after a render.
// import React, { useState, useEffect } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1); // update state
//   };

//   // This effect runs after every render where `count` changes
//   useEffect(() => {
//     console.log("State updated! Current count:", count);
//     // You can call any method here
//   }, [count]); // dependency array ensures it runs when `count` changes

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };

// export default Counter;
// ✅ Key Points:
// •	The effect runs after the DOM updates with the new state.
// •	You can include multiple dependencies if you want the effect to run on multiple state changes.
// ________________________________________
// 2. Class Components: Using Callback in setState
// In class components, setState can accept a callback function that runs after the state is updated and the component is re-rendered.
// import React, { Component } from 'react';

// class CounterClass extends Component {
//   state = { count: 0 };

//   increment = () => {
//     this.setState(
//       { count: this.state.count + 1 },
//       () => {
//         console.log("State updated! Current count:", this.state.count);
//         // Call your method here
//       }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default CounterClass;
// ✅ Key Points:
// •	The callback of setState guarantees that your function runs after state update and render.
// ________________________________________
// Summary:
// Component Type	How to run code after state update
// Functional	useEffect(() => { ... }, [state])
// Class	setState(updater, callback)
// ________________________________________
// I can also show a functional component example that mimics setState callback behavior using useEffect for multiple state values.

// How to Create a popup using portal in reactjs ?
// In React, you can create a popup/modal using React Portals, which allow you to render a component outside the main DOM hierarchy (usually at the root of the document). This is useful for modals, tooltips, or popups.
// Here’s a clean example:
// ________________________________________
// 1. Create a Portal Root in HTML
// In your public/index.html, add a div for the portal:
// <body>
//   <div id="root"></div>
//   <div id="portal-root"></div> <!-- Portal target -->
// </body>
// ________________________________________
// 2. Create the Modal Component Using Portal
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './Modal.css'; // optional for styling

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="modal-close" onClick={onClose}>
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>,
//     document.getElementById('portal-root') // portal target
//   );
// };

// export default Modal;
// ________________________________________
// 3. Modal CSS (Modal.css)
// .modal-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// }

// .modal-content {
//   background: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   position: relative;
//   min-width: 300px;
// }

// .modal-close {
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   border: none;
//   background: transparent;
//   font-size: 20px;
//   cursor: pointer;
// }
// ________________________________________
// 4. Use the Modal in a Component
// import React, { useState } from 'react';
// import Modal from './Modal';

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <h1>React Portal Modal Example</h1>
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>

//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <h2>Hello Modal!</h2>
//         <p>This is a popup using React Portal.</p>
//       </Modal>
//     </div>
//   );
// };

// export default App;
// ________________________________________
// ✅ How it Works
// 1.	ReactDOM.createPortal(child, container) renders child into a DOM node outside the parent hierarchy.
// 2.	This prevents issues with CSS overflow, z-index, or stacking context.
// 3.	The modal is fully controlled by the parent via props (isOpen, onClose).

// Which lifecycle hooks in class component are replaced with useEffect in functional components ?
// In React, the useEffect hook in functional components can replace most of the lifecycle methods from class components. Here’s a detailed mapping:
// ________________________________________
// 1. Mounting
// Class Component Lifecycle	Functional Component with useEffect
// componentDidMount()	useEffect(() => { /* code */ }, [])
// •	Run once after the component is mounted.
// •	Empty dependency array [] ensures it only runs once.
// useEffect(() => {
//   console.log('Component mounted!');
// }, []);
// ________________________________________
// 2. Updating
// Class Component Lifecycle	Functional Component with useEffect
// componentDidUpdate(prevProps, prevState)	useEffect(() => { /* code */ }, [dep1, dep2])
// •	Runs when specified dependencies change.
// •	useEffect with dependency array triggers on updates.
// useEffect(() => {
//   console.log('Count changed:', count);
// }, [count]);
// ________________________________________
// 3. Unmounting
// Class Component Lifecycle	Functional Component with useEffect
// componentWillUnmount()	useEffect(() => { return () => { /* cleanup */ } }, [])
// •	Return a cleanup function inside useEffect.
// •	Runs when the component unmounts.
// useEffect(() => {
//   const timer = setInterval(() => console.log('tick'), 1000);

//   return () => clearInterval(timer); // cleanup on unmount
// }, []);
// ________________________________________
// 4. Combined Mount + Update + Unmount
// •	useEffect can handle all three phases depending on the dependency array.
// useEffect(() => {
//   console.log('Mount or dependency changed');

//   return () => console.log('Cleanup on dependency change or unmount');
// }, [dependency]);
// ________________________________________
// ✅ Summary Table
// Lifecycle Method	Functional (useEffect)
// componentDidMount	useEffect(() => {}, [])
// componentDidUpdate	useEffect(() => {}, [dependencies])
// componentWillUnmount	useEffect(() => { return cleanup }, [])
// componentDidMount + update	useEffect(() => {}, [dependencies])
// ________________________________________
// Tip:
// •	You can have multiple useEffect hooks in a functional component to separate concerns, unlike class components which combine logic in one lifecycle method.

// How to Share data between components using context api and redux ?
// ou can share data between components in React using Context API or Redux, depending on the scale and complexity of your app. Here’s a detailed comparison and example for both:
// ________________________________________
// 1. Sharing Data Using Context API
// The Context API is great for lightweight global state without prop drilling.
// Step 1: Create a Context
// import React, { createContext, useState, useContext } from 'react';

// const AppContext = createContext();

// export const useAppContext = () => useContext(AppContext);

// export const AppProvider = ({ children }) => {
//   const [user, setUser] = useState({ name: 'Alice' });

//   return (
//     <AppContext.Provider value={{ user, setUser }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
// Step 2: Wrap Your App
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { AppProvider } from './AppContext';

// ReactDOM.render(
//   <AppProvider>
//     <App />
//   </AppProvider>,
//   document.getElementById('root')
// );
// Step 3: Access Context in Components
// import React from 'react';
// import { useAppContext } from './AppContext';

// const UserProfile = () => {
//   const { user, setUser } = useAppContext();

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <button onClick={() => setUser({ name: 'Bob' })}>Change Name</button>
//     </div>
//   );
// };
// ✅ Context API is simple, no extra library required, ideal for small to medium apps.
// ________________________________________
// 2. Sharing Data Using Redux
// Redux is more suitable for large-scale apps with complex state logic.
// Step 1: Install Redux
// npm install @reduxjs/toolkit react-redux
// Step 2: Create a Slice
// import { createSlice } from '@reduxjs/toolkit';

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: { name: 'Alice' },
//   reducers: {
//     setName: (state, action) => {
//       state.name = action.payload;
//     },
//   },
// });

// export const { setName } = userSlice.actions;
// export default userSlice.reducer;
// Step 3: Configure Store
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';

// export const store = configureStore({
//   reducer: { user: userReducer },
// });
// Step 4: Wrap App with Provider
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App';
// import { store } from './store';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
// Step 5: Access Redux State in Components
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setName } from './userSlice';

// const UserProfile = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <button onClick={() => dispatch(setName('Bob'))}>Change Name</button>
//     </div>
//   );
// };
// ✅ Redux provides a predictable state container, devtools, and is better for complex apps with multiple state changes and side effects.
// ________________________________________
// Comparison
// Feature	Context API	Redux
// Setup Complexity	Simple	More setup
// Best For	Small/medium apps	Large apps with complex state
// Performance	Can re-render all consumers	Optimized with selectors
// DevTools	Basic logging	Redux DevTools
// Middleware support	Limited	Full support (thunks, saga)
// ________________________________________
// If you want, I can make a small example app showing both Context API and Redux side by side, so you can see how state updates propagate in both approaches.

// Give an examaple of optimization using useMemo and usecallback ?
// Sure! Let’s create a practical React example showing how to optimize performance using useMemo and useCallback. This is especially useful when you have expensive calculations or child components that re-render unnecessarily.
// ________________________________________
// Scenario:
// We have a counter and a list of numbers. We want to:
// 1.	Avoid recalculating expensive operations on every render (useMemo).
// 2.	Prevent child components from re-rendering unnecessarily (useCallback + React.memo).
// ________________________________________
// 1. Child Component
// import React from 'react';

// // React.memo prevents unnecessary re-renders if props don't change
// const List = React.memo(({ numbers, calculate }) => {
//   console.log('List component rendered');
//   return (
//     <ul>
//       {numbers.map((num, index) => (
//         <li key={index}>
//           {num} → Square: {calculate(num)}
//         </li>
//       ))}
//     </ul>
//   );
// });

// export default List;
// ________________________________________
// 2. Parent Component Using useMemo and useCallback
// import React, { useState, useMemo, useCallback } from 'react';
// import List from './List';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [numbers] = useState([1, 2, 3, 4, 5]);

//   // useCallback memoizes the function so it doesn't recreate on every render
//   const calculateSquare = useCallback((num) => {
//     console.log('Calculating square for', num);
//     return num * num;
//   }, []);

//   // useMemo to memoize expensive calculation (optional here)
//   const doubledCount = useMemo(() => {
//     console.log('Doubling count');
//     return count * 2;
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>Doubled Count (memoized): {doubledCount}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       <List numbers={numbers} calculate={calculateSquare} />
//     </div>
//   );
// };

// export default App;
// ________________________________________
// ✅ How This Optimizes Performance:
// 1.	useCallback
// o	Prevents the calculateSquare function from being recreated on every render.
// o	Ensures React.memo in List works properly, avoiding unnecessary re-renders.
// 2.	useMemo
// o	Memoizes expensive calculations (like doubledCount), only recalculating when dependencies change.
// o	Prevents recomputation on every render.
// 3.	React.memo
// o	Ensures the List component only re-renders if its props (numbers or calculate) actually change.
// ________________________________________
// 🔹 Key Points
// Hook	Purpose
// useMemo	Memoize a value to avoid expensive recalculation
// useCallback	Memoize a function to avoid recreating it each render

// Create a counter component using useReducer ?
// 1. Counter Component Using useReducer
// import React, { useReducer } from 'react';

// // Define initial state
// const initialState = { count: 0 };

// // Define reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     case 'RESET':
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//     </div>
//   );
// };

// export default Counter;
// ________________________________________
// ✅ How It Works:
// 1.	initialState – defines the starting state.
// 2.	reducer – takes the current state and an action, returns the new state.
// 3.	dispatch – triggers state changes by sending an action to the reducer.
// 4.	All state updates are handled in a single place, making it easier to manage complex logic.
// ________________________________________
// This pattern is especially useful when:
// •	You have multiple state variables that update together.
// •	State changes depend on previous state.
// •	You want a more predictable state flow, similar to Redux.

// Create a search textbox filter in reactjs ?
// 1. Search Filter Component
// import React, { useState } from 'react';

// const SearchFilter = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const items = [
//     'Apple',
//     'Banana',
//     'Orange',
//     'Mango',
//     'Pineapple',
//     'Grapes',
//   ];

  // Filter items based on search term
//   const filteredItems = items.filter(item =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
//       <h2>Search Fruits</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//         style={{
//           width: '100%',
//           padding: '10px',
//           marginBottom: '20px',
//           borderRadius: '5px',
//           border: '1px solid #ccc',
//         }}
//       />
//       <ul>
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <li>No results found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SearchFilter;
// ________________________________________
// ✅ How It Works:
// 1.	State: searchTerm stores the current value of the input.
// 2.	Filtering: items.filter(...) checks if each item includes the search term (case-insensitive).
// 3.	Rendering: The filtered list updates in real-time as the user types.
// 4.	Fallback: Shows “No results found” if nothing matches.
// ________________________________________
// 🔹 Optional Improvements:
// •	Debouncing with useEffect or lodash to reduce filter frequency on large datasets.
// •	Highlighting matched text in the list.
// •	Fetching data from API instead of static array.

// How will you implement debounce in reactjs for filtering ?
// 1. Using useEffect with setTimeout
// import React, { useState, useEffect } from 'react';

// const SearchFilterDebounce = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [debouncedTerm, setDebouncedTerm] = useState('');
//   const [filteredItems, setFilteredItems] = useState([]);

//   const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];

//   // Update debouncedTerm after a delay
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedTerm(searchTerm);
//     }, 500); // 500ms debounce delay

//     return () => {
//       clearTimeout(handler); // Cleanup on next effect run
//     };
//   }, [searchTerm]);

//   // Filter items whenever debouncedTerm changes
//   useEffect(() => {
//     setFilteredItems(
//       items.filter(item =>
//         item.toLowerCase().includes(debouncedTerm.toLowerCase())
//       )
//     );
//   }, [debouncedTerm]);

//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
//       <h2>Debounced Search</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//         style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
//       />
//       <ul>
//         {filteredItems.length > 0
//           ? filteredItems.map((item, index) => <li key={index}>{item}</li>)
//           : <li>No results found</li>}
//       </ul>
//     </div>
//   );
// };

// export default SearchFilterDebounce;
// ________________________________________
// How it Works
// 1.	searchTerm updates on every keystroke.
// 2.	useEffect with setTimeout delays updating debouncedTerm until the user stops typing for 500ms.
// 3.	Cleanup clearTimeout ensures no stale timers remain.
// 4.	Filtering happens only after the debounce delay, reducing unnecessary renders.
// ________________________________________
// 2. Optional: Using lodash.debounce
// npm install lodash
// import { debounce } from 'lodash';
// import React, { useState, useMemo } from 'react';

// const SearchFilterLodash = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const items = ['Apple', 'Banana', 'Orange', 'Mango'];

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

  // Memoized debounced function
//   const debouncedChange = useMemo(() => debounce(handleChange, 500), []);

//   return (
//     <input
//       type="text"
//       placeholder="Search..."
//       onChange={debouncedChange}
//     />
//   );
// };
// •	lodash.debounce simplifies debouncing.
// •	useMemo ensures the debounced function is stable across renders.
// ________________________________________
// ✅ Key Points
// •	Debouncing improves performance on large datasets or API calls.
// •	Always clean up timers when using setTimeout.
// •	Can be used for filtering, autocomplete, or API search.


// ------------------------------------------------------------------------------------------














// ----------------------------------------------------------------------------

// In Reactjs L1 & L2 some of these 40+ scenario based questions can be asked by interviewer

// 1. How to cancel the api call when the timeout occurs using abort controller
// 2. Create a component to upload the file in reactjs ?
// 3. How to create a Custom Hook for Data Fetching with Loading and Error States ?
// 4. How will you Manage Environment-Specific Configurations in Reactjs in your project ?
// 5. Create a Higher-Order Component (HOC) to Log Props in reactjs ?
// 6. How to update Document Title on Mount in a React Component ?
// 7. How to Implement a Theme Switcher Using Context API ?
// 8. How do you access the dom element in reactjs ?
// 9. How to change styles based on condition in react ?
// 10. How to call a method when component is rendered for the first time in react
// 11. Give an example of optimization using usecallbacks in react ?
// 12. How to rerender a component on value change in react ?
// 13. How to Force a component to rerender with out using useState in react ?
// 14. How to call a method immediately after state is updated or after component is rerendered in reactjs ?
// 15. How to Create a popup using portal in reactjs ?
// 16. Which lifecycle hooks in class component are replaced with useEffect in functional components ?
// 17. How to Share data between components using context api and redux ?
// 18. Give an examaple of optimization using useMemo and usecallback ?
// 19. Create a counter component using useReducer ?
// 20. Create a search textbox filter in reactjs ?
// 21. How will you implement debounce in reactjs for filtering ?
// 
// 1. Cancel an API call using AbortController with a timeout
const fetchData = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

  try {
    const response = await fetch('https://api.example.com/data', {
      signal: controller.signal
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request cancelled due to timeout');
    } else {
      console.error('Fetch error:', error);
    }
  } finally {
    clearTimeout(timeoutId);
  }
};

fetchData();

// 2. File Upload Component in React
import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload} disabled={!file}>Upload</button>
    </div>
  );
}

export default FileUpload;

// 3. Custom Hook for Data Fetching
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// 4. Environment-Specific Configurations

Use .env files in React:

# .env.development
REACT_APP_API_URL=http://localhost:5000

# .env.production
REACT_APP_API_URL=https://api.example.com


Access in code:

const apiUrl = process.env.REACT_APP_API_URL;


React automatically picks .env.development or .env.production based on npm start or npm run build.

// 5. Higher-Order Component (HOC) to Log Props
import React from 'react';

function withLogger(WrappedComponent) {
  return function(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}

export default withLogger;

// Usage
// const LoggedButton = withLogger(Button);

// 6. Update Document Title on Mount
import { useEffect } from 'react';

function Page() {
  useEffect(() => {
    document.title = 'New Page Title';
  }, []); // Empty dependency array ensures it runs once

  return <h1>My Page</h1>;
}

export default Page;

// 7. Theme Switcher using Context API
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

// Usage in component
/*
const { theme, toggleTheme } = useTheme();
<div className={theme}>Hello</div>
<button onClick={toggleTheme}>Switch Theme</button>
*/

// 8. Access DOM Element in React
import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Access DOM element
  }, []);

  return <input ref={inputRef} placeholder="Auto Focus" />;
}

// 9. Change Styles Conditionally
function Button({ primary }) {
  const style = {
    backgroundColor: primary ? 'blue' : 'gray',
    color: 'white',
    padding: '10px'
  };
  return <button style={style}>Click Me</button>;
}

// 10. Call a Method on First Render
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component rendered for the first time');
    fetchData(); // call your method
  }, []); // empty dependency array ensures first render only

  return <div>Hello</div>;
}


Here’s a detailed explanation with practical ReactJS examples for each of your questions:

// 11. Example of optimization using useCallback

useCallback prevents unnecessary re-creations of functions between renders:

import React, { useState, useCallback } from 'react';

function Child({ handleClick }) {
  console.log('Child rendered');
  return <button onClick={handleClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // function reference stays same across renders

  return (
    <div>
      <p>Count: {count}</p>
      <Child handleClick={handleClick} />
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}


Without useCallback, Child would re-render unnecessarily whenever Parent re-renders.

// 12. Rerender a component on value change

React automatically rerenders when state or props change:

import React, { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}


Changing value triggers rerender.

// 13. Force rerender without using useState
import React, { useReducer } from 'react';

function MyComponent() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <div>
      <p>Random: {Math.random()}</p>
      <button onClick={forceUpdate}>Force Rerender</button>
    </div>
  );
}

// 14. Call method immediately after state update

Use useEffect that depends on the state:

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('State updated:', count);
    doSomething();
  }, [count]);

  const doSomething = () => console.log('After state update');

  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}

// 15. Create a popup using React Portal
import React from 'react';
import ReactDOM from 'react-dom';

function Popup({ children, onClose }) {
  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ background: 'white', padding: 20 }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('portal-root') // create <div id="portal-root"></div> in index.html
  );
}

// 16. Lifecycle hooks replaced by useEffect
Class Component Lifecycle	Functional Component Replacement
componentDidMount	useEffect(() => {}, [])
componentDidUpdate	useEffect(() => {}, [deps])
componentWillUnmount	useEffect(() => return cleanup, [])
// 17. Share data using Context API and Redux

Context API

const MyContext = React.createContext();
function Parent() {
  const value = { name: 'Saikrishna' };
  return <MyContext.Provider value={value}><Child /></MyContext.Provider>;
}
function Child() {
  const ctx = React.useContext(MyContext);
  return <p>{ctx.name}</p>;
}


Redux

import { useSelector, useDispatch } from 'react-redux';
const name = useSelector(state => state.name);
const dispatch = useDispatch();
dispatch({ type: 'UPDATE_NAME', payload: 'Saikrishna' });

// 18. Optimization using useMemo and useCallback
import React, { useState, useMemo, useCallback } from 'react';

function ExpensiveCalculation({ num, onClick }) {
  const result = useMemo(() => {
    console.log('Calculating...');
    return num * 2;
  }, [num]);

  return <button onClick={onClick}>Result: {result}</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => console.log('Clicked'), []);

  return <ExpensiveCalculation num={count} onClick={handleClick} />;
}

// 19. Counter using useReducer
import React, { useReducer } from 'react';

const initialState = { count: 0 };
function reducer(state, action) {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

// 20. Search Textbox Filter
import React, { useState } from 'react';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  const filtered = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." />
      <ul>
        {filtered.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

// 21. Debounce implementation for filtering
import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500); // 500ms delay
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  const filtered = items.filter(item => item.toLowerCase().includes(debouncedQuery.toLowerCase()));

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." />
      <ul>{filtered.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

// ----------------------------------------------------------------------------------

// ⚛️ 53 Most Frequently Asked React Interview Questions (L1–L3)

// 🟢 1. React Fundamentals
// 1️⃣ What is React?
//  2️⃣ What are the key features of React?
//  3️⃣ What is JSX?
//  4️⃣ What is the DOM?
//  5️⃣ What is Virtual DOM?
//  6️⃣ What are props in React?
//  7️⃣ What is state in ReactJS?
//  8️⃣ What is the difference between props and state?
//  9️⃣ What is prop drilling?
//  🔟 How to avoid prop drilling?

// 🔵 2. Component System & Lifecycle

// 1️⃣1️⃣ What is the component lifecycle in React class components?
//  1️⃣2️⃣ What are Pure components in React?
//  1️⃣3️⃣ What are fragments in React?
//  1️⃣4️⃣ What are Refs in React?
//  1️⃣5️⃣ What is forwardRef?
//  1️⃣6️⃣ What are Error Boundaries?
//  1️⃣7️⃣ What are Higher Order Components (HOCs)?
//  1️⃣8️⃣ What are Portals in React?
//  1️⃣9️⃣ What is Strict Mode in React?

// 🟠 3. Hooks Deep Dive

// 2️⃣0️⃣ What is useState and when to use it?
//  2️⃣1️⃣ What is useReducer and when to use it over useState?
//  2️⃣2️⃣ What is useEffect and which class lifecycle methods does it replace?
//  2️⃣3️⃣ What is useMemo?
//  2️⃣4️⃣ What is useCallback?
//  2️⃣5️⃣ Difference between useMemo and useCallback?
//  2️⃣6️⃣ What are custom hooks?
//  2️⃣7️⃣ What are the different hooks you’ve used?

// 🧠 4. Practical Coding & Usage

// 2️⃣8️⃣ Create a custom hook for increment/decrement counter
//  2️⃣9️⃣ Practical: Use callback function to send data from child to parent
//  3️⃣0️⃣ Practical: Send data from child to parent using useRef
//  3️⃣1️⃣ Practical: Use Context API with a working example

// 🟣 5. Data Flow, Events & Rendering
// 3️⃣2️⃣ What are synthetic events in React?
//  3️⃣3️⃣ What are controlled vs uncontrolled components?
//  3️⃣4️⃣ What are keys in React?
//  3️⃣5️⃣ What is lazy loading in React?
//  3️⃣6️⃣ What is Suspense in React?
//  3️⃣7️⃣ What is the purpose of the callback function inside setState()?
//  3️⃣8️⃣ Different ways to pass data from child to parent component

// 🟡 6. Context, Redux, and State Management

// 3️⃣9️⃣ What is Context API in React?
//  4️⃣0️⃣ Practical: Example usage of Context API
//  4️⃣1️⃣ Context API vs Redux — when to use what?
//  4️⃣2️⃣ What are prop types? How to apply validation on props?

// 🔴 7. Performance & Patterns

// 4️⃣3️⃣ How do you optimize a React application?
//  4️⃣4️⃣ How do you consume a RESTful JSON API in ReactJS?
//  4️⃣5️⃣ What are different design patterns used in React?
//  4️⃣6️⃣ What are React Mixins?
//  4️⃣7️⃣ What are render props in React?
//  4️⃣8️⃣ What is the difference between React.createElement and React.cloneElement?
//  4️⃣9️⃣ What are the different types of exports and imports in React?
//  5️⃣0️⃣ What are protected routes in React?
//  5️⃣1️⃣ Does React Router support context menus?

// -----------------------------------------------------------------------------

// In a React Frontend L2 round the following question was asked from interviewer.

// 💠 What security features should be taken while designing API's?
// 💠 What is API throttling?
// 💠 How to improve the performance in React Application?
// 💠 What is debouncing in React?
// 💠 What if in a react app we need to develop a feature of auto save the inputs of a form?
// 💠 Which react library is used to represent JSON data into charts, graphs, etc for better visualization and performance?
// 💠 If you have to inform the backend developers about some API's are failing how will you do that?
// 💠 Which tool is used to improve code standards in react application to show warnings for developers?
// 💠 What are the unit testing tools used in React Application?
// 💠 How do you handle API test case scenarios in React Application?
// 💠 Give me a estimation of completing a auto save functionality with unit testing including?
// 💠 Which cloud is used in your app development?

// 💠 Security Features While Designing APIs

// Authentication & Authorization: Use OAuth2, JWT, or API keys.

// Input Validation: Sanitize and validate all inputs to prevent SQL injection and XSS.

// Rate Limiting / Throttling: Prevent abuse of APIs.

// HTTPS: Ensure encryption in transit.

// CORS Configuration: Restrict origins as needed.

// Error Handling: Avoid exposing sensitive info in errors.

// Data Encryption: Encrypt sensitive data at rest.

// Logging & Monitoring: Track suspicious requests.

// 💠 What is API Throttling

// API throttling limits the number of API requests a client can make in a given time frame.

// Prevents server overload and abuse.

// Example: Max 100 requests per minute per IP.

// 💠 How to Improve Performance in React

// Use React.memo to prevent unnecessary re-renders.

// Use useCallback and useMemo to optimize expensive computations.

// Lazy load components with React.lazy + Suspense.

// Use Code splitting and dynamic imports.

// Optimize images and assets.

// Avoid anonymous functions inside JSX repeatedly.

// Use virtualization for large lists (react-window, react-virtualized).

// 💠 What is Debouncing in React

// Debouncing ensures a function executes after a delay since the last trigger.

// Useful in search input filtering to reduce API calls.

// const handleInput = debounce((value) => console.log(value), 500);


// Only executes after 500ms of inactivity.

// 💠 Auto-save Form Inputs in React

// Use useEffect with debouncing to send updates.

// useEffect(() => {
//   const handler = setTimeout(() => {
//     saveToBackend(formData);
//   }, 1000); // auto-save after 1 sec
//   return () => clearTimeout(handler);
// }, [formData]);


// Optionally, show a saving indicator to the user.

// 💠 React Libraries for Charts/Graphs

// Recharts: Simple, lightweight, composable.

// Chart.js + react-chartjs-2: Popular, good for small-medium apps.

// Victory: Flexible and customizable.

// D3.js: Powerful but complex for large visualizations.

// 💠 Informing Backend Developers About API Failures

// Use bug tracking tools like Jira, Trello.

// Send logs with request details, errors, and timestamps.

// Include API endpoint, request payload, and expected vs actual results.

// Optionally, create automated alerts via Slack or email.

// 💠 Tools for Code Standards in React

// ESLint: Detects bad practices and potential bugs.

// Prettier: Auto-formats code for consistency.

// Husky + lint-staged: Run pre-commit hooks for quality.

// 💠 Unit Testing Tools in React

// Jest: Core testing framework.

// React Testing Library: Tests components from user perspective.

// Enzyme: Older library, used for shallow rendering.

// Vitest: Modern, lightweight alternative to Jest.

// 💠 Handling API Test Case Scenarios

// Mock API responses using msw or jest.mock.

// Test loading, success, error states.

// Validate correct data rendering in UI.

// Simulate network errors for robustness.

// // Example
// const { getByText } = render(<MyComponent />);
// await waitFor(() => expect(getByText('Data Loaded')).toBeInTheDocument());

// 💠 Estimation for Auto-Save Feature
// Task	Estimated Time
// Form UI & state management	3-4 hours
// Debounce logic + API integration	2-3 hours
// Saving indicator & UX	1-2 hours
// Unit tests (success/error/loading states)	3-4 hours
// Total: ~9-13 hours (1-2 working days)	
// 💠 Cloud Used in App Development

// AWS (S3, EC2, Lambda)

// Firebase (Auth, Firestore, Hosting)

// Azure or Google Cloud Platform for enterprise apps.

// ------------------------------------------------------------------------------

// Senior React Interview Preparation – Day 1

// 🔹 Q1. How would you design a micro-frontend architecture with independent deployments?
// 👉 A micro-frontend system breaks a large React application into smaller, independently deployable apps. Best practices:
// ✅ Use Module Federation (Webpack 5) for runtime integration
// ✅ Define clear contracts between apps (via shared APIs or events)
// ✅ Each team owns, builds, and deploys their micro-frontend separately
// ✅ Isolate styling & dependencies to avoid conflicts
// ✅ Deploy on a shared shell (container app) to integrate all parts

// 🔹 Q2. Compare different state management solutions in React (Redux, Context API, Zustand, Recoil).
// 👉 Trade-offs to know:
// ✅ Redux – predictable, centralized, good for enterprise; but boilerplate-heavy
// ✅ Context API – simple for theming & global states; not good for frequent updates (performance hit)
// ✅ Zustand – lightweight, scalable, less boilerplate, great DX
// ✅ Recoil – fine-grained state updates + async selectors; not as widely adopted as Redux

// 🔹 Q3. How do you handle shared dependencies in a monorepo?
// 👉 Monorepo dependency management strategies:
// ✅ Use tools like Turborepo, Nx or Lerna
// ✅ Hoist common dependencies to root to reduce duplication
// ✅ Pin exact versions for critical libraries
// ✅ Use package.json resolutions to manage conflicts
// ✅ Automate builds with CI/CD pipelines to detect version mismatches

// -----------------------------------------------------------------------------

// Here the list of top programming hashtag#interview questions:

// 1. Reverse a String
// 2. Check if a String is a Palindrome
// 3. Remove Duplicates from a String
// 4. Find the First Non-Repeating Character
// 5. Count the Occurrences of Each Character
// 6. Reverse Words in a Sentence
// 7. Check if Two Strings are Anagrams
// 8. Find the Longest Substring Without Repeating Characters
// 9. Convert a String to an Integer (atoi Implementation)
// 10. Compress a String (Run-Length Encoding)
// 11. Find the Most Frequent Character
// 12. Find All Substrings of a Given String
// 13. Check if a String is a Rotation of Another String
// 14. Remove All White Spaces from a String
// 15. Check if a String is a Valid Shuffle of Two Strings
// 16. Convert a String to Title Case
// 17. Find the Longest Common Prefix
// 18. Convert a String to a Character Array
// 19. Replace Spaces with %20 (URL Encoding)
// 20. Convert a Sentence into an Acronym
// 21. Check if a String Contains Only Digits
// 22. Find the Number of Words in a String
// 23. Remove a Given Character from a String
// 24. Find the Shortest Word in a String
// 25. Find the Longest Palindromic Substring

// ------------------------------------------------------------------------------

// Most frequently asked 21 programs in L1 & L2 javascript interviews

// 1. Program to find longest word in a given sentence ?
// 2. How to check whether a string is palindrome or not ?
// 3. Write a program to remove duplicates from an array ?
// 4. Program to find Reverse of a string without using built-in method ?
// 5. Find the max count of consecutive 1’s in an array ?
// 6. Find the factorial of given number ?
// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
// 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
// 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
// 10. Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
// 11. Write a JavaScript program to find the maximum number in an array.
// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// 13. Write a JavaScript function to check if a given number is prime.
// 14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// 16. Given a string, write a javascript function to count the occurrences of each character in the string.
// 17. Write a javascript function that sorts an array of numbers in ascending order.
// 18. Write a javascript function that sorts an array of numbers in descending order.
// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.
// 21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}
// 22. Find 3rd least occurred number from an array


// ------------------------------------------------------------------------------

// Here are the Top 10 most common questions in javascript that can be asked in intervews.
//  These are basic-level but frequently asked in interviews 👇

// 1️⃣ Call, Apply, and Bind
//  Difference between them + write a polyfill.

// 2️⃣ Flatten Array (No Array.flat)
//  Input : [1,2,3,[4,5,6,[7,8,[10,11]]],9]
//  Output: [1,2,3,4,5,6,7,8,10,11,9]

// 3️⃣ Inline 5 divs in a row without flex/margin/padding
//  (Hint: display: inline-block)

// 4️⃣ Find sum of numbers without for loop
//  Input: [1,2,3,4,5] — (Hint: reduce() or recursion)

// 5️⃣ Deep Copy vs Shallow Copy (How to achieve this)
//  const a = { ab: { cd: { ef: true } } };
//  const b = a; const c = { ...a };
//  console.log(a === b); console.log(a === c);
//  a.ab.cd.ef = false;
//  console.log(b.ab.cd.ef); console.log(c.ab.cd.ef);

// 6️⃣ Promise & Async/Await Output (More questions I will be posting later)
//  async function chart(v){
//  console.log("start", v);
//  await console.log("middle", v);
//  console.log("end", v);
//  }
//  chart("first");
//  chart("second");

// 7️⃣ Find first repeating character
//  Example: "success" → c

// 8️⃣ Implement a Stopwatch
//  Start, Stop, Reset + live display.

// 9️⃣ Build a To-Do List (Vanilla JS or React)
//  Follow-up: How would you optimize re-renders?

// 🔟 Currying Function for Infinite Sum.
//  sum(10)(20)(30)() Output => 60
//  sum(10)(20)(30)(40)(50)(60)() Output => 210

// ------------------------------------------------------------------------------

// 🗝 Core JavaScript
// 1). Event loop order: Promise.then vs setTimeout(0) vs
// requestAnimationFrame - which fires first and why?
// 2). this binding: arrow vs function vs class methods (bugs
// you've probably hit).
// 3). Deep copy: why JSON.parse/stringify breaks (Dates
// Maps, Sets, functions) + safe options.
// 4). Debounce vs throttle -- implement your own mini
// version.
// 5). Coercion gotchas: [] + {} and {} + [] - explain the output.

// ⚛️ React
// 1). What actually triggers a re-render? (5 causes)
// 2). useEffect dependencies & stale closures -- when to
// refactor.
// 3). When not to use useMemo/useCallback.
// 4). State colocation vs Context vs external store (Redux/
// Zustand).
// 5). Suspense + Error Boundaries - modern fetch flows.

// 🎨 CSS/ Layout
// 1). Flex vs Grid - picking the right primitive.
// 2). Stacking context: why your z-index: 9999 still loses
// 3). Container queries in responsive design.
// 4). position: sticky -- why it sometimes doesn't work.

// ⚡️Performance
// 1). LCP / INP / CLS - what "good" looks like & how to
// improve.
// 2). Code-splitting strategy: routes, vendors, preloading
// 3). Image pipeline: formats, loading, content-visibility

// ♿️ Accessibility (A11y)
// 1). Form errors that announce correctly (ARIA, live
// regions).
// 2). Keyboard navigation & roving tabindex
// 3). Accessible dialogs: focus trap, inert background,
// aria-modal.

// 🧪 Testing & Tooling,
// 1). Unit vs integration vs E2E -- with examples.
// 2). Mocking network calls (MSW or similar)
// 3). Bundle analysis: fixing a runaway dependency.

// 🏗 Frontend System Design
// 1). Notifications dropdown: pagination, real-time
// optimistic UI.
// 2). Feature flags on the client: config delivery, guardrails
// fallbacks.

// 💡Bonus challenge (15 min):
// Your search box feels sluggish on every keystroke. How
// would you diagnose and ship a fix?
