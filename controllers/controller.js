

// Import the model (cat.js) to use its database functions.
// added a db selector from sequelize 
var db = require("../models/index.js");

// used app selector from server.js instead of router
function controller(app) {
  app.get("/", function (req, res) {
    console.log("Homepage");
    //changed function all to findAll and added a .then
    db.User.findAll({}).then(function (data) {
      var hbsObject = {
        users: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.get("/signin", function (req, res) {
    res.render("signin", {})
  })

  app.get("/homepage", function (req, res) {
    res.render("homepage", {})
  })

  app.get("/discussion", function (req, res) {
    res.render("discussion", {})
  })


  app.post("/api/anis", function (req, res) {
    db.User.create([
      "username", "password"
    ], [
      req.body.username, req.body.password
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
}
// Create all our routes and set up logic within those routes where required.

module.exports = controller;