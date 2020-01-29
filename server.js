var express = require("express");

var app = express();

var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var controller = require("./controllers/controller");
controller(app);

var db = require("./models");
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Listening on Port http://localhost:" + PORT)
    });
});



