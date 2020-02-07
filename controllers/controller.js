

// Import the model (cat.js) to use its database functions.
// added a db selector from sequelize 
var db = require("../models/index.js");

// used app selector from server.js instead of router
function controller(app) {

  app.get("/homepage", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.render("login", {})
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
     res.render("homepage", {})
    };
    
  });

  app.get("/api/discussion", function (req, res) {
    res.render("discussion", {})
  });

  app.get("/api/anis", function (req, res) {
    res.render("homepage");
  });

  app.post("/api/anis", function (req, res) {
    db.User.create({ username: req.body.usrname, password: req.body.psw}).then((result)=>{
      console.log(result.dataValues.username)
      var obj = {
        username: result.dataValues.username.toUpperCase(),
        password: result.dataValues.password
      };
      res.render("homepage", obj)
    });
  });

  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.Post.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Post Data:");
    console.log(req.body);

    db.Post.create({
      author: req.body.author,
      body: req.body.body,
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};



module.exports = controller;