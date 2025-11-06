// 1. Design patterns in React.js?
// 2. OOP principles in JS? How followed?
// 3. useCallback vs useMemo?
// 4. Send data child to parent in React?
// 5. Event delegation example?
// 6. What’s React Portal?
// 7. CSS: Fixed vs absolute?
// 8. Debouncing vs throttling, with code?
// 9. Arrow vs normal function?
// 10. First-class vs pure function?
// 11. Call by ref vs value?
// 12. useImperativeHandle hook in React?
// 13. Localization vs globalization?
// 14. Catch errors in React?
// 15. Error Boundary in React?
// 16. useTransition hook?
// 17. Suspense & lazy loading in React?
// 18. Event Loop in JS?
// 19. Generator function?
// 20. Controlled vs uncontrolled component?
// 21. Middleware: Redux Thunk vs Saga?
// 22. Check if number is decimal?
// 23. Reconciliation in React, why keys in map?
// 24. Update state from prev state?
// 25. Is useState/setState async?
// 26. HOC with example?
// 27. Render props?
// 28. JS Promise methods (race, all)?
// 29. Improve web app performance?
// 30. Render many UI components efficiently?
// 31. defer vs async difference?
// 32. Semantic HTML?
// 33. Responsive UI without framework?
// 34. Mock API with Jest?
// 35. Temporal Dead Zone?
// 36. Type vs interface in TS?
// 37. Generics in TS?
// 38. Service worker & usage?
// 39. Call stack & task execution impact?
// 40. WebSocket & how it works?
// 41. Data flow & API fetch in Next.js?
// 42. ES6 features & JS data types?
// 43. Pure Component & React.memo?
// 44. useCallback vs useMemo vs React.memo?
// 45. Function currying?
// 46. call, apply, bind in JS?
// 47. Hoisting in JS?
// 48. React Portal & its use?
// 49. Send data child to parent?
// 50. Prototypal inheritance?
// 51. Prefetch vs preload?
// 52. SSR vs SSG, data fetch in Next.js?
// 53. Object.freeze vs Object.seal?
// 54. Polyfills? Write for reduce.
// 55. Caching in Node.js app?
// 56. Saga vs Thunk difference?
// 57. Frontend arch patterns & state mgmt?
// 58. Client vs server-side caching?


// ----------------------------------------------------

// 🔹 Frontend & Web Concepts
// 1.What is a REST API and which HTTP methods have you used?
// 2. What are semantic HTML tags and how do they enhance accessibility?
// 3. Explain the difference between relative, absolute, fixed, and sticky positioning in CSS.
// 4. What are Single Page Applications (SPA)?
// 5. REST vs GraphQL — what are the key differences?
// 6. What is CORS and how do you handle it?
// 7. What web performance optimization techniques do you use?
// 8. What is lazy loading and how have you implemented it?
// 9. Difference between localStorage, sessionStorage, and cookies.

// 🔹 JavaScript Concepts
// 1. What are closures in JavaScript? Real-world examples and drawbacks?
// 2. Synchronous vs Asynchronous JavaScript — what's the difference?
// 3. How does the JavaScript event loop work?
// 4. Debouncing vs Throttling — when and why to use them?
// 5. What is event delegation and where have you applied it?
// 6. What is function currying and its use cases?
// 7. Difference between Promise.all and Promise.race.

// 🔹 ReactJS-Specific Questions
// 1. Functional vs Class components in React.
// 2. Purpose and usage of useState and useEffect hooks.
// 3. Virtual DOM vs Real DOM — key differences.
// 4. What is state lifting and when should you apply it?
// 5. Controlled vs Uncontrolled components — explain with examples.
// 6. Why are keys important in React lists?



//-------------------------------------------------------------------------


// 1. What is Webpack? Why do we use it in React projects?

// Answer:
// ⚙️ Webpack is a module bundler. It combines JS, CSS, images, and other assets into one optimized file for the browser.

// Real-life Example:
// Think of Webpack like a tiffin box — it packs all your files (JS, CSS, images) neatly into one bundle so the browser can eat it easily.

// ✅ 2. Key Parts of Webpack Configuration

// Answer:

// 🔹 entry → Starting point of your app

// 🔹 output → Where the final bundle goes

// 🔹 loaders → How to transform files (JSX, SCSS, etc.)

// 🔹 plugins → Add extra powers (like injecting HTML)

// 🔹 mode → Dev or Production

// 🔹 devServer → Local live-reload server


// Example:

// entry: './src/index.js',
// output: { path: '/dist', filename: 'bundle.js' }

// ✅ 3. What are Loaders in Webpack?

// Answer:
// 🧪 Loaders tell Webpack how to process non-JS files like JSX, CSS, SCSS, images, etc.

// Example:

// babel-loader → Converts JSX to plain JS

// css-loader → Lets you import .css files into JS

// ✅ 4. Loader vs Plugin

// Answer:

// 🧩 Loaders → Transform individual files

// 🔌 Plugins → Add features like HTML injection, cleanup, etc.


// Example:

// babel-loader → Converts JSX

// HtmlWebpackPlugin → Injects bundle into index.html

// ✅ 5. What is Tree Shaking?

// Answer:
// 🌿 Tree shaking removes unused code from your final bundle to reduce file size.

// Example:
// If you import only 1 function from a utility file, Webpack removes the rest automatically during production build.

// ✅ 6. How to Configure Code Splitting?

// Answer:
// Use Webpack’s splitChunks or React’s lazy with import().

// Example in React:

// const About = React.lazy(() => import('./About'));

// ✅ 7. How Does Webpack Handle Environment Variables?

// Answer:
// With DefinePlugin, Webpack replaces variables at build time.

// Example:

// new webpack.DefinePlugin({
//  'process.env.NODE_ENV': JSON.stringify('production')
// })

// ✅ 8. What is HtmlWebpackPlugin?

// Answer:
// 📝 It automatically injects the bundled JS file into your HTML.

// Example:

// new HtmlWebpackPlugin({ template: './public/index.html' });

// ✅ 9. What is HMR (Hot Module Replacement)?

// Answer:
// ♨️ HMR lets you update modules in the browser without full reload.

// Real-life Example:
// Like changing a lightbulb without switching off the power — smooth and quick updates!

// ✅ 10. How to Optimize Webpack for Production?

// Answer:

// Set mode: 'production'

// Use TerserPlugin to minify JS

// Enable splitChunks

// Compress and cache assets


// Result: Smaller, faster, and cleaner bundles.

// ✅ 11. Handling CSS/SCSS in Webpack

// Answer:
// Use a chain of loaders: style-loader, css-loader, sass-loader.

// Example:

// {
//  test: /\.scss$/,
//  use: ['style-loader', 'css-loader', 'sass-loader']
// }

// ✅ 12. Webpack with Babel in React

// Answer:
// Use babel-loader to convert ES6+ and JSX into browser-friendly JS.

// Example:

// {
//  test: /\.js$/,
//  exclude: /node_modules/,
//  use: 'babel-loader'
// }


// ✅ 13. How to Debug Webpack Issues?

// Answer:

// 🔍 Use devtool: 'source-map' for detailed errors

// 📢 Run with --verbose flag

// 🧠 Inspect the dist folder and console output







// --------------------
// ✅ 1. What are Semantic Tags?

// Semantic tags like <main>, <article>, <header> improve accessibility and SEO.

// React JSX:

// <main>
//  <section>
//  <h1>Dashboard</h1>
//  </section>
// </main>


// ---

// ✅ 2. <div> vs <section> – When to use what?

// <div> → generic wrapper

// <section> → meaningful block of related content
// Use <section> for grouped UI like pricing cards or feature lists.



// ---

// ✅ 3. What is aria-label and why use it?

// To make your UI accessible!

// <button aria-label="Close Modal">❌</button>


// ---

// ✅ 4. id vs class – What’s the difference?

// id: Unique selector

// class: Reusable styling
// React Note: Use className instead of class in JSX.



// ---

// ✅ 5. What do <​meta> tags do in a React app?

// They define SEO and responsive settings.

// <​meta name="viewport" content="width=device-width, initial-scale=1.0" />

// Use react-helmet to inject meta tags dynamically in SPAs.


// ---

// ✅ 6. defer vs async in scripts?

// defer: Executes after HTML load (keeps order)

// async: Executes ASAP (order not guaranteed)



// ---

// ✅ 7. Why use rel="noopener noreferrer"?

// To prevent security risk like reverse tabnabbing when opening links in new tabs:

// <a href="https://xyz.com" target="_blank" rel="noopener noreferrer">Visit</a>


// ---

// ✅ 8. Self-Closing Tags in React

// Always close tags like:

// <img src="logo.png" alt="logo" />
// <input type="text" />


// ---

// ✅ 9. How to optimize images in HTML?

// Use loading="lazy"

// Prefer .webp or .avif

// Add alt + set dimensions



// ---

// ✅ 10. HTML Forms: Native vs React Handling

// Native:

// <form method="POST" action="/submit">

// React Controlled:

// <form onSubmit​={handleSubmit}>
//  <input value={email} onChange​={handleChange} />
// </form>


// ---

// ⭐ Bonus Tip:

// Q: Button inside a form doesn’t submit?
// A: Ensure you use type="submit" not just type="button"
