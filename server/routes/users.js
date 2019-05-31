const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const middleware = require("../middleware");

router.get("/me", middleware.checkToken, function(req, res) {
  User.findById(req.decoded.user_id, function(error, user) {
    if (error) {
      res.json({ status: "error", message: `${error}` });
    }
    res.status(200).json(user);
  });
});

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

router.post("/", function(req, res) {
  const emailQuery = { email: req.body.email };
  User.findOne(emailQuery, function(err, user) {
    if (err) throw err;
    if (user) {
      res.json({ status: "Email already exist" });
    }
    if (!user) {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: hashedPassword,
        email: req.body.email
      });

      newUser.save(function(error) {
        if (error) {
          res.json({ status: "error", message: `${error}` });
        } else {
          res.json({ status: "OK", data: `recieved, ${res}` });
        }
      });
    }
  });
});

module.exports = router;
