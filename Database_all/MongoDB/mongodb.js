// MONGODB

https://www.mongodb.com/docs/manual/reference/bson-types/
https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/

// What is a database?
// An Organized collection of data. A method to manipulate and access data.

// What is MongoDB?
// MongoDB is a NoSQL database that uses a document-oriented data model.
// It stores data in flexible, JSON-like documents, which can have varying structures.

// MongoDB is designed to handle large volumes of data and provides high availability and scalability.

// Mongodb Structre
// Mongodb stores data in collections and documents.

// A Collection is a group of mongodb documents.
// A Document is a set of key-value pairs, similar to a JSON object.

// Collection: A Container for documents.(like a table in SQL)
// Document: A record in a collection.(like a row in SQL)
// Field: A key-value pair in a document.(like a column in SQL)

// Mongodb was first released in 2009. it was developed by company called 10gen, which later changed its name to MongoDB Inc.

// SQL vs NoSQL
// Scalability:
// SQL databases are vertically scalable, meaning you can increase the capacity of a single server by adding more resources.
// NoSQL databases are horizontally scalable, meaning you can add more servers to handle increased load.

// Performance:
// SQL databases can be slower for certain types of queries, especially those involving complex joins.
// NoSQL databases are designed for high performance and can handle large volumes of data with low latency.
// handling unstructured data:
// SQL databases are designed for structured data with a fixed schema.
// NoSQL databases are designed for unstructured or semi-structured data, allowing for more flexibility in data storage.


// mongodb Comand propmt shortcut
// To start the MongoDB server, use the command:
// mongod 
// To connect to the MongoDB server, use the command:
// mongo
// To stop the MongoDB server, use the command:
// Ctrl + C (in the terminal where mongod is running)
// To exit the MongoDB shell, use the command:
// exit()
// To view the current database, use the command:
// db   
// To list all databases, use the command:
// show dbs
// To create a new database, use the command:
// use <database_name>
// To switch to a different database, use the command:
// use <database_name>
// To drop a database, use the command:
// db.dropDatabase()
// To create a new collection, use the command:
// db.createCollection("<collection_name>")
// To list all collections in the current database, use the command:
// show collections 
// To drop a collection, use the command:
// db.<collection_name>.drop()
// To insert a document into a collection, use the command:
// db.<collection_name>.insertOne({<key>: <value>, ...})
// To insert multiple documents into a collection, use the command:
// db.<collection_name>.insertMany([{<key>: <value>, ...}, {...}])
// To find documents in a collection, use the command:
// db.<collection_name>.find({<query>})
// To update a document in a collection, use the command:
// db.<collection_name>.updateOne({<query>}, {$set: {<key>: <value>, ...}})
// To update multiple documents in a collection, use the command:
// db.<collection_name>.updateMany({<query>}, {$set: {<key>: <value>, ...}})
// To delete a document from a collection, use the command: 
// db.<collection_name>.deleteOne({<query>})
// To delete multiple documents from a collection, use the command:
// db.<collection_name>.deleteMany({<query>})
// To count the number of documents in a collection, use the command:
// db.<collection_name>.countDocuments({<query>})
// To aggregate documents in a collection, use the command:
// db.<collection_name>.aggregate([{<stage1>}, {<stage2>}, ...])
// To create an index on a collection, use the command:
// db.<collection_name>.createIndex({<key>: <1 or -1>})
// To drop an index on a collection, use the command:
// db.<collection_name>.dropIndex("<index_name>")
// To view the indexes on a collection, use the command:
// db.<collection_name>.getIndexes()
// To view the current user, use the command:
// db.runCommand({ connectionStatus: 1 })


// show dbs
// use school
// db.students.insertOne({ name: "John Doe", age: 20, courses: ["Math", "Science"] })
// db.students.find()


// use car_dealership
// db.createCollection("cars")


