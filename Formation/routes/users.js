var express = require('express');
var router = express.Router();

/* GET users  */
router.get('/', function(req, res) {
  res.json({"status": "OK", "data" : ""});
});


/* GET  specific user by ID  */
router.get('/', function(req, res) {
  res.json({"status": "OK", "data" : ""});
});

/* POST create user  */
router.post('/', function(req, res) {
  res.json({"status": "OK", "data" : `recieved, ${req.body.name}`});
});

/* PUT update user  */
router.put('/:userId', function(req, res) {
  res.json({"status": "OK", "data" : `Put request, ${req.params.userId}`});
});

/* DELETE user listing */
router.delete('/:userId', function(req, res) {
  res.json({"status": "OK", "data" : `Delete request, ${req.params.userId}`});
});

module.exports = router;
