Here is a **complete HTML Interview Question & Answer set (Fresher → 3 Years Experience)**, starting basic and moving to advanced topics that are commonly asked in real interviews.

---

# 🟢 HTML Interview Questions & Answers (Fresher to 3 Years Experience)

---

# 🔰 Level 1: Fresher (Basic HTML)

## 1. What is HTML?

**Answer:**
HTML (HyperText Markup Language) is used to structure web pages using elements like headings, paragraphs, images, links, etc.

---

## 2. What is a tag in HTML?

**Answer:**
Tags are used to define HTML elements.
Example:

```html
<p>Hello</p>
```

---

## 3. What is the difference between HTML and HTML5?

**Answer:**

* HTML → Older version
* HTML5 → Supports multimedia, semantic tags, APIs (canvas, audio, video)

---

## 4. What is DOCTYPE?

**Answer:**
It tells the browser about the HTML version.

```html
<!DOCTYPE html>
```

---

## 5. What are attributes?

**Answer:**
Attributes provide extra information about elements.

```html
<a href="https://google.com">Google</a>
```

---

## 6. What is the difference between block and inline elements?

**Answer:**

* Block → takes full width (`div`, `p`)
* Inline → takes only required space (`span`, `a`)

---

## 7. What is a void element?

**Answer:**
Tags without closing tag.

Examples:

```html
<img />, <br />, <hr />
```

---

# 🟡 Level 2: 1–2 Years Experience (Intermediate)

## 8. What are semantic elements?

**Answer:**
Elements that clearly describe meaning.

Examples:

```html
<header>, <footer>, <section>, <article>
```

---

## 9. Why are semantic tags important?

**Answer:**

* Improve SEO
* Improve readability
* Better accessibility

---

## 10. Difference between id and class?

**Answer:**

* `id` → unique
* `class` → reusable

---

## 11. Difference between <div> and <span>?

**Answer:**

* `div` → block container
* `span` → inline container

---

## 12. What is a form in HTML?

**Answer:**
Used to collect user input.

```html
<form>
  <input type="text" />
</form>
```

---

## 13. Difference between GET and POST?

**Answer:**

* GET → Data visible in URL
* POST → Data sent in request body

---

## 14. What is iframe?

**Answer:**
Used to embed another webpage.

```html
<iframe src="https://example.com"></iframe>
```

---

## 15. What is meta tag?

**Answer:**
Provides metadata (SEO, charset, viewport).

---

# 🔵 Level 3: 2–3 Years Experience (Advanced HTML)

## 16. What is HTML5?

**Answer:**
Latest version of HTML with new features like:

* Semantic tags
* Canvas
* Audio/Video
* Local storage

---

## 17. What is localStorage vs sessionStorage?

**Answer:**

* localStorage → data persists forever
* sessionStorage → data cleared after tab closes

---

## 18. What is accessibility in HTML?

**Answer:**
Making websites usable for all users (including disabled users).

Techniques:

* alt attributes
* semantic tags
* ARIA roles

---

## 19. What are data attributes?

**Answer:**
Used to store custom data.

```html
<div data-user-id="101"></div>
```

---

## 20. What is the purpose of canvas in HTML5?

**Answer:**
Used for drawing graphics via JavaScript.

---

## 21. Difference between HTML and XHTML?

**Answer:**

* HTML → flexible syntax
* XHTML → strict syntax, all tags must close

---

## 22. What is responsive web design in HTML context?

**Answer:**
Making web pages adapt to different screen sizes using:

* viewport meta tag
* flexible layouts
* media queries (CSS)

---

## 23. What is the viewport meta tag?

**Answer:**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Used for responsive design.

---

## 24. What are ARIA attributes?

**Answer:**
Used for accessibility (screen readers).

Example:

```html
<button aria-label="close"></button>
```

---

## 25. What are deprecated tags in HTML?

**Answer:**
Old tags not recommended in HTML5 like:

* `<font>`
* `<center>`

---

## 26. What is SEO in HTML?

**Answer:**
Using proper tags (title, meta, headings) to improve search ranking.

---

## 27. What is lazy loading in HTML?

**Answer:**
Delays loading images until needed.

```html
<img src="image.jpg" loading="lazy">
```

---

## 28. What is microdata in HTML?

**Answer:**
Used for structured data to improve SEO.

---

## 29. How does browser render HTML?

**Answer:**

1. Parse HTML
2. Build DOM tree
3. Apply CSS
4. Render page

---

## 30. Difference between HTML parsing and rendering?

**Answer:**

* Parsing → converting HTML into DOM
* Rendering → displaying UI on screen

---

# 🚀 Bonus Interview Questions (Frequently Asked)

* What is DOM?
* What is BOM?
* What is difference between HTML, CSS, JS?
* What is difference between cookie and localStorage?
* What is progressive enhancement?

---




Here is a **CSS Interview Question & Answer set (Fresher → 3 Years Experience)** for your preparation.

---

# 🟢 CSS Interview Questions & Answers (Fresher to 3 Years Experience)

---

# 🔰 Level 1: Fresher (Basic CSS)

## 1. What is CSS?

**Answer:**
CSS (Cascading Style Sheets) is used to style HTML elements like color, layout, fonts, spacing, etc.

---

## 2. What are the types of CSS?

**Answer:**

1. Inline CSS
2. Internal CSS
3. External CSS

Example:

```html
<p style="color:red;">Hello</p>
```

---

## 3. What is the difference between class and id in CSS?

**Answer:**

* `id` → unique (#id)
* `class` → reusable (.class)

---

## 4. What is the CSS box model?

**Answer:**
Every element is a box with:

* Content
* Padding
* Border
* Margin

---

## 5. Difference between padding and margin?

**Answer:**

* Padding → space inside element
* Margin → space outside element

---

## 6. What are selectors in CSS?

**Answer:**
Selectors are used to target HTML elements.

Examples:

```css
p { }
#id { }
.class { }
```

---

## 7. What is the difference between inline and block elements in CSS?

**Answer:**

* Inline → does not take full width
* Block → takes full width

---

# 🟡 Level 2: 1–2 Years Experience (Intermediate CSS)

## 8. What is specificity in CSS?

**Answer:**
Specificity decides which CSS rule is applied.

Order:
Inline > ID > Class > Element

---

## 9. What is position in CSS?

**Answer:**
Used to control element placement.

Types:

* static
* relative
* absolute
* fixed
* sticky

---

## 10. Difference between relative and absolute positioning?

**Answer:**

* relative → moves from original position
* absolute → moves relative to nearest parent

---

## 11. What is Flexbox?

**Answer:**
Flexbox is used for layout alignment.

```css
display: flex;
```

---

## 12. What is Grid in CSS?

**Answer:**
CSS Grid is used for 2D layouts (rows + columns).

---

## 13. Difference between Flexbox and Grid?

**Answer:**

* Flexbox → 1D layout
* Grid → 2D layout

---

## 14. What is z-index?

**Answer:**
Controls stacking order of elements.

---

## 15. What is overflow in CSS?

**Answer:**
Controls content overflow behavior.

Values:

* hidden
* scroll
* auto

---

## 16. What are pseudo-classes?

**Answer:**
Defines element state.

Examples:

```css
:hover
:focus
:nth-child()
```

---

## 17. What are pseudo-elements?

**Answer:**
Used to style specific parts.

Examples:

```css
::before
::after
```

---

# 🔵 Level 3: 2–3 Years Experience (Advanced CSS)

## 18. What is CSS specificity hierarchy?

**Answer:**

1. Inline CSS
2. ID selector
3. Class selector
4. Element selector

---

## 19. What is CSS Box Sizing?

**Answer:**
Defines how width and height are calculated.

```css
box-sizing: border-box;
```

---

## 20. What is responsive design?

**Answer:**
Design that adapts to all screen sizes.

---

## 21. What are media queries?

**Answer:**
Used for responsive design.

```css
@media (max-width: 768px) {
  body { background: red; }
}
```

---

## 22. What is CSS transition?

**Answer:**
Used for smooth animation effects.

```css
transition: all 0.3s ease;
```

---

## 23. What is CSS animation?

**Answer:**
Used for keyframe-based animations.

```css
@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}
```

---

## 24. Difference between transition and animation?

**Answer:**

* Transition → simple effect on state change
* Animation → complex multi-step effects

---

## 25. What is SCSS/SASS?

**Answer:**
Preprocessor that extends CSS with variables, nesting, functions.

---

## 26. What are CSS variables?

**Answer:**

```css
:root {
  --main-color: blue;
}
```

---

## 27. What is BEM methodology?

**Answer:**
CSS naming convention:

* Block
* Element
* Modifier

Example:

```css
button__text--active
```

---

## 28. What is important keyword in CSS?

**Answer:**
Overrides all other styles.

```css
color: red !important;
```

---

## 29. What is difference between visibility hidden and display none?

**Answer:**

* visibility:hidden → space remains
* display:none → element removed

---

## 30. What is CSS preprocessors?

**Answer:**
Tools like SASS, LESS that extend CSS features.

---

# 🚀 Bonus Real Interview Questions

* How does browser render CSS?
* What is critical rendering path?
* What is reflow and repaint?
* How to optimize CSS performance?
* Difference between mobile-first and desktop-first design?

---




