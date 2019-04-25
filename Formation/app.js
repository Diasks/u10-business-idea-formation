var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var config = require("dotenv").config();
var mongoose = require("mongoose");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var User = require("./models/User");
var pug = require("pug");

var app = express();
app.use(cors());

//Connectar till mongoose utan problem
mongoose.connect(`mongodb+srv://${process.env.MLAB_USERNAME}:${
  process.env.MLAB_PASSWORD
}@formation-db-xw7ax.mongodb.net/test?retryWrites=true
`);

var db = mongoose.connection;

db.on("error", function() {
  console.error("whoops, something went wrong!");
});
db.once("open", function() {
  console.log("DB connection is up an running");
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var templatesRouter = require("./routes/templates");

// view engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/login", function(req, res) {
  //auth user
  User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {

    if (!err) {
      var token = jwt.sign(user.toJSON(), process.env.SECRET_OR_KEY,  { expiresIn: '24h' // expires in 24 hours
      });
   res.json({
      success: true,
      message: 'Authentication successfull',
      token: token
    });
    } else  {
      //skicka ett error kanske

    }
  
  
  })

});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/templates", templatesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
