const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const session = require('express-session');
const app = express();
const connectDB = require('./config/db')
const dotenv = require('dotenv')

dotenv.config()
connectDB()
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
