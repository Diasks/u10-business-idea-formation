var express = require('express');
var router = express.Router();
var Template = require('../models/Template');
var User = require('../models/User');



router.post('/', function(req, res) {
  var newTemplate = new Template();
  newTemplate.first_name = req.body.first_name,
  newTemplate.last_name = req.body.last_name,
  newTemplate.email = req.body.email,
  newTemplate.phone_number = req.body.phone_number,
  newTemplate.Address= req.body.Adress,
  newTemplate.Zipcode = req.body.Zipcode
newTemplate.save(function(error) {
  if (error) {
    res.json({"status": "error", "message": `${error}`});
  }

  res.json({"status": "OK", "data" : `recieved, ${res}`});
});
});

router.patch('/:userId/update', function(req, res) {
  User.findByIdAndUpdate(req.params.userId, {$set: req.body}, function (error, user) {
    if (error) {
      res.json({"status": "error", "message": `${error}`});
    }
  res.status(200).json(user);
});
});




module.exports = router;
