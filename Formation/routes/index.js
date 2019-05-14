
var express = require('express');
var router = express.Router();
const app = express();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile("../../client/build/index.html");

// });

app.use(express.static("../../client/build"));

module.exports = router;
