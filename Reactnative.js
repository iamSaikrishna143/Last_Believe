// 🚀 React Native Interview Questions (1-Year Experience)
// 🟦 1. JavaScript Interview Questions

// These will almost surely be asked.

// 1. What is the difference between var, let, and const?
// var: function-scoped, can be redeclared and updated.
// let: block-scoped, can be updated but not redeclared.
// const: block-scoped, cannot be updated or redeclared.


// 2. What are arrow functions?
// Arrow functions provide a shorter syntax for writing functions and do not have their own 'this' context. 
// They are often used for non-method functions and callbacks.


// 3. What is a closure? Give an example.
// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
// Example:
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   }
// }
// const counter = outer();
// console.log(counter()); // 1
// console.log(counter()); // 2


// 4. What is hoisting in JavaScript?
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function).
// This means that variables and functions can be used before they are declared.
// example:
// console.log(x); // undefined
// var x = 5;


// 5. What are promises? How does async/await work?
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
// async/await is syntactic sugar built on top of promises, allowing for cleaner and more readable asynchronous code.
// An async function returns a promise, and the await keyword pauses the execution until the promise is resolved.


// 6. Difference between == and ===?
// == checks for value equality with type coercion, while === checks for both value and type equality without coercion.

// 7. What is event loop in JavaScript?
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the
//  browser or Node.js APIs and executing them asynchronously.


// 8. What is destructuring and spread operator?
// Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.
// The spread operator (...) allows an iterable such as an array or object to be expanded in places where zero or more arguments or elements are expected.


// 9. What is the difference between map, filter, and reduce?
// map: creates a new array by applying a function to each element of the original array.
// filter: creates a new array with all elements that pass the test implemented by the provided function.
// reduce: executes a reducer function on each element of the array, resulting in a single output value.
// Example:
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]
// const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
// const sum = numbers.reduce((acc, n) => acc + n, 0); // 10

// 10. What is callback function?
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Example:
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }
// fetchData(data => console.log(data)); // "Data received" after 1 second

// 🟩 2. React Basics Questions
// 1. What are functional components?
// Functional components are JavaScript functions that return React elements (JSX). They are simpler and easier to write than class components and can use hooks to manage state and lifecycle methods.

// 2. What are props?
// Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to be passed down the component tree and help make components reusable.

// 3. What is state?
// State is a built-in object in React that stores data or information about the component. It is local to the component and can be updated using setState().

// 4. Difference between props and state?
// Props are passed from parent to child and are read-only, while state is managed within the component and can be changed.


// 5. What is JSX?
// JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code within JavaScript, which React then transforms into React elements.

// 6. What are Hooks in React?
// Hooks are special functions that allow you to use state and other React features in functional components. Examples include useState, useEffect, useContext, etc.


// 7. Why do we use useState?
// useState is a Hook that allows you to add state to functional components. It returns a stateful value and a function to update it, enabling components to manage and respond to user input or other changes.
// Example:
// const [count, setCount] = useState(0);
// setCount(count + 1); // updates the count state


// 8. Why do we use useEffect?
// useEffect is a Hook that lets you perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the component renders and can be configured to run only when certain dependencies change.
// Example:
// useEffect(() => {
//   document.title = `You clicked ${count} times`;
// }, [count]); // only re-run the effect if count changes

// 9. What is component lifecycle?
// Component lifecycle refers to the series of methods that are invoked at different stages of a component's existence, 
// from creation to destruction. In functional components, lifecycle methods are managed using Hooks like useEffect.


// 10. What is conditional rendering?
// Conditional rendering in React allows you to render different UI elements or components based on certain conditions, typically using JavaScript conditional statements like if, ternary operators, or logical &&.    
// Example:
// {isLoggedIn ? <LogoutButton /> : <LoginButton />}


// 🟧 3. React Native Core Questions
// 1. What is React Native?
// React Native is an open-source framework developed by Facebook that allows developers to build mobile applications using JavaScript and React. It enables the creation of natively rendered apps for iOS and Android using a single codebase.


// 2. Difference between React vs React Native?
// React is a JavaScript library for building user interfaces, primarily for web applications, while React Native is a framework for building mobile applications using React. React uses HTML and CSS for layout and styling, 
// whereas React Native uses native components and styles specific to mobile platforms.


// 3. What is the use of StyleSheet?
// StyleSheet is a React Native module that allows you to create and manage styles for your components in a structured and efficient way. It provides a way to define styles using JavaScript objects, which are then converted to native styles for better performance.


// 4. Explain Flexbox in React Native.
// Flexbox is a layout system in React Native that allows you to design responsive and flexible layouts. It provides a way to arrange components in rows or columns, control their alignment, distribution, and spacing using properties like flexDirection, justifyContent, alignItems, and flexWrap.


// 5. Difference between ScrollView and FlatList?
// ScrollView is a component that renders all its child components at once, making it suitable for small lists or static content.
// FlatList, on the other hand, is optimized for large lists and only renders items that are currently visible on the screen, improving performance and memory usage.

// 6. Why is FlatList more performant?
// FlatList is more performant because it uses lazy loading and virtualization techniques to only render the items that are currently visible on the screen.


// 7. What is SectionList?
// SectionList is a component in React Native that renders a list of items grouped into sections. It is useful for displaying categorized data, such as contacts grouped by the first letter of their names.


// 8. What is SafeAreaView?
// SafeAreaView is a component in React Native that ensures that the content of your app is rendered within the safe area boundaries of a device, avoiding notches, status bars, and other screen obstructions.

// 9. How do you make UI responsive in RN?
// Flexbox layout
// Percentage-based dimensions
// Dimensions API
// useWindowDimensions Hook
// Media queries with libraries like react-native-responsive-screen


// 10. How do you handle different screen sizes?
// Flexbox layout

// Dimensions API

// useWindowDimensions

// percentage width/height

// 🟨 4. Navigation (React Navigation)
// 1. What types of navigators are available?


// Stack

// Bottom Tab

// Drawer

// 2. How do you pass params between screens?
// Using navigate() method with params
// Example:
// navigation.navigate('Details', { itemId: 42, otherParam: 'anything you want here' });


// 3. What is useNavigation?
// useNavigation is a Hook provided by React Navigation that gives access to the navigation object. It allows you to navigate between screens, go back, and access navigation state from any component within a navigator.


// 4. navigate() vs push()?
// navigate() navigates to a screen, and if that screen is already in the stack, it goes back to it instead of creating a new instance.
// push() always creates a new instance of the screen, even if it is already in the stack.


// 5. What is useRoute()?
// useRoute is a Hook provided by React Navigation that gives access to the route object for the current screen. It allows you to access route parameters and other route-related information.

// 6. What is deep linking?
// Deep linking is a mechanism that allows you to link directly to specific screens or content within a mobile app using a URL. It enables users to open the app from external sources, such as web pages, emails, or other apps, and navigate to a specific part of the app.


// 7. What is useFocusEffect() used for?
// useFocusEffect is a Hook provided by React Navigation that allows you to run side effects when a screen comes into focus. It is useful for fetching data or updating the UI whenever the user navigates to that screen.


// 🟥 5. API Integration

// 1. How do you call API in React Native?
// Using Fetch API

// Using Axios


// 2. Difference between Fetch and Axios?
// Fetch is a built-in web API for making HTTP requests, while Axios is a third-party library that provides additional features like request/response interceptors, automatic JSON transformation, and better error handling.


// 3. What is async/await and why used?
// async/await is a syntax for handling asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until a promise is resolved.

// 4. How do you handle API errors?
// Using try/catch blocks with async/await

// Using .catch() with promises


// 5. How do you show loading & error states?
// Using state variables to track loading and error states

// Conditional rendering based on these states


// 6. How do you store tokens?
// Using AsyncStorage to store tokens securely on the device

// 7. What is JWT?
// JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web and mobile applications.

// 8. How do you protect API calls?
// By including authentication tokens (like JWT) in the request headers
// Using HTTPS to encrypt data in transit
// Implementing proper error handling and validation on the server side

// 9. What is debouncing and throttling?
// Debouncing is a technique used to limit the rate at which a function is executed. It ensures that a function is only called after a specified delay has passed since the last time it was invoked. This is useful for scenarios like search input, where you want to wait until the user has stopped typing before making an API call.
// Throttling, on the other hand, ensures that a function is only called at most once in a specified time interval, regardless of how many times it is invoked. This is useful for scenarios like scrolling or resizing events, where you want to limit the frequency of function calls to improve performance.


// 10. How do you use async storage with API?
// Using AsyncStorage to store and retrieve tokens or other data needed for API calls
// Example:
// Storing token:
// await AsyncStorage.setItem('token', response.data.token);
// Retrieving token:
// const token = await AsyncStorage.getItem('token');
// Including token in API call headers:
// axios.get('/endpoint', { headers: { Authorization: `Bearer ${token}` } });


// 🟦 6. State Management (Redux/Context)
// 1. What is Redux?
// Redux is a predictable state container for JavaScript applications. It helps manage the application state in a centralized store, allowing components to access and update the state in a consistent manner. Redux follows a unidirectional data flow, making it easier to debug and maintain complex applications.

// 2. What is Redux Toolkit?
// Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It provides a set of utilities and abstractions to simplify common Redux tasks, such as store setup, reducer creation, and immutable state updates. Redux Toolkit helps reduce boilerplate code and promotes best practices in Redux development.

// 3. What is a reducer?
// A reducer is a pure function that takes the current state and an action as arguments and returns a new state. It specifies how the application's state changes in response to actions sent to the store. Reducers must not mutate the state directly; instead, they should return a new state object.

// 4. What are actions?
// Actions are plain JavaScript objects that represent an intention to change the state. They must have a type property that indicates the type of action being performed. Actions can also include additional data (payload) needed to update the state. Actions are dispatched to the store, where reducers handle them to produce a new state.

// 5. What is dispatch?
// Dispatch is a function provided by the Redux store that allows you to send actions to the store. When an action is dispatched, the store invokes the appropriate reducer(s) to update the state based on the action type and payload. Dispatching actions is the primary way to trigger state changes in a Redux application.

// 6. What is a selector?
// A selector is a function that extracts specific pieces of state from the Redux store. Selectors help encapsulate the logic for accessing state, making it easier to reuse and maintain. They can also be optimized using libraries like Reselect to memoize computed values and improve performance.

// 7. How do you manage async calls in Redux?



// (Thunk / RTK Query)

// 8. Difference between Context API and Redux?
// Context API is a built-in React feature for passing data through the component tree without prop drilling, suitable for simple state management.
// Redux is a more powerful and scalable state management library that provides a centralized store, suitable for complex applications with extensive state management needs.

// 9. What is immutability?
// Immutability is the concept of not modifying existing data structures but instead creating new ones when changes are needed. In Redux, immutability is crucial because it allows for predictable state updates, easier debugging, and efficient change detection through shallow comparisons.

// 10. What is store in Redux?
// The store is a centralized object in Redux that holds the entire state of the application. It is created using the createStore() function and provides methods to access the state, dispatch actions, and subscribe to state changes. The store is the single source of truth for the application's state.

// 🟪 7. Authentication & Storage

// 1. What is AsyncStorage?
// AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It is used in React Native to store small amounts of data locally on the device, such as user preferences, tokens, or settings.

// 2. How do you store login tokens?
// Using AsyncStorage to store tokens securely on the device
// Example:
// await AsyncStorage.setItem('token', response.data.token);


// 3. How to implement auto login?
// On app launch, check for stored token in AsyncStorage
// If token exists and is valid, navigate to the main app screen
// If no token or invalid, navigate to the login screen

// 4. How to implement logout?
// Clear stored token from AsyncStorage
// Navigate user to the login screen

// 5. How to secure tokens?
// Use secure storage libraries like react-native-keychain or react-native-sensitive-info
// Encrypt tokens before storing them
// Use HTTPS for all API calls


// 6. How to check first-time user (onboarding)?
// On app launch, check for a specific flag in AsyncStorage (e.g., 'hasOnboarded')
// If the flag is not set, navigate to the onboarding screens
// After onboarding is complete, set the flag in AsyncStorage


// 7. How do you handle protected screens?


// (If user not logged → redirect to Login)

// 🟫 8. UI Libraries & Forms
// 1. Have you used any UI libraries?

// React Native Paper

// NativeBase

// UI Kitten

// 2. What is Formik?
// Formik is a popular library for building and managing forms in React and React Native applications. It simplifies form handling by providing tools for managing form state, validation, and submission. Formik helps reduce boilerplate code and makes it easier to create complex forms with minimal effort.

// 3. How do you validate forms using Yup?
// Yup is a JavaScript schema builder for value parsing and validation. It is often used in conjunction with Formik to define validation schemas for forms. You can create a Yup schema that specifies the validation rules for each form field, and Formik will use this schema to validate the form data before submission.
// Example:
// import * as Yup from 'yup';
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });


// 4. What is Lottie?
// Lottie is a library for rendering animations in mobile and web applications. It allows you to use animations created in Adobe After Effects and exported as JSON files using the Bodymovin plugin. Lottie provides a way to easily integrate high-quality animations into your React Native apps with minimal performance impact.

// 5. What are icons libraries you used?
// React Native Vector Icons

// Expo Vector Icons

// 🔵 9. Device Features

// 1. How to access Camera?
// Using react-native-camera or expo-camera libraries to access the device camera and capture photos or videos.

// 2. How to pick images?
// Using react-native-image-picker or expo-image-picker libraries to allow users to select images from their device gallery or take new photos using the camera.

// 3. How to request permissions?
// Using react-native-permissions or Expo Permissions API to request and manage permissions for accessing device features like camera, location, contacts, etc.

// 4. What is Linking API?
// Linking API is a React Native module that provides a way to interact with both incoming and outgoing app links. It allows you to open external URLs, handle deep links, and navigate to specific screens within your app based on URL schemes.

// 5. How to open external URLs?
// Using Linking.openURL() method to open external URLs in the device's default web browser or other apps.
// Example:
// import { Linking } from 'react-native';
// Linking.openURL('https://www.example.com');

// 6. How to use location API?
// Using react-native-geolocation-service or Expo Location API to access the device's location services and retrieve the user's current location or track location changes.


// 7. How push notifications work?
// Using libraries like react-native-push-notification or Expo Notifications to implement push notifications in React Native apps. This involves setting up a notification service (like Firebase Cloud Messaging), configuring the app to receive notifications, and handling notification events.

// 🟣 10. Performance Optimization
// 1. What is React.memo?
// React.memo is a higher-order component that memoizes a functional component, preventing unnecessary re-renders when the component's props have not changed. It performs a shallow comparison of the props and only re-renders the component if there are changes, improving performance in certain scenarios.

// 2. What is useCallback?
// useCallback is a Hook that returns a memoized version of a callback function. It is used to prevent unnecessary re-creations of functions on every render, which can help optimize performance, especially when passing callbacks to child components that rely on reference equality to avoid re-renders.


// 3. What is useMemo?
// useMemo is a Hook that memoizes the result of a computation. It only recomputes the value when one of its dependencies changes, helping to optimize performance by avoiding expensive calculations on every render.

// 4. How to optimize FlatList?
// Use keyExtractor for stable keys
// Implement getItemLayout for fixed-height items
// Use initialNumToRender and maxToRenderPerBatch props
// Avoid anonymous functions in renderItem
// Use React.memo for item components


// 5. What causes re-renders?
// State or props changes
// Parent component re-renders
// Context value changes

// 6. What is PureComponent?
// PureComponent is a base class in React that implements a shallow comparison of props and state to determine whether a component should re-render. If the props and state have not changed, PureComponent prevents the re-render, improving performance by reducing unnecessary updates.

// 7. Why should keys be unique?
// Unique keys help React identify which items have changed, been added, or removed, allowing for efficient updates to the UI. Using unique keys prevents rendering issues and improves performance by minimizing re-renders.

// 8. Why do we use lazy loading?
// Lazy loading is a technique that defers the loading of non-essential resources until they are needed. In React Native, lazy loading can improve performance by reducing the initial load time of the app, as components or data are only loaded when they are required, rather than all at once.

// 🟢 11. Debugging & Build
// 1. What is Metro Bundler?
// Metro Bundler is the JavaScript bundler used by React Native. It takes the JavaScript code and its dependencies, transforms them into a single bundle, and serves it to the React Native app during development. Metro supports features like hot reloading, source maps, and asset management.

// 2. What is Flipper used for?
// Flipper is a debugging tool for mobile apps, including React Native. It provides a platform for inspecting and debugging app performance, network requests, layout, and more. Flipper allows developers to connect their app to a desktop application for real-time debugging and analysis.

// 3. How to debug API calls?
// Using console.log() to log API request and response data
// Using React Native Debugger or Flipper to inspect network requests
// Implementing error handling to catch and log API errors

// 4. How to debug Android crashes?
// Using Logcat to view crash logs and stack traces
// Using React Native Debugger or Flipper to inspect app state and performance
// Implementing error boundaries to catch and log errors in the app

// 5. What is a release build?
// A release build is a production-ready version of a React Native app that is optimized for performance and stability. It is built using specific configurations that disable debugging features, enable optimizations, and sign the app with a release key for distribution on app stores.


// 6. How to generate APK/AAB?
// Using Android Studio or command line tools to build a release APK or AAB
// Configuring signing keys and build settings in the android/app/build.gradle file
// Running the appropriate Gradle commands to generate the APK/AAB files

// 7. What is Android signing key?
// An Android signing key is a cryptographic key used to sign Android application packages (APKs) or Android App Bundles (AABs). It ensures the authenticity and integrity of the app, allowing users to verify that the app has not been tampered with and is from a trusted source. The signing key is required for publishing apps on the Google Play Store.


// ⭐ 12. HR / Behavioural Questions
// 1. Tell me about your React Native Project.

// 2. What was your role in the team?

// 3. What challenges did you face?
// 4. How did you optimize app performance?
// 5. Why do you want to join our company?
// 6. How do you handle deadlines?
// 7. Your strengths & weaknesses?
// 🔥 Bonus: Practical Coding Questions

// These are often asked for 1-year roles.

// 1. Build a counter app using React Native.

// 2. Build a login screen with validation.
// 3. Fetch API data and display using FlatList.
// 4. Create a Bottom Tab Navigator with 3 screens.
// 5. Show loading indicator when calling API.
// 6. Create a reusable button component.
// 7. Store login token with AsyncStorage.