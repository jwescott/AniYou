var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var User = require("../models/index.js");

function controller () {
    router.get("/", function(req, res) {
        User.all(function(data) {
          var hbsObject = {
            users: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
        });
      });
      
      router.post("/api/anis", function(req, res) {
        User.create([
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