var express = require('express');
var router = express.Router();
var Template = require('../models/Template');






//WORKING WITH POSTMAN
/* GET templates  */
router.get('/', function(req, res) {
  User.find(function(error, users){
    if(error) {
      res.json({"Status" : "Error", "message": `${error}`});
    }
    res.status(200).json(users);
  });
});

//WORKING WITH POSTMAN
/* GET  specific template by ID  */
router.get('/:userId', function(req, res) {
  User.findById(req.params.userId, function(error, user) {
if (error) {
  res.json({"status" : "error", "message" : `${error}`});
}
  res.status(200).json(user); 
});
});

//WORKING WITH POSTMAN

/* POST create template  */
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
