Here are clear interview-ready answers:

---

### 1. What is React Native?

React Native is an open-source framework developed by Meta (Facebook) used to build **mobile applications for Android and iOS** using **JavaScript and React**.

Instead of rendering in the browser like React, React Native renders **native mobile UI components**.

Examples: Instagram, Facebook, Skype (partially used React Native).

---

### 2. Difference between React and React Native?

| Feature      | React JS         | React Native                         |
| ------------ | ---------------- | ------------------------------------ |
| Platform     | Web applications | Mobile applications (iOS & Android)  |
| UI Rendering | HTML + DOM       | Native components (View, Text, etc.) |
| Styling      | CSS              | JavaScript styles (StyleSheet)       |
| Navigation   | React Router     | React Navigation                     |
| Output       | Web page         | Mobile app (APK / IPA)               |

👉 In short:
React = Web UI library
React Native = Mobile app framework

---

### 3. How React Native works internally?

React Native uses a **Bridge architecture**:

1. You write code in **JavaScript (React syntax)**.
2. JavaScript runs in a separate thread (JS engine like Hermes or JSC).
3. Communication happens through a **Bridge**.
4. Bridge converts JS instructions into **native components** (Java for Android, Swift/Obj-C for iOS).
5. Native modules render UI using real native widgets.

👉 Newer versions use **Fabric + TurboModules** to improve performance by reducing bridge overhead.

---

### 4. What are the advantages of React Native?

* Cross-platform (one codebase for Android & iOS)
* Faster development time
* Hot Reloading (see changes instantly)
* Large community support
* Reusable components
* Near-native performance
* Cost-effective for startups and MVPs
* Easy integration with native modules (Java/Swift if needed)

---

### 5. What are the limitations of React Native?

* Performance not equal to fully native apps for heavy apps (gaming, AR/VR)
* Depends on third-party libraries (some may be outdated)
* Debugging native modules can be complex
* Large app size compared to native apps
* Bridge overhead (in older architecture)
* Platform-specific code sometimes required
* UI consistency issues across devices

---





Here are clear, interview-focused answers:

---

### 6. What is the Bridge in React Native?

The **Bridge** is a communication layer between **JavaScript code** and **Native code (Android/iOS)**.

How it works:

* You write logic in JavaScript.
* Native modules handle platform-specific operations.
* The Bridge transfers data asynchronously between them in JSON format.

👉 Example:
When you click a button in React Native:
JS sends event → Bridge → Native module executes action → UI updates

📌 Key points:

* It enables communication between JS thread and native threads
* Works asynchronously (not real-time sync)
* Can become a performance bottleneck in older architecture

👉 Modern React Native reduces bridge usage using **Fabric + TurboModules**

---

### 7. What is Metro Bundler?

**Metro Bundler** is the JavaScript bundler for React Native.

It:

* Bundles all JavaScript files into a single file
* Transforms modern JS (ES6+) into compatible code
* Supports fast refresh / hot reloading
* Watches file changes during development

👉 In simple terms:
Metro = Build tool that prepares React Native JavaScript code to run on devices

📌 Example:
When you run:

```bash
npx react-native start
```

Metro starts bundling your app.

---

### 8. What are core components in React Native?

Core components are **pre-built UI building blocks** provided by React Native.

Common ones:

* `View` → container (like div)
* `Text` → display text
* `Image` → show images
* `ScrollView` → scrollable container
* `TextInput` → input field
* `FlatList` → optimized list rendering
* `SectionList` → grouped lists
* `TouchableOpacity` / `Pressable` → buttons/touch handling

👉 Example:

```jsx
<View>
  <Text>Hello World</Text>
</View>
```

---

### 9. Difference between View and ScrollView?

| Feature     | View                | ScrollView               |
| ----------- | ------------------- | ------------------------ |
| Purpose     | Layout container    | Scrollable container     |
| Scrolling   | Not supported       | Supports scrolling       |
| Performance | Lightweight         | Slower for large content |
| Use case    | UI layout structure | Small scrollable content |

👉 Key point:

* Use `View` for static layout
* Use `ScrollView` when content overflows screen

---

### 10. Difference between FlatList and ScrollView?

| Feature      | FlatList                      | ScrollView                    |
| ------------ | ----------------------------- | ----------------------------- |
| Performance  | High (virtualized rendering)  | Low for large lists           |
| Rendering    | Renders only visible items    | Renders all items at once     |
| Memory usage | Optimized                     | High memory usage             |
| Use case     | Large lists (10, 1000+ items) | Small lists or static content |

👉 Key point:

* `FlatList` = best for performance (recommended for lists)
* `ScrollView` = simple but not scalable

📌 Example:
Use FlatList:

```jsx
<FlatList
  data={users}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

---





Here are clear, interview-ready answers:

---

### 11. What is SectionList?

`SectionList` is a React Native component used to render **grouped or categorized lists**.

Each section has:

* A **header**
* A list of items under that header

👉 Example use cases:

* Contacts app (A, B, C sections)
* Settings screen grouped categories
* Product categories

📌 Example:

```jsx id="s1"
<SectionList
  sections={[
    { title: 'Fruits', data: ['Apple', 'Banana'] },
    { title: 'Vegetables', data: ['Carrot', 'Potato'] }
  ]}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => (
    <Text>{section.title}</Text>
  )}
/>
```

👉 Key point:
SectionList = optimized list with grouped sections

---

### 12. What are props in React Native?

**Props (Properties)** are used to pass **data from parent component to child component**.

👉 Key characteristics:

* Read-only (cannot be modified by child)
* Used for communication between components
* Helps make components reusable

📌 Example:

```jsx id="p1"
const Greeting = (props) => {
  return <Text>Hello {props.name}</Text>;
};

// Usage
<Greeting name="Saikrishna" />
```

---

### 13. What is state in React Native?

**State** is a built-in object used to store **dynamic data inside a component**.

👉 Key characteristics:

* Can change over time
* Triggers re-render when updated
* Managed using `useState` (functional components)

📌 Example:

```jsx id="st1"
const [count, setCount] = useState(0);

<Text>{count}</Text>
<Button title="Increase" onPress={() => setCount(count + 1)} />
```

👉 Key point:
State = component’s internal memory

---

### 14. Difference between state and props?

| Feature    | Props                 | State                  |
| ---------- | --------------------- | ---------------------- |
| Data flow  | Parent → Child        | Inside component       |
| Mutability | Immutable (read-only) | Mutable                |
| Managed by | Parent component      | Component itself       |
| Purpose    | Pass data             | Manage dynamic data    |
| Re-render  | Yes (if props change) | Yes (if state changes) |

👉 Simple way to remember:

* Props = external data
* State = internal data

---

### 15. What is JSX?

JSX (JavaScript XML) is a syntax extension used in React Native that allows writing **UI structure using HTML-like syntax inside JavaScript**.

👉 JSX is NOT HTML — it gets converted into JavaScript.

📌 Example:

```jsx id="jx1"
const App = () => {
  return (
    <View>
      <Text>Hello React Native</Text>
    </View>
  );
};
```

👉 Behind the scenes:
JSX → JavaScript → React Native Elements

📌 Key points:

* Makes UI code readable
* Allows embedding JS expressions using `{ }`
* Compiled by Babel

---





Here are clear, interview-focused answers:

---

### 16. What is Virtual DOM?

The **Virtual DOM (VDOM)** is a lightweight copy of the real DOM used in React (mainly React JS).

👉 How it works:

1. UI changes happen in Virtual DOM first
2. React compares old VDOM vs new VDOM (Diffing)
3. Only the changed parts are updated in real DOM (Reconciliation)

📌 Benefits:

* Faster updates
* Efficient rendering
* Reduces direct manipulation of real DOM

👉 In React Native:
There is no real DOM, but the concept is similar in how React manages UI updates efficiently.

---

### 17. How React Native renders UI?

React Native does NOT use HTML or DOM.

👉 Rendering flow:

1. You write UI using JSX (`View`, `Text`, etc.)
2. JSX is converted into JavaScript objects
3. React Native sends instructions to **Native Bridge**
4. Native components are rendered:

   * Android → Views (Java/Kotlin)
   * iOS → UIKit components (Swift/Obj-C)

📌 Modern architecture:

* Fabric Renderer improves rendering speed
* Reduces bridge dependency

👉 Simple summary:
JS code → Native bridge → Native UI components

---

### 18. Difference between Expo and React Native CLI

| Feature               | Expo                    | React Native CLI                      |
| --------------------- | ----------------------- | ------------------------------------- |
| Setup                 | Very easy (zero config) | Requires setup (Android Studio/Xcode) |
| Native code access    | Limited                 | Full access                           |
| Build process         | Managed by Expo         | Fully controlled by developer         |
| Performance           | Slightly limited        | Better performance                    |
| Custom native modules | Not easy                | Fully supported                       |
| Use case              | Beginners, quick apps   | Large-scale production apps           |

👉 Simple idea:

* Expo = ready-made toolkit
* CLI = full control over native development

---

### 19. When should you use Expo?

Use Expo when:

* You are a beginner in React Native
* You want to build apps quickly (MVPs)
* Your app does NOT need heavy native customization
* You want easy testing using Expo Go app
* You need faster development without native setup

📌 Best for:

* Startup prototypes
* Simple apps (to-do, calculator, basic e-commerce)

🚫 Not ideal for:

* Complex native modules (Bluetooth, AR, advanced camera features)

---

### 20. What are Native Modules?

Native modules are pieces of code written in **native languages (Java/Kotlin for Android, Swift/Obj-C for iOS)** that allow React Native to access device-specific features.

👉 Why needed?
React Native JS cannot directly access hardware features.

📌 Examples:

* Camera access
* GPS / Location
* Bluetooth
* Push notifications
* File system access

👉 Flow:
JS code → Bridge → Native Module → Device feature

📌 Example use case:
If you want to use a custom Bluetooth feature, you write a native module in Android/iOS and connect it to React Native.

---




Here are clear, interview-ready React Native answers:

---

### 21. What are functional components?

Functional components are **JavaScript functions** that return JSX (UI).

👉 They are the modern way of writing React Native components.

📌 Example:

```jsx id="fc1"
const Hello = () => {
  return <Text>Hello World</Text>;
};
```

✔ Simple
✔ Easy to read
✔ Support Hooks

---

### 22. What are class components?

Class components are ES6 classes that extend `React.Component` and use lifecycle methods.

📌 Example:

```jsx id="cc1"
class Hello extends React.Component {
  render() {
    return <Text>Hello World</Text>;
  }
}
```

✔ Uses `this.state` and `this.setState()`
✔ Uses lifecycle methods like `componentDidMount`

---

### 23. Difference between functional and class components?

| Feature     | Functional Components | Class Components  |
| ----------- | --------------------- | ----------------- |
| Syntax      | Functions             | ES6 Classes       |
| State       | useState Hook         | this.state        |
| Lifecycle   | useEffect Hook        | lifecycle methods |
| Code size   | Small & clean         | Larger            |
| Performance | Better optimized      | Slightly heavier  |
| Usage       | Recommended           | Older approach    |

👉 Today: Functional components are standard in React Native

---

### 24. What are React Hooks?

Hooks are **special functions** that allow functional components to use:

* state
* lifecycle features
* other React features

📌 Examples:

* useState
* useEffect
* useMemo
* useCallback

👉 Introduced in React 16.8

---

### 25. What is useState?

`useState` is a Hook used to **manage state in functional components**.

📌 Example:

```jsx id="us1"
const [count, setCount] = useState(0);
```

👉 Updates state and re-renders UI automatically.

✔ Used for dynamic data like counters, forms, toggles

---

### 26. What is useEffect?

`useEffect` is used to handle **side effects** in React Native.

👉 Side effects include:

* API calls
* subscriptions
* timers
* logging

📌 Example:

```jsx id="ue1"
useEffect(() => {
  console.log("Component mounted");

  return () => console.log("Cleanup");
}, []);
```

👉 Runs after render

---

### 27. What is useMemo?

`useMemo` is used to **memoize (cache) expensive calculations**.

👉 It improves performance by avoiding recalculation.

📌 Example:

```jsx id="um1"
const result = useMemo(() => {
  return heavyCalculation(a, b);
}, [a, b]);
```

✔ Only recalculates when dependencies change

---

### 28. What is useCallback?

`useCallback` is used to **memoize functions** so they are not recreated on every render.

📌 Example:

```jsx id="uc1"
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

✔ Prevents unnecessary re-renders in child components

---

### 29. What is useRef?

`useRef` is used to:

* access DOM/native elements
* store values that don’t trigger re-render

📌 Example:

```jsx id="ur1"
const inputRef = useRef(null);

<TextInput ref={inputRef} />
```

✔ Also used for storing previous values

---

### 30. What is useContext?

`useContext` is used to **share data globally** without prop drilling.

📌 Example:

```jsx id="ucx1"
const ThemeContext = React.createContext();

const theme = useContext(ThemeContext);
```

✔ Avoids passing props through multiple components

---

### 🔥 Quick Summary (Important for Interviews)

* `useState` → state management
* `useEffect` → side effects
* `useMemo` → optimize calculations
* `useCallback` → optimize functions
* `useRef` → reference + persistent values
* `useContext` → global state sharing

---






Here are clear, interview-ready React Native answers:

---

### 31. What is a custom hook?

A **custom hook** is a reusable JavaScript function in React Native that starts with `use` and can use built-in hooks like `useState`, `useEffect`, etc.

👉 It is used to **reuse logic across multiple components**.

📌 Example:

```jsx id="ch1"
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return { count, increment };
}
```

👉 Usage:

```jsx id="ch2"
const { count, increment } = useCounter();
```

✔ Improves code reusability
✔ Keeps components clean

---

### 32. What are controlled components?

Controlled components are form elements where **React state controls the input value**.

👉 React fully manages the input.

📌 Example:

```jsx id="cc2"
const [name, setName] = useState("");

<TextInput
  value={name}
  onChangeText={setName}
/>
```

✔ State = single source of truth
✔ Easy validation and control

---

### 33. What is component re-rendering?

Re-rendering means a React Native component **re-executes its function and updates the UI** when:

* state changes
* props change
* parent re-renders

📌 Example:
If `setCount()` is called → component re-renders → UI updates

✔ It is normal behavior in React
✔ But unnecessary re-renders can affect performance

---

### 34. How to prevent unnecessary re-renders?

You can optimize performance using:

✔ `React.memo()` → memoize components
✔ `useCallback()` → memoize functions
✔ `useMemo()` → memoize values
✔ Avoid inline functions in JSX
✔ Split large components into smaller ones
✔ Use FlatList instead of ScrollView for lists

📌 Example:

```jsx id="pr1"
const Child = React.memo(({ name }) => {
  return <Text>{name}</Text>;
});
```

---

### 35. What is React.memo?

`React.memo` is a Higher Order Component (HOC) that **prevents unnecessary re-rendering of a component** if props do not change.

📌 Example:

```jsx id="rm1"
const Child = React.memo(({ title }) => {
  console.log("Rendered");
  return <Text>{title}</Text>;
});
```

👉 Behavior:

* If props are same → component does NOT re-render
* If props change → component re-renders

✔ Improves performance
✔ Best for functional components

---

### 🔥 Quick Summary

* Custom Hook → reusable logic
* Controlled Component → React controls input
* Re-render → UI updates on state/props change
* Prevent re-render → memoization techniques
* React.memo → skips unnecessary renders

---






Here are clear, interview-ready React Native answers:

---

### 36. What is lazy loading?

Lazy loading is a technique where **components or resources are loaded only when needed**, instead of loading everything at once.

👉 In React Native, it helps reduce initial load time and improves performance.

📌 Example (React.lazy concept in React web, similar idea applies in RN with dynamic imports):

```jsx id="ll1"
const MyComponent = React.lazy(() => import('./MyComponent'));
```

👉 Usage:

* Load screens/components only when user navigates to them

✔ Improves app startup time
✔ Reduces memory usage

---

### 37. What is code splitting?

Code splitting means **breaking a large app bundle into smaller chunks** so only required code is loaded.

👉 Helps reduce initial bundle size.

📌 Example concept:

* Login screen bundle
* Home screen bundle
* Profile screen bundle

👉 In React Native:

* Achieved using dynamic imports
* Navigation-based lazy loading
* Metro bundler optimizations

✔ Faster app load
✔ Better performance

---

### 38. What is lifting state up?

Lifting state up means **moving shared state to a common parent component** so multiple child components can access it.

📌 Example:
Child A and Child B need same data → move state to Parent.

```jsx id="ls1"
const Parent = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <ChildA value={value} setValue={setValue} />
      <ChildB value={value} />
    </>
  );
};
```

✔ Ensures single source of truth
✔ Helps sync data between components

---

### 39. What is prop drilling?

Prop drilling happens when you pass data **through multiple intermediate components** just to reach a deeply nested child.

📌 Example:
Parent → A → B → C (only C needs data)

✔ Problem:

* Unnecessary passing of props
* Hard to maintain code

👉 Solution:

* Context API
* Redux / Zustand

---

### 40. How to optimize component performance?

You can optimize React Native performance using:

✔ `React.memo` → avoid unnecessary re-renders
✔ `useCallback` → memoize functions
✔ `useMemo` → memoize expensive calculations
✔ Use `FlatList` instead of `ScrollView` for large lists
✔ Avoid inline functions and objects in JSX
✔ Split components into smaller reusable parts
✔ Use lazy loading for screens
✔ Optimize images (resize, caching)
✔ Use proper key props in lists
✔ Avoid unnecessary state updates

📌 Example:

```jsx id="op1"
const MemoComponent = React.memo(({ title }) => {
  return <Text>{title}</Text>;
});
```

---

### 🔥 Quick Summary

* Lazy loading → load only when needed
* Code splitting → break app into chunks
* Lifting state up → share state via parent
* Prop drilling → passing props through many levels (problem)
* Optimization → memoization + proper rendering strategy

---





Here are clear, interview-ready React Native answers:

---

### 41. How styling works in React Native?

React Native uses **JavaScript-based styling**, not CSS files like web development.

👉 Styles are written using JavaScript objects and applied using the `style` prop.

📌 Example:

```jsx id="st1"
<View style={{ backgroundColor: 'blue', padding: 10 }}>
  <Text style={{ color: 'white' }}>Hello</Text>
</View>
```

👉 You can also use `StyleSheet.create()` for better performance and structure.

✔ No CSS file
✔ Uses camelCase properties (`backgroundColor`, not `background-color`)

---

### 42. Difference between StyleSheet and inline styles?

| Feature     | StyleSheet         | Inline Styles    |
| ----------- | ------------------ | ---------------- |
| Performance | Better (optimized) | Slightly slower  |
| Reusability | Reusable styles    | Not reusable     |
| Readability | Clean & structured | Can become messy |
| Debugging   | Easier             | Harder           |

📌 Example:

```jsx id="ss1"
const styles = StyleSheet.create({
  container: { padding: 10 }
});
```

👉 Best practice: Use `StyleSheet.create()` in production apps.

---

### 43. What is Flexbox in React Native?

Flexbox is the **layout system used in React Native** to arrange components in rows or columns.

👉 By default:

* `flexDirection: 'column'`

📌 Example:

```jsx id="fx1"
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Hello</Text>
</View>
```

✔ Helps build responsive layouts
✔ Works across screen sizes
✔ No need for floats or positioning hacks

---

### 44. Difference between justifyContent and alignItems?

| Property       | Works On   | Purpose                                               |
| -------------- | ---------- | ----------------------------------------------------- |
| justifyContent | Main axis  | Align items vertically (column) or horizontally (row) |
| alignItems     | Cross axis | Align items opposite to main axis                     |

📌 Example (column layout):

* justifyContent → vertical alignment
* alignItems → horizontal alignment

```jsx id="ja1"
<View style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}>
```

👉 Simple trick:

* justifyContent = main direction
* alignItems = opposite direction

---

### 45. How do you make responsive UI?

You can make UI responsive in React Native using:

✔ Flexbox layout (most important)
✔ Percentage-based widths/heights
✔ `Dimensions API`
✔ `useWindowDimensions()` hook
✔ Responsive libraries (like react-native-responsive-screen)
✔ Scaled font sizes

📌 Example:

```jsx id="rp1"
const { width, height } = Dimensions.get('window');

<View style={{ width: width * 0.8 }} />
```

✔ Avoid fixed pixel layouts
✔ Use relative sizing

---

### 46. What is Dimensions API?

`Dimensions` API is used to get **device screen width and height**.

📌 Example:

```jsx id="dm1"
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
```

👉 Use cases:

* Responsive layouts
* Dynamic UI sizing
* Device-specific styling

📌 Important note:

* `Dimensions` does NOT auto-update on rotation unless handled manually
* For better handling, use `useWindowDimensions()`

---

### 🔥 Quick Summary

* Styling → JS objects, no CSS
* StyleSheet → optimized & reusable
* Flexbox → layout system
* justifyContent → main axis alignment
* alignItems → cross axis alignment
* Responsive UI → Flexbox + dimensions + percentages
* Dimensions API → screen size access

---





Here are clear, interview-ready React Native answers:

---

### 47. What is SafeAreaView?

`SafeAreaView` is a React Native component that ensures UI content is displayed **within the safe area boundaries of a device** (not under notches, status bars, or rounded corners).

📌 Example:

```jsx id="sa1"
import { SafeAreaView, Text } from 'react-native';

<SafeAreaView style={{ flex: 1 }}>
  <Text>Hello</Text>
</SafeAreaView>
```

✔ Prevents UI overlap with notch (iPhone, modern Android devices)
✔ Improves UI safety and consistency

---

### 48. What is KeyboardAvoidingView?

`KeyboardAvoidingView` is used to **prevent the keyboard from hiding input fields** when typing.

📌 Example:

```jsx id="kv1"
<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
  <TextInput placeholder="Enter text" />
</KeyboardAvoidingView>
```

👉 Behavior options:

* `padding`
* `height`
* `position`

✔ Useful in login/signup forms
✔ Improves user experience

---

### 49. How to handle dark mode?

Dark mode can be handled using:

✔ `Appearance API`
✔ `useColorScheme()` hook
✔ Theme providers (Context API or libraries like React Navigation themes)

📌 Example:

```jsx id="dm2"
import { useColorScheme } from 'react-native';

const theme = useColorScheme(); // 'light' or 'dark'
```

👉 Example usage:

```jsx id="dm3"
<View style={{ backgroundColor: theme === 'dark' ? '#000' : '#fff' }}>
```

✔ Supports system-level theme changes
✔ Improves user experience

---

### 50. How to create reusable components?

Reusable components are **custom components designed once and used multiple times** across the app.

📌 Example:

```jsx id="rc1"
const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
```

👉 Usage:

```jsx id="rc2"
<CustomButton title="Submit" onPress={handleSubmit} />
```

✔ Reduces code duplication
✔ Improves maintainability
✔ Follows DRY principle

---

### 51. How to use custom fonts?

Steps to use custom fonts in React Native:

👉 Step 1: Add fonts in project

```
assets/fonts/Roboto.ttf
```

👉 Step 2: Configure `react-native.config.js`

```js id="cf1"
module.exports = {
  assets: ['./assets/fonts/'],
};
```

👉 Step 3: Link assets

```bash id="cf2"
npx react-native-asset
```

👉 Step 4: Use font in styles

```jsx id="cf3"
<Text style={{ fontFamily: 'Roboto' }}>Hello</Text>
```

✔ Improves UI design
✔ Used for branding

---

### 52. What are vector icons?

Vector icons are **scalable icons used in React Native apps** that do not lose quality when resized.

👉 Most commonly used library:

* `react-native-vector-icons`

📌 Example:

```jsx id="vi1"
import Icon from 'react-native-vector-icons/MaterialIcons';

<Icon name="home" size={30} color="blue" />
```

✔ Lightweight
✔ Scalable (no pixel blur)
✔ Wide icon sets available (Material, FontAwesome, Ionicons)

---

### 🔥 Quick Summary

* SafeAreaView → avoids notch overlap
* KeyboardAvoidingView → handles keyboard UI issues
* Dark mode → useColorScheme / Appearance API
* Reusable components → modular UI design
* Custom fonts → add assets + fontFamily
* Vector icons → scalable icon library

---





Here are clear, interview-ready React Native answers:

---

### 53. How to handle platform-specific styling?

In React Native, you can apply different styles for **iOS and Android** using:

✔ `Platform` module
✔ `Platform.select()`
✔ File-based separation (`.ios.js`, `.android.js`)

📌 Example:

```jsx id="ps1"
import { Platform } from 'react-native';

const styles = {
  padding: Platform.OS === 'ios' ? 20 : 10,
};
```

📌 Better approach:

```jsx id="ps2"
const styles = Platform.select({
  ios: { padding: 20 },
  android: { padding: 10 }
});
```

✔ Useful for platform-specific UI differences

---

### 54. Difference between iOS and Android styling?

| Feature        | iOS                            | Android              |
| -------------- | ------------------------------ | -------------------- |
| Font           | San Francisco                  | Roboto               |
| Shadows        | `shadowColor`, `shadowOpacity` | `elevation`          |
| UI behavior    | Smooth & minimal               | More material design |
| Status bar     | Transparent by default         | Varies by device     |
| Touch feedback | Subtle                         | Ripple effect        |

👉 Key point:

* iOS focuses on smooth UI
* Android uses material design principles

---

### 55. What is PixelRatio?

`PixelRatio` is used to get the **device pixel density** and scale UI elements accordingly.

📌 Example:

```jsx id="pr2"
import { PixelRatio } from 'react-native';

const scale = PixelRatio.get();
```

👉 Use cases:

* Image scaling
* Responsive UI
* Ensuring sharp visuals across devices

✔ Helps avoid blurry images
✔ Improves UI consistency

---

### 56. How to create animations in React Native?

Animations can be created using:

✔ `Animated API` (built-in)
✔ `LayoutAnimation`
✔ `Reanimated` (advanced, better performance)
✔ Lottie animations

📌 Example (Animated API):

```jsx id="an1"
const fadeAnim = useRef(new Animated.Value(0)).current;

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 1000,
  useNativeDriver: true,
}).start();
```

✔ Used for fade, slide, scale effects

---

### 57. Difference between Animated API and Reanimated?

| Feature     | Animated API     | Reanimated                     |
| ----------- | ---------------- | ------------------------------ |
| Performance | JS thread-based  | Runs on UI thread              |
| Complexity  | Simple           | Advanced                       |
| Smoothness  | Moderate         | Very smooth (60 FPS)           |
| Use case    | Basic animations | Complex gestures, interactions |

👉 Key point:

* Animated API → simple animations
* Reanimated → high-performance animations

---

### 58. What is Lottie animation?

Lottie is a library that allows you to use **high-quality JSON-based animations** in React Native.

👉 Created by Airbnb

📌 Example:

```jsx id="lo1"
import LottieView from 'lottie-react-native';

<LottieView source={require('./animation.json')} autoPlay loop />
```

✔ Lightweight animations
✔ Smooth and scalable
✔ Used in splash screens, loaders

---

### 59. What are gesture handlers?

Gesture handlers are used to handle **touch interactions like swipe, pan, tap, drag** in React Native.

👉 Library:

* `react-native-gesture-handler`

📌 Example:

* Swipe to delete
* Drag and drop
* Bottom sheet gestures

✔ Better performance than default touch system
✔ Works well with animations

---

### 60. What is React Native Paper?

React Native Paper is a **UI component library based on Material Design**.

👉 Developed by Callstack

📌 Features:

* Prebuilt components (Button, Card, Dialog, Appbar)
* Theming support (light/dark mode)
* Consistent UI design

📌 Example:

```jsx id="rp2"
import { Button } from 'react-native-paper';

<Button mode="contained" onPress={() => {}}>
  Click Me
</Button>
```

✔ Speeds up development
✔ Clean Material UI
✔ Production-ready components

---

### 🔥 Quick Summary

* Platform-specific styling → Platform API
* iOS vs Android → different UI behaviors
* PixelRatio → screen density scaling
* Animations → Animated / Reanimated
* Lottie → JSON-based animations
* Gesture Handler → advanced touch interactions
* React Native Paper → Material UI library

---





Here are clear, interview-ready React Native answers:

---

### 61. What is React Navigation?

**React Navigation** is the most popular library used in React Native to handle **screen navigation and routing** between different screens in an app.

👉 It allows moving between:

* Login → Home
* Home → Profile
* Settings → Details

📌 Example:

```jsx id="rn1"
navigation.navigate('Home');
```

✔ Supports Stack, Tab, Drawer navigation
✔ Easy integration with React Native apps
✔ Provides navigation lifecycle events

---

### 62. Difference between Stack navigation and Tab navigation?

| Feature         | Stack Navigation          | Tab Navigation          |
| --------------- | ------------------------- | ----------------------- |
| UI style        | Push/Pop screens          | Bottom or top tabs      |
| Navigation flow | Linear (back & forward)   | Switch between sections |
| Use case        | Login → Details → Profile | Home, Search, Settings  |
| History         | Maintains history stack   | No history stack        |

📌 Example:

* Stack → Flipkart product details flow
* Tabs → Instagram bottom navigation

---

### 63. What is drawer navigation?

Drawer navigation is a **side menu (hamburger menu)** that slides from left or right.

📌 Example apps:

* Gmail
* Amazon
* Facebook

👉 Features:

* Hidden menu accessible via swipe or button
* Used for main app sections

📌 Example:

```jsx id="dn1"
navigation.openDrawer();
```

✔ Good for complex apps with many sections

---

### 64. What is deep linking?

Deep linking allows users to **open a specific screen inside an app using a URL or external link**.

📌 Example:

```
myapp://product/123
```

👉 If user clicks this link:

* App opens directly to Product Details screen

✔ Used in:

* Notifications
* Emails
* Marketing campaigns

👉 Types:

* Basic deep linking
* Universal links (iOS)
* App links (Android)

---

### 65. How navigation works internally?

React Navigation works using a **navigation state tree + JavaScript-based routing system**.

👉 Internal flow:

1. User triggers navigation (e.g., `navigate('Home')`)
2. Navigation action is dispatched
3. Navigation state tree is updated
4. React re-renders the new screen
5. Native layer displays updated UI

📌 Key components:

* Navigation Container → root manager
* Navigators → Stack, Tab, Drawer
* Screens → UI components

👉 Internally:

* State-based navigation (not native routing)
* Uses React context to manage navigation state
* Communicates changes via re-rendering system

✔ Efficient and fully JavaScript-controlled

---

### 🔥 Quick Summary

* React Navigation → routing library
* Stack → push/pop navigation
* Tab → switch between sections
* Drawer → side menu navigation
* Deep linking → open app via URL
* Internal flow → state-based navigation system

---




Here are clear, interview-ready React Native answers:

---

### 66. How to pass data between screens?

In React Native (React Navigation), you pass data using **route parameters**.

📌 Send data:

```jsx id="pd1"
navigation.navigate('Details', {
  userId: 101,
  name: 'Saikrishna'
});
```

📌 Receive data:

```jsx id="pd2"
const { userId, name } = route.params;
```

✔ Used for passing user info, IDs, product details
✔ Simple and commonly used approach

---

### 67. How to go back to previous screen?

You can go back using:

📌 `goBack()` method:

```jsx id="gb1"
navigation.goBack();
```

👉 Or hardware back button (Android)

✔ Removes current screen from stack
✔ Returns to previous screen

---

### 68. What is nested navigation?

Nested navigation means **placing one navigator inside another navigator**.

👉 Example:

* Stack Navigator inside Tab Navigator
* Drawer Navigator inside Stack Navigator

📌 Example structure:

* Tab Navigator

  * Home Stack
  * Profile Stack

✔ Used in complex apps
✔ Helps organize navigation logically

---

### 69. What is navigation lifecycle?

Navigation lifecycle refers to **events triggered when a screen is focused, unfocused, or mounted**.

👉 Common lifecycle events:

* `focus` → screen is active
* `blur` → screen is left
* `beforeRemove` → before screen is removed

📌 Example:

```jsx id="nl1"
useFocusEffect(
  React.useCallback(() => {
    console.log('Screen focused');
  }, [])
);
```

✔ Useful for API calls, tracking, refresh data

---

### 70. How to reset navigation stack?

Reset navigation is used to **clear navigation history and set a new root screen**.

📌 Example:

```jsx id="rs1"
import { CommonActions } from '@react-navigation/native';

navigation.dispatch(
  CommonActions.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  })
);
```

👉 Use cases:

* After login → prevent going back to login screen
* Logout → reset to login screen

✔ Clears entire navigation history
✔ Sets new starting screen

---

### 🔥 Quick Summary

* Pass data → `navigate(params)` + `route.params`
* Go back → `goBack()`
* Nested navigation → navigators inside navigators
* Lifecycle → focus, blur, beforeRemove
* Reset stack → `CommonActions.reset()`

---






Here are clear, interview-ready React Native answers:

---

### 71. How to call APIs in React Native?

You can call APIs using:
✔ `fetch()` (built-in)
✔ `axios` (most popular library)

📌 Example using fetch:

```jsx id="api1"
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}, []);
```

📌 Example using axios:

```jsx id="api2"
import axios from 'axios';

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}, []);
```

✔ Used for REST API integration
✔ Common in real-world apps (login, data fetch, etc.)

---

### 72. Difference between fetch and axios?

| Feature        | fetch                 | axios                    |
| -------------- | --------------------- | ------------------------ |
| Built-in       | Yes                   | No (needs install)       |
| JSON parsing   | Manual (`res.json()`) | Automatic                |
| Error handling | Needs manual check    | Better built-in handling |
| Interceptors   | Not supported         | Supported                |
| Request cancel | Not easy              | Supported                |
| Timeout        | Not supported         | Supported                |

👉 Key point:

* fetch = basic API tool
* axios = powerful and developer-friendly

---

### 73. What is async/await?

`async/await` is a modern way to handle asynchronous operations in a **synchronous-like style**.

📌 Example:

```jsx id="aw1"
const getData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
```

✔ Makes code cleaner
✔ Avoids callback hell
✔ Easier error handling with try/catch

---

### 74. What is Promise?

A Promise is an object that represents the **future result of an asynchronous operation**.

👉 States of Promise:

* Pending
* Fulfilled (success)
* Rejected (error)

📌 Example:

```jsx id="pr3"
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) resolve("Data loaded");
  else reject("Error occurred");
});
```

📌 Usage:

```jsx id="pr4"
myPromise
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

✔ Used for async operations like API calls

---

### 75. How to handle API errors?

You can handle API errors using:

✔ `try/catch` with async/await
✔ `.catch()` with promises
✔ HTTP status code checking
✔ Axios interceptors (advanced)

📌 Example:

```jsx id="err1"
const getData = async () => {
  try {
    const res = await axios.get('https://api.com/data');

    if (res.status === 200) {
      console.log(res.data);
    }
  } catch (error) {
    console.log('API Error:', error.message);
  }
};
```

👉 Best practices:

* Show user-friendly error messages
* Handle network errors
* Handle 404 / 500 responses
* Use loading states

✔ Improves user experience
✔ Prevents app crashes

---

### 🔥 Quick Summary

* API calls → fetch / axios
* fetch vs axios → axios is more powerful
* async/await → cleaner async code
* promise → async result handler
* error handling → try/catch + status checks

---





Here are clear, interview-ready React Native answers:

---

### 76. How to show loading state?

Loading state is used to show a **spinner or indicator while API data is being fetched**.

👉 You manage it using `useState`.

📌 Example:

```jsx id="ld1"
const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch('https://api.com/data');
      const data = await res.json();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);
```

📌 UI:

```jsx id="ld2"
{loading ? <ActivityIndicator size="large" /> : <Text>Data Loaded</Text>}
```

✔ Improves user experience
✔ Prevents blank screens

---

### 77. What is pagination?

Pagination is a technique to **load data in chunks (pages)** instead of loading everything at once.

👉 Used for large datasets like:

* Social media feeds
* Product lists
* Search results

📌 Example:

* Page 1 → 10 items
* Page 2 → next 10 items

✔ Reduces memory usage
✔ Improves performance
✔ Faster initial load

---

### 78. What is debounce?

Debounce is a technique that **delays execution until the user stops performing an action for a certain time**.

👉 Common use:

* Search input
* API calls on typing

📌 Example:
User types → API call waits until typing stops (e.g., 300ms)

✔ Prevents too many API calls
✔ Improves performance

---

### 79. What is throttling?

Throttling ensures a function is executed **at most once in a specified time interval**, even if triggered multiple times.

👉 Example:

* Scroll events
* Button clicks
* API rate limiting

📌 Difference:

* Debounce → runs after delay
* Throttle → runs at intervals

✔ Controls function execution frequency
✔ Improves performance

---

### 80. How to cache API data?

Caching stores API responses so they can be reused without refetching.

👉 Methods in React Native:

✔ AsyncStorage
✔ React Query / TanStack Query (best approach)
✔ Redux Persist
✔ In-memory caching

📌 Example (AsyncStorage):

```jsx id="ca1"
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('userData', JSON.stringify(data));

const cachedData = await AsyncStorage.getItem('userData');
```

👉 Best practice:

* Use React Query for API caching (modern apps)
* Use AsyncStorage for simple persistence

✔ Reduces API calls
✔ Improves performance
✔ Works offline (partially)

---

### 🔥 Quick Summary

* Loading state → ActivityIndicator + useState
* Pagination → data in pages
* Debounce → delay execution
* Throttle → limit execution frequency
* Caching → store API responses (AsyncStorage / React Query)

---






Here are clear, interview-ready React Native answers:

---

### 81. What is JSON parsing?

JSON parsing means **converting JSON data (string format) into a JavaScript object** so it can be used in the app.

👉 In APIs, data is usually received as JSON.

📌 Example:

```jsx id="jp1"
const jsonString = '{"name":"Sai","age":25}';

const obj = JSON.parse(jsonString);
console.log(obj.name); // Sai
```

📌 In API response:

```jsx id="jp2"
const res = await fetch(url);
const data = await res.json(); // JSON parsing
```

✔ Converts string → usable object
✔ Required for API data handling

---

### 82. How to upload files/images?

In React Native, file/image upload is done using:

✔ `FormData`
✔ `axios` or `fetch`
✔ Libraries like `react-native-image-picker`

📌 Example:

```jsx id="up1"
const formData = new FormData();
formData.append('image', {
  uri: imageUri,
  name: 'photo.jpg',
  type: 'image/jpeg',
});

axios.post('https://api.com/upload', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
```

✔ Used for profile pictures, documents
✔ Common in real apps

---

### 83. How to download files?

File downloading in React Native is done using:

✔ `react-native-fs`
✔ `react-native-blob-util`
✔ `expo-file-system` (Expo apps)

📌 Example:

```jsx id="dl1"
import RNFS from 'react-native-fs';

RNFS.downloadFile({
  fromUrl: 'https://example.com/file.pdf',
  toFile: RNFS.DocumentDirectoryPath + '/file.pdf',
}).promise.then(res => {
  console.log('Download complete');
});
```

✔ Used for PDFs, images, videos
✔ Requires device storage access

---

### 84. How to handle network failures?

Network failures can be handled using:

✔ `try/catch`
✔ retry logic
✔ offline detection (`@react-native-community/netinfo`)
✔ fallback UI

📌 Example:

```jsx id="nf1"
import NetInfo from '@react-native-community/netinfo';

NetInfo.fetch().then(state => {
  if (!state.isConnected) {
    console.log('No internet connection');
  }
});
```

📌 API handling:

```jsx id="nf2"
try {
  const res = await fetch(url);
} catch (error) {
  console.log('Network error:', error);
}
```

✔ Show error messages
✔ Retry failed requests
✔ Improve UX with fallback screens

---

### 85. What is offline storage?

Offline storage means **saving data locally on the device so the app works without internet**.

👉 Common storage options:

✔ AsyncStorage (simple key-value storage)
✔ SQLite (structured database)
✔ Realm DB (advanced mobile database)
✔ MMKV (fast storage)

📌 Example:

```jsx id="os1"
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('user', JSON.stringify(userData));

const data = await AsyncStorage.getItem('user');
```

✔ Used for login sessions
✔ Caching API data
✔ Offline-first apps

---

### 🔥 Quick Summary

* JSON parsing → convert JSON string to object
* Upload files → FormData + axios
* Download files → RNFS / file system libraries
* Network failures → NetInfo + try/catch + retry
* Offline storage → AsyncStorage / SQLite / Realm

---






Here are clear, interview-ready React Native (Redux) answers:

---

### 86. What is Redux?

Redux is a **state management library** used to manage **global state** in large applications.

👉 It helps to store and manage data in a **centralized store** so any component can access it.

📌 Example use cases:

* User authentication
* Cart data in e-commerce apps
* Theme management

✔ Single source of truth
✔ Predictable state updates
✔ Works with React / React Native

---

### 87. What is Redux Toolkit?

Redux Toolkit (RTK) is the **official, modern way to use Redux**.

👉 It simplifies Redux by reducing boilerplate code.

📌 Features:

* `configureStore()` → easy store setup
* `createSlice()` → combines actions + reducers
* Built-in support for async logic (`createAsyncThunk`)

📌 Example:

```jsx id="rt1"
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  }
});
```

✔ Easier than traditional Redux
✔ Less code
✔ Recommended approach

---

### 88. Difference between Redux and Context API?

| Feature            | Redux                    | Context API          |
| ------------------ | ------------------------ | -------------------- |
| Purpose            | Global state management  | Simple state sharing |
| Complexity         | High                     | Low                  |
| Performance        | Optimized for large apps | May cause re-renders |
| Middleware support | Yes (Thunk, Saga)        | No                   |
| Best use case      | Large apps               | Small/medium apps    |

👉 Key point:

* Redux = powerful for large-scale apps
* Context API = simple state sharing

---

### 89. What is action in Redux?

An action is a **plain JavaScript object** that describes **what happened** in the app.

👉 It must have a `type` property.

📌 Example:

```jsx id="ac1"
const incrementAction = {
  type: 'INCREMENT'
};
```

📌 With payload:

```jsx id="ac2"
{
  type: 'ADD_ITEM',
  payload: { id: 1, name: 'Apple' }
}
```

✔ Actions are dispatched to update state
✔ They describe "what happened", not "how to update"

---

### 90. What is reducer?

A reducer is a **pure function** that takes:
👉 current state + action
👉 returns new state

📌 Example:

```jsx id="rd1"
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
```

✔ Must be pure function
✔ No API calls or side effects
✔ Returns updated state

---

### 🔥 Quick Summary

* Redux → global state management system
* Redux Toolkit → modern simplified Redux
* Context API vs Redux → simple vs scalable
* Action → describes what happened
* Reducer → updates state based on action

---






Here are clear, interview-ready React Native (Redux + state management) answers:

---

### 91. What is store?

A **store** in Redux is a **central place that holds the entire application state**.

👉 It is the single source of truth for the app.

📌 Responsibilities:

* Stores global state
* Allows access using `getState()`
* Updates state using `dispatch(action)`
* Notifies UI when state changes

📌 Example:

```jsx id="st1"
const store = configureStore({
  reducer: counterReducer,
});
```

✔ One store per application
✔ Centralized state management

---

### 92. What is middleware?

Middleware is a **layer between dispatching an action and reaching the reducer**.

👉 It is used to:

* Handle async operations
* Logging
* API calls
* Error tracking

📌 Flow:
Action → Middleware → Reducer → Store

✔ Extends Redux functionality
✔ Used for side effects

---

### 93. What is thunk middleware?

Redux Thunk is a middleware that allows you to write **async logic inside action creators**.

👉 Normally Redux actions are synchronous, but Thunk allows async operations like API calls.

📌 Example:

```jsx id="th1"
const fetchUsers = () => {
  return async (dispatch) => {
    const res = await fetch('https://api.com/users');
    const data = await res.json();

    dispatch({ type: 'SET_USERS', payload: data });
  };
};
```

✔ Used for API calls
✔ Simple async handling
✔ Most commonly used middleware

---

### 94. What is Redux Saga?

Redux Saga is a **middleware for handling complex side effects using generator functions**.

👉 It uses `function*` (generators) to manage async flows.

📌 Key concepts:

* `takeEvery` → listens to actions
* `call` → makes API calls
* `put` → dispatch actions

📌 Example:

```jsx id="sg1"
function* fetchUsersSaga() {
  const data = yield call(fetchUsersApi);
  yield put({ type: 'SET_USERS', payload: data });
}
```

✔ Best for complex async flows
✔ More powerful than Thunk
✔ Easier to manage large-scale side effects

---

### 95. What is Zustand?

Zustand is a **lightweight state management library for React Native/React**.

👉 It is simpler than Redux and does not require reducers, actions, or boilerplate.

📌 Example:

```jsx id="zs1"
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

📌 Usage:

```jsx id="zs2"
const { count, increment } = useStore();
```

✔ Very simple syntax
✔ No boilerplate
✔ Fast and lightweight
✔ Great alternative to Redux for small/medium apps

---

### 🔥 Quick Summary

* Store → central state container
* Middleware → intercepts actions
* Thunk → async logic in actions
* Saga → advanced async flow handling
* Zustand → lightweight modern state management

---





Here are clear, interview-ready React Native (state management) answers:

---

### 96. What is MobX?

MobX is a **state management library** that uses **observable state** and automatically updates the UI when the state changes.

👉 It follows **reactive programming** (unlike Redux’s strict flow).

📌 Key concepts:

* `observable` → state
* `action` → updates state
* `computed` → derived values
* `observer` → auto UI re-render

📌 Example:

```jsx id="mb1"
import { makeAutoObservable } from "mobx";

class Store {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}
```

✔ Less boilerplate than Redux
✔ Automatic reactivity
✔ Easy to use

---

### 97. What is global state?

Global state is **data that is shared across multiple components in the entire app**.

👉 Example:

* User login info
* Theme (dark/light mode)
* Cart items
* Authentication token

📌 Managed using:

* Redux
* Context API
* Zustand
* MobX

✔ Accessible anywhere in the app
✔ Avoids prop drilling

---

### 98. What is local state?

Local state is **data that belongs to a single component only**.

👉 Managed using `useState`.

📌 Example:

* Input field value
* Button toggle
* Modal open/close state

```jsx id="ls2"
const [name, setName] = useState('');
```

✔ Scoped to one component
✔ Not shared globally

---

### 99. What is immutable update?

Immutable update means **not directly modifying existing state, but creating a new copy with updated values**.

👉 Why important?

* Ensures predictable state changes
* Helps React detect changes properly
* Prevents bugs

📌 Incorrect (mutating state):

```js
state.count = state.count + 1;
```

📌 Correct (immutable update):

```js
return { ...state, count: state.count + 1 };
```

✔ Core principle of Redux
✔ Ensures reliable UI updates

---

### 100. What is Immer in Redux Toolkit?

Immer is a library used in Redux Toolkit that allows you to **write "mutating" code but still keeps state immutable internally**.

👉 It simplifies immutable updates.

📌 Example:

```jsx id="im1"
const slice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1; // looks like mutation
    }
  }
});
```

👉 Behind the scenes:
Immer converts it into immutable update.

✔ No need to spread state manually
✔ Cleaner and easier code
✔ Built into Redux Toolkit

---

### 🔥 Final Quick Summary

* MobX → reactive state management
* Global state → shared app-wide data
* Local state → component-level data
* Immutable update → always create new state
* Immer → allows safe "mutating" syntax in Redux Toolkit

---





Here are clear, interview-ready React Native answers:

---

### 101. What is AsyncStorage?

`AsyncStorage` is a **simple, asynchronous, unencrypted key-value storage system** used in React Native to store small amounts of data locally on the device.

👉 It is like `localStorage` in web.

📌 Example:

```jsx id="as1"
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('user', JSON.stringify({ name: 'Sai' }));

const user = await AsyncStorage.getItem('user');
```

✔ Used for small data (theme, user info)
✔ Persistent storage
✔ Not secure for sensitive data

---

### 102. Difference between AsyncStorage and Secure Storage?

| Feature      | AsyncStorage    | Secure Storage                        |
| ------------ | --------------- | ------------------------------------- |
| Security     | Not encrypted   | Encrypted                             |
| Use case     | Normal data     | Sensitive data                        |
| Examples     | theme, settings | tokens, passwords                     |
| Storage type | Plain key-value | Encrypted storage (Keychain/Keystore) |

👉 Secure Storage libraries:

* `react-native-keychain`
* `expo-secure-store`

✔ Use Secure Storage for authentication data

---

### 103. How to store tokens securely?

To store authentication tokens securely:

✔ Use Secure Storage instead of AsyncStorage
✔ Use platform security:

* iOS → Keychain
* Android → Keystore

📌 Example:

```jsx id="ts1"
import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('token', 'abc123');

const token = await SecureStore.getItemAsync('token');
```

👉 Best practices:

* Never store tokens in AsyncStorage
* Always encrypt sensitive data
* Clear token on logout

✔ Prevents token theft
✔ Improves app security

---

### 104. What is MMKV storage?

MMKV is a **high-performance key-value storage library developed by Tencent**.

👉 It is much faster than AsyncStorage.

📌 Features:

* Extremely fast read/write
* Synchronous operations
* Encrypted storage support
* Used for performance-critical apps

📌 Example:

```jsx id="mk1"
import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

MMKV.setStringAsync('user', 'Sai');
const user = MMKV.getStringAsync('user');
```

✔ Faster than AsyncStorage
✔ Used in production apps (e.g., WeChat)

---

### 105. What is SQLite?

SQLite is a **lightweight relational database stored locally on the device**.

👉 It uses SQL queries to manage structured data.

📌 Features:

* Tables (rows & columns)
* Supports complex queries
* Offline data storage
* Good for large structured datasets

📌 Example use cases:

* Offline apps
* Inventory systems
* Chat history

📌 Example query:

```sql id="sq1"
SELECT * FROM users;
```

✔ Powerful local database
✔ Supports relationships and queries
✔ Better than key-value storage for complex data

---

### 🔥 Quick Summary

* AsyncStorage → simple local storage (not secure)
* Secure Storage → encrypted storage for sensitive data
* Token storage → always use SecureStore/Keychain
* MMKV → ultra-fast key-value storage
* SQLite → structured relational local database

---





Here are clear, interview-ready React Native answers:

---

### 106. How to persist Redux state?

Persisting Redux state means **saving Redux store data locally so it remains after app restart**.

👉 Common library:
✔ `redux-persist`

📌 Example:

```jsx id="rp1"
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
```

📌 Config:

```jsx id="rp2"
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
```

📌 Setup:

```jsx id="rp3"
const store = configureStore({
  reducer: persistedReducer,
});
```

✔ Keeps user logged in
✔ Stores cart/theme data
✔ Survives app restart

---

### 107. How to clear storage?

You can clear stored data using:

✔ AsyncStorage
✔ Secure Storage
✔ MMKV

📌 AsyncStorage:

```jsx id="cs1"
await AsyncStorage.clear();
```

📌 Remove specific item:

```jsx id="cs2"
await AsyncStorage.removeItem('user');
```

📌 SecureStore:

```jsx id="cs3"
await SecureStore.deleteItemAsync('token');
```

✔ Used for logout
✔ Used for resetting app state

---

### 108. How to encrypt local storage?

Encryption ensures data is **stored in unreadable format**.

👉 Methods:

✔ Secure Storage (recommended)

* Keychain (iOS)
* Keystore (Android)

✔ MMKV encryption
✔ Custom encryption (AES)

📌 Example (SecureStore):

```jsx id="en1"
await SecureStore.setItemAsync('token', 'abc123');
```

📌 MMKV encryption:

```jsx id="en2"
const MMKV = new MMKVLoader().withEncryption().initialize();
```

✔ Protects sensitive data
✔ Prevents data theft

---

### 109. What is Realm DB?

Realm is a **mobile database for React Native** that is:

👉 Object-oriented (not SQL-based)
👉 Faster than SQLite in many cases
👉 Real-time sync capable

📌 Features:

* Offline-first database
* Reactive updates
* No SQL queries required
* Works with objects

📌 Example:

```jsx id="rm1"
realm.write(() => {
  realm.create('User', { name: 'Sai', age: 25 });
});
```

✔ Easy to use
✔ High performance
✔ Used in large apps

---

### 110. How to handle offline data sync?

Offline data sync means **saving data locally when offline and syncing it when internet is back**.

👉 Strategy:

✔ Detect network status (NetInfo)
✔ Store requests locally
✔ Sync when online
✔ Handle conflict resolution

📌 Example flow:

1. User submits data offline
2. Save in local DB (AsyncStorage/SQLite/Realm)
3. Detect internet reconnect
4. Sync data to server

📌 Network detection:

```jsx id="os1"
import NetInfo from '@react-native-community/netinfo';

NetInfo.addEventListener(state => {
  if (state.isConnected) {
    syncData();
  }
});
```

✔ Important for banking/e-commerce apps
✔ Improves user experience
✔ Enables offline-first apps

---

### 🔥 Quick Summary

* Redux persist → store Redux state locally
* Clear storage → AsyncStorage/secure store remove/clear
* Encryption → SecureStore / MMKV encryption
* Realm DB → fast object-based database
* Offline sync → local storage + network detection + sync logic

---




Here are clear, interview-ready React Native answers:

---

### 111. How to optimize FlatList?

`FlatList` optimization is very important for handling large datasets efficiently.

👉 Best practices:

✔ Use `keyExtractor` for stable keys
✔ Use `memoized components` for `renderItem`
✔ Avoid inline functions in render
✔ Use `getItemLayout` for fixed-size items
✔ Use `initialNumToRender`
✔ Use `windowSize` properly
✔ Enable `removeClippedSubviews`
✔ Use pagination or infinite scroll
✔ Avoid unnecessary re-renders

📌 Example:

```jsx id="fl1"
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id.toString()}
  initialNumToRender={10}
  windowSize={5}
/>
```

✔ Improves performance for large lists (1000+ items)

---

### 112. What is keyExtractor?

`keyExtractor` is a function used in `FlatList` to provide a **unique key for each item**.

👉 It helps React identify which items changed.

📌 Example:

```jsx id="ke1"
keyExtractor={(item) => item.id.toString()}
```

✔ Prevents unnecessary re-renders
✔ Improves list performance
✔ Required for stable rendering

👉 Rule:
Each key must be **unique and stable**

---

### 113. What is getItemLayout?

`getItemLayout` is used when all list items have the **same height or width**.

👉 It helps FlatList:

* Skip layout calculations
* Improve scroll performance
* Enable fast scrolling to index

📌 Example:

```jsx id="gl1"
getItemLayout={(data, index) => (
  { length: 50, offset: 50 * index, index }
)}
```

✔ Speeds up rendering
✔ Useful for fixed-size lists
✔ Improves scroll-to-index performance

---

### 114. Why use memoization?

Memoization is used to **avoid unnecessary re-computations or re-renders**.

👉 In React Native, it improves performance by caching values or components.

📌 Types:
✔ `React.memo` → components
✔ `useMemo` → computed values
✔ `useCallback` → functions

📌 Example:

```jsx id="me1"
const MemoItem = React.memo(({ item }) => {
  return <Text>{item.name}</Text>;
});
```

✔ Reduces re-renders
✔ Improves app performance
✔ Prevents expensive recalculations

---

### 115. What causes performance issues?

Common causes of performance issues in React Native:

❌ Too many re-renders
❌ Large lists without optimization (no FlatList optimization)
❌ Inline functions and objects in JSX
❌ Heavy images without optimization
❌ Unnecessary state updates
❌ Missing memoization
❌ Poor navigation structure
❌ Blocking JS thread with heavy computation
❌ Frequent API calls without caching

📌 Example problem:

```jsx id="pi1"
renderItem={() => <Item />} // ❌ inline function causes re-render
```

✔ Fix:
Use memoized function or `React.memo`

---

### 🔥 Quick Summary

* FlatList optimization → memoization + props tuning
* keyExtractor → unique key for items
* getItemLayout → improves scroll performance
* Memoization → prevents unnecessary re-renders
* Performance issues → re-renders, heavy UI, poor optimization

---





Here are clear, interview-ready React Native answers:

---

### 116. How to reduce app size?

Reducing app size improves download speed and user retention.

👉 Best practices:

✔ Enable **Proguard (Android)** for code shrinking
✔ Enable **Hermes engine**
✔ Remove unused dependencies
✔ Use **vector icons instead of images**
✔ Optimize images (WebP format, compression)
✔ Enable **code splitting / lazy loading**
✔ Remove unused assets (fonts, images)
✔ Use **dynamic imports for screens**
✔ Enable **app bundle (AAB instead of APK)**
✔ Avoid large libraries if lightweight alternatives exist

📌 Example:

* APK → large size
* AAB → optimized per device download

✔ Result: smaller install size + better performance

---

### 117. What is Hermes engine?

Hermes is a **lightweight JavaScript engine optimized for React Native apps**, developed by Meta.

👉 It replaces JavaScriptCore (JSC).

✔ Designed specifically for mobile apps
✔ Improves startup performance
✔ Reduces memory usage

📌 Enabled in React Native:

```gradle
enableHermes: true
```

---

### 118. Benefits of Hermes?

✔ Faster app startup time
✔ Lower memory consumption
✔ Smaller app size
✔ Improved performance on low-end devices
✔ Pre-compiles JavaScript into bytecode
✔ Better battery efficiency

👉 Key point:
Hermes improves **initial load + runtime performance**

---

### 119. What is JSI?

JSI (JavaScript Interface) is a **low-level layer that allows direct communication between JavaScript and native code without using the Bridge**.

👉 Replaces old Bridge-based communication.

📌 Benefits:
✔ Faster communication
✔ Synchronous native calls possible
✔ Reduces serialization (no JSON bridge)
✔ Core part of new React Native architecture

👉 Flow:
JS ↔ JSI ↔ Native Modules

✔ Used in Fabric + TurboModules

---

### 120. Difference between old architecture and new architecture?

| Feature        | Old Architecture     | New Architecture   |
| -------------- | -------------------- | ------------------ |
| Communication  | Bridge (async JSON)  | JSI (direct calls) |
| UI rendering   | Legacy UI Manager    | Fabric Renderer    |
| Native modules | Bridge-based         | TurboModules       |
| Performance    | Slower               | Faster             |
| Threading      | JS thread bottleneck | Parallel execution |
| Flexibility    | Limited              | Highly scalable    |
| Startup time   | Slower               | Faster             |

📌 Key improvements:
✔ No Bridge bottleneck
✔ Faster UI updates
✔ Better native integration
✔ Improved performance & scalability

---

### 🔥 Quick Summary

* App size reduction → optimize assets, enable Hermes, remove unused code
* Hermes → optimized JS engine for React Native
* Benefits → faster startup, lower memory, smaller size
* JSI → direct JS ↔ native communication layer
* New architecture → Fabric + TurboModules + JSI (faster & modern)

---





Here are clear, interview-ready React Native answers:

---

### 121. What are TurboModules?

TurboModules are part of the **new React Native architecture** that improve how native modules are loaded and executed.

👉 In old architecture, all native modules were loaded at startup.
👉 In TurboModules, modules are loaded **only when needed (lazy loading)**.

📌 Key points:
✔ Uses JSI (no Bridge)
✔ Lazy initialization of native modules
✔ Faster app startup
✔ Better performance

📌 Example use case:

* Camera module loads only when user opens camera screen

✔ Reduces startup cost
✔ Improves scalability

---

### 122. What is Fabric in React Native?

Fabric is the **new rendering system in React Native** that improves how UI is rendered.

👉 It replaces the old UI Manager.

📌 Key features:
✔ Synchronous rendering support
✔ Works with JSI
✔ Better concurrency handling
✔ Improved UI responsiveness

👉 Flow:
JS → JSI → Fabric Renderer → Native UI

✔ Faster UI updates
✔ Reduces UI lag
✔ More consistent across platforms

---

### 123. How to debug performance issues?

You can debug React Native performance using:

✔ React DevTools → check re-renders
✔ Flipper → network, logs, layout inspection
✔ Performance Monitor (FPS, memory usage)
✔ Console logs (carefully)
✔ Hermes profiler
✔ Android Studio Profiler / Xcode Instruments

📌 Common checks:

* Too many re-renders
* Large FlatList without optimization
* Heavy images or animations
* Blocking JS thread

✔ Identify bottlenecks
✔ Optimize rendering & state updates

---

### 124. What are memory leaks?

Memory leaks happen when **unused memory is not released**, causing the app to slow down or crash over time.

👉 In React Native, this occurs when:

* Event listeners are not removed
* Timers are not cleared
* Subscriptions remain active
* Large objects are kept in memory

📌 Example:

```jsx id="ml1"
useEffect(() => {
  const interval = setInterval(() => {
    console.log('Running');
  }, 1000);

  return () => clearInterval(interval); // cleanup
}, []);
```

✔ Causes performance degradation
✔ Increases app memory usage

---

### 125. How to avoid memory leaks?

You can avoid memory leaks by:

✔ Cleaning up `useEffect` (clearInterval, clearTimeout)
✔ Removing event listeners properly
✔ Unsubscribing from APIs or streams
✔ Avoiding unnecessary global variables
✔ Cancelling API requests when component unmounts
✔ Using AbortController for fetch requests
✔ Avoiding heavy objects in memory

📌 Example:

```jsx id="ml2"
useEffect(() => {
  const subscription = eventEmitter.addListener('event', handler);

  return () => {
    subscription.remove(); // cleanup
  };
}, []);
```

✔ Keeps app fast and stable
✔ Prevents crashes in long-running apps

---

### 🔥 Quick Summary

* TurboModules → lazy-loaded native modules using JSI
* Fabric → new UI rendering system
* Debugging → Flipper, DevTools, Profiler
* Memory leaks → unused memory not released
* Avoid leaks → cleanup effects, listeners, timers

---






Here are clear, interview-ready React Native answers:

---

### 126. How to access camera in React Native?

You can access the camera using libraries like:

✔ `react-native-vision-camera` (modern, high performance)
✔ `react-native-image-picker` (simple use case)
✔ Expo Camera (if using Expo)

📌 Example (Image Picker):

```jsx id="cam1"
import { launchCamera } from 'react-native-image-picker';

launchCamera({ mediaType: 'photo' }, (response) => {
  console.log(response.assets[0].uri);
});
```

👉 Use cases:

* Profile picture
* Document scanning
* Barcode scanning

✔ Requires camera permission
✔ Works with native modules

---

### 127. How to use location services?

Location services are used to get the **user’s current GPS position**.

👉 Common library:
✔ `react-native-geolocation-service`

📌 Example:

```jsx id="loc1"
import Geolocation from 'react-native-geolocation-service';

Geolocation.getCurrentPosition(
  position => {
    console.log(position.coords.latitude);
  },
  error => console.log(error),
  { enableHighAccuracy: true }
);
```

✔ Used in maps, delivery apps, tracking apps

---

### 128. How to handle permissions?

Permissions are handled using libraries like:

✔ `react-native-permissions`
✔ Built-in Android/iOS permission APIs

📌 Example:

```jsx id="per1"
import { request, PERMISSIONS } from 'react-native-permissions';

await request(PERMISSIONS.ANDROID.CAMERA);
```

👉 Steps:

1. Check permission status
2. Request permission
3. Handle allowed/denied states

✔ Required for camera, location, storage, etc.

---

### 129. Difference between Android and iOS permissions?

| Feature           | Android                | iOS                         |
| ----------------- | ---------------------- | --------------------------- |
| Permission model  | Runtime + manifest     | Runtime + plist             |
| File config       | AndroidManifest.xml    | Info.plist                  |
| Granularity       | More flexible          | Strict & privacy-focused    |
| Denied behavior   | Can ask multiple times | Often shows limited prompts |
| Background access | Easier                 | More restricted             |

📌 Key point:

* Android → flexible system
* iOS → strict privacy system

---

### 130. How to integrate maps?

Maps are integrated using:

✔ `react-native-maps` (most popular library)

📌 Example:

```jsx id="map1"
import MapView, { Marker } from 'react-native-maps';

<MapView
  style={{ flex: 1 }}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }}
>
  <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
</MapView>
```

👉 Features:

* Show user location
* Add markers
* Route tracking (with APIs like Google Directions)
* Zoom & gestures

✔ Used in delivery, ride-sharing apps

---

### 🔥 Quick Summary

* Camera → Image Picker / Vision Camera
* Location → Geolocation service
* Permissions → react-native-permissions
* Android vs iOS permissions → manifest vs plist + strictness difference
* Maps → react-native-maps

---





Here are clear, interview-ready React Native answers:

---

### 131. How to use push notifications?

Push notifications are used to **send alerts/messages to users even when the app is closed**.

👉 In React Native, commonly used service:
✔ Firebase Cloud Messaging (FCM)

📌 Flow:

1. Get device token
2. Send token to backend
3. Backend sends notification via FCM
4. Device receives notification

📌 Example (using Firebase messaging):

```jsx id="pn1"
import messaging from '@react-native-firebase/messaging';

const token = await messaging().getToken();
console.log(token);
```

✔ Used in chat apps, reminders, offers
✔ Works in background & foreground

---

### 132. What is Firebase in React Native?

Firebase is a **Backend-as-a-Service (BaaS)** platform by Google.

👉 It provides ready-made backend services:

✔ Authentication (login/signup)
✔ Cloud Firestore (database)
✔ Realtime Database
✔ Cloud Messaging (push notifications)
✔ Analytics
✔ Crashlytics

📌 Example use:

* Login with Google
* Store chat messages
* Send push notifications

✔ No need to build backend from scratch
✔ Fast development

---

### 133. How to integrate biometric authentication?

Biometric authentication uses **fingerprint, face ID, or iris scan** for login security.

👉 Library:
✔ `react-native-biometrics`

📌 Example:

```jsx id="bio1"
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
  .then(result => {
    if (result.success) {
      console.log('Authenticated');
    }
  });
```

✔ Used in banking apps
✔ Secure login method
✔ Works with device hardware

---

### 134. How to access contacts?

You can access device contacts using:

✔ `react-native-contacts`

📌 Example:

```jsx id="ct1"
import Contacts from 'react-native-contacts';

Contacts.getAll()
  .then(contacts => {
    console.log(contacts);
  });
```

👉 Steps:

1. Request contacts permission
2. Fetch contacts
3. Display in UI

✔ Used in messaging apps, social apps

---

### 135. How to handle deep links?

Deep linking allows **opening specific screens in an app using a URL**.

👉 Example:

```
myapp://product/123
```

📌 Setup in React Navigation:

```jsx id="dl1"
const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Product: 'product/:id',
    },
  },
};
```

📌 Usage:

* Open app from email link
* Open product directly from notification

✔ Used in marketing campaigns
✔ Improves user navigation experience

---

### 🔥 Quick Summary

* Push notifications → FCM (Firebase messaging)
* Firebase → backend services platform
* Biometrics → fingerprint/face authentication
* Contacts → react-native-contacts
* Deep links → open app screens via URL

---





Here are clear, interview-ready React Native answers:

---

### 136. How to integrate payment gateways?

Payment gateways in React Native are integrated using **third-party SDKs or web-based checkout systems**.

👉 Common options:
✔ Razorpay (India)
✔ Stripe (global)
✔ PayPal

📌 Example (Razorpay flow):

1. Create order on backend
2. Pass order ID to app
3. Open payment UI
4. Handle success/failure callback

```jsx id="pay1"
import RazorpayCheckout from 'react-native-razorpay';

const options = {
  description: 'Test Payment',
  currency: 'INR',
  amount: '50000',
  key: 'YOUR_KEY',
};

RazorpayCheckout.open(options)
  .then(data => console.log('Success:', data))
  .catch(err => console.log('Error:', err));
```

✔ Requires backend support
✔ Used in e-commerce apps

---

### 137. How to open files/PDFs?

You can open files using:

✔ `react-native-file-viewer`
✔ `react-native-pdf`
✔ `Linking` (for URLs)

📌 Example:

```jsx id="pdf1"
import FileViewer from 'react-native-file-viewer';

FileViewer.open('/path/to/file.pdf');
```

👉 Use cases:

* Viewing invoices
* Opening documents
* Downloaded PDFs

✔ Requires file storage permissions

---

### 138. How to use WebView?

WebView is used to **load web pages inside a React Native app**.

👉 Library:
✔ `react-native-webview`

📌 Example:

```jsx id="wv1"
import { WebView } from 'react-native-webview';

<WebView source={{ uri: 'https://example.com' }} />
```

✔ Used for:

* Payment pages
* Embedded websites
* Terms & conditions pages

👉 Important:

* Can execute JavaScript inside web page
* Needs security handling

---

### 139. How to share content from app?

Sharing content is done using:

✔ `react-native-share`
✔ `Share API` (built-in)

📌 Example:

```jsx id="sh1"
import { Share } from 'react-native';

Share.share({
  message: 'Check this awesome app!',
});
```

👉 Advanced:

* Share images, links, files
* Share to WhatsApp, Instagram, Email

✔ Used in referral systems
✔ Boosts app engagement

---

### 140. How to use device sensors?

Device sensors include:

* Accelerometer
* Gyroscope
* Magnetometer
* Step counter

👉 Libraries:
✔ `react-native-sensors`
✔ `expo-sensors` (Expo apps)

📌 Example:

```jsx id="sen1"
import { accelerometer } from "react-native-sensors";

accelerometer.subscribe(({ x, y, z }) => {
  console.log(x, y, z);
});
```

👉 Use cases:

* Fitness apps
* Motion detection
* Gaming apps

✔ Real-time data handling required
✔ Needs performance optimization

---

### 🔥 Quick Summary

* Payments → Razorpay / Stripe / PayPal SDKs
* Files/PDF → FileViewer / react-native-pdf
* WebView → embedded browser inside app
* Sharing → Share API / react-native-share
* Sensors → accelerometer, gyroscope via sensor libraries

---





Here are clear, interview-ready React Native answers:

---

### 141. What is debugging in React Native?

Debugging in React Native means **identifying and fixing errors, bugs, or performance issues in the app**.

👉 It helps developers:

* Find runtime errors
* Fix UI issues
* Debug API failures
* Improve performance

✔ Ensures app stability
✔ Improves user experience

---

### 142. How to debug React Native apps?

You can debug React Native apps using:

✔ Console logs (`console.log`)
✔ React DevTools (component inspection)
✔ Flipper (recommended tool)
✔ Chrome Debugger (older approach)
✔ Network inspection tools
✔ Native debugging tools:

* Android Studio (Logcat)
* Xcode (iOS logs)

📌 Example:

```jsx id="dbg1"
console.log('API Response:', data);
```

✔ Used for tracking state, props, API responses
✔ Helps identify UI and logic issues

---

### 143. What is Flipper?

Flipper is a **debugging platform developed by Meta for React Native apps**.

👉 It provides real-time debugging features:

✔ Network inspection
✔ Layout inspection
✔ Logs viewer
✔ React DevTools integration
✔ Performance monitoring

📌 Key feature:
You can see **API requests + UI layout + logs in one tool**

✔ Best modern debugging tool for React Native
✔ Works with both Android and iOS

---

### 144. What is Reactotron?

Reactotron is a **desktop debugging tool for React Native applications**.

👉 It helps monitor:

✔ Redux state changes
✔ API calls
✔ Logs and events
✔ Performance tracking

📌 Example use:

* Track Redux actions in real-time
* Inspect API responses

✔ Useful alternative to Flipper
✔ Mostly used in development

---

### 145. What is Jest?

Jest is a **JavaScript testing framework used for unit testing React Native apps**.

👉 It is used to test:

* Components
* Functions
* Redux logic
* API calls (mocked)

📌 Example test:

```jsx id="jest1"
test('adds numbers', () => {
  expect(2 + 2).toBe(4);
});
```

✔ Developed by Facebook
✔ Supports mocking and snapshots
✔ Default testing framework in React Native

---

### 🔥 Quick Summary

* Debugging → finding and fixing bugs
* Debug tools → console, Flipper, React DevTools
* Flipper → modern debugging platform (network + UI + logs)
* Reactotron → Redux + API debugging tool
* Jest → unit testing framework

---





Here are clear, interview-ready React Native testing answers:

---

### 146. What is unit testing?

Unit testing is the process of testing **individual components or functions in isolation**.

👉 In React Native, it checks:

* Functions
* Components
* Redux reducers
* Utility logic

📌 Example:

```jsx id="ut1"
test('adds numbers correctly', () => {
  expect(2 + 3).toBe(5);
});
```

✔ Fast and simple
✔ Uses Jest in React Native
✔ Ensures small parts work correctly

---

### 147. What is integration testing?

Integration testing checks **multiple components or modules working together**.

👉 It ensures that combined parts of the app work correctly.

📌 Example:

* Login screen + API + Redux store working together
* Form submission + validation + backend call

✔ Tests interaction between modules
✔ More realistic than unit tests
✔ Detects system-level issues

---

### 148. What is snapshot testing?

Snapshot testing is used to **capture the UI output of a component and compare it with future changes**.

👉 If UI changes unexpectedly, test fails.

📌 Example:

```jsx id="stp1"
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Button title="Click" />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

✔ Detects UI changes automatically
✔ Ensures UI consistency
✔ Common in React Native testing

---

### 149. What is Detox testing?

Detox is a **gray-box end-to-end testing framework for React Native apps**.

👉 It tests real user behavior on real devices/emulators.

📌 Features:
✔ Automated UI testing
✔ Runs on Android & iOS
✔ Simulates real user actions
✔ Works with CI/CD pipelines

📌 Example use:

* Login flow testing
* App navigation testing

✔ Used for production-level testing
✔ Very reliable for mobile apps

---

### 150. What is end-to-end testing?

End-to-end (E2E) testing checks the **entire application flow from start to finish as a real user would use it**.

👉 It tests:

* UI
* Backend APIs
* Navigation
* Database interactions

📌 Example:
User → Login → Browse products → Add to cart → Checkout

✔ Ensures full system works correctly
✔ Simulates real user behavior
✔ Tools: Detox, Appium

---

### 🔥 Quick Summary

* Unit testing → test individual functions/components
* Integration testing → test combined modules
* Snapshot testing → compare UI changes
* Detox → React Native E2E automation tool
* End-to-end testing → full app flow testing

---





Here are clear, interview-ready React Native answers:

---

### 151. How to test API calls?

API calls are tested by **mocking network requests instead of hitting real APIs**.

👉 Tools:
✔ Jest
✔ fetch-mock / axios-mock-adapter
✔ MSW (Mock Service Worker)

📌 Example (mock fetch):

```jsx id="api-test1"
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'Sai' }),
  })
);
```

📌 Test:

```jsx id="api-test2"
test('fetch user data', async () => {
  const res = await fetch('/user');
  const data = await res.json();
  expect(data.name).toBe('Sai');
});
```

✔ Avoids real network calls
✔ Makes tests fast and reliable

---

### 152. How to mock functions in Jest?

Mocking means **replacing real functions with fake ones for testing**.

📌 Example:

```jsx id="mock1"
const mockFn = jest.fn();

mockFn('hello');

expect(mockFn).toHaveBeenCalledWith('hello');
```

📌 Mock module:

```jsx id="mock2"
jest.mock('../api', () => ({
  getUser: jest.fn(),
}));
```

✔ Isolates components
✔ Avoids dependency issues
✔ Useful for API, navigation, services

---

### 153. How to debug crashes?

You can debug React Native crashes using:

✔ Console logs (`console.log`, `console.error`)
✔ Flipper crash logs
✔ Android Studio Logcat
✔ Xcode crash logs (iOS)
✔ Metro bundler terminal logs
✔ Sentry / Crashlytics (production monitoring)

📌 Steps:

1. Reproduce crash
2. Check logs
3. Identify stack trace
4. Fix root cause

✔ Helps find runtime errors
✔ Essential for production apps

---

### 154. How to check logs in Android and iOS?

👉 Android:
✔ Use **Logcat in Android Studio**

```bash id="log1"
adb logcat
```

👉 iOS:
✔ Use **Xcode console logs**
✔ Or run:

```bash id="log2"
npx react-native log-ios
```

📌 Also:
✔ Flipper logs (both platforms)
✔ Metro bundler terminal logs

✔ Helps debug native + JS issues

---

### 155. What is error boundary?

An Error Boundary is a **React component that catches JavaScript errors in child components and prevents app crash**.

👉 It handles:

* Rendering errors
* UI crashes

📌 Example:

```jsx id="eb1"
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Text>Something went wrong</Text>;
    }
    return this.props.children;
  }
}
```

✔ Prevents full app crash
✔ Shows fallback UI
✔ Improves user experience

👉 Note:

* Works only for rendering errors (not async errors)

---

### 🔥 Quick Summary

* API testing → mock fetch/axios
* Jest mocking → jest.fn(), jest.mock()
* Debug crashes → logs + Flipper + Crashlytics
* Android logs → Logcat
* iOS logs → Xcode console
* Error boundary → catches UI crashes

---





Here are clear, interview-ready React Native answers:

---

### 156. How to generate APK in React Native?

To generate an APK (Android application package), you build the **release version** of the app.

📌 Steps:

1. Go to android folder:

```bash id="apk1"
cd android
```

2. Generate release APK:

```bash id="apk2"
./gradlew assembleRelease
```

3. APK location:

```
android/app/build/outputs/apk/release/app-release.apk
```

✔ Used for testing and sharing apps manually
✔ Installable on Android devices

---

### 157. Difference between APK and AAB?

| Feature      | APK             | AAB (Android App Bundle)         |
| ------------ | --------------- | -------------------------------- |
| Full form    | Android Package | Android App Bundle               |
| Size         | Larger          | Smaller (optimized)              |
| Play Store   | Supported       | Required (Google Play mandatory) |
| Installation | Direct install  | Google Play generates APK        |
| Performance  | Normal          | Optimized per device             |

👉 Key point:

* APK = direct install file
* AAB = modern Play Store format

---

### 158. How to create release build?

A release build is a **production-ready version of the app**.

📌 Android steps:

1. Generate signing key:

```bash id="rb1"
keytool -genkey -v -keystore my-key.keystore -alias my-key -keyalg RSA -keysize 2048 -validity 10000
```

2. Configure `android/gradle.properties` and `build.gradle`

3. Build release APK/AAB:

```bash id="rb2"
./gradlew bundleRelease
```

📌 Output:

* APK → testing
* AAB → Play Store upload

✔ Optimized version of app
✔ Minified and secure

---

### 159. How to publish app on Play Store?

Steps to publish Android app:

📌 1. Create Google Play Developer account
📌 2. Build AAB file:

```bash id="ps1"
./gradlew bundleRelease
```

📌 3. Go to Google Play Console
📌 4. Create new app
📌 5. Upload AAB file
📌 6. Fill app details:

* Name
* Description
* Screenshots
* Privacy policy

📌 7. Set:

* Content rating
* Pricing (free/paid)
* Country availability

📌 8. Submit for review

✔ App goes live after approval

---

### 160. How to publish app on App Store?

Steps for iOS publishing:

📌 1. Enroll in Apple Developer Program
📌 2. Open Xcode project
📌 3. Set version & build number
📌 4. Create Archive:

```bash id="ios1"
Product → Archive
```

📌 5. Upload to App Store Connect
📌 6. Fill app metadata:

* Name
* Screenshots
* Description

📌 7. Submit for review

📌 8. Apple reviews app (takes 1–3 days)

✔ Strict review process
✔ Requires Mac + Xcode

---

### 🔥 Quick Summary

* APK → installable Android file
* AAB → Play Store optimized format
* Release build → production-ready app
* Play Store → upload AAB + metadata + review
* App Store → Xcode archive + Apple review

---





Here are clear, interview-ready React Native answers:

---

### 161. What is code signing?

Code signing is a **security process used to verify the authenticity of an app** before it is installed or published.

👉 It ensures the app:

* Is not modified or tampered
* Comes from a trusted developer

📌 Android:

* Uses **keystore (.jks file)**

📌 iOS:

* Uses **certificates + provisioning profiles**

✔ Required for Play Store & App Store
✔ Ensures app security and trust

---

### 162. What are environment variables?

Environment variables are **values used to configure app behavior without changing code**.

👉 Examples:

* API URLs
* Keys (Firebase, Stripe)
* Environment type (dev, staging, prod)

📌 Example:

```env id="env1"
API_URL=https://api.dev.com
```

📌 Usage:

```jsx id="env2"
import Config from "react-native-config";

console.log(Config.API_URL);
```

✔ Keeps sensitive data outside code
✔ Helps manage different environments

---

### 163. How to manage multiple environments?

You can manage multiple environments using:

✔ `.env` files
✔ `react-native-config`
✔ Build variants (Android)
✔ Xcode schemes (iOS)

📌 Example setup:

```env id="env3"
.env.development
.env.staging
.env.production
```

📌 Android:

* Product flavors (dev, prod)

📌 iOS:

* Schemes & configurations

✔ Helps separate API keys and settings
✔ Avoids manual code changes

---

### 164. What is Fastlane?

Fastlane is a **CI/CD automation tool used to automate mobile app deployment**.

👉 It helps automate:

* Build generation
* Code signing
* App Store upload
* Play Store deployment
* Screenshots generation

📌 Example:

```bash id="fl1"
fastlane android release
fastlane ios release
```

✔ Saves manual effort
✔ Reduces deployment errors
✔ Used in production pipelines

---

### 165. What is CI/CD?

CI/CD stands for:

✔ CI → Continuous Integration
✔ CD → Continuous Delivery / Deployment

👉 It automates the process of:

* Building app
* Running tests
* Deploying to stores or servers

📌 Flow:
Code → Git push → Build → Test → Deploy

✔ Tools:

* GitHub Actions
* Jenkins
* Bitrise
* CircleCI

✔ Benefits:

* Faster releases
* Fewer bugs
* Automated testing & deployment

---

### 🔥 Quick Summary

* Code signing → verifies app authenticity
* Env variables → store config safely
* Multi-environment → dev/staging/prod separation
* Fastlane → automate mobile builds & deployment
* CI/CD → automated build + test + deploy pipeline

---





Here are clear, interview-ready React Native answers:

---

### 166. How to automate deployment?

Automating deployment means **automatically building, testing, and releasing the app without manual effort**.

👉 You can achieve this using CI/CD tools:

✔ GitHub Actions
✔ Bitrise
✔ Jenkins
✔ CircleCI
✔ Fastlane

📌 Typical pipeline:

1. Code push to GitHub
2. Run tests (Jest, Detox)
3. Build APK/AAB or IPA
4. Upload to Play Store / App Store

📌 Example (Fastlane):

```bash id="ad1"
fastlane android release
fastlane ios release
```

✔ Reduces manual work
✔ Faster releases
✔ Fewer human errors

---

### 167. What are build flavors?

Build flavors are **different versions of the same app with different configurations** (mainly Android concept).

👉 Used for:

* Development
* Staging
* Production

📌 Example:

* `dev` → API dev server
* `staging` → testing environment
* `prod` → live users

📌 Android setup:

```gradle id="bf1"
productFlavors {
  dev {
    applicationIdSuffix ".dev"
  }
  prod {
    applicationIdSuffix ".prod"
  }
}
```

✔ Allows multiple environments in one project
✔ Useful for testing & production separation

---

### 168. What is OTA update?

OTA (Over-The-Air) update allows **updating JavaScript code of a React Native app without publishing a new version on Play Store/App Store**.

👉 It updates:

* JS code
* UI logic
* Bug fixes

👉 It does NOT update native code.

✔ Faster bug fixes
✔ No store approval needed

📌 Tools:

* CodePush (App Center)
* Expo Updates

---

### 169. What is CodePush?

CodePush is a **Microsoft service that enables OTA updates in React Native apps**.

👉 It allows:

* Instant JS updates
* No Play Store/App Store release needed

📌 Flow:
App → Checks CodePush server → Downloads update → Applies instantly

📌 Example:

```jsx id="cp1"
import CodePush from "react-native-code-push";

let App = () => {
  return <AppContent />;
};

export default CodePush()(App);
```

✔ Quick bug fixes
✔ Instant updates
✔ Reduces release cycle

---

### 170. How to handle app versioning?

App versioning is used to **track different releases of an app**.

👉 Types:

✔ Version Name → visible to users (e.g., 1.0.1)
✔ Version Code → internal build number

📌 Android:

```gradle id="av1"
versionCode 2
versionName "1.0.1"
```

📌 iOS:

* `CFBundleShortVersionString`
* `CFBundleVersion`

👉 Best practices:

* Increment versionCode for every release
* Use semantic versioning (MAJOR.MINOR.PATCH)
* Track builds in CI/CD

✔ Helps manage updates
✔ Required for store submissions

---

### 🔥 Quick Summary

* Automation → CI/CD + Fastlane
* Build flavors → dev/staging/prod builds
* OTA update → update JS without store release
* CodePush → tool for OTA updates
* Versioning → versionName + versionCode management

---





Here are clear, interview-ready TypeScript answers (React Native focused):

---

### 171. Why use TypeScript?

TypeScript is a **superset of JavaScript that adds static typing**.

👉 It helps catch errors at compile time instead of runtime.

📌 Benefits:
✔ Reduces runtime bugs
✔ Better code readability
✔ Improved IDE support (auto-completion)
✔ Easier refactoring in large apps
✔ Better team collaboration

📌 Example:

```ts id="ts1"
let name: string = "Sai";
name = 123; // ❌ Error
```

✔ Very useful in large React Native apps

---

### 172. Difference between type and interface?

| Feature     | type                     | interface                   |
| ----------- | ------------------------ | --------------------------- |
| Usage       | Defines any type         | Mainly for object structure |
| Extending   | Uses intersections (`&`) | Uses `extends`              |
| Re-openable | ❌ No                     | ✔ Yes (can be extended)     |
| Flexibility | More flexible            | More structured             |

📌 Example (interface):

```ts id="ti1"
interface User {
  name: string;
}
```

📌 Example (type):

```ts id="ti2"
type User = {
  name: string;
};
```

👉 Key point:

* Use `interface` for objects
* Use `type` for unions, primitives, complex types

---

### 173. What is generics in TypeScript?

Generics allow you to **create reusable components or functions with dynamic types**.

👉 They provide type safety with flexibility.

📌 Example:

```ts id="gen1"
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(10);
```

✔ Reusable code
✔ Strong type safety
✔ Used in APIs, lists, utilities

---

### 174. What is enum?

Enum is a **special TypeScript type used to define a set of named constants**.

📌 Example:

```ts id="enum1"
enum Status {
  SUCCESS,
  ERROR,
  LOADING
}
```

📌 Usage:

```ts id="enum2"
let state: Status = Status.SUCCESS;
```

👉 Types of enums:
✔ Numeric enum
✔ String enum

✔ Makes code more readable
✔ Avoids magic values

---

### 175. What is union type?

Union type allows a variable to hold **multiple types**.

📌 Example:

```ts id="ut1"
let value: string | number;

value = "Hello";
value = 123;
```

👉 Common use in React Native:

* API responses
* Props handling
* Flexible inputs

✔ Improves flexibility
✔ Still maintains type safety

---

### 🔥 Quick Summary

* TypeScript → adds static typing to JavaScript
* type vs interface → flexible vs structured
* Generics → reusable dynamic types
* enum → named constants
* union type → multiple possible types

---





Here are clear, interview-ready TypeScript + React Native answers:

---

### 176. What is optional chaining?

Optional chaining (`?.`) is used to **safely access deeply nested object properties without causing errors if a value is null or undefined**.

📌 Example:

```ts id="oc1"
const user = {
  profile: {
    name: "Sai"
  }
};

console.log(user.profile?.name);
console.log(user.address?.city); // undefined (no crash)
```

👉 Without optional chaining → app crashes
👉 With it → returns `undefined`

✔ Prevents runtime errors
✔ Very useful in API data handling

---

### 177. What is type inference?

Type inference means TypeScript **automatically determines the type of a variable without explicit annotation**.

📌 Example:

```ts id="ti1"
let name = "Sai"; // inferred as string
let age = 25;     // inferred as number
```

👉 You don’t need to write:

```ts
let name: string = "Sai";
```

✔ Reduces boilerplate
✔ Makes code cleaner
✔ Still type-safe

---

### 178. What is keyof in TypeScript?

`keyof` is used to **get all keys of a type as a union type**.

📌 Example:

```ts id="ko1"
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User; 
// "name" | "age"
```

👉 Use case:

* Access object properties safely
* Build reusable utility functions

📌 Example:

```ts id="ko2"
function getValue(obj: User, key: keyof User) {
  return obj[key];
}
```

✔ Ensures only valid keys are used
✔ Improves type safety

---

### 179. How to type props in React Native?

You can type props using **interface or type**.

📌 Using interface:

```tsx id="tp1"
interface Props {
  name: string;
  age: number;
}

const UserCard = ({ name, age }: Props) => {
  return null;
};
```

📌 Using type:

```tsx id="tp2"
type Props = {
  title: string;
};
```

✔ Ensures correct prop usage
✔ Prevents runtime errors
✔ Improves code readability

---

### 180. How to type API responses?

You define a **TypeScript type or interface for API response structure**.

📌 Example:

```ts id="api1"
type User = {
  id: number;
  name: string;
  email: string;
};
```

📌 Using in API call:

```ts id="api2"
const fetchUser = async (): Promise<User> => {
  const res = await fetch('/user');
  return res.json();
};
```

👉 With Axios:

```ts id="api3"
const fetchUser = async (): Promise<User> => {
  const res = await axios.get<User>('/user');
  return res.data;
};
```

✔ Ensures correct data structure
✔ Prevents API mismatch bugs
✔ Very important in large apps

---

### 🔥 Quick Summary

* Optional chaining → safe nested access (`?.`)
* Type inference → TypeScript auto-detects types
* keyof → extracts object keys as union
* Props typing → interface/type for components
* API typing → define response shape using interfaces/types

---





Here are clear, interview-ready React Native security answers:

---

### 181. How to secure API keys?

API keys should **never be hardcoded in the app code**, because mobile apps can be decompiled.

👉 Best practices:

✔ Store keys in environment variables (`.env`)
✔ Use backend proxy (best approach)
✔ Restrict API keys by domain/package name
✔ Use Firebase/App Check or API gateway
✔ Obfuscate code (extra protection, not full security)

📌 Example:

```env id="ak1"
API_KEY=your_key_here
```

```js id="ak2"
import Config from "react-native-config";

const key = Config.API_KEY;
```

👉 Best practice:
✔ Move sensitive logic to backend

---

### 182. How to store JWT tokens securely?

JWT tokens should be stored in **secure, encrypted storage**, not AsyncStorage.

👉 Recommended options:
✔ iOS Keychain
✔ Android Keystore
✔ `react-native-keychain`
✔ `expo-secure-store`

📌 Example:

```js id="jwt1"
import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('token', jwtToken);
```

👉 On usage:

```js id="jwt2"
const token = await SecureStore.getItemAsync('token');
```

✔ Prevents token theft
✔ Protects against reverse engineering

---

### 183. What is SSL pinning?

SSL pinning is a security technique where the app **trusts only a specific server certificate or public key**.

👉 Prevents:

* Man-in-the-middle (MITM) attacks
* Fake server interception

📌 How it works:
App → checks server certificate → allows connection only if matched

📌 Libraries:
✔ `react-native-ssl-pinning`

✔ Example use:

* Banking apps
* Payment apps

👉 Key point:
Even if attacker intercepts network, app will reject connection

---

### 184. How to prevent reverse engineering?

Reverse engineering means **someone decompiles your app to extract code or secrets**.

👉 Prevention techniques:

✔ Enable code obfuscation (ProGuard for Android)
✔ Enable Hermes engine (bytecode instead of JS)
✔ Remove debug logs in production
✔ Avoid storing secrets in app
✔ Use SSL pinning
✔ Minify JS bundle
✔ Detect rooted/jailbroken devices

📌 Android:

```gradle id="re1"
minifyEnabled true
shrinkResources true
```

✔ Makes app harder to read
✔ Increases security

---

### 185. What is data encryption?

Data encryption is the process of **converting readable data into unreadable format (cipher text)** to protect it from unauthorized access.

👉 Types:
✔ Symmetric encryption (same key)
✔ Asymmetric encryption (public/private key)

📌 Example use in apps:

* Encrypt stored tokens
* Encrypt sensitive user data
* Secure communication

📌 Example concept:

```
Hello → Encrypted → X9#kL2@p
```

✔ Protects data at rest and in transit
✔ Essential for banking & fintech apps

---

### 🔥 Quick Summary

* API keys → env + backend proxy + restrictions
* JWT storage → Keychain / SecureStore
* SSL pinning → blocks fake servers (MITM protection)
* Reverse engineering protection → obfuscation + Hermes + ProGuard
* Encryption → converts data into unreadable secure format

---





Here are clear, interview-ready React Native security answers:

---

### 186. How to secure authentication flow?

A secure authentication flow ensures **user identity is verified safely and tokens are protected**.

👉 Best practices:

✔ Use HTTPS for all API calls
✔ Use JWT access + refresh tokens
✔ Store tokens in Secure Storage (Keychain/Keystore)
✔ Short-lived access tokens
✔ Refresh token rotation
✔ Implement logout token invalidation on backend
✔ Add biometric authentication (optional layer)

📌 Flow:

1. User logs in
2. Backend returns access + refresh token
3. Store securely (SecureStore/Keychain)
4. Use access token for APIs
5. Refresh when expired

✔ Prevents unauthorized access
✔ Industry standard for mobile apps

---

### 187. What are common mobile security issues?

Common mobile security issues include:

❌ Storing sensitive data in AsyncStorage
❌ Hardcoding API keys
❌ Weak authentication (no token expiry)
❌ Lack of SSL pinning (MITM attacks)
❌ Reverse engineering of APK/IPA
❌ Unencrypted local storage
❌ Poor permission handling
❌ Insecure backend APIs

👉 Result risks:

* Data theft
* Account hijacking
* API abuse

✔ Must be handled in production apps

---

### 188. How to prevent sensitive data leaks?

To prevent data leaks:

✔ Use Secure Storage (Keychain/Keystore)
✔ Never store tokens in AsyncStorage
✔ Enable SSL/TLS (HTTPS only)
✔ Use SSL pinning
✔ Obfuscate code (ProGuard/Hermes)
✔ Disable logs in production
✔ Avoid exposing secrets in frontend
✔ Use backend for sensitive operations

📌 Example:

```js id="sd1"
await SecureStore.setItemAsync('token', jwt);
```

✔ Protects user credentials
✔ Prevents reverse engineering leaks

---

### 189. What is OAuth?

OAuth (Open Authorization) is a **secure authentication protocol that allows users to log in using third-party services without sharing passwords**.

👉 Example:

* Login with Google
* Login with Facebook
* Login with GitHub

📌 Flow:

1. User clicks "Login with Google"
2. Redirect to Google login
3. Google returns access token
4. App uses token for authentication

✔ No password sharing with app
✔ Secure delegated access
✔ Widely used in modern apps

---

### 190. What is biometric authentication security?

Biometric authentication uses **fingerprint, face ID, or iris scan** to verify user identity securely.

👉 Advantages:
✔ Hard to fake
✔ Fast authentication
✔ No password needed

📌 React Native example:

```js id="bi1"
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

rnBiometrics.simplePrompt({ promptMessage: 'Confirm identity' })
  .then(result => {
    if (result.success) {
      console.log('Authenticated');
    }
  });
```

👉 Security notes:
✔ Biometrics are stored in device secure hardware (not app)
✔ App only receives success/failure result
✔ Cannot access raw biometric data

---

### 🔥 Quick Summary

* Secure auth flow → JWT + secure storage + refresh tokens
* Mobile security issues → insecure storage, weak auth, no encryption
* Prevent leaks → SecureStore + SSL + obfuscation + no hardcoding
* OAuth → login via third-party without sharing password
* Biometrics → fingerprint/face authentication via device hardware

---





Here are strong, interview-ready answers you can **customize for your real React Native project**. I’ll give a **professional “frontend developer style” answer format** you can speak in interviews.

---

## 191. Explain your recent React Native project

In my recent React Native project, I worked on a **mobile application for [e-commerce / fintech / healthcare / booking system]** where users can **register, log in, browse data, and perform transactions or actions based on the app domain**.

👉 Key features:

* User authentication (login/signup)
* API-based data listing with pagination
* Search and filter functionality
* State management using Redux Toolkit / Context API
* Offline support for basic data caching
* Push notifications for updates

👉 Tech stack:

* React Native (CLI)
* Redux Toolkit / Context API
* REST APIs (Axios)
* AsyncStorage / Secure Storage
* React Navigation

✔ Focus was on performance, clean UI, and scalable architecture.

---

## 192. What challenges did you face in your project?

Some key challenges I faced:

👉 Performance issues in large lists

* Solved using FlatList optimization, memoization, pagination

👉 API latency and failures

* Handled using loading states, retry mechanism, and error boundaries

👉 State management complexity

* Solved by structuring Redux slices properly

👉 Cross-platform UI differences

* Handled using platform-specific styling and responsive design

👉 Authentication token handling

* Solved using secure storage and refresh token flow

✔ Overall, challenges improved my understanding of production-level mobile apps.

---

## 193. How did you optimize app performance?

I optimized performance using multiple techniques:

✔ Used FlatList instead of ScrollView for large datasets
✔ Implemented `React.memo`, `useMemo`, `useCallback`
✔ Reduced unnecessary re-renders
✔ Used pagination and lazy loading
✔ Optimized images (compressed + cached)
✔ Enabled Hermes engine
✔ Avoided inline functions in render methods
✔ Used debouncing for search APIs

👉 Result:
Improved smooth scrolling and reduced memory usage significantly.

---

## 194. How did you handle state management?

I used **Redux Toolkit (or Context API depending on app size)**.

👉 Structure:

* Slices for feature-wise state (auth, user, products)
* Async API calls using `createAsyncThunk`
* Centralized store for global state

📌 Example:

* Auth state → login/logout
* Product state → listing + pagination
* Cart state → add/remove items

✔ Benefits:

* Predictable state flow
* Easier debugging
* Better scalability

---

## 195. How did you implement authentication?

Authentication was implemented using **JWT-based secure login system**.

👉 Flow:

1. User logs in with credentials
2. Backend returns access + refresh token
3. Tokens stored in Secure Storage (not AsyncStorage)
4. Access token used for API requests
5. Refresh token used to renew session

👉 Enhancements:

* Auto logout on token expiry
* Biometric login (optional)
* Protected routes using navigation guards

✔ Ensures secure and scalable authentication system.

---

## 196. How did you manage API integration?

I used **Axios for API integration** with a structured approach.

👉 Steps:
✔ Created centralized API service layer
✔ Used interceptors for token injection
✔ Handled errors globally
✔ Implemented retry logic for failed requests
✔ Used loading states for UX

📌 Example structure:

* api/

  * authService.js
  * productService.js
  * apiClient.js

👉 Improvements:

* Reduced duplicate code
* Better maintainability
* Easier debugging

---

## 🔥 Final Interview Tip

If interviewer asks follow-up:
👉 Always add:

* “I focused on performance optimization”
* “I used scalable architecture”
* “I followed industry best practices”

---





Here are strong, interview-ready answers you can confidently speak (React Native frontend developer level):

---

## 197. How did you handle app crashes?

I handled app crashes using a combination of **debugging, error handling, and monitoring tools**.

👉 Steps I followed:

✔ Used **Error Boundaries** to prevent UI crashes
✔ Added global error handling using `try/catch`
✔ Used **Flipper and Logcat/Xcode logs** to trace crashes
✔ Integrated **Crashlytics / Sentry** for production monitoring
✔ Handled API failures with proper fallback UI
✔ Cleaned up memory leaks (timers, subscriptions)

📌 Example:

* If API fails → show fallback UI instead of crashing screen

✔ Result: Reduced unexpected app crashes significantly in production.

---

## 198. How did you improve app loading speed?

I improved app performance using multiple optimization techniques:

👉 Frontend optimizations:

✔ Used FlatList instead of ScrollView
✔ Implemented pagination & lazy loading
✔ Reduced unnecessary re-renders using `React.memo`, `useMemo`, `useCallback`
✔ Enabled Hermes engine for faster startup
✔ Optimized images (compressed + caching)
✔ Removed heavy libraries and unused dependencies
✔ Used code splitting (lazy loading screens)

👉 API optimizations:
✔ Added caching layer
✔ Reduced API calls using debounce
✔ Used efficient API response structure

✔ Result: Faster initial load and smoother UI experience.

---

## 199. Have you worked with native modules?

Yes, I have worked with native modules in React Native.

👉 Native modules are used when:

* Functionality is not available in JavaScript
* Need direct access to device features

📌 Examples I’ve used/understood:
✔ Camera integration
✔ Location services
✔ File system access
✔ Push notifications (FCM)
✔ Biometric authentication

👉 I used libraries like:

* `react-native-image-picker`
* `react-native-geolocation-service`
* `react-native-firebase`

✔ I understand how JS communicates with native code using Bridge / JSI.

👉 Key point in interview:
Even if not building native modules from scratch, I understand **how they work internally and when to use them**.

---

## 200. How did you deploy your app?

I deployed React Native apps for both **Android and iOS platforms**.

---

### 📌 Android Deployment:

✔ Generated signed APK/AAB
✔ Configured keystore for code signing
✔ Used Gradle release build:

```bash id="d1"
./gradlew bundleRelease
```

✔ Uploaded AAB to **Google Play Console**
✔ Added:

* App details
* Screenshots
* Privacy policy
* Content rating

✔ Submitted for review and published

---

### 📌 iOS Deployment:

✔ Used Xcode archive build
✔ Configured certificates & provisioning profiles
✔ Uploaded build via App Store Connect
✔ Filled metadata and screenshots
✔ Submitted for Apple review

---

👉 Tools used:

* Fastlane (for automation in some projects)
* CI/CD pipelines (GitHub Actions / Bitrise)

✔ Result: Smooth production releases with minimal manual effort.

---

## 🔥 Final Interview Summary

* Crashes → Error boundaries + Crashlytics + proper handling
* Performance → FlatList, memoization, lazy loading, Hermes
* Native modules → device-level features via native bridge
* Deployment → AAB/APK (Android) + Xcode/App Store (iOS)

---





////Here are strong, interview-ready React Native answers:

---

## 201. Have you integrated Firebase?

Yes, I have integrated Firebase in React Native projects.

👉 I have used Firebase services like:

✔ Firebase Authentication (email/password, Google login)
✔ Cloud Firestore (real-time database)
✔ Firebase Cloud Messaging (push notifications)
✔ Firebase Analytics (user tracking)
✔ Crashlytics (crash reporting)

📌 Example use case:

* User login with Firebase Auth
* Store user data in Firestore
* Send notifications using FCM

✔ It helped reduce backend complexity and speed up development.

---

## 202. How did you implement push notifications?

I implemented push notifications using **Firebase Cloud Messaging (FCM)**.

👉 Flow:

1. Get device token using FCM
2. Send token to backend
3. Backend triggers notification
4. Device receives notification

📌 Example:

```js id="pn1"
import messaging from '@react-native-firebase/messaging';

const token = await messaging().getToken();
console.log(token);
```

👉 Types handled:
✔ Foreground notifications
✔ Background notifications
✔ Silent notifications

👉 Enhancements:

* Deep linking on notification click
* Notification customization
* Handling permission requests

✔ Used in chat apps, alerts, and reminders.

---

## 203. How do you handle offline mode?

I handle offline mode using a combination of **local storage and network detection**.

👉 Approach:

✔ Used NetInfo to detect network status
✔ Stored data locally using AsyncStorage / SQLite / Realm
✔ Cached API responses
✔ Synced data when internet is back

📌 Example flow:

1. User action stored locally
2. App detects offline state
3. Data saved in local DB
4. Sync happens when online

✔ Libraries used:

* `@react-native-community/netinfo`
* AsyncStorage / SQLite / Realm

✔ Result:
App works smoothly even without internet.

---

## 204. How do you structure large React Native apps?

I follow a **modular and scalable folder structure**.

👉 Example structure:

```
src/
  components/      → reusable UI components
  screens/         → app screens
  navigation/      → navigation setup
  services/        → API calls
  store/           → Redux slices
  hooks/           → custom hooks
  utils/           → helper functions
  assets/          → images, fonts
  constants/       → app constants
```

👉 Best practices:

✔ Feature-based architecture (auth, product, cart)
✔ Separate business logic from UI
✔ Centralized API layer
✔ Reusable components
✔ Scalable state management (Redux Toolkit / Context)

✔ Result: Easy maintenance and team collaboration.

---

## 205. How do you manage reusable components?

I manage reusable components by creating a **shared component library inside the project**.

👉 Approach:

✔ Created components like:

* Button
* Input field
* Card
* Loader
* Modal

✔ Followed props-driven design:

```jsx id="rc1"
const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);
```

👉 Best practices:
✔ Keep components small and single-purpose
✔ Use props for customization
✔ Avoid business logic inside UI components
✔ Maintain consistent design system

✔ Result:
Faster development and consistent UI across app.

---

## 🔥 Quick Interview Summary

* Firebase → Auth, Firestore, FCM, Analytics
* Push notifications → FCM + device token + backend trigger
* Offline mode → NetInfo + local storage + sync logic
* App structure → modular, feature-based architecture
* Reusable components → prop-driven, reusable UI library

---




Here are strong, interview-ready React Native answers:

---

## 206. How do you handle form validation?

I handle form validation using **React Hook Form + validation libraries like Yup or custom logic**.

👉 Approach:

✔ Used `react-hook-form` for form state
✔ Used `Yup` for schema validation
✔ Showed inline error messages
✔ Validated on submit or onChange

📌 Example:

```js id="fv1"
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
```

👉 Key points:

* Real-time validation
* Error handling per field
* Disable submit button if invalid

✔ Result: Clean, scalable form handling

---

## 207. How do you manage environment variables?

I manage environment variables using **`.env` files and react-native-config**.

👉 Approach:

✔ Separate files for environments:

```
.env.development
.env.staging
.env.production
```

📌 Example:

```env id="env1"
API_URL=https://api.dev.com
```

📌 Usage:

```js id="env2"
import Config from "react-native-config";

console.log(Config.API_URL);
```

👉 Best practices:
✔ Never hardcode API keys
✔ Use different configs for dev/staging/prod
✔ Secure sensitive values via backend when possible

✔ Result: Safe and scalable configuration management

---

## 208. How do you handle deep linking?

I handle deep linking using **React Navigation linking configuration**.

👉 Approach:

✔ Defined URL schema
✔ Mapped URLs to screens
✔ Handled params for navigation

📌 Example:

```js id="dl1"
const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: 'home',
      Product: 'product/:id',
    },
  },
};
```

👉 Use cases:

* Open product directly from notification
* Email links opening specific screens

✔ Supports both Android & iOS
✔ Improves user experience and engagement

---

## 209. How do you debug production issues?

In production, I use **monitoring tools instead of console logs**.

👉 Tools used:

✔ Firebase Crashlytics
✔ Sentry error tracking
✔ Analytics tools (Firebase Analytics)
✔ Backend logs
✔ Play Store / App Store crash reports

👉 Approach:

1. Identify crash report
2. Check stack trace
3. Reproduce issue locally
4. Fix and release patch

✔ Also added:

* Error boundaries for UI protection
* Logging critical events

✔ Result: Faster issue detection and resolution

---

## 210. What improvements would you make in your current project?

If I improve my current project, I would focus on:

👉 Performance:
✔ Improve FlatList optimization
✔ Add better caching mechanism
✔ Reduce unnecessary re-renders

👉 Architecture:
✔ Move to more modular feature-based structure
✔ Improve separation of concerns

👉 Security:
✔ Add SSL pinning
✔ Strengthen authentication flow

👉 UX:
✔ Improve loading skeletons
✔ Better error handling screens
✔ Offline-first support

👉 Dev Experience:
✔ Add better CI/CD pipeline
✔ Increase test coverage (unit + E2E)

✔ Overall goal: make app more scalable, secure, and performant

---

## 🔥 Quick Interview Summary

* Forms → React Hook Form + Yup
* Env variables → react-native-config + .env files
* Deep linking → React Navigation linking config
* Debug production → Crashlytics + Sentry + logs
* Improvements → performance, architecture, security, UX, CI/CD

---





Below are **strong, interview-ready answers** for React Native frontend developer role. You can speak them naturally and adjust with your real experience.

---

## 211. Tell me about yourself

I am a Frontend Developer with experience in building mobile applications using **React Native, JavaScript, and TypeScript**. I have worked on developing scalable apps with features like authentication, API integration, state management using Redux Toolkit, and performance optimization.

I also focus on writing clean, reusable components and improving app performance using best practices like FlatList optimization, memoization, and lazy loading.

Along with React Native, I have knowledge of REST APIs, Firebase integration, and basic CI/CD deployment processes. I enjoy solving UI/UX challenges and building smooth user experiences for mobile applications.

---

## 212. Why React Native?

I chose React Native because it allows **cross-platform development using a single codebase**, which saves development time and cost.

It also provides:

* Fast development using reusable components
* Strong community support
* Near-native performance
* Easy integration with native modules when needed

As a frontend developer, it helps me build both Android and iOS apps efficiently.

---

## 213. Why should we hire you?

You should hire me because I have strong skills in **React Native, JavaScript, and mobile app development fundamentals**.

I understand both UI development and backend integration, and I focus on:

* Writing clean and maintainable code
* Optimizing app performance
* Building scalable architecture
* Solving real-world production issues

I am also a quick learner and adaptable to new technologies, which helps me contribute effectively to the team.

---

## 214. What are your strengths?

My strengths are:

* Strong problem-solving skills
* Good understanding of React Native architecture
* Performance optimization techniques
* Writing reusable and modular components
* Quick learning ability
* Team collaboration and communication

---

## 215. What are your weaknesses?

One of my weaknesses is that sometimes I spend extra time optimizing small details in code. However, I am improving this by focusing more on **balancing performance and deadlines**.

Another area I am working on is gaining deeper knowledge of native modules and advanced system design.

---

## 216. Why do you want to switch company?

I want to switch to explore more challenging projects and grow as a React Native developer.

I am looking for opportunities where I can work on:

* Large-scale applications
* Better architecture and performance optimization
* Real production-level systems
* Learning from experienced developers

This will help me improve my skills and contribute more effectively.

---

## 217. Describe a difficult bug you solved

In one project, I faced an issue where the app was crashing randomly during navigation and API calls.

After debugging using Flipper and logs, I found that:

* Multiple API calls were triggering unnecessary re-renders
* Some components were not properly cleaned up

I fixed it by:

* Using `useEffect` cleanup functions
* Applying `React.memo` and `useCallback`
* Optimizing state updates in Redux

This improved app stability and performance significantly.

---

## 218. How do you handle deadlines?

I handle deadlines by:

* Breaking tasks into smaller modules
* Prioritizing critical features first
* Using Agile approach (sprint planning)
* Communicating early if blockers arise

I always focus on delivering working features on time without compromising quality.

---

## 219. Have you worked in Agile methodology?

Yes, I have worked in Agile environments.

We followed:

* Sprint planning
* Daily stand-ups
* Sprint reviews and retrospectives

It helped in improving collaboration, tracking progress, and delivering features in iterations.

---

## 220. How do you learn new technologies?

I learn new technologies by:

* Reading official documentation
* Building small demo projects
* Watching technical tutorials
* Practicing real-world use cases

I prefer hands-on learning because it helps me understand concepts deeply.

---

## 221. How do you handle team conflicts?

I handle conflicts by:

* Listening to both perspectives
* Understanding the root cause
* Focusing on technical facts instead of opinions
* Discussing and finding a common solution

I believe communication and clarity solve most conflicts.

---

## 222. What motivates you?

I am motivated by:

* Solving complex technical problems
* Building smooth and scalable applications
* Learning new technologies
* Seeing my work impact real users

---

## 223. Where do you see yourself in 5 years?

In the next 5 years, I see myself as a **senior React Native developer or mobile architect**, working on large-scale applications and leading development teams.

I also want to gain expertise in system design and performance optimization.

---

## 224. What is your expected salary?

My expectation is based on my skills, experience, and industry standards. I am open to discussing a **fair and competitive salary based on the role and responsibilities**.

My priority is to grow technically and contribute to the company’s success.

---

## 225. Do you have questions for us?

Yes, I have a few questions:

* What does a typical project workflow look like in your team?
* What technologies do you primarily use for mobile development?
* How is performance and code quality maintained in your projects?
* What opportunities are there for learning and growth?

---



