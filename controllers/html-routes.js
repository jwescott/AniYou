// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    //res.sendFile(path.join(__dirname, "../public/assets/signup.html"));
    res.render("signup", {})
  });

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("members");
    }
    //res.sendFile(path.join(__dirname, "../public/assets/login.html"));
    res.render("login", {})
  });
  app.get("/results", function(req, res) {
    
    if (req.user) {
      res.redirect("/members");
    }
    
    res.render("results", {})
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/assets/members.html"));
    res.render("homepage", {})
  });

};
