var express = require('express');
var router = express.Router();
let middleware = require("../middleware");

//var Coverletter = require('../models/Coverletter');
var User = require("../models/User");


router.get('/', (req, res) => {});

// @route   POST /coverletter/save
// @desc    Create a coverletter
// @access  Private
router.post("/save", middleware.checkToken, function(req, res) {
    User.findByIdAndUpdate(
      req.decoded.user_id,
      { coverletters: {
          company: req.body.company,
          title: req.body.title,
          location: req.body.location,
          coverletter: req.body.coverletter
      }},
      function(error, user) {
        if (error) {
          res.json({ status: "error", message: `${error}` });
        }
        res.status(200).json(user);
      }
    );
  });


router.put('/', (req, res) => {});

router.delete('/', (req, res) => {});


module.exports = router;