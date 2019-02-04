// *** Include Modules: npm (express, express-session, morgan), /routes, /models, passport
const express = require("express");
const session = require("express-session");
const logger = require("morgan")
const routes = require("./routes")
const db = require("./models");
const passport = require("./config/passport");

// Set PORT to Heroku process.env.PORT (deployed) or 3001 (localhost)
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Configure middleware: morgan logger, URL-encoded & JSON body parser
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const syncOptions = { force : false }
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  syncOptions.force = true
}

// Passport setup
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// *** Routes
app.use(routes);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync( syncOptions ).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
