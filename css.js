// 🚀 𝐂𝐒𝐒 𝐈𝐧𝐭𝐞𝐫𝐯𝐢𝐞𝐰 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬 👨‍💻
// 1. What is the difference between id & class in CSS?
// An id should be unique within a page (used only once), while a class can be reused on multiple elements.

// 2. How does the CSS box model work?
// Content: The actual content of the element (text, images, etc.)
// Padding: Transparent space between the content and the border
// Border: A line surrounding the padding (can be visible or invisible)
// Margin: Transparent space outside the border, separating the element from others.
// By default, CSS uses box-sizing: content-box, where width and height only apply to the content area. This can make calculations tricky.
// With border-box, the width and height include padding and border, making sizing more intuitive. If you set width: 200px, the element
//  will be exactly 200px wide, with padding and border included within that measurement.

// 3. What is specificity in CSS & how is it calculated?
// Specificity is a set of rules browsers use to determine which CSS rule applies when multiple rules could apply to the same element.
// It is calculated based on the types of selectors used in the rule:
// Inline styles (e.g., style="") have the highest specificity (1,0,0,0).
// IDs (#id) contribute (0,1,0,0).
// Classes (.class), attributes ([type="text"]), and pseudo-classes (:hover) contribute (0,0,1,0).
// Elements (div, p) and pseudo-elements (::before) contribute (0,0,0,1).
// Specificity is compared lexicographically from left to right. Higher values take precedence.
// If two rules have the same specificity, the one that appears later in the CSS file takes precedence.

// 4. What are pseudo-classes & pseudo-elements in CSS?
// Pseudo-classes are keywords added to selectors that specify a special state of the selected elements.
// Examples include :hover (when the user hovers over an element), :focus (when an element is focused), and :nth-child() (to select elements based on their position).
// Pseudo-elements allow you to style specific parts of an element.
// Examples include ::before (to insert content before an element's content) and ::after (to insert content after an element's content).

// 5. How do you center a div using CSS?
// There are several ways to center a div using CSS, depending on whether you want to center it horizontally, vertically, or both.
// Horizontally center a block element:
// Using margin auto:
// .centered-div {
//   width: 200px; /* Set a width */
//   margin: 0 auto; /* Auto left and right margins */
// }
// Vertically and horizontally center using Flexbox:
// .parent {
//   display: flex;
//   justify-content: center; /* Horizontal centering */
//   align-items: center; /* Vertical centering */
//   height: 100vh; /* Full viewport height */
// }
// .centered-div {
//   width: 200px;
// }

// 6. What are the different CSS position values (static, relative, absolute, fixed, sticky)?
// static: Default positioning; elements are positioned according to the normal document flow.
// relative: Positioned relative to its normal position; can be moved using top, right, bottom, left properties.
// absolute: Positioned relative to the nearest positioned ancestor (not static); removed from the normal document flow.
// fixed: Positioned relative to the viewport; remains in the same position even when the page is scrolled.
// sticky: Toggles between relative and fixed positioning based on the scroll position; behaves like relative until a certain scroll threshold is met, then behaves like fixed.

// 7. What is the difference between em, rem, %, px, vw & vh units?
// em: Relative to the font-size of the parent element. If the parent has a font-size of 16px, 1em equals 16px.
// rem: Relative to the font-size of the root element (usually <html>). If the root has a font-size of 16px, 1rem equals 16px.
// %: Relative to the parent element's size. For width and height, it's based on the parent's dimensions; for font-size, it's based on the parent's font-size.
// px: Absolute unit representing pixels on the screen. 1px is one dot on the screen.
// vw: Relative to 1% of the viewport's width. 100vw equals the full width of the viewport.
// vh: Relative to 1% of the viewport's height. 100vh equals the full height of the viewport.

// 8. What is the difference between visibility: hidden, display: none & opacity: 0?
// visibility: hidden hides the element but it still takes up space in the layout.
// display: none removes the element from the document flow entirely; it does not take up any space.
// opacity: 0 makes the element fully transparent, but it still takes up space and can be interacted with (e.g., clicked).

// 9. What is the z-index in CSS & how does stacking context work?
// z-index is a CSS property that controls the vertical stacking order of elements that overlap. Elements with a higher z-index value are displayed in front of those with a lower value.
// Stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user facing the screen.
// A new stacking context is formed by certain properties, such as position values (relative, absolute, fixed) combined with a z-index value other than auto,
// opacity less than 1, transform properties, and others. Elements within a stacking context are stacked according to their z-index values,
// but stacking contexts themselves are stacked according to their position in the DOM and their parent's stacking context.

// 10. What are inline, block & inline-block elements?
// Inline elements do not start on a new line and only take up as much width as necessary. Examples include <span>, <a>, and <strong>.
// Block elements start on a new line and take up the full width available. Examples include <div>, <p>, and <h1>.
// Inline-block elements are similar to inline elements, but they can have width and height set. They do not start on a new line.
// Examples include <img> and <button>.

// 11. What are media queries & how do you use them?
// Media queries are a CSS technique used to apply styles based on the characteristics of the device or viewport, such as its width, height, resolution, or orientation.
// They are commonly used for responsive web design to ensure that a website looks good on different screen sizes and devices.
// Syntax example:
// @media (max-width: 600px) {
//   body {
//     background-color: lightblue;
//   }
// }
// This example changes the background color of the body to light blue when the viewport width is 600px or less.

// 12. What is Flexbox & how do you use it?
// Flexbox (Flexible Box Layout) is a CSS layout module designed to provide a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.
// To use Flexbox, you set the display property of a container to flex or inline-flex. This makes all its direct children flex items.
// Example:
// .container {
//   display: flex; /* or inline-flex */
//   flex-direction: row; /* row (default), column, row-reverse, column-reverse */
//   justify-content: center; /* Align items horizontally */
//   align-items: center; /* Align items vertically */
// }
// Flexbox provides various properties to control the layout, such as flex-grow, flex-shrink, flex-basis, order, and align-self for individual flex items.

// 13. What are the main properties used in Flexbox (justify-content, align-items, flex-wrap, etc.)?
// justify-content: Aligns flex items along the main axis (horizontal by default). Values include flex-start, flex-end, center, space-between, space-around, and space-evenly.
// align-items: Aligns flex items along the cross axis (vertical by default). Values include stretch (default), flex-start, flex-end, center, and baseline.
// flex-wrap: Controls whether flex items wrap onto multiple lines. Values include nowrap (default), wrap, and wrap-reverse.

// 14. What is the difference between min-width, max-width & width?
// width sets the exact width of an element.
// min-width sets the minimum width an element can be, preventing it from becoming smaller than the specified value.
// max-width sets the maximum width an element can be, preventing it from becoming larger than the specified value.

// 15. What are the differences between relative, absolute & fixed positioning?
// relative: The element is positioned relative to its normal position. You can use top, right, bottom, and left properties to move it from that position.
// absolute: The element is positioned relative to its nearest positioned ancestor (not static). It is removed from the normal document flow.
// fixed: The element is positioned relative to the viewport and remains in the same position even when the page is scrolled. It is also removed from the normal document flow.

// 16. How do you create responsive layout using CSS?
// Responsive layouts can be created using a combination of flexible grid systems, media queries, and relative units (like %, em, rem, vw, vh).
// Use media queries to apply different styles based on the viewport size.
// Utilize Flexbox or CSS Grid for flexible and adaptive layouts.

// 17. What is CSS Grid & how does it differ from Flexbox?
// CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns.
// It provides more control over both dimensions (rows and columns) compared to Flexbox, which is primarily a one-dimensional layout system (either row or column).
// CSS Grid is ideal for larger scale layouts, while Flexbox is better suited for smaller components and one-dimensional layouts.

// 18. How do you use grid-template-columns, grid-auto-rows & gap in CSS Grid?
// grid-template-columns defines the number and size of columns in a grid container.
// Example: grid-template-columns: 100px 200px auto; creates three columns with specified widths.
// grid-auto-rows defines the size of rows that are created automatically.
// Example: grid-auto-rows: 150px; sets the height of automatically created rows to 150px.
// gap (or grid-gap) defines the space between rows and columns in the grid.
// Example: gap: 10px 20px; sets a 10px gap between rows and a 20px gap between columns.

// 19. What is the difference between auto-fill & auto-fit in CSS Grid?
// auto-fill and auto-fit are both used with the repeat() function in CSS Grid to create responsive grid layouts.
// auto-fill fills the row with as many columns as possible, even if they are empty. It creates empty tracks if there is extra space.
// auto-fit behaves similarly but collapses any empty tracks, allowing the existing columns to stretch and fill the available space.
// In summary, auto-fill keeps empty columns, while auto-fit removes them and allows the remaining columns to expand.

// 20. How do you use :nth-child() & :nth-of-type() selectors?
// :nth-child() selects elements based on their position among all siblings, regardless of type.
// Example: li:nth-child(2) selects the second <li> element among its siblings.
// :nth-of-type() selects elements based on their position among siblings of the same type.
// Example: p:nth-of-type(2) selects the second <p> element among its sibling <p> elements.

// 21. What is the difference between hover, active, focus & visited pseudo-classes?
// hover: Applied when the user hovers over an element with a pointing device (e.g., mouse).
// active: Applied when an element is being activated (e.g., clicked).
// focus: Applied when an element receives focus, either through keyboard navigation or mouse click.
// visited: Applied to links that the user has already visited.

// 22. What are vendor prefixes in CSS?
// Vendor prefixes are special prefixes added to CSS properties to ensure compatibility with specific browsers that may not yet support the standard version of the property.
// Common vendor prefixes include:
// -webkit- for Chrome, Safari, and newer versions of Opera
// -moz- for Firefox
// -ms- for Internet Explorer and Edge
// -o- for older versions of Opera
// Example: -webkit-transition, -moz-transition, transition

// 23. What is the difference between inherit, initial & unset in CSS?
// inherit: The property value is inherited from the parent element.
// initial: The property is set to its default value as defined by the CSS specification.
// unset: The property is reset to either inherit or initial, depending on whether it is naturally inheritable or not.

// 24. What is CSS variable (custom property) & how do you use it?
// CSS variables, also known as custom properties, allow you to store values that can be reused throughout your CSS.
// They are defined using the -- prefix and accessed using the var() function.
// Example of defining a CSS variable:
// :root {
//   --main-color: #3498db;
//   --padding: 10px;
// }
// Example of using a CSS variable:
// .button {
//   background-color: var(--main-color);
//   padding: var(--padding);
// }

// 25. How does cascading & inheritance work in CSS?
// Cascading refers to the process by which the browser determines which CSS rules apply to an element when multiple rules could apply.
// The order of precedence is determined by specificity, importance (e.g., !important), and source order (later rules override earlier ones).
// Inheritance is the mechanism by which certain CSS properties are passed down from parent elements to their children.
// Not all properties are inheritable; for example, text-related properties like color and font-family are inheritable, while box model properties like margin and padding are not.

// 26. What is the :has() selector in CSS & where can it be used?
// The :has() selector is a relational pseudo-class in CSS that allows you to select an element based on its descendants or children.
// It is often referred to as a "parent selector" because it enables styling of a parent element if it contains certain child elements.
// Example usage:
// div:has(> img) {
//   border: 2px solid blue; /* Styles divs that have an immediate child img */
// }
// Note: As of now, browser support for :has() is limited, so it should be used with caution in production environments.

// 27. How does the clamp() function help in responsive design?
// The clamp() function in CSS allows you to set a value that adjusts responsively between a defined minimum, preferred, and maximum value.
// It is particularly useful for font sizes, widths, and other properties that need to adapt to different screen sizes.
// Syntax: clamp(minimum, preferred, maximum)
// Example:
// font-size: clamp(1rem, 2.5vw, 3rem);
// In this example, the font size will be at least 1rem, will scale with the viewport width (2.5% of viewport width), but will not exceed 3rem.
// This helps create fluid and responsive designs without the need for multiple media queries.

// 28. How do you implement dark mode using only CSS?
// Dark mode can be implemented using CSS by utilizing the prefers-color-scheme media query.
// This media query detects if the user has set their system to dark mode and allows you to apply specific styles accordingly.
// Example:
// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: #121212;
//     color: #ffffff;
//   }
//   a {
//     color: #bb86fc;
//   }
// }
// You can also provide a toggle switch on your website that adds a class (e.g., .dark-mode) to the body element,
// allowing users to switch between light and dark themes manually.

// 29. How do container queries work & how are they different from media queries?
// Container queries allow you to apply styles to an element based on the size of its container rather than the viewport size.
// This enables more modular and component-based design, as components can adapt their styles based on the space they occupy.
// Example:
// .card {
//   container-type: inline-size; /* Enable container queries */
// }
// @container (min-width: 300px) {
//   .card {
//     grid-template-columns: repeat(2, 1fr); /* Change layout based on container width */
//   }
// }
// The key difference between container queries and media queries is that media queries respond to the viewport size,
// while container queries respond to the size of the element's parent container.

// 30. What are logical properties (margin-inline, padding-block, etc.) & why are they useful?
// Logical properties in CSS allow you to define layout and spacing in a way that is independent of the writing mode (e.g., left-to-right, right-to-left, top-to-bottom).
// They adapt to the text direction and writing mode of the document, making it easier to create layouts that work across different languages and cultures.
// Examples include:
// margin-inline-start, margin-inline-end: Sets the margin on the start and end sides of an element based on the writing direction.
// padding-block-start, padding-block-end: Sets the padding on the start and end sides of an element in the block direction (top and bottom).
// These properties are useful for creating more flexible and internationalized designs without needing to write separate styles for different writing modes.

// 31. How do you create animations using @keyframes in CSS?
// Animations in CSS can be created using the @keyframes rule, which defines the stages of the animation.
// You then apply the animation to an element using the animation property.
// Example:
// @keyframes slideIn {
//   from {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
// opacity: 1;
//   }
// }
// .animated-element {
//   animation: slideIn 1s ease-in-out forwards; /* Apply the animation */
// }
// In this example, the slideIn animation moves the element from off-screen to its original position while fading it in over 1 second.

// 32. What is contain: layout & how does CSS containment improve performance?
// The contain: layout property in CSS is part of the CSS Containment Module, which allows developers to specify that an element and its contents are independent of the rest of the document.
// By using contain: layout, you inform the browser that the layout of the contained element does not affect the layout of its ancestors or siblings.
// This can improve performance by reducing the amount of work the browser needs to do during rendering and layout calculations,
// especially in complex documents with many elements.
// Example:
// .container {
//   contain: layout; /* Isolate layout calculations */
// }
// Other containment values include contain: size, contain: style, and contain: paint, each providing different levels of isolation and performance benefits.

// 33. How do you debug CSS layout issues in the browser?
// To debug CSS layout issues in the browser, you can use the built-in developer tools available in most modern browsers (e.g., Chrome DevTools, Firefox Developer Tools).
// Steps to debug CSS layout issues:
// Inspect the element: Right-click on the element and select "Inspect" to open the developer tools and view the HTML and CSS.
// Check computed styles: Use the "Computed" tab to see the final styles applied to the element, including inherited styles.
// Modify styles live: You can edit CSS properties directly in the developer tools to see how changes affect the layout in real-time.
// Use the box model visualization: Most developer tools provide a box model diagram that shows the element's content, padding, border, and margin.
// Check for layout issues: Look for common issues such as overflow, incorrect positioning, or unexpected margins/padding.
// Use layout debugging tools: Some browsers offer specific tools for visualizing Flexbox and Grid layouts, making it easier to identify alignment and spacing issues.
// Test responsiveness: Use the responsive design mode to see how the layout behaves on different screen sizes and devices.

// 34. What is the difference between object-fit & background-size?
// object-fit controls how an image or video should be resized to fit its container.
// background-size controls how a background image should be sized within its container.
// Example:
// img {
//   object-fit: cover; /* Cover the container */
// }
// .container {
//   background-image: url('image.jpg');
//   background-size: contain; /* Fit the entire image */
// }
// In summary, object-fit is used for replaced elements like <img> and <video>, while background-size is used for CSS background images.

// 35. How do you make website mobile-friendly using only CSS?
// To make a website mobile-friendly using only CSS, you can follow these best practices:
// Use responsive design techniques: Utilize relative units (%, em, rem, vw, vh) instead of fixed units (px) for widths, heights, and font sizes.
// Implement media queries: Use media queries to apply different styles based on the viewport size, ensuring the layout adapts to various screen sizes.
// Optimize touch targets: Ensure buttons and links are large enough to be easily tapped on mobile devices (at least 48x48 pixels).
// Use a flexible grid layout: Utilize Flexbox or CSS Grid to create layouts that can adapt to different screen sizes and orientations.
// Hide non-essential content: Use display: none or visibility: hidden to hide elements that are not necessary on smaller screens.
// Optimize images: Use CSS to serve appropriately sized images for different screen sizes using the srcset attribute or CSS background images.
// Ensure readability: Set appropriate line heights, font sizes, and contrast ratios to enhance readability on small screens.
// Test on real devices: Always test your design on actual mobile devices to ensure it looks and functions as intended.

// 36. What are the pros & cons of using a utility-first CSS framework like Tailwind CSS?
// Pros:
// Rapid development: Utility-first frameworks provide a wide range of pre-defined classes that allow for quick prototyping and development.
// Consistency: Using utility classes promotes a consistent design system across the application.
// Customizability: Tailwind CSS is highly customizable, allowing developers to configure the framework to fit their design needs.
// Small bundle size: With tools like PurgeCSS, unused styles can be removed, resulting in smaller CSS files.
// Cons:
// Learning curve: Developers need to learn the utility class names and how to effectively use them.
// Readability: HTML can become cluttered with numerous utility classes, making it harder to read and maintain.
// Overuse of classes: Excessive use of utility classes can lead to bloated HTML and make it difficult to manage styles.
// Limited semantic meaning: Utility classes may not convey the purpose of an element as clearly as semantic class names.

// 37. What are the common issues with using float in layout design?
// Common issues with using float in layout design include:
// Collapsing parent containers: When all child elements are floated, the parent container may collapse to zero height. This can be resolved using clearfix techniques.
// Unintended wrapping: Floated elements can cause subsequent content to wrap around them, leading to layout issues.
// Clearing floats: Developers often need to use clear: both; to prevent elements from wrapping around floated elements, which can complicate the layout.
// Responsiveness challenges: Floats can make it difficult to create responsive layouts, as they do not adapt well to different screen sizes.
// Complexity in alignment: Aligning elements vertically or horizontally can be more challenging with floats compared to modern layout techniques like Flexbox or Grid.
// Maintenance difficulties: Float-based layouts can become complex and hard to maintain as the design evolves.

// 38. What is stacking context in CSS & how is it created?
// Stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user facing the screen.
// It determines the order in which elements are rendered on the screen when they overlap.
// A new stacking context is created by certain properties, including:
// An element with a position value of relative, absolute, or fixed and a z-index value other than auto.
// An element with an opacity value less than 1.
// An element with a transform property (e.g., transform: translateX(0);).
// An element with a filter property (e.g., filter: blur(5px);).
// An element with a mix-blend-mode property.
// An element with isolation: isolate; property.
// Elements within a stacking context are stacked according to their z-index values,
// but stacking contexts themselves are stacked according to their position in the DOM and their parent's stacking context.

// 39. How do transition & animation differ in CSS?
// Transitions and animations are both used to create visual effects in CSS, but they differ in their implementation and use cases.
// Transitions are used to create smooth changes between two states of an element when a property changes (e.g., on hover).
// They require a trigger (like :hover) to start the transition.
// Example of a transition:
// .button {
//   transition: background-color 0.3s ease;
// }
// .button:hover {
//   background-color: blue;
// }
// Animations, on the other hand, allow for more complex sequences of changes over time and can run automatically without user interaction.
// They are defined using @keyframes and can have multiple stages.
// Example of an animation:
// @keyframes slideIn {
//   from {
//     transform: translateX(-100%);
//   }
//   to {
//     transform: translateX(0);
// }
// .animated-element {
//   animation: slideIn 1s ease-in-out forwards;
// }
// In summary, transitions are simpler and used for state changes, while animations provide more control and complexity for continuous effects.

// 40. What strategies do you use to manage large CSS codebases (e.g.,BEM, SMACSS, OOCSS)?
// Strategies to manage large CSS codebases include:
// BEM (Block Element Modifier): A naming convention that helps create reusable components and code sharing in front-end development.
// SMACSS (Scalable and Modular Architecture for CSS): A style guide that categorizes CSS rules into base, layout, module, state, and theme to improve organization.
// OOCSS (Object-Oriented CSS): A methodology that encourages the separation of structure and skin, promoting reusable and maintainable code.
// Use of CSS preprocessors: Tools like SASS or LESS can help organize and modularize CSS code with features like variables, mixins, and nesting.
// Component-based architecture: Using frameworks like React, Vue, or Angular to encapsulate styles within components, reducing global CSS scope.
// Documentation: Maintaining clear documentation of CSS conventions, guidelines, and component usage to ensure consistency across the team.
// Regular refactoring: Periodically reviewing and cleaning up the CSS codebase to remove unused styles and improve maintainability.
// Utilizing CSS-in-JS: Leveraging libraries like styled-components or Emotion to co-locate styles with components, enhancing modularity and scope management.

// 41. What is subgrid in CSS & how does it work?
// Subgrid is a feature of CSS Grid Layout that allows a grid item to inherit the grid structure of its parent grid container.
// This means that the child grid can align its rows and columns with those of the parent grid, creating a more cohesive layout.
// To use subgrid, you set the display property of a grid item to subgrid.
// Example:
// .parent-grid {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: auto auto;
// }
// .child-grid {
//   display: subgrid; /* Inherit grid structure from parent */
//   grid-column: 1 / -1; /* Span across all columns of the parent grid */
// }
// In this example, the .child-grid will align its rows and columns with those defined in the .parent-grid,
// allowing for consistent alignment and spacing across nested grid structures.
// Note: As of now, browser support for subgrid is limited, so it should be used with caution in production environments.

// 42. What is aspect-ratio & how is it used in responsive design?
// The aspect-ratio property in CSS allows you to define a fixed ratio between the width and height of an element.
// This is particularly useful in responsive design to maintain the proportions of elements (like images, videos, or containers) as their size changes.
// Syntax: aspect-ratio: width / height;
// Example:
// .responsive-box {
//   width: 100%;
// aspect-ratio: 16 / 9; /* Maintain a 16:9 aspect ratio */
//   background-color: lightgray;
// }
// In this example, the .responsive-box will always maintain a 16:9 aspect ratio regardless of its width.
// This helps ensure that the element scales proportionally on different screen sizes, preventing distortion.
// The aspect-ratio property can be particularly useful for media elements, ensuring they display correctly across various devices and layouts.

// 43. How do you use backdrop-filter & what are its limitations?
// The backdrop-filter property in CSS applies graphical effects (like blurring or color shifting) to the area behind an element.
// It is commonly used to create frosted glass effects or to enhance the visual appeal of overlays.
// Syntax: backdrop-filter: effect(value);
// Example:
// .frosted-glass {
//   backdrop-filter: blur(10px); /* Apply a blur effect to the background */
//   background-color: rgba(255, 255, 255, 0.3); /* Semi-transparent background */
//   border-radius: 10px;
//   padding: 20px;
// }

// Limitations of backdrop-filter:
// Browser support: Not all browsers fully support backdrop-filter, so it may not work consistently across all platforms.
// Performance: Applying backdrop-filter can be performance-intensive, especially on large areas or complex effects, potentially leading to laggy user experiences.
// Stacking context: Elements with backdrop-filter create a new stacking context, which can affect the layering of elements and may require additional z-index management.
// Limited effects: The range of effects available with backdrop-filter is currently limited compared to other graphical manipulation techniques.
// Accessibility: Overuse of backdrop-filter effects can reduce readability and accessibility, especially for users with visual impairments.


// 44. How do you style SVG elements using CSS?
// SVG elements can be styled using CSS in a similar way to HTML elements. You can target SVG elements directly using their tags, classes, or IDs.
// Example:
// <svg width="100" height="100" class="my-svg">
//   <circle cx="50" cy="50" r="40" class="my-circle" />
// </svg>
// CSS:
// .my-svg {
//   border: 2px solid black; /* Style the SVG container */
// .my-circle {
//   fill: blue; /* Fill color of the circle */
//   stroke: red; /* Stroke color of the circle */
//   stroke-width: 4; /* Stroke width of the circle */
// }
// You can also use CSS properties like fill, stroke, stroke-width, opacity, and transform to style SVG elements.
// Additionally, you can use CSS animations and transitions to animate SVG properties for dynamic effects.


// 45. What are the differences between inline styles, internal CSS & external stylesheets?
// Inline styles are applied directly to an HTML element using the style attribute. They have the highest specificity and override other styles.
// Example: <div style="color: red;">This text is red.</div>
// Internal CSS is defined within a <style> tag in the <head> section of an HTML document. It applies to the entire document but has lower specificity than inline styles.
// Example:
// <head>
//   <style>
//     p { color: blue; }
//   </style>
// </head>
// External stylesheets are separate CSS files linked to an HTML document using the <link> tag. They provide the lowest specificity compared to inline and internal styles.
// Example:
// <head>
//   <link rel="stylesheet" href="styles.css">
// </head>
// External stylesheets are preferred for larger projects as they promote separation of concerns, reusability, and easier maintenance.






// Explain the "font-variant" property.
// The font-variant CSS property controls the use of alternate glyphs in a font. It can be used to specify whether to use small caps, old-style numerals, or other variant forms of characters.

// Use of :not selector?
// The :not() CSS pseudo-class represents elements that do not match a list of selectors. It is used to apply styles to elements that do not meet certain criteria.

// What are CSS combinators?
// Explain the "object-fit" & "object-position" CSS properties.
// What is the calc() CSS function?
// What are CSS counters?CSS counters enable automatic counting in your styles.
// What is a CSS grid system?
// Write down a selector that will match any links ending in .zip, .ZIP, .Zip, etc.
// How to select every <a> element whose href attribute value begins with "https", .pdf & CSS?
// What is a CSS reset?
// What is BEM Method?
// Explain about General sibling selector & adjacent sibling selectors.
// What is opacity & why is it used?
// Difference between mobile-first & desktop-first.
// What are Data Attributes?
// Explain the concept of CSS Flexbox & its main advantages in web layout design.
// How do you vertically center an element within a flex container using Flexbox? Provide the necessary CSS properties and values.
// Describe the purpose of the flex-grow, flex-shrink, and flex-basis properties in the flex shorthand property. Provide an example.
// In what situations would you use the align-items and align-content properties in a flex container? Provide examples.
// What is z-index?
// Difference between display:none and visibility:hidden?
