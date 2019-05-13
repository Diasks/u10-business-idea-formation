var express = require('express');
var router = express.Router();
var User = require('../models/User');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');




//WORKING WITH POSTMAN
/* GET users  */
router.get('/', function(req, res) {
  User.find(function(error, users){
    if(error) {
      res.json({"Status" : "Error", "message": `${error}`});
    }
    res.status(200).json(users);
  });
});

//WORKING WITH POSTMAN
/* GET  specific user by ID  */
router.get('/:userId', function(req, res) {
  User.findById(req.params.userId, function(error, user) {
if (error) {
  res.json({"status" : "error", "message" : `${error}`});
}
  res.status(200).json(user); 
});
});

//WORKING WITH POSTMAN

/* POST create user  */
router.post('/', function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 10);
  var newUser = new User();
  newUser._id = new mongoose.Types.ObjectId(),
  newUser.first_name = req.body.first_name,
  newUser.last_name = req.body.last_name,
  newUser.password = hashedPassword,
  newUser.email = req.body.email,

newUser.save(function(error) {
  if (error) {
    res.json({"status": "error", "message": `${error}`});
  } else{ 
    res.json({"status": "OK", "data" : `recieved, ${res}`});
  }

});
});


  


//WORKING (!!)
/* PUT update user  */
router.patch('/:userId/update', function(req, res) {
  User.findByIdAndUpdate(req.params.userId, {$set: req.body}, function (error, user) {
    if (error) {
      res.json({"status": "error", "message": `${error}`});
    }
  res.status(200).json(user);
});
});



//Raderar från databasen, men syns inte i postman eller terminalen typ som att connection timeout:ar
/* DELETE user  */
router.delete('/:userId/delete', function(req, res) {
  User.findByIdAndRemove(req.params.userId, function(error) {
if (error) {
  res.json({"status": "error", "message" : `${error}`});
}
res.status(200);
  });
});

module.exports = router;
