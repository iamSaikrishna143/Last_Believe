// What is Database?
// postgresql.js
// A database is an organized collection of structured information or data,
// typically stored electronically in a computer system. It allows for efficient
//  data management, retrieval, and manipulation. Databases are used in various
// applications, from small systems to large enterprise solutions, and can handle
//  vast amounts of data while ensuring data integrity and security.
// OR
// An organized collection of data. A method of storing, retrieving, and managing data.

// What is RDBMS?
// A type of database system that stores data in a structured table
// (using rows and columns) and uses SQL for uses SQL for managing and querying
//  data.

// PostgreSQL Command prompt shell shortcuts
// \c database_name - Connect to a specific database
// \dt - List all tables in the current database
// \dv - List all views in the current database
// \d table_name - Describe the structure of a specific table
// \l - List all databases
// \q - Quit the PostgreSQL command prompt
// \h - Show help for SQL commands
// \? - Show help for psql commands
// \i file.sql - Execute SQL commands from a file
// \g - Execute the current query
// \x - Toggle expanded output mode
// \set - Set a variable in the psql session
// \unset - Unset a variable in the psql session
// \timing - Toggle timing of queries
// \echo - Print a message to the console
// \password - Change the password for the current user
// \watch - Execute the current query every specified number of seconds
// \set ON_ERROR_STOP on - Stop execution on error
// \set AUTOCOMMIT off - Disable autocommit mode
// \set VERBOSITY terse - Set the verbosity level for error messages

// SQL
// Structured Query Language (SQL)
// Which is used to communicate with relational databases.
// Example: PostgreSQL, MySQL, SQLite, Oracle, etc.
// example: SELECT * FROM users WHERE age > 30;

// Table
// A table is a collection of related data entries that consists of rows and columns.
// or
// A table is a structured format for organizing data in a database,

// Create a table query
// CREATE TABLE users (
//   id INT,
//   name VARCHAR(100) NOT NULL,
//  city VARCHAR(100),
// );

// Insert data into a table
// INSERT INTO users (id, name, city) VALUES (1, 'John Doe', 'New York');

// Select data from a table
// SELECT * FROM users WHERE city = 'New York';
// select name, city from users;

// Update data in a table
// UPDATE users SET city = 'Los Angeles' WHERE id = 1;

// Delete data from a table
// DELETE FROM users WHERE id = 1;

// Datatypes
// An attribute that specifies the type of data in a column of a table of our database - table.
// PostgreSQL supports various data types, including:
// - Integer: INT, BIGINT, SMALLINT
// - Floating Point: FLOAT, DOUBLE PRECISION, REAL
// - Character: CHAR, VARCHAR, TEXT
// - Boolean: BOOLEAN
// - Date/Time: DATE, TIME, TIMESTAMP
// - JSON: JSON, JSONB
// - Array: ARRAY
// - UUID: UUID
// - Geometric: POINT, LINE, CIRCLE, etc.
// - Network Address: CIDR, INET, MACADDR
// - XML: XML
// - Range Types: INT4RANGE, NUMRANGE, TSRANGE, etc.
// - Composite Types: Custom data types defined by users
// - Enumerated Types: ENUM
// - Full-Text Search: TSQUERY, TSVECTOR
// - Hstore: Key-value pairs
// - Money: MONEY
// - Bit String: BIT, BIT VARYING
// - Serial Types: SERIAL, BIGSERIAL for auto-incrementing integers
// - Custom Types: Users can define their own data types using CREATE TYPE
// - Geospatial: PostGIS extension for geographic data types
// - Custom Types: Users can define their own data types using CREATE TYPE
// - JSONB: Binary JSON for efficient storage and querying
// - XML: XML data type for storing XML documents

// Constraints
// A Constraint in postgresql is a rule applied to a column.

// Primary Key
// - The Primary key constraint uniquely identifies each row in a table.
// - Primary keys must contain unique values and cannot contain NULL values.
// - A table can have only one primary key, which may consist of single or multiple columns.

// Not Null
// - The Not Null constraint ensures that a column cannot have a NULL value.

// Example:
// CREATE TABLE users (
//   id PRIMARY KEY NOT NULL,
//   name VARCHAR(100) NOT NULL,
// }

// Default Value
// - The Default constraint provides a default value for a column when no value is specified during insertion
// Example:
// CREATE TABLE users (
//  acc_no INT PRIMARY KEY NOT NULL,
//  name VARCHAR(100) NOT NULL,
//  acc_type VARCHAR(50) NOT NULL DEFAULT 'savings',
// );

// Auto Increment
// - The Auto Increment constraint automatically generates a unique value for a column when a new row is
// inserted.
// - In PostgreSQL, this is achieved using the SERIAL or BIGSERIAL data type.

// Example:
// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   city VARCHAR(100),
// );

// Task-1
// Create a table named "employees" with the following columns:
// - id (integer, primary key, auto-increment)
// - name (string, not null)
// - position (string, not null)
// - salary (decimal, not null)
// - department (string, not null)
// - hire_date (date, not null)
// - email (string, unique, not null)
// - phone (string, not null)

// CREATE TABLE employees (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   position VARCHAR(100) NOT NULL,
//   salary DECIMAL NOT NULL,
//   department VARCHAR(100) NOT NULL,
//   hire_date DATE NOT NULL,
//   email VARCHAR(100) UNIQUE NOT NULL,
//   phone VARCHAR(15) NOT NULL
// );

// Insert data into the "employees" table
// INSERT INTO employees (name, position, salary, department, hire_date, email, phone
// ) VALUES
// ('John Doe', 'Software Engineer', 75000.00, 'IT', '2023-01-15', 'as@gmail.com', '123-456-7890'),
// ('Jane Smith', 'Data Analyst', 65000.00, 'Analytics', '2023-02-20', 'sss@gmail.com', '987-654-3210'),

// Clauses
// Where Clause
// Distinct Clause
// Order By Clause
// Limit Clause
// Like Clause

// Where Clause
// The WHERE clause is used to filter records based on specified conditions.

// Example: SELECT * FROM employees WHERE department = 'IT';
// Example: SELECT * FROM employees WHERE salary > 60000;

// Distinct Clause
// The DISTINCT clause is used to return only distinct (different) values in a query.
// Example: SELECT DISTINCT department FROM employees;
// Example: SELECT DISTINCT position FROM employees;

// Order By Clause
// The ORDER BY clause is used to sort the result set in ascending or descending order.
// Example: SELECT * FROM employees ORDER BY salary DESC;
// Example: SELECT * FROM employees ORDER BY hire_date ASC;

// Limit Clause
// The LIMIT clause is used to specify the maximum number of records to return in a query.
// Example: SELECT * FROM employees LIMIT 5;
// Example: SELECT * FROM employees ORDER BY hire_date DESC LIMIT 10;

// Like Clause
// The LIKE clause is used to search for a specified pattern in a column.
// Example: SELECT * FROM employees WHERE name LIKE 'J%'; // Names starting with 'J'
// Example: SELECT * FROM employees WHERE email LIKE '%@gmail.com'; // Emails ending with
// '@gmail.com'

// Find employees from following departments: IT, HR, and Finance
// Example: SELECT * FROM employees WHERE department IN ('IT', 'HR', 'Finance');
// OR
// Example: SELECT * FROM employees WHERE department = 'IT' OR department = 'HR' OR department = 'Finance';

// NOT IN Clause
// The NOT IN clause is used to exclude records that match a specified list of values.
// Example: SELECT * FROM employees WHERE department NOT IN ('IT', 'HR', 'Finance');

// Find employees whose salary is more than 60000 and less than 80000
// Example: SELECT * FROM employees WHERE salary > 60000 AND salary < 80000
// OR
// Example: SELECT * FROM employees WHERE salary BETWEEN 60000 AND 80000;

// Aggregate Functions
// Aggregate functions perform calculations on a set of values and return a single value.
// Common aggregate functions include:
// - COUNT: Returns the number of rows that match a specified condition.
// - SUM: Returns the total sum of a numeric column.
// - AVG: Returns the average value of a numeric column.
// - MAX: Returns the maximum value in a column.
// - MIN: Returns the minimum value in a column.
// Example: SELECT COUNT(*) FROM employees; // Count of all employees
// Example: SELECT AVG(salary) FROM employees; // Average salary of employees
// Example: SELECT MAX(salary) FROM employees; // Maximum salary of employees
// Example: SELECT MIN(salary) FROM employees; // Minimum salary of employees

// How to find the total number of employees in each department?
// Example: SELECT department, COUNT(*) AS total_employees FROM employees GROUP BY department;

// Employee with the highest salary
// Example: SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);

// Employee with the lowest salary
// Example: SELECT * FROM employees WHERE salary = (SELECT MIN(salary) FROM employees);

// Average salary of employees
// Example: SELECT AVG(salary) AS average_salary FROM employees;

// Average salary of employees in each department?
// Example: SELECT department, AVG(salary) AS average_salary FROM employees GROUP BY department;

// How to find the total salary paid to employees in each department?
// Example: SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department;

// How to find the total number of employees in each department?
// Example: SELECT department, COUNT(*) AS total_employees FROM employees GROUP BY department;

// Group By Clause
// The GROUP BY clause is used to group rows that have the same values in specified columns into
// summary rows, like "total salary per department" or "average age per city".

// Example: SELECT department, COUNT(*) AS total_employees FROM employees GROUP BY department;
// Example: SELECT position, AVG(salary) AS average_salary FROM employees GROUP BY position;

// Each dept how mny employees are there?
// Example: SELECT department, COUNT(*) AS total_employees FROM employees GROUP BY department;

// String Functions
// PostgreSQL provides various string functions to manipulate and query string data.
// Common string functions include:
// - LENGTH: Returns the length of a string.
// - UPPER: Converts a string to uppercase.
// - LOWER: Converts a string to lowercase.
// - CONCAT: Concatenates two or more strings.
// - concat_ws: Concatenates strings with a separator.
// - LEFT: Returns a specified number of characters from the left side of a string.
// - RIGHT: Returns a specified number of characters from the right side of a string.
// - SUBSTRING: Extracts a substring from a string.
// - TRIM: Removes leading and trailing spaces from a string.
// - LTRIM: Removes leading spaces from a string.
// - RTRIM: Removes trailing spaces from a string.
// - REPLACE: Replaces occurrences of a substring within a string.
// - POSITION: Returns the position of a substring within a string.
// - STRING_AGG: Concatenates values from multiple rows into a single string.

// CONCAT
// The CONCAT function is used to concatenate two or more strings together.
// SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
// Example: SELECT CONCAT(name, ' - ', position) AS employee_info FROM employees;

// CONCAT_WS
// The CONCAT_WS function concatenates strings with a specified separator.
// SELECT CONCAT_WS(', ', first_name, last_name) AS full_name FROM employees;
// Example: SELECT CONCAT_WS(' - ', name, position) AS employee_info FROM employees;

// SUBSTRING
// The SUBSTRING function extracts a substring from a string.
// SELECT SUBSTRING(name FROM 1 FOR 5) AS short_name FROM employees; // First 5 characters of name
// Example: SELECT SUBSTRING(name, 1, 5) AS short_name FROM employees; // First 5 characters of name

// REPLACE
// The REPLACE function replaces occurrences of a substring within a string.
// SELECT REPLACE(name, 'John', 'Jane') AS updated_name FROM employees; // Replace 'John' with 'Jane'
// Example: SELECT REPLACE(name, 'Doe', 'Smith') AS updated_name FROM employees

// REVERSE
// The REVERSE function reverses the characters in a string.
// SELECT REVERSE(name) AS reversed_name FROM employees; // Reverse the name
// Example: SELECT REVERSE(name) AS reversed_name FROM employees; // Reverse the name

// LENGTH
// The LENGTH function returns the length of a string.
// SELECT LENGTH(name) AS name_length FROM employees; // Length of the name
// Example: SELECT LENGTH(name) AS name_length FROM employees; // Length of the name

// UPPER
// The UPPER function converts a string to uppercase.
// SELECT UPPER(name) AS upper_name FROM employees; // Convert name to uppercase
// Example: SELECT UPPER(name) AS upper_name FROM employees; // Convert name to uppercase

// LOWER
// The LOWER function converts a string to lowercase.
// SELECT LOWER(name) AS lower_name FROM employees; // Convert name to lowercase
// Example: SELECT LOWER(name) AS lower_name FROM employees; // Convert name to lowercase

// LEFT
// The LEFT function returns a specified number of characters from the left side of a string.
// SELECT LEFT(name, 3) AS short_name FROM employees; // First 3 characters of name
// Example: SELECT LEFT(name, 3) AS short_name FROM employees; // First

// RIGHT
// The RIGHT function returns a specified number of characters from the right side of a string.
// SELECT RIGHT(name, 3) AS short_name FROM employees; // Last 3 characters of name
// Example: SELECT RIGHT(name, 3) AS short_name FROM employees; // Last 3 characters of name

// TRIM
// The TRIM function removes leading and trailing spaces from a string.
// SELECT TRIM(name) AS trimmed_name FROM employees; // Remove spaces from name
// Example: SELECT TRIM(name) AS trimmed_name FROM employees; // Remove spaces from name

// LTRIM
// The LTRIM function removes leading spaces from a string.
// SELECT LTRIM(name) AS ltrimmed_name FROM employees; // Remove leading spaces from name
// Example: SELECT LTRIM(name) AS ltrimmed_name FROM employees; // Remove

// RTRIM
// The RTRIM function removes trailing spaces from a string.
// SELECT RTRIM(name) AS rtrimmed_name FROM employees; // Remove trailing spaces from name
// Example: SELECT RTRIM(name) AS rtrimmed_name FROM employees; // Remove trailing

// POSITION
// The POSITION function returns the position of a substring within a string.
// SELECT POSITION('Doe' IN name) AS position FROM employees; // Position of 'Doe' in name
// Example: SELECT POSITION('Smith' IN name) AS position FROM employees; // Position of 'Smith' in name

// TASK-2
// 1:Raj:Sharma:50000:IT:2023-01-01

// Answer
// CREATE TABLE employees (
//   id SERIAL PRIMARY KEY,
//   first_name VARCHAR(50) NOT NULL,
//   last_name VARCHAR(50) NOT NULL,
//   salary DECIMAL NOT NULL,
//   department VARCHAR(50) NOT NULL,
//   hire_date DATE NOT NULL
// );
// INSERT INTO employees (first_name, last_name, salary, department, hire_date)
// VALUES ('Raj', 'Sharma', 50000, 'IT', '2023-01-01');

// select concat_ws(':', id, first_name, last_name, salary, department, hire_date) as employee_info from employees;
// where id = 1;

// Task-3
// Raj Sharma:IT:50000
// Answer
// SELECT CONCAT_WS(':', id, CONCAT_WS(' ', first_name, last_name), department, salary) AS employee_info FROM employees;

// task-4
// 4:Suman:FINANCE
// Answer
// Select concat_ws(":",fname,UPPER(dept),salary) as employee_info from employees where id = 4;

// Task-5
// I1 Raju
// H2 Priya

// Answer
// SELECT CONCAT(LEFT(dept,1), emp_id),fname FROM employees;

// 1- Find different types of department in Database
// Example: SELECT DISTINCT department FROM employees;

// 2- Display records with high-low salary
// Example: SELECT * FROM employees ORDER BY salary DESC;

// 3-How to see only top 3 records from employees table?
// Example: SELECT * FROM employees ORDER BY salary DESC LIMIT 3;

// Show records where first name starts with 'R'
// Example: SELECT * FROM employees WHERE first_name LIKE 'R%';

//  show records where length of first name is greater than 4
// Example: SELECT * FROM employees WHERE LENGTH(first_name) > 4;

// Find total no. of employess in database
// Example: SELECT COUNT(*) AS total_employees FROM employees;

// Find no. of employess in each department
// Example: SELECT department, COUNT(*) AS total_employees FROM employees GROUP BY department;

// Find lowest salary paying
// Example: SELECT MIN(salary) AS lowest_salary FROM employees;

// Find highest salary paying
// Example: SELECT MAX(salary) AS highest_salary FROM employees;

// Find total salary paying in loan department
// Example: SELECT SUM(salary) AS total_salary FROM employees WHERE department = 'Loan';

// Average salary paying in each department
// Example: SELECT department, AVG(salary) AS average_salary FROM employees GROUP BY department;

// Altering Table
// The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.

// How to add and remove columns in a table?

// ALTER TABLE employees
// ADD COLUMN address VARCHAR(255); // Add a new column named 'address'

// DROP COLUMN
// ALTER TABLE employees
// DROP COLUMN address; // Remove the 'address' column

// How to rename a colomn or table name
// ALTER TABLE employees
// RENAME COLUMN old_column_name TO new_column_name; // Rename a column

// ALTER TABLE employees
// RENAME TO new_table_name; // Rename the table

// How to modify a column's data type or constraints?
// ALTER TABLE employees
// ALTER COLUMN f_name
// SET DATA TYPE VARCHAR(200); // Change the data type of a column

// Defult value
// ALTER TABLE employees
// ALTER COLUMN f_name
// SET DEFAULT 'Unknown'; // Set a default value for a column

// How to set a column to NOT NULL?
// ALTER TABLE employees
// ALTER COLUMN f_name
// SET NOT NULL; // Set a column to NOT NULL constraint

// If any thing drop then
// ALTER TABLE employees
// ALTER COLUMN f_name
// DROP NOT NULL; // Remove the NOT NULL constraint from a column

//  Checks Constraints
// CHECK constraint is used to limit the value range that can be placed in a column.

// ALTER TABLE employees
// ADD COLUMN
// mob VARCHAR(15)
// CHECK(LENGTH(mob) = 10); // Add a column with a CHECK constraint
// INSERT INTO employees (mob) VALUES ('1234567890'); // Valid

// Drop CHECK constraint
// ALTER TABLE employees
// DROP CONSTRAINT constraint_name; // Drop a CHECK constraint

// Named Constraints
// You can name constraints for easier reference.
// CREATE TABLE employees (
//   id SERIAL PRIMARY KEY,
//  name VARCHAR(100) NOT NULL,
// CONSTRAINT unique_email UNIQUE (email), // Named constraint for unique email
// );

// Salary Catrgory
// select fname, lname, salary,
// CASE
//   WHEN salary < 50000 THEN 'Low'
//   WHEN salary BETWEEN 50000 AND 100000 THEN 'Medium'
//   ELSE 'High'
// END AS salary_category
// FROM employees;

// Bonous Calculation
// SELECT fname, lname, salary,
// CASE
//   WHEN salary > 0 THEN salary * 0.1 // 10%
// END AS bonus
// FROM employees;

// Relationships
// Relationships in databases define how tables are related to each other.
// There are three main types of relationships:
// 1. One-to-One: Each row in Table A is related to one row in Table B.
// 2. One-to-Many: Each row in Table A can be related to multiple rows in Table B.
// 3. Many-to-Many: Rows in Table A can be related to multiple rows in Table B and vice versa.

// Foreign Key
// A foreign key is a column or a set of columns in one table that refers to the primary key in another table.
// It establishes a link between the data in the two tables, ensuring referential integrity.

// Example: Creating a foreign key relationship
// CREATE TABLE Customers (
//   CustomerID INT PRIMARY KEY,
//   CustomerName VARCHAR(100) NOT NULL
// );
// CREATE TABLE Orders (
//   OrderID INT PRIMARY KEY,
//   OrderDate DATE NOT NULL,
//   CustomerID INT,
//   FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
// );
// INSERT INTO Customers (CustomerID, CustomerName) VALUES (1, 'John Doe');
// INSERT INTO Orders (OrderID, OrderDate, CustomerID) VALUES (1, '2023-01-01', 1);

// Joins
// Joins are used to combine rows from two or more tables based on a related column between them.
// There are several types of joins in SQL:
// 1. INNER JOIN: Returns only the rows that have matching values in both tables.
// 2. LEFT JOIN: Returns all the rows from the left table and the matching rows from
// the right table. If there is no match, NULL values are returned for the right table.
// 3. RIGHT JOIN: Returns all the rows from the right table and the matching rows
// from the left table. If there is no match, NULL values are returned for the left table.
// 4. FULL OUTER JOIN: Returns all the rows from both tables, with NULL values where there is no match.
// 5. CROSS JOIN: Returns the Cartesian product of both tables, combining every row from the first table with every row from the second table.
// 6. SELF JOIN: Joins a table to itself, allowing you to compare rows within the same table.

// CROSS JOIN
// example: SELECT * FROM table1 CROSS JOIN table2;

// INNER JOIN
// example: SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;

// INNER JOIN with group by
// example:
// SELECT name FROM employees
// INNER JOIN departments ON employees.department_id = departments.id
// GROUP BY name;

// Many-to-Many Relationship
// A many-to-many relationship occurs when multiple rows in one table can be associated with multiple rows in another table.
// This is typically implemented using a junction table (also known as a bridge table or associative table) that contains foreign keys referencing the primary keys of the two related tables.
// Example: Creating a many-to-many relationship
// CREATE TABLE Students (
//   StudentID INT PRIMARY KEY,
//   StudentName VARCHAR(100) NOT NULL
// );
// CREATE TABLE Courses (
//   CourseID INT PRIMARY KEY,
//   CourseName VARCHAR(100) NOT NULL
// );
// CREATE TABLE StudentCourses (
//   StudentID INT,
//   CourseID INT,
//   PRIMARY KEY (StudentID, CourseID),
//   FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
//   FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
// );

// Task
// Create a One-to-many and many-to-many relationship in a shopping store context using four tables:
// 1. Customers: Contains customer information.
// 2. Orders: Contains order information.
// 3. OrderItems: Contains item information for each order.
// 4. Products: Contains product information.
// Include a price coulmn in the products table and display the relationship between these tables.customers and their orders. along with the details of the products  in each order.
// Example:
// CREATE TABLE Customers (
//   CustomerID INT PRIMARY KEY,
//   CustomerName VARCHAR(100) NOT NULL,
//   Email VARCHAR(100) NOT NULL UNIQUE,
//   Phone VARCHAR(15) NOT NULL
// );
// CREATE TABLE Products (
//   ProductID INT PRIMARY KEY,
//   ProductName VARCHAR(100) NOT NULL,
//   Price DECIMAL NOT NULL
// );
// CREATE TABLE Orders (
//   OrderID INT PRIMARY KEY,
//   OrderDate DATE NOT NULL,
//   CustomerID INT,
//   FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
// );
// CREATE TABLE OrderItems (
//   OrderItemID INT PRIMARY KEY,
//   OrderID INT,
//   ProductID INT,
//   Quantity INT NOT NULL,
//   FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
//   FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
// );
// Example: Displaying the relationship between customers and their orders along with product details
// SELECT Customers.CustomerName, Orders.OrderID, Products.ProductName, OrderItems.Quantity, Products.Price
// FROM Customers
// INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
// INNER JOIN OrderItems ON Orders.OrderID = OrderItems.OrderID
// INNER JOIN Products ON OrderItems.ProductID = Products.ProductID;
// Example: Displaying the total price of each order
// SELECT Customers.CustomerName, Orders.OrderID, SUM(Products.Price * OrderItems.Quantity) AS TotalPrice
// FROM Customers
// INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
// INNER JOIN OrderItems ON Orders.OrderID = OrderItems.OrderID
// INNER JOIN Products ON OrderItems.ProductID = Products.ProductID
// GROUP BY Customers.CustomerName, Orders.OrderID;
// Example: Displaying the total number of orders placed by each customer
// SELECT Customers.CustomerName, COUNT(Orders.OrderID) AS TotalOrders
// FROM Customers
// LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
// GROUP BY Customers.CustomerName;
// Example: Displaying the total number of products ordered by each customer
// SELECT Customers.CustomerName, SUM(OrderItems.Quantity) AS TotalProductsOrdered
// FROM Customers
// INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
// INNER JOIN OrderItems ON Orders.OrderID = OrderItems.OrderID
// GROUP BY Customers.CustomerName;
// Example: Displaying the average price of products ordered by each customer
// SELECT Customers.CustomerName, AVG(Products.Price) AS AveragePrice
// FROM Customers
// INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
// INNER JOIN OrderItems ON Orders.OrderID = OrderItems.OrderID
// INNER JOIN Products ON OrderItems.ProductID = Products.ProductID
// GROUP BY Customers.CustomerName;
// Example: Displaying the total revenue generated by each product
// SELECT Products.ProductName, SUM(Products.Price * OrderItems.Quantity) AS TotalRevenue
// FROM Products
// INNER JOIN OrderItems ON Products.ProductID = OrderItems.ProductID
// GROUP BY Products.ProductName;
// Example: Displaying the total number of products in each order
// SELECT Orders.OrderID, SUM(OrderItems.Quantity) AS TotalProducts
// FROM Orders
// INNER JOIN OrderItems ON Orders.OrderID = OrderItems.OrderID
// GROUP BY Orders.OrderID;

// Having Claue GROUP ROLLUP
// The HAVING clause is used to filter records after the GROUP BY operation.
// It is similar to the WHERE clause but is applied to aggregated data.
// Example: SELECT department, COUNT(*) AS total_employees
// FROM employees
// GROUP BY department
// HAVING COUNT(*) > 10;

// ROLLUP
// The ROLLUP operator is used to generate subtotals and grand totals in a result set.
// It extends the GROUP BY clause to create additional grouping sets.
// Example: SELECT department, job_title, COUNT(*) AS total_employees
// FROM employees
// GROUP BY ROLLUP (department, job_title);

// SELECT
// COALESCE(department, 'Total') AS department,
// COALESCE(job_title, 'Total') AS job_title,
// COUNT(*) AS total_employees
// FROM employees
// GROUP BY ROLLUP (department, job_title);

// Understand Storad Procedures
// Stored Routines
// An SQL Statment or a set of SQL Statement that can be stored on database server which can be call no. of times.
// types of stored routines
// 1. Stored Procedures:
//  Set of SQL statements and procedures  logic that can perform operations such as
// inserting, updating, or deleting data in the database. It can accept parameters and return multiple values.
// Example:
// CREATE PROCEDURE GetEmployeeDetails(IN emp_id INT)
// BEGIN
//   SELECT * FROM employees WHERE id = emp_id;
// END;
// To call the stored procedure:
// CALL GetEmployeeDetails(1);
// OR
// CREATE OR REPLACE PROCEDURE update_emp_salary(IN emp_id INT, IN new_salary DECIMAL)
// LaNGUAGE plpgsql
// AS $$
// BEGIN
//   UPDATE employees SET salary = new_salary WHERE id = emp_id;
// END;
// $$;
// To call the stored procedure:
// CALL update_emp_salary(1, 50000);
// create a stored procedure to insert a new employee
// CREATE OR REPLACE PROCEDURE insert_employee(IN emp_name VARCHAR(100), IN emp_salary DECIMAL, IN emp_department VARCHAR(50))
// LANGUAGE plpgsql
// AS $$
// BEGIN
//   INSERT INTO employees (name, salary, department) VALUES (emp_name, emp_salary, emp_department);
// END;
// $$;
// To call the stored procedure:
// CALL insert_employee('John Doe', 60000, 'IT');

// 2. User-Defined Functions (UDFs):
// custom functions created by the user to perform specific operations and return a single value.

// Syntax for creating a UDF in PostgreSQL:
// CREATE OR REPLACE FUNCTION function_name(parameter1 data_type, parameter2 data_type)
// RETURNS return_data_type AS $$
// BEGIN
//   -- Function logic goes here
// END;
// $$;
// To call the function:
// SELECT function_name(argument1, argument2);

// Find name of the employee in each department having the maximum salary
// CREATE OR REPLACE FUNCTION get_max_salary_employee(dept_name VARCHAR)
// RETURNS TABLE(employee_id INT,employee_name VARCHAR, max_salary DECIMAL) AS $$
// BEGIN
//   RETURN QUERY
//   SELECT e.employee_id, e.employee_name, e.max_salary
//   FROM employees e
//   WHERE e.department = dept_name
// AND e.salary = (SELECT MAX(salary) FROM employees WHERE department = dept_name);
// END;
// $$;
// LANGUAGE plpgsql;
// To call the function:
// SELECT * FROM get_max_salary_employee('Sales');

// What are window functions?
// Window functions also known as analytic functions allow you to perform calculations across a set of rows related to the current row.

// Defined by an OVER() clause.
// SELECT fname, lname, salary,
//  avg(salary) over(order by salary) as avg_salary,
// from employees;

// ROW_NUMBER()
// The ROW_NUMBER() function assigns a unique sequential integer to rows within a partition of a result set.

// EXAMPLE:
// SELECT ROW_NUMBER() OVER(ORDER BY FNAME)
// fname,dept,salary
// FROM employees;

// PARTITION BY
// The PARTITION BY clause is used to divide the result set into partitions to which the window function is applied.

// example:
// SELECT
//   ROW_NUMBER() OVER(PARTITION BY dept)
//  fname, dept, salary
// FROM employees;

// Rank()
// The RANK() function assigns a rank to each row within a partition of a result set, with gaps in the ranking for ties.
// Example:
// SELECT fname, dept, salary,
//        RANK() OVER(PARTITION BY dept ORDER BY salary DESC) as rank
// FROM employees;

// DENSE_RANK()
// The DENSE_RANK() function assigns a rank to each row within a partition of a result set, without gaps in the ranking for ties.
// Example:
// SELECT fname, dept, salary,
//        DENSE_RANK() OVER(PARTITION BY dept ORDER BY salary DESC) as dense_rank
// FROM employees;

// LAG()
// The LAG() function allows you to access data from a previous row in the result set without using a self-join.
// Example:
// SELECT fname, dept, salary,
//        LAG(salary, 1) OVER(ORDER BY salary) as previous_salary
// FROM employees;

// LEAD()
// The LEAD() function allows you to access data from a next row in the result set without
// using a self-join.
// Example:
// SELECT fname, dept, salary,
//        LEAD(salary, 1) OVER(ORDER BY salary) as next_salary
// FROM employees;

// understand CTE
// Common Table Expressions (CTEs) are temporary result sets that can be referenced within a SELECT
// , INSERT, UPDATE, or DELETE statement.
// Example:
// WITH CTE_Employees AS (
//   SELECT fname, dept, salary
//   FROM employees
//   WHERE salary > 50000
// )
// SELECT * FROM CTE_Employees;

// Trigger
// A trigger is a special type of stored procedure that automatically executes in response to certain events on a table or view.

// example:
// CREATE TRIGGER trigger_name
// {BEFORE | AFTER | INSTEAD OF} {INSERT | UPDATE | DELETE | TRUNCATE}
// ON table_name
// FOR EACH ROW{ROW | STATEMENT}
// EXECUTE FUNCTION function_name(arguments);

// SELECT * FROM employees;
// CALL update_emp_salary(1, 60000);

// CREATE OR REPLACE FUNCTION log_salary_change()
// RETURNS TRIGGER AS $$
// BEGIN
//     IF NEW.salary <> OLD.salary THEN
//         INSERT INTO salary_log (employee_id, old_salary, new_salary, change_date)
//         VALUES (NEW.employee_id, OLD.salary, NEW.salary, CURRENT_DATE);
//     END IF;
//     RETURN NEW;
// END;
// $$ LANGUAGE plpgsql;
// CREATE TRIGGER salary_change_trigger
// AFTER UPDATE ON employees
// FOR EACH ROW
// EXECUTE FUNCTION log_salary_change();

