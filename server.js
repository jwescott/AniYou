var express = require("express");
var session = require("express-session");
var passport = require("./config/passport")
var app = express();
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 8080;



app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var htmlRoutes = require("./controllers/html-routes")
htmlRoutes(app);

var apiRoutes = require("./controllers/api-routes");
apiRoutes(app);

var controller = require("./controllers/controller");
controller(app);

app.use("/auth", controller);

// require("dotenv").config();


// console.log(settings)

var db = require("./models");
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Listening on Port http://localhost:" + PORT)
    });
});



