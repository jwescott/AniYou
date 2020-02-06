

// Import the model (cat.js) to use its database functions.
// added a db selector from sequelize 
var db = require("../models/index.js");

// used app selector from server.js instead of router
function controller(app) {
  // app.get("/", function (req, res) {
  //   console.log("Homepage");
  //   //changed function all to findAll and added a .then
  //   db.User.findAll({}).then(function (data) {
  //     var hbsObject = {
  //       users: data
  //     };
  //     console.log(hbsObject);
  //     res.render("index", hbsObject);
  //   });
  // });

  app.get("/homepage", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.render("login", {})
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
     res.render("homepage", {})
    }
    
  })

  app.get("/api/discussion", function (req, res) {
    res.render("discussion", {})
  })

  app.get("/api/anis", function (req, res) {
    res.render("homepage");
  });

  app.post("/api/anis", function (req, res) {
    db.User.create({ username: req.body.usrname, password: req.body.psw}).then((result)=>{
      console.log(result.dataValues.username)
      var obj = {
        username: result.dataValues.username.toUpperCase(),
        password: result.dataValues.password
      }
      res.render("homepage", obj)
    });
  });

  

  
};
// Create all our routes and set up logic within those routes where required.

module.exports = controller;