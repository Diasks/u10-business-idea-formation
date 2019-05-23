var express = require("express");
var router = express.Router();
var user = require("../models/User");
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var middleware = require("../middleware");

/* GET users/me  */
router.get("/me", middleware.checkToken, function(req, res) {
  user.findById(req.decoded.user_id, function(error, user) {
    if (error) {
      res.json({ status: "error", message: `${error}` });
    }
    res.status(200).json(user);
  });
});

/* PUT users/me  */
router.patch("/me", middleware.checkToken, function(req, res) {
  user.findByIdAndUpdate(
    req.decoded.user_id,
    { $set: req.body },
    { new: true },
    function(error, user) {
      if (error) {
        res.json({ status: "error", message: `${error}` });
      }
      res.status(200).json(user);
    }
  );
});

/* POST users  */
router.post("/", function(req, res) {
  debugger;
  user.find({email: req.body.email}, function(user) {
    console.log(user);
    debugger;
if (!user)
{
  debugger;
  var hashedPassword = bcrypt.hashSync(req.body.password, 10);
  var newUser = new User();
  (newUser._id = new mongoose.Types.ObjectId()),
    (newUser.first_name = req.body.first_name),
    (newUser.last_name = req.body.last_name),
    (newUser.password = hashedPassword),
    (newUser.email = req.body.email),
    newUser.save(function(error) {
      if (error) {
        res.json({ status: "error", message: `${error}` });
      } else {
        res.json({ status: "OK", data: `recieved, ${res}` });
      }
    });

} else {
  res.json({ status: "you are already a user!" });
}
  })
 
});

//Raderar från databasen, men syns inte i postman eller terminalen typ som att connection timeout:ar
/* DELETE user  */
router.delete("/:userId/delete", function(req, res) {
  user.findByIdAndRemove(req.params.userId, function(error) {
    if (error) {
      res.json({ status: "error", message: `${error}` });
    }
    res.status(200);
  });
});

module.exports = router;
