const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const config = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const user = require("./models/User");
const pug = require("pug");

const app = express();
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.MLAB_USERNAME}:${
  process.env.MLAB_PASSWORD
}@formation-db-xw7ax.mongodb.net/test?retryWrites=true
`);

const db = mongoose.connection;

db.on("error", function() {
  console.error("whoops, something went wrong!");
});

db.once("open", function() {
  console.log("DB connection is up an running");
});

const usersRouter = require("./routes/users");

// view engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../client/build")));

app.post("/api/login", function(req, res) {
  user.findOne({ email: req.body.email }, function(err, user) {
    const user_id = user._id;
    if (!err) {
      const token = jwt.sign({ user_id }, process.env.SECRET_OR_KEY, {
        expiresIn: "24h"
      });
      res.json({
        success: true,
        message: "Authentication successfull",
        token: token,
        user: user_id
      });
    } else {
      return res.status(500).send("An error occured while trying to find user");
    }
  });
});

app.use("/api/users", usersRouter);

// catch 404 and forward to error handler
app.use("/api/*", function(req, res, next) {
  next(createError(404));
});

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
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
