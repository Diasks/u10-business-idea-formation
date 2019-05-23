var express = require("express");
var router = express.Router();
var User = require("../models/User");
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var middleware = require("../middleware");

/* GET users/me  */
router.get("/me", middleware.checkToken, function(req, res) {
  User.findById(req.decoded.user_id, function(error, user) {
    if (error) {
      res.json({ status: "error", message: `${error}` });
    }
    res.status(200).json(user);
  });
});

/* PUT users/me  */
router.patch("/me", middleware.checkToken, function(req, res) {
  User.findByIdAndUpdate(
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


router.post("/", function(req, res) {;
var emailQuery = {email: req.body.email};
User.findOne(emailQuery, function(err, user) {
  if(err) throw err;
  if(user) {
    res.json({status: 'Email already exist'});
 
  }
  if (!user) {
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
  }
})

  });

//Raderar från databasen, men syns inte i postman eller terminalen typ som att connection timeout:ar
/* DELETE user  */
router.delete("/:userId/delete", function(req, res) {
  User.findByIdAndRemove(req.params.userId, function(error) {
    if (error) {
      res.json({ status: "error", message: `${error}` });
    }
    res.status(200);
  });
});

module.exports = router;
