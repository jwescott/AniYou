

// Import the model (cat.js) to use its database functions.
var db = require("../models/index.js");

function controller (app) {
    app.get("/", function(req, res) {
      console.log("Homepage");
      
        db.User.findAll({}).then(function(data) {
          var hbsObject = {
            users: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
        });
      });
      
      app.post("/api/anis", function(req, res) {
        db.User.create([
          "username", "password"
        ], [
          req.body.username, req.body.password
        ], function(result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
      });
}
// Create all our routes and set up logic within those routes where required.

module.exports = controller;