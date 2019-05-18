var express = require('express');
var router = express.Router();
var Coverletter = require('../models/Coverletter');

router.get('/', (req, res) => {
    
});



// @route   POST /coverletter/
// @desc    Create a new coverletter
// @access  Private
router.post("/save", function(req, res) {

    const newCoverletter = new Coverletter ({
        company: req.body.company,
        title: req.body.title,
        location: req.body.location,
        coverletter: req.body.coverletter
    });

        newCoverletter.save(function(error) {
        if (error) {
          res.json({"status": "error", "message": `${error}`});
        }
        
        res.json({"status": "OK", "data" : `recieved, ${res}`});
      });
});

  


router.put('/', (req, res) => {});

router.delete('/', (req, res) => {});