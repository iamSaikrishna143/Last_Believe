// 1️⃣ What is a Web API in .NET Core?
// 2️⃣ How do you create a new Web API project in Visual Studio?
// 3️⃣ What’s the difference between GET, POST, PUT, and DELETE methods?
// 4️⃣ What is a Controller, and what role does it play?
// 5️⃣ What is Routing, and how does it work in Web API?
// 6️⃣ How can you return data in JSON format?
// 7️⃣ What is Model Binding, and why is it useful?
// 8️⃣ How do you handle errors and exceptions in Web API?
// 9️⃣ How can you use Swagger to test and document your API?
// 🔟 What is Dependency Injection (DI), and how do you use it in .NET Core?

// 1️⃣ What is .NET Core and how is it different from .NET Framework?
//  2️⃣ Explain Dependency Injection in .NET Core.
//  3️⃣ What are Middleware in ASP.NET Core?
//  4️⃣ How do you create and consume Web APIs in .NET Core?
//  5️⃣ Difference between IActionResult vs ActionResult<T> in controllers.
//  6️⃣ What is Entity Framework Core, and how is it used?
//  7️⃣ Explain Routing in ASP.NET Core.
//  8️⃣ How do you handle configuration and appsettings.json?
//  9️⃣ What are Filters in ASP.NET Core and their types?
//  🔟 Explain Authentication and Authorization in .NET Core.

// 🔥 Top 50 Most Famous Angular Interview Questions (2025 Edition)
// If you’re preparing for Angular interviews - this list will help you
//  revise the most frequently asked questions that test both fundamentals and real-world problem-solving.
// 🧠 Core Angular Fundamentals
//  1️⃣ What is Angular, and how is it different from AngularJS?
//  2️⃣ Explain the architecture of an Angular application.
//  3️⃣ What are components in Angular?
//  4️⃣ What are directives? Types of directives?
//  5️⃣ What are pipes, and how do you create a custom pipe?
//  6️⃣ Explain modules and their purpose.
//  7️⃣ What is data binding in Angular?
//  8️⃣ What is interpolation?
//  9️⃣ What are lifecycle hooks in Angular?
//  🔟 What is the difference between ngOnInit() and constructor?
// ⚡ Change Detection & Performance
// 1️⃣ How does Angular’s change detection work?
// 2️⃣ What is zone.js?
// 3️⃣ How can you manually trigger change detection?
// 4️⃣ How to optimize performance in Angular apps?
// 5️⃣ What is OnPush change detection strategy?
// 📦 Dependency Injection & Services
// 6️⃣ What is dependency injection?
// 7️⃣ How are services provided in Angular?
// 8️⃣ What’s the difference between providedIn: 'root' and module-level providers?
// 9️⃣ Explain hierarchical injectors.
// 0️⃣ How to create a singleton service?
// 🌐 Routing & Navigation
//  1️⃣ How does Angular routing work?
//  2️⃣ What is RouterModule.forRoot() vs forChild()?
//  3️⃣ How to pass data using route parameters?
//  4️⃣ What are route guards? Types?
//  5️⃣ How to lazy load a module?
// 🧩 RxJS & Observables
//  6️⃣ What are Observables and Promises?
//  7️⃣ Explain hot vs cold Observables.
//  8️⃣ Difference between Subject, BehaviorSubject, and ReplaySubject.
//  9️⃣ What are some common RxJS operators used in Angular?
//  0️⃣ How to unsubscribe from Observables properly?
// 🧰 Forms in Angular
//  1️⃣ Template-driven vs Reactive forms — difference?
//  2️⃣ How to create custom form validators?
//  3️⃣ What is FormGroup and FormControl?
//  4️⃣ How to listen to value changes in forms?
//  5️⃣ How to handle async validation?
// ⚙️ Advanced & Real-world Scenarios
//  6️⃣ What is the difference between ViewChild and ContentChild?
//  7️⃣ How does Angular handle DOM manipulation safely?
//  8️⃣ What are standalone components (Angular 15+)?
//  9️⃣ What are signals in Angular (Angular 17+)?
//  0️⃣ Explain the concept of inject() function.
// 🧩 Testing & Build
//  1️⃣ How to write unit tests for components and services?
//  2️⃣ What is TestBed in Angular testing?
//  3️⃣ What is Ahead-of-Time (AOT) compilation?
//  4️⃣ Difference between AOT and JIT compilation?
//  5️⃣ How to optimize Angular app build size?
// 🚀 Miscellaneous & Best Practices
//  6️⃣ Difference between ngIf and hidden attribute.
//  7️⃣ What is Angular Universal (SSR)?
//  8️⃣ What’s the purpose of trackBy in ngFor?
//  9️⃣ What’s the difference between Pure and Impure Pipes?


// 🔹 1. What is the difference between IEnumerable, IQueryable, and List?
// 👉 IEnumerable is used for in-memory collection iteration.
// 👉 IQueryable is used for querying data from out-of-memory sources (like databases) using LINQ-to-SQL.
// 👉 List is a concrete class that stores data in memory and allows indexing.



// 🔹 2. What is the difference between Task and Thread?
// 👉 Thread is a lower-level unit of execution managed by the OS.
// 👉 Task is a higher-level abstraction in .NET that represents asynchronous operations, managed by the Task Parallel Library (TPL).



// 🔹 3. Explain Dependency Injection (DI).
// 👉 DI is a design pattern used to achieve loose coupling.
// 👉 Instead of creating dependencies inside a class, you inject them from outside, usually through constructors or service containers like in ASP.NET Core.



// 🔹 4. Difference between abstract class and interface?
// 👉 Abstract classes can have both implemented and abstract methods.
// 👉 Interfaces can only declare method signatures (until default interface methods in C# 8+).
// 👉 A class can inherit multiple interfaces, but only one abstract class.



// 🔹 5. What’s the use of async and await keywords?
// 👉 They enable asynchronous programming, allowing the application to perform non-blocking operations.
// 👉 await tells the compiler to pause execution until the awaited task completes.



// 🔹 6. What is Middleware in ASP.NET Core?
// 👉 Middleware are components in the request pipeline that process HTTP requests and responses.
// 👉 Examples: Authentication, Routing, Exception Handling, etc.



// 🔹 7. What is Entity Framework (EF) Core?
// 👉 EF Core is an ORM (Object-Relational Mapper) for .NET that allows developers to interact with a database using C# classes instead of SQL queries.