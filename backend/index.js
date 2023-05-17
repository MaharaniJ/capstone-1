// const passport = require("passport");
// const authRoute = require("./routes/auth");
// const crypto = require('crypto');
// const session = require('express-session');
// const { MongoClient } = require('mongodb');
// const express =require('express')
// const cors = require('cors')

// const app = express();

// const sessionSecret = crypto.randomBytes(32).toString('hex');
// console.log(sessionSecret);

// // MongoDB connection URI
// const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string

// // Database and collection names
// const dbName = 'mydatabase';
// const collectionName = 'mycollection';

// // Function to connect to MongoDB
// async function connectToMongo() {
//   try {
//     // Create a new MongoClient
//     const client = new MongoClient(uri, { useUnifiedTopology: true });

//     // Connect to the MongoDB server
//     await client.connect();
//     console.log('Connected to MongoDB');

//     // Access the database
//     const db = client.db(dbName);

//     // Add the database connection to the app.locals object
//     app.locals.db = db;

//     // Continue setting up the server
//     app.use(
//       session({
//         secret: sessionSecret,
//         resave: false,
//         saveUninitialized: false
//       })
//     );

//     // Passport initialization
//     app.use(passport.initialize());
//     app.use(passport.session());

//     app.use(
//       cors({
//         origin: "http://localhost:3001",
//         //methods: "GET,POST,PUT,DELETE",
//         credentials: true,
//       })
//     );

//     app.use("/auth", authRoute);

//     app.listen("3000", () => {
//       console.log("Server is running!");
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// // Call the connectToMongo function to start the connection
// connectToMongo();

















const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const session = require('express-session');
const app = express();
//const URL = process.env.URL
const PORT = process.env.PORT || 3000

// Session middleware
app.use(
  session({
    secret: 'sessionSecret',
    resave: false,
    saveUninitialized: false
  })
);
// Passport initialization
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use("/auth", authRoute);
app.listen(PORT, () => {
  console.log(`Server is running!${PORT}`);
});
