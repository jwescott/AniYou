var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var ani = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  ani.all(function(data) {
    var hbsObject = {
      anis: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/anis", function(req, res) {
  ani.create([
    "name", "description"
  ], [
    req.body.name, req.body.description
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});